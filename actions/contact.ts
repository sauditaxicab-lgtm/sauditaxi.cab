'use server';

import { contactSchema } from '@/schemas/contact';
import { supabase } from '@/lib/supabase';
import type { ContactFormData, ContactSubmissionResult } from '@/types/contact';
import { ZodError } from 'zod';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

/**
 * Submits the contact form.
 * Supabase integration has been removed as per user request.
 * Now simply validates and returns success to allow for UI transitions.
 */
export async function submitContactForm(
  formData: ContactFormData
): Promise<ContactSubmissionResult> {
  try {
    // 1. Validate form data with Zod
    const validatedData = contactSchema.parse(formData);

    console.log('Contact form submission (No Database):', validatedData);

    const { error: dbError } = await supabase.from('contact_submissions').insert([{
      name: validatedData.name,
      email: validatedData.email,
      subject: validatedData.subject,
      message: validatedData.message,
      status: 'new'
    }]);

    if (dbError) {
      console.error('Supabase contact insert error:', dbError);
    }

    // Send Email via Resend
    try {
      const { data, error } = await resend.emails.send({
        from: 'Saudi Taxi Contact <onboarding@resend.dev>',
        to: ['sauditaxicab@gmail.com'],
        subject: `New Contact Message: ${validatedData.subject}`,
        html: `
          <h1>New Contact Message</h1>
          <p><strong>Name:</strong> ${validatedData.name}</p>
          <p><strong>Email:</strong> ${validatedData.email}</p>
          <p><strong>Subject:</strong> ${validatedData.subject}</p>
          <p><strong>Message:</strong></p>
          <p>${validatedData.message}</p>
        `,
        replyTo: validatedData.email,
      });

      if (error) {
        console.error('Resend email error:', error);
      } else {
        console.log('Resend email sent:', data);
      }
    } catch (emailError) {
      console.error('Failed to send email:', emailError);
    }

    if (dbError) {
      console.error('Supabase contact insert error:', dbError);
    }

    return { success: true };
  } catch (error) {
    console.error('Error in contact form submission:', error);

    // Handle Zod validation errors
    if (error instanceof ZodError && error.issues) {
      const fieldErrors: Record<string, string> = {};
      error.issues.forEach((issue) => {
        if (issue.path && issue.path.length > 0) {
          const field = issue.path[0] as string;
          fieldErrors[field] = issue.message;
        }
      });
      return {
        success: false,
        error: 'Please fix the errors in the form.',
        fieldErrors
      };
    }

    // Handle other errors
    if (error instanceof Error) {
      return { success: false, error: error.message };
    }

    return { success: false, error: 'Failed to submit contact form. Please try again.' };
  }
}
