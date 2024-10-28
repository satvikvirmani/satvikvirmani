import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
    try {
        const formData = await request.formData()
        const name = formData.get('name')
        const email = formData.get('email')
        const message = formData.get('message')

        if (!name || !email || !message) {
            return NextResponse.json(
                { message: "Missing required fields" }, 
                { status: 400 }
            )
        }

        const transporter = nodemailer.createTransport({
            host: 'smtp.mail.me.com',
            port: 587,
            secure: false,
            auth: {
                user: process.env.EMAIL_USERNAME,
                pass: process.env.EMAIL_APP_SPECIFIC_PASSWORD
            },
            tls: {
                rejectUnauthorized: true
            }
        });

        await transporter.verify()

        const mail = await transporter.sendMail({
            from: process.env.EMAIL_USERNAME,
            to: "virmanisatvik01@gmail.com",
            subject: `Website Contact from ${name} (${email})`,
            html: `
                <h1>New Contact Form Submission</h1>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `,
        })

        return NextResponse.json({ 
            message: "Email sent successfully",
            messageId: mail.messageId 
        })

    } catch (error) {
        console.error('Email error:', error)
        return NextResponse.json({ 
            message: "Failed to send email",
            error: error instanceof Error ? error.message : 'Unknown error'
        }, { 
            status: 500 
        })
    }
}