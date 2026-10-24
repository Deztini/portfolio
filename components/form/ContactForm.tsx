"use client";

import { useState } from "react";
import { ArrowUpRight, LoaderIcon } from "lucide-react";
import { Button } from "../ui/Button";
import { InputField } from "../ui/InputField";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error();
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="container-site flex flex-col gap-13">
        <InputField label="Name" id="name" name="name" required />
        <InputField
          label="Email"
          id="email"
          type="email"
          name="email"
          required
        />
        <InputField label="Message" id="message" name="message" required />

        <Button
          type="submit"
          variant="secondary"
          disabled={status === "sending"}
          className={`group relative w-full overflow-hidden border-gray-400 ${status === "sending" ? "justify-center" : "justify-between"}`}
        >

          {status === "sending" ? (
            <LoaderIcon
              aria-label="Sending message"
              role="status"
              className="relative z-10 h-5 w-5 animate-spin text-accent"
            />
          ) : (
            <>
              <span
                aria-hidden
                className="absolute inset-0 origin-right scale-x-0 bg-accent transition-transform duration-700 ease-out-expo group-hover:origin-left group-hover:scale-x-100"
              />

              <span className="relative transition-colors duration-500 text-bg group-hover:text-accent-contrast">
                Send message
              </span>

              <ArrowUpRight className="relative h-4 w-4 text-bg transition-colors duration-500 group-hover:text-accent-contrast" />
            </>
          )}
        </Button>

        <p className="text-small text-muted" aria-live="polite">
          {status === "sent" && "Thanks, I'll get back to you soon."}
          {status === "error" &&
            "Something went wrong. Try emailing me directly."}
        </p>
      </div>
    </form>
  );
}
