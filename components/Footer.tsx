import Aperture from "./Aperture";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto flex max-w-content flex-col items-center gap-4 container-px py-10 text-sm text-muted sm:flex-row sm:justify-between">
        <div className="flex items-center gap-2">
          <Aperture className="h-4 w-4 text-ink/40" />
          <span>
            © {year} <span className="text-ink/40">Always</span>
            <span className="font-semibold text-ink">Pasha</span>
          </span>
        </div>
        <span>Built with Next.js</span>
      </div>
    </footer>
  );
}
