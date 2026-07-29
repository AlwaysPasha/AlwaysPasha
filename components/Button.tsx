import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  target?: string;
  rel?: string;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 will-change-transform";

const variants: Record<string, string> = {
  primary:
    "bg-ink text-white hover:bg-white hover:text-ink border border-ink hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/10",
  secondary:
    "bg-white text-ink border border-border hover:border-ink hover:-translate-y-0.5",
  ghost: "text-ink hover:opacity-60",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  target,
  rel,
}: ButtonProps) {
  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
