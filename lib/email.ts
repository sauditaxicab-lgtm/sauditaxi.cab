import nodemailer from 'nodemailer';

const SMTP_HOST = process.env.SMTP_HOST || 'smtp.improvmx.com';
const SMTP_PORT = parseInt(process.env.SMTP_PORT || '587');
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASSWORD = process.env.SMTP_PASSWORD;

const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: SMTP_PORT === 465, // true for 465, false for other ports
    auth: {
        user: SMTP_USER,
        pass: SMTP_PASSWORD,
    },
});

export interface SendEmailOptions {
    to: string | string[];
    subject: string;
    html: string;
    replyTo?: string;
    from?: string;
}

export async function sendEmail({ to, subject, html, replyTo, from }: SendEmailOptions) {
    try {
        if (!SMTP_USER || !SMTP_PASSWORD) {
            console.warn('SMTP credentials not found. Email sending skipped.');
            console.log('Would send to:', to);
            return { success: false, error: 'SMTP credentials missing' };
        }

        const info = await transporter.sendMail({
            from: from || `"Saudi Taxi" <${SMTP_USER}>`,
            to,
            subject,
            html,
            replyTo,
        });
        console.log('Message sent: %s', info.messageId);
        return { success: true, messageId: info.messageId };
    } catch (error) {
        console.error('Error sending email:', error);
        return { success: false, error };
    }
}
