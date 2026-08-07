"use client";

import { useState, type FormEvent } from "react";
import { Loader2, CheckCircle2, Mail } from "lucide-react";
import Reveal from "./Reveal";

type Status = "idle" | "sending" | "sent" | "error";

interface Errors {
  name?: string;
  email?: string;
  message?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  const validate = (): boolean => {
    const next: Errors = {};
    if (!values.name.trim()) next.name = "Please enter your name.";
    if (!values.email.trim()) next.email = "Please enter your email.";
    else if (!EMAIL_RE.test(values.email)) next.email = "Enter a valid email address.";
    if (!values.message.trim()) next.message = "Please add a short message.";
    else if (values.message.trim().length < 10)
      next.message = "Message should be at least 10 characters.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setStatus("sent");
      setValues({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="section-padding border-t border-line py-24 sm:py-32"
    >
      <div className="mx-auto max-w-xl">
        <Reveal>
          <p className="eyebrow mb-3">Contact</p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Let&apos;s connect.
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-muted">
            Have an opportunity, collaboration, or just want to say hello?
            I&apos;d love to hear from you.
          </p>

          <a
            href="mailto:pasha9.workspace@gmail.com"
            className="mt-5 inline-flex items-center gap-2 text-[15px] font-medium text-ink transition-colors hover:text-muted"
          >
            <Mail size={16} className="text-muted" />
            pasha9.workspace@gmail.com
          </a>
        </Reveal>

        <Reveal delay={100}>
          <form onSubmit={handleSubmit} noValidate className="mt-12 space-y-6">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-ink">
                Name
              </label>
              <input
                id="name"
                type="text"
                value={values.name}
                onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
                className="w-full border-b border-line bg-transparent py-2.5 text-[15px] text-ink outline-none transition-colors placeholder:text-muted/60 focus:border-ink"
                placeholder="Your full name"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name && (
                <p id="name-error" className="mt-1.5 text-sm text-muted">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-ink">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={values.email}
                onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
                className="w-full border-b border-line bg-transparent py-2.5 text-[15px] text-ink outline-none transition-colors placeholder:text-muted/60 focus:border-ink"
                placeholder="you@example.com"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && (
                <p id="email-error" className="mt-1.5 text-sm text-muted">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-ink">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                value={values.message}
                onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
                className="w-full resize-none border-b border-line bg-transparent py-2.5 text-[15px] text-ink outline-none transition-colors placeholder:text-muted/60 focus:border-ink"
                placeholder="Tell me a bit about what you have in mind..."
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
              />
              {errors.message && (
                <p id="message-error" className="mt-1.5 text-sm text-muted">
                  {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="group relative flex w-full items-center justify-center gap-2 border border-ink px-6 py-3.5 text-[15px] font-medium text-ink transition-colors duration-200 hover:bg-ink hover:text-bg disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "sending" && <Loader2 size={17} className="animate-spin" />}
              {status === "sent" && <CheckCircle2 size={17} />}
              {status === "sending"
                ? "Sending..."
                : status === "sent"
                ? "Message sent"
                : "Send message"}
            </button>

            {status === "error" && (
              <p className="text-center text-sm text-muted">
                Something went wrong. Please try again in a moment.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
