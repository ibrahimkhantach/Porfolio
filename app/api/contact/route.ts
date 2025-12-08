import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
    try {
        const { name, email, message } = await request.json()

        // Validate inputs
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'All fields are required' },
                { status: 400 }
            )
        }

        // Send email using Resend
        const { data, error } = await resend.emails.send({
            from: 'Portfolio Contact <onboarding@resend.dev>', // Use your verified domain
            to: ['dev.ibrahimkhantach@gmail.com'],
            replyTo: email,
            subject: `Portfolio Contact from ${name}`,
            html: `
                <!DOCTYPE html>
                <html>
                <head>
                    <meta charset="utf-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                </head>
                <body style="margin: 0; padding: 0; background-color: #f5f5f5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
                    <div style="max-width: 600px; margin: 40px auto; background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                        
                        <!-- Header with gradient -->
                        <div style="background: linear-gradient(135deg, #1f1f1f 0%, #3f3f3f 100%); padding: 40px 30px; text-align: center;">
                            <h1 style="margin: 0; color: white; font-size: 28px; font-weight: 700; letter-spacing: -0.5px;">
                                ✉️ New Contact Message
                            </h1>
                            <p style="margin: 10px 0 0 0; color: rgba(255, 255, 255, 0.8); font-size: 14px;">
                                From your portfolio website
                            </p>
                        </div>
                        
                        <!-- Content -->
                        <div style="padding: 40px 30px;">
                            
                            <!-- Contact Info Card -->
                            <div style="background: #f9f9f9; border-radius: 12px; padding: 24px; margin-bottom: 24px; border-left: 4px solid #3f3f3f;">
                                <div style="margin-bottom: 16px;">
                                    <label style="display: block; font-size: 12px; font-weight: 600; color: #666; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 6px;">Name</label>
                                    <p style="margin: 0; font-size: 16px; color: #1f1f1f; font-weight: 500;">${name}</p>
                                </div>
                                
                                <div>
                                    <label style="display: block; font-size: 12px; font-weight: 600; color: #666; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 6px;">Email</label>
                                    <p style="margin: 0;">
                                        <a href="mailto:${email}" style="font-size: 16px; color: #3f3f3f; text-decoration: none; font-weight: 500;">${email}</a>
                                    </p>
                                </div>
                            </div>
                            
                            <!-- Message Card -->
                            <div style="background: #ffffff; border: 2px solid #e5e5e5; border-radius: 12px; padding: 24px;">
                                <label style="display: block; font-size: 12px; font-weight: 600; color: #666; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 12px;">Message</label>
                                <div style="font-size: 15px; line-height: 1.7; color: #333; white-space: pre-wrap;">${message.replace(/\n/g, '<br>')}</div>
                            </div>
                            
                            <!-- Reply Button -->
                            <div style="text-align: center; margin-top: 32px;">
                                <a href="mailto:${email}" style="display: inline-block; background: #1f1f1f; color: white; text-decoration: none; padding: 14px 32px; border-radius: 8px; font-weight: 600; font-size: 15px; transition: background 0.3s;">
                                    Reply to ${name.split(' ')[0]} →
                                </a>
                            </div>
                        </div>
                        
                        <!-- Footer -->
                        <div style="background: #fafafa; padding: 24px 30px; text-align: center; border-top: 1px solid #e5e5e5;">
                            <p style="margin: 0; color: #999; font-size: 13px;">
                                Sent from <strong style="color: #666;">Ibrahim Khantach Portfolio</strong>
                            </p>
                            <p style="margin: 8px 0 0 0; color: #999; font-size: 12px;">
                                ${new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} at ${new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
                            </p>
                        </div>
                    </div>
                </body>
                </html>
            `
        })

        if (error) {
            console.error('Resend error:', error)
            return NextResponse.json(
                { error: 'Failed to send email' },
                { status: 500 }
            )
        }

        return NextResponse.json(
            { success: true, message: 'Message sent successfully!', data },
            { status: 200 }
        )

    } catch (error) {
        console.error('Error processing contact form:', error)
        return NextResponse.json(
            { error: 'Failed to send message' },
            { status: 500 }
        )
    }
}
