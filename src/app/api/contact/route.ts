import { NextResponse } from "next/server";
import { storeOrNotifyContact } from "@/lib/forms";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, inquiry_type, message } = body;

    if (!name || !email || !inquiry_type || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 },
      );
    }

    await storeOrNotifyContact({ name, email, inquiry_type, message });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Failed to submit" },
      { status: 500 },
    );
  }
}
