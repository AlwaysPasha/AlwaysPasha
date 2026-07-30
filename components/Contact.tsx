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

  const validate = () => {
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
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    if (!response.ok) {
      throw new Error("Failed to send");
    }

    setStatus("sent");
    setValues({
      name: "",
      email: "",
      message: "",
    });

    setErrors({});

    setTimeout(() => {
      setStatus("idle");
    }, 3000);
  } catch (error) {
    console.error(error);
    setStatus("error");
  }
};

  return (
    <section id="contact" className="section-padding py-28 sm:py-36">
      <div className="mx-auto max-w-2xl">
        <Reveal className="text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-muted">
            Contact
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
            Let's <span className="gradient-text">Build Something Together</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted">
            Whether you have a project, collaboration opportunity, or simply
            want to connect, I'd be happy to hear from you.
          </p>

          <a
            href="mailto:pasha9.workspace@gmail.com"
            className="mt-8 inline-flex items-center gap-3 rounded-full border border-border bg-surface/40 px-6 py-3 text-white transition-all duration-300 hover:scale-105 hover:border-white/20"
          >
            <Mail size={18} className="text-accent-from" />
            pasha9.workspace@gmail.com
          </a>
        </Reveal>

        <Reveal delay={120}>
          <form
            onSubmit={handleSubmit}
            noValidate
            className="glass-card mt-12 space-y-5 p-8 sm:p-10"
          >
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-white/90">Name</label>
              <input
                id="name"
                type="text"
                value={values.name}
                onChange={(e)=>setValues(v=>({...v,name:e.target.value}))}
                className="w-full rounded-xl border border-border bg-black/20 px-4 py-3 outline-none transition-colors placeholder:text-muted/60 focus:border-accent-from/60"
                placeholder="Your full name"
              />
              {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-white/90">Email</label>
              <input
                id="email"
                type="email"
                value={values.email}
                onChange={(e)=>setValues(v=>({...v,email:e.target.value}))}
                className="w-full rounded-xl border border-border bg-black/20 px-4 py-3 outline-none transition-colors placeholder:text-muted/60 focus:border-accent-from/60"
                placeholder="you@example.com"
              />
              {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-white/90">Message</label>
              <textarea
                id="message"
                rows={5}
                value={values.message}
                onChange={(e)=>setValues(v=>({...v,message:e.target.value}))}
                className="w-full resize-none rounded-xl border border-border bg-black/20 px-4 py-3 outline-none transition-colors placeholder:text-muted/60 focus:border-accent-from/60"
                placeholder="Tell me about your project..."
              />
              {errors.message && <p className="mt-1 text-sm text-red-400">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={status==="sending"}
              className="group flex w-full items-center justify-center gap-2 rounded-xl bg-accent-gradient px-6 py-4 font-medium text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_-6px_rgba(124,58,237,0.6)] disabled:opacity-70"
            >
              {status==="sending" && <Loader2 size={18} className="animate-spin" />}
              {status==="sent" && <CheckCircle2 size={18} />}
              {status==="sending" ? "Sending..." : status==="sent" ? "Message Sent" : "Send Message"}
            </button>

            {status==="error" && (
              <p className="text-center text-sm text-red-400">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}