import { Resend } from "resend";
import { getSupabase, isSupabaseConfigured } from "@/lib/supabase/client";
import { siteConfig } from "@/data/site";

type EmailPayload = {
  subject: string;
  html: string;
};

async function sendNotificationEmail({ subject, html }: EmailPayload) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_NOTIFICATION_EMAIL ?? siteConfig.email;

  if (!apiKey) {
    console.log("[email fallback]", subject, html);
    return { sent: false, fallback: true };
  }

  const resend = new Resend(apiKey);
  await resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL ?? "Braie Website <onboarding@resend.dev>",
    to,
    subject,
    html,
  });

  return { sent: true, fallback: false };
}

export async function storeOrNotifyRoutineBreakdown(data: {
  parent_name: string;
  athlete_name: string;
  email: string;
  level: string;
  event: string;
  video_url: string;
  notes?: string;
}) {
  const supabase = getSupabase();

  if (supabase) {
    const { error } = await supabase.from("routine_breakdown_requests").insert({
      parent_name: data.parent_name,
      athlete_name: data.athlete_name,
      email: data.email,
      level: data.level,
      event: data.event,
      video_url: data.video_url,
      notes: data.notes ?? null,
      status: "new",
    });

    if (error) throw new Error(error.message);
  }

  await sendNotificationEmail({
    subject: `New Routine Breakdown: ${data.athlete_name} (${data.event})`,
    html: `
      <h2>New Routine Breakdown Request</h2>
      <p><strong>Contact:</strong> ${data.parent_name}</p>
      <p><strong>Athlete:</strong> ${data.athlete_name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Level:</strong> ${data.level}</p>
      <p><strong>Event:</strong> ${data.event}</p>
      <p><strong>Video:</strong> <a href="${data.video_url}">${data.video_url}</a></p>
      <p><strong>Notes:</strong> ${data.notes ?? "—"}</p>
      ${!isSupabaseConfigured() ? "<p><em>Stored via email only — Supabase not configured.</em></p>" : ""}
    `,
  });
}

export async function storeOrNotifyContact(data: {
  name: string;
  email: string;
  inquiry_type: string;
  message: string;
}) {
  const supabase = getSupabase();

  if (supabase) {
    const { error } = await supabase.from("contact_inquiries").insert({
      name: data.name,
      email: data.email,
      inquiry_type: data.inquiry_type,
      message: data.message,
      status: "new",
    });

    if (error) throw new Error(error.message);
  }

  await sendNotificationEmail({
    subject: `Contact: ${data.inquiry_type} from ${data.name}`,
    html: `
      <h2>New Contact Inquiry</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Type:</strong> ${data.inquiry_type}</p>
      <p><strong>Message:</strong></p>
      <p>${data.message.replace(/\n/g, "<br>")}</p>
    `,
  });
}

export async function storeNewsletterSubscriber(email: string, resource?: string) {
  const supabase = getSupabase();

  if (supabase) {
    const { error } = await supabase.from("newsletter_subscribers").insert({
      email,
    });

    if (error) {
      if (error.code === "23505") {
        throw new Error("This email is already subscribed.");
      }
      throw new Error(error.message);
    }
  } else {
    await sendNotificationEmail({
      subject: resource
        ? `Waitlist signup (${resource}): ${email}`
        : `Newsletter signup: ${email}`,
      html: `<p>New subscriber: ${email}${resource ? `<br>Resource: ${resource}` : ""}</p>`,
    });
  }
}
