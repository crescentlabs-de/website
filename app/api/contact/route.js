import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request) {
  try {
    const body = await request.json()
    const { name, email, company, service, message } = body

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Name, E-Mail und Nachricht sind erforderlich.' }, { status: 400 })
    }

    const serviceLabel = {
      web: 'Website-Entwicklung',
      ios: 'iOS-App-Entwicklung',
      both: 'Web & iOS',
      other: 'Sonstiges',
    }[service] || service || '–'

    const html = `
      <div style="font-family: sans-serif; color: #222; max-width: 600px;">
        <h2 style="margin-bottom: 24px;">Neue Kontaktanfrage über crescentlabs.de</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px 0; color: #666; width: 140px;">Name</td><td style="padding: 8px 0; font-weight: 600;">${name}</td></tr>
          <tr><td style="padding: 8px 0; color: #666;">E-Mail</td><td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
          ${company ? `<tr><td style="padding: 8px 0; color: #666;">Unternehmen</td><td style="padding: 8px 0;">${company}</td></tr>` : ''}
          ${service ? `<tr><td style="padding: 8px 0; color: #666;">Leistung</td><td style="padding: 8px 0;">${serviceLabel}</td></tr>` : ''}
        </table>
        <hr style="margin: 24px 0; border: none; border-top: 1px solid #eee;" />
        <p style="color: #666; margin-bottom: 8px;">Nachricht</p>
        <p style="white-space: pre-wrap; background: #f5f5f5; padding: 16px; border-radius: 8px;">${message}</p>
      </div>
    `

    const { data, error } = await resend.emails.send({
      from: 'CrescentLabs Website <onboarding@resend.dev>',
      to: 'kerim@crescentlabs.de',
      replyTo: email,
      subject: `Neue Anfrage von ${name}`,
      html,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    console.log('Email sent:', data)
    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Resend exception:', err)
    return NextResponse.json({ error: err.message || 'Beim Senden ist ein Fehler aufgetreten.' }, { status: 500 })
  }
}
