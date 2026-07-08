import { NextResponse } from "next/server";
import { storeNewsletterSubscriber } from "@/lib/forms";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Email is required." }, { status: 400 });
    }

    await storeNewsletterSubscriber(email.trim().toLowerCase());

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Failed to subscribe" },
      { status: 500 },
    );
  }
}
