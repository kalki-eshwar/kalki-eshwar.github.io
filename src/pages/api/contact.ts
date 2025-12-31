import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  ok?: boolean
  error?: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, subject, message, token } = req.body || {}

  if (!token) {
    return res.status(400).json({ error: 'hCaptcha token is required' })
  }

  const secret = process.env.HCAPTCHA_SECRET
  if (!secret) {
    console.error('HCAPTCHA_SECRET is not configured')
    return res.status(500).json({ error: 'Server not configured for captcha verification' })
  }

  try {
    // Verify token with hCaptcha
    const params = new URLSearchParams()
    params.append('secret', secret)
    params.append('response', token)

    const verifyRes = await fetch('https://hcaptcha.com/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params.toString(),
    })

    const verifyJson = await verifyRes.json()

    if (!verifyJson.success) {
      console.warn('hCaptcha verification failed', verifyJson)
      return res.status(403).json({ error: 'Captcha verification failed' })
    }

    // Basic validation
    if (!name || !subject || !message) {
      return res.status(400).json({ error: 'Missing required fields' })
    }

    // TODO: integrate with your email/service provider here
    // For now, log the message on the server and acknowledge
    console.log('Contact form submission:', { name, email, subject, message })

    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('Error verifying hCaptcha', err)
    return res.status(500).json({ error: 'Failed to verify captcha' })
  }
}
