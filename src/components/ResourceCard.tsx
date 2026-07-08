"use client";

import { useState } from "react";
import type { Resource } from "@/types";
import { ArrowRight, Loader2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

type ResourceCardProps = {
  resource: Resource;
};

export function ResourceCard({ resource }: ResourceCardProps) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [joined, setJoined] = useState(false);
  const isExternal = resource.href.startsWith("http");

  async function handleWaitlist(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          resource: resource.id,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Something went wrong");
      toast.success(`You're on the waitlist for ${resource.title}!`);
      setJoined(true);
      setEmail("");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Failed to join waitlist");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Card className="flex h-full flex-col overflow-hidden rounded-2xl border-border/70 shadow-sm transition-shadow hover:shadow-md">
      {resource.imageUrl && (
        <div className="aspect-[16/10] overflow-hidden bg-secondary">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={resource.imageUrl}
            alt={resource.title}
            className="h-full w-full object-cover"
          />
        </div>
      )}
      <CardHeader>
        <div className="flex items-center gap-2">
          <Badge variant={resource.type === "free" ? "secondary" : "default"}>
            {resource.type === "free" ? "Free" : resource.price ?? "Paid"}
          </Badge>
          {resource.waitlist && (
            <Badge variant="outline">Waitlist</Badge>
          )}
        </div>
        <CardTitle className="text-xl">{resource.title}</CardTitle>
        <CardDescription className="text-base leading-relaxed">
          {resource.description}
        </CardDescription>
      </CardHeader>
      <CardFooter className="mt-auto flex-col gap-3">
        {resource.waitlist ? (
          joined ? (
            <p className="w-full text-center text-sm font-medium text-primary">
              You&apos;re on the waitlist — we&apos;ll email you when it&apos;s ready.
            </p>
          ) : (
            <form onSubmit={handleWaitlist} className="flex w-full flex-col gap-2">
              <Input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="rounded-full"
              />
              <Button type="submit" disabled={loading} className="w-full rounded-full">
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Joining...
                  </>
                ) : (
                  "Join Waitlist"
                )}
              </Button>
            </form>
          )
        ) : (
          <Button asChild variant="outline" className="w-full rounded-full">
            {isExternal ? (
              <a href={resource.href} target="_blank" rel="noopener noreferrer">
                {resource.ctaLabel}
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            ) : (
              <a href={resource.href}>
                {resource.ctaLabel}
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            )}
          </Button>
        )}
      </CardFooter>
      <CardContent className="hidden" />
    </Card>
  );
}
