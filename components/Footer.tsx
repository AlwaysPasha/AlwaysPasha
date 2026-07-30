import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-6 px-6 text-center md:flex-row md:text-left">

        <div>
          <h3 className="text-lg font-semibold gradient-text">
            AlwaysPasha
          </h3>

          <p className="mt-2 text-sm text-muted">
            Securing Systems. Automating Workflows. Capturing Perspectives.
          </p>
        </div>

        <div className="text-sm text-muted">
          <p>© 2026 Pasha. All rights reserved.</p>

          <p className="mt-2 flex items-center justify-center gap-1 md:justify-end">
            Designed & Built with
            <span className="font-medium text-white">Next.js</span>
            <Heart
              size={14}
              className="fill-red-500 text-red-500"
            />
          </p>
        </div>

      </div>
    </footer>
  );
}