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
  "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300";

const variants: Record<string, string> = {
  primary:
    "bg-orange-500 text-white border border-orange-500 hover:bg-orange-600 hover:border-orange-600 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/25",

  secondary:
    "bg-zinc-900/60 text-white border border-zinc-700 backdrop-blur-md hover:bg-zinc-800 hover:border-zinc-500 hover:-translate-y-1",

  ghost:
    "text-zinc-300 hover:text-white",
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