"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";
import type { InquiryType } from "@/types";
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

const inquiryOptions: { value: InquiryType; label: string }[] = [
  { value: "routine-breakdown", label: "Braie-kdown request" },
  { value: "judging-question", label: "Judging question" },
  { value: "brand-partnership", label: "Brand partnership" },
  { value: "general", label: "General inquiry" },
];

type ContactFormProps = {
  defaultInquiryType?: InquiryType;
};

export function ContactForm({ defaultInquiryType = "general" }: ContactFormProps) {
  const [loading, setLoading] = useState(false);
  const [inquiryType, setInquiryType] = useState<InquiryType>(defaultInquiryType);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          inquiry_type: inquiryType,
          message: formData.get("message"),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error ?? "Something went wrong");
      }

      toast.success("Message sent! I'll get back to you soon.");
      form.reset();
      setInquiryType(defaultInquiryType);
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Failed to send message");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" required placeholder="Your name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="inquiry_type">Reason for inquiry</Label>
        <Select
          value={inquiryType}
          onValueChange={(v) => setInquiryType((v ?? defaultInquiryType) as InquiryType)}
        >
          <SelectTrigger id="inquiry_type" className="w-full">
            <SelectValue placeholder="Select a reason" />
          </SelectTrigger>
          <SelectContent>
            {inquiryOptions.map((opt) => (
              <SelectItem key={opt.value} value={opt.value}>
                {opt.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell me how I can help..."
        />
      </div>

      <Button type="submit" disabled={loading} className="w-full rounded-full sm:w-auto">
        {loading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  );
}
