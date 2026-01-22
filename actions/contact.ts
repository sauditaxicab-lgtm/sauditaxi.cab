'use server';

import { contactSchema } from '@/schemas/contact';
import { supabase } from '@/lib/supabase';
import type { ContactFormData, ContactSubmissionResult } from '@/types/contact';
import { ZodError } from 'zod';
import { sendEmail } from '@/lib/email';

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

    // Send Email via Nodemailer
    const emailResult = await sendEmail({
      to: 'sauditaxicab@gmail.com',
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

    if (!emailResult.success) {
      console.error('Email sending failed:', emailResult.error);
    } else {
      console.log('Email sent successfully');
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
