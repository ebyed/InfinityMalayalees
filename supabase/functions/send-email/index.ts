import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
}

interface EmailData {
  to: string;
  subject: string;
  html: string;
  emailConfig?: {
    user: string;
    pass: string;
  };
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    if (req.method !== 'POST') {
      return new Response(
        JSON.stringify({ error: 'Method not allowed' }),
        { 
          status: 405, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    const { to, subject, html, emailConfig }: EmailData = await req.json()

    if (!to || !subject || !html) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields: to, subject, html' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    if (!emailConfig?.user || !emailConfig?.pass) {
      return new Response(
        JSON.stringify({ error: 'Email configuration not provided' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    // Use Gmail SMTP via fetch to send email
    const emailPayload = {
      personalizations: [{
        to: [{ email: to }],
        subject: subject
      }],
      from: { 
        email: emailConfig.user,
        name: 'Infinity Malayalees'
      },
      content: [{
        type: 'text/html',
        value: html
      }]
    }

    // For Gmail SMTP, we'll use a simple approach with basic auth
    // Note: In production, you might want to use a service like SendGrid, Resend, or similar
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: 'gmail',
        template_id: 'template_custom',
        user_id: 'public_key', // This would be configured
        template_params: {
          to_email: to,
          subject: subject,
          html_content: html,
          from_name: 'Infinity Malayalees',
          from_email: emailConfig.user
        }
      })
    })

    if (!response.ok) {
      throw new Error(`Email service responded with status: ${response.status}`)
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Email sent successfully' 
      }),
      { 
        status: 200, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )

  } catch (error) {
    console.error('Error sending email:', error)
    
    return new Response(
      JSON.stringify({ 
        error: 'Failed to send email',
        details: error.message 
      }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )
  }
})