"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const levels = [
  "Level 1–3",
  "Level 4–5",
  "Xcel Bronze/Silver",
  "Xcel Gold/Platinum/Diamond",
  "Level 6–10",
  "Other",
];

const events = ["Vault", "Bars", "Beam", "Floor", "All-Around"];

export function RoutineBreakdownForm() {
  const [loading, setLoading] = useState(false);
  const [level, setLevel] = useState("");
  const [event, setEvent] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/routine-breakdown", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          parent_name: formData.get("parent_name"),
          athlete_name: formData.get("athlete_name"),
          email: formData.get("email"),
          level,
          event,
          video_url: formData.get("video_url"),
          notes: formData.get("notes"),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error ?? "Something went wrong");
      }

      toast.success(
        "Request submitted! Expect a response within 7–14 business days.",
      );
      form.reset();
      setLevel("");
      setEvent("");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Failed to submit request");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="parent_name">Parent / Contact Name</Label>
          <Input id="parent_name" name="parent_name" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="athlete_name">Athlete Name</Label>
          <Input id="athlete_name" name="athlete_name" required />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" required />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="level">Athlete Level</Label>
          <Select value={level} onValueChange={(v) => setLevel(v ?? "")}>
            <SelectTrigger id="level" className="w-full">
              <SelectValue placeholder="Select level" />
            </SelectTrigger>
            <SelectContent>
              {levels.map((l) => (
                <SelectItem key={l} value={l}>
                  {l}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="event">Event</Label>
          <Select value={event} onValueChange={(v) => setEvent(v ?? "")}>
            <SelectTrigger id="event" className="w-full">
              <SelectValue placeholder="Select event" />
            </SelectTrigger>
            <SelectContent>
              {events.map((ev) => (
                <SelectItem key={ev} value={ev}>
                  {ev}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="video_url">Video Link</Label>
        <Input
          id="video_url"
          name="video_url"
          type="url"
          required
          placeholder="YouTube, Google Drive, or other shareable link"
        />
        <p className="text-xs text-muted-foreground">
          Or email videos directly to{" "}
          <a
            href={`mailto:${siteConfig.videoReviewEmail}`}
            className="text-primary underline-offset-2 hover:underline"
          >
            {siteConfig.videoReviewEmail}
          </a>
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="notes">Notes / Questions</Label>
        <Textarea
          id="notes"
          name="notes"
          rows={4}
          placeholder="Anything specific you'd like feedback on?"
        />
      </div>

      <div className="rounded-xl bg-secondary/60 p-4 text-sm text-muted-foreground">
        <p className="font-medium text-foreground">
          {siteConfig.routineBreakdownPrice} · Venmo {siteConfig.venmo}
        </p>
        <p className="mt-1">
          Critiques are analysis only. Per judging code of conduct, final scores
          cannot be provided for routines already judged at a meet.
        </p>
      </div>

      <Button type="submit" disabled={loading || !level || !event} className="rounded-full">
        {loading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Submitting...
          </>
        ) : (
          "Submit Breakdown Request"
        )}
      </Button>
    </form>
  );
}
