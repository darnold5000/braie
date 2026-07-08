import { NextResponse } from "next/server";
import { storeOrNotifyRoutineBreakdown } from "@/lib/forms";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      parent_name,
      athlete_name,
      email,
      level,
      event,
      video_url,
      notes,
    } = body;

    if (!parent_name || !athlete_name || !email || !level || !event || !video_url) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 },
      );
    }

    await storeOrNotifyRoutineBreakdown({
      parent_name,
      athlete_name,
      email,
      level,
      event,
      video_url,
      notes,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Failed to submit" },
      { status: 500 },
    );
  }
}
