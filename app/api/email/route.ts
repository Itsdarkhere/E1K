const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

export async function POST(req: Request) {
    const { name, email, message } = await req.json()

    if (!name || !email || !message) {
        return Response.json({error: 'Fields not filled in the form...'})
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
            return Response.json({message: 'All good, email sent'})
        })
        .catch((error: any) => {
            return Response.json({error: error})
        })

}