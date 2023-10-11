import { NextResponse } from "next/server"

const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

export async function POST(req: Request) {
    const { name, email, message } = await req.json()

    if (!name || !email || !message) {
        return NextResponse.json({ error: 'Fields not filled in the form...' }, { status: 400 })
    }

    const msg = {
        to: 'valtteri.juvone@hotmail.com',
        from: 'support@vjxsoft.com', 
        subject: `Asiakas: ${name} Email: ${email}`,
        text: message,
    }

    return sgMail
        .send(msg)
        .then(() => {
            return NextResponse.json({message: 'All good, email sent'}, { status: 200 })
        })
        .catch((error: any) => {
            return NextResponse.json({error: error}, { status: 500 })
        })

}