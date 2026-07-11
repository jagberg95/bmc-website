// Cloudflare Worker for handling the Quote Form
// This receives the form data, verifies Cloudflare Turnstile, then sends email via Resend

export default {
  async fetch(request, env) {
    // Handle CORS preflight for browser requests
    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      });
    }

    if (request.method !== "POST") {
      return new Response("Method not allowed", { status: 405 });
    }

    const formData = await request.formData();

    // Honeypot (extra spam protection)
    if (formData.get("honeypot")) {
      return new Response(JSON.stringify({ success: true }), { status: 200 });
    }

    // === Cloudflare Turnstile Verification ===
    const token = formData.get("cf-turnstile-response");
    if (!token) {
      return new Response(JSON.stringify({ success: false, error: "Missing captcha token" }), {
        status: 400,
        headers: { "Access-Control-Allow-Origin": "*" },
      });
    }

    const turnstileResponse = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          secret: env.TURNSTILE_SECRET_KEY,
          response: token,
          remoteip: request.headers.get("CF-Connecting-IP") || "",
        }),
      }
    );

    const outcome = await turnstileResponse.json();

    if (!outcome.success) {
      return new Response(
        JSON.stringify({ success: false, error: "Captcha verification failed" }),
        {
          status: 400,
          headers: { "Access-Control-Allow-Origin": "*" },
        }
      );
    }

    // === Extract form fields ===
    const name = formData.get("name") || "N/A";
    const phone = formData.get("phone") || "N/A";
    const email = formData.get("email") || "N/A";
    const city = formData.get("city") || "N/A";
    const projectType = formData.get("projectType") || "N/A";
    const details = formData.get("details") || "N/A";
    const preferred = formData.get("preferred") || "N/A";

    // === Send email via Resend ===
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "website@barmooncontracting.com", // Change to your verified domain
        to: "you@your-email.com",               // Change to your actual email
        subject: `New Quote Request from ${name}`,
        html: `
          <h2>New Quote Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>City/ZIP:</strong> ${city}</p>
          <p><strong>Project Type:</strong> ${projectType}</p>
          <p><strong>Details:</strong> ${details}</p>
          <p><strong>Preferred Contact:</strong> ${preferred}</p>
          <hr>
          <p>Submitted at: ${new Date().toISOString()}</p>
        `,
      }),
    });

    if (resendResponse.ok) {
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      });
    } else {
      const errorText = await resendResponse.text();
      console.error("Resend error:", errorText);
      return new Response(JSON.stringify({ success: false, error: "Failed to send email" }), {
        status: 500,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      });
    }
  },
};
