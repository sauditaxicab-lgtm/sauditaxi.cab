'use server';

import { normalizePhoneNumber } from '@/utils/phoneNormalization';
import { supabase } from '@/lib/supabase';
import type { BookingFormData, BookingSubmissionResult } from '@/types/booking';
import { ZodError } from 'zod';
import { sendEmail } from '@/lib/email';

/**
 * Submits the booking form.
 * Supabase integration has been removed as per user request.
 * Now simply validates and returns success to allow for UI transitions.
 */
export async function submitBookingForm(
  formData: BookingFormData
): Promise<BookingSubmissionResult> {
  try {
    console.log('Booking form submission (No Database):', formData);

    // 1. Validate phone
    if (!formData.phone || formData.phone.trim() === '' || formData.phone === '+' || formData.phone.length < 6) {
      return { success: false, error: 'Please provide a complete phone number' };
    }

    // 2. Normalize phone to E.164 format
    const normalizedPhone = normalizePhoneNumber(formData.phone);
    console.log('Phone normalized:', formData.phone, '→', normalizedPhone);

    // Helper to extract destination string
    let destinationStr = '';
    if (Array.isArray(formData.destinations)) {
      destinationStr = formData.destinations.join(' -> ');
    } else if (typeof formData.destinations === 'object' && formData.destinations !== null) {
      destinationStr = 'Return Trip';
    }

    // Insert into Supabase
    const { error: dbError } = await supabase.from('bookings').insert([{
      pickup_location: formData.pickupLocation,
      destination: destinationStr,
      date: formData.date,
      passengers: formData.passengers.toString(),
      luggage: formData.luggage || '',
      vehicle: formData.vehicle || formData.vehicleName || formData.vehicleType || 'Any',
      phone: normalizedPhone,
      status: 'pending'
    }]);

    if (dbError) {
      console.error('Supabase booking insert error:', dbError);
    }

    // Send Email via Nodemailer
    const emailResult = await sendEmail({
      to: 'sauditaxicab@gmail.com',
      subject: `New Booking Request: ${formData.pickupLocation} to ${destinationStr}`,
      html: `
        <h1>New Booking Request</h1>
        <p><strong>Vehicle:</strong> ${formData.vehicle || formData.vehicleName || formData.vehicleType || 'Any'}</p>
        <p><strong>Pickup:</strong> ${formData.pickupLocation}</p>
        <p><strong>Destination:</strong> ${destinationStr}</p>
        <p><strong>Date:</strong> ${formData.date}</p>
        <p><strong>Time:</strong> ${formData.time || 'Not specified'}</p>
        <p><strong>Passengers:</strong> ${formData.passengers}</p>
        <p><strong>Luggage:</strong> ${formData.luggage}</p>
        <p><strong>Phone:</strong> ${normalizedPhone}</p>
        <p><strong>Name:</strong> ${formData.name || 'WhatsApp User'}</p>
        <h2>Other Details</h2>
        <p><strong>Service Type:</strong> ${formData.serviceType || 'Standard'}</p>
        <p><strong>Flight Number:</strong> ${formData.flightNumber || 'N/A'}</p>
        <p><strong>Instructions:</strong> ${formData.driverInstructions || 'N/A'}</p>
      `,
    });

    if (!emailResult.success) {
      console.error('Email sending failed:', emailResult.error);
    } else {
      console.log('Email sent successfully');
    }

    if (dbError) {
      console.error('Supabase booking insert error:', dbError);
    }

    return { success: true };
  } catch (error) {
    console.error('Error in booking form submission:', error);

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

    if (error instanceof Error) {
      return { success: false, error: error.message };
    }

    return {
      success: false,
      error: 'Failed to submit booking. Please try again.'
    };
  }
}
