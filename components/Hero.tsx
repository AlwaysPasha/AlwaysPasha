import Aperture from "./Aperture";
import ParallaxLayer from "./ParallaxLayer";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-bg"
    >
      {/* Grid Pattern */}
      <ParallaxLayer speed={0.06} className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-pattern bg-grid [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,black,transparent)]" />
      </ParallaxLayer>

      {/* Gradient Blobs */}
      <ParallaxLayer speed={0.14} className="absolute inset-0">
        <div
          className="absolute -top-24 left-1/4 h-[420px] w-[420px] rounded-full bg-accent-from/30 blur-[120px] animate-floatBlob"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 right-1/4 h-[380px] w-[380px] rounded-full bg-accent-to/25 blur-[120px] animate-floatBlobReverse"
          aria-hidden="true"
        />
      </ParallaxLayer>

      {/* Decorative Aperture */}
      <ParallaxLayer speed={0.22} className="absolute inset-0">
        <Aperture
          size={160}
          className="absolute right-8 top-28 hidden animate-spinSlow opacity-40 md:block lg:right-16"
        />
      </ParallaxLayer>

      <div className="relative z-10 mx-auto flex max-w-content flex-col items-center px-6 text-center sm:px-10">

        {/* Personal Brand */}
        <p
          className="mb-3 text-sm uppercase tracking-[0.35em] text-muted opacity-0 animate-fadeInUp"
          style={{ animationDelay: "0.02s" }}
        >
          ALWAYSPASHA
        </p>

        {/* Expertise Badge */}
        <span
          className="mb-6 inline-flex items-center rounded-full border border-border bg-surface/50 px-4 py-1.5 text-sm text-muted backdrop-blur-md opacity-0 animate-fadeInUp"
          style={{ animationDelay: "0.08s" }}
        >
          SAP Security • AI Automation • AWS Cloud • Photography
        </span>

        {/* Main Heading */}
        <h1
          className="gradient-text max-w-5xl text-balance text-4xl font-bold leading-[1.1] tracking-tight opacity-0 animate-fadeInUp sm:text-5xl lg:text-7xl"
          style={{ animationDelay: "0.18s" }}
        >
          Securing Systems.
          <br />
          Automating Workflows.
          <br />
          Capturing Perspectives.
        </h1>

        {/* Description */}
        <p
          className="mt-8 max-w-3xl text-balance text-lg leading-8 text-muted opacity-0 animate-fadeInUp sm:text-xl"
          style={{ animationDelay: "0.35s" }}
        >
          I'm <span className="font-semibold text-white">Pasha</span>,
          passionate about SAP Security, AI automation, cloud technologies,
          and creating practical digital solutions. I enjoy continuously
          learning new technologies, solving real-world problems, and
          combining technical expertise with creativity through photography.
        </p>

        {/* CTA */}
        <div
          className="mt-10 opacity-0 animate-fadeInUp"
          style={{ animationDelay: "0.5s" }}
        >
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-accent-gradient px-8 py-3.5 font-medium text-white shadow-[0_0_0_0_rgba(124,58,237,0)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_-4px_rgba(124,58,237,0.6)]"
          >
            Let's Connect
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 animate-fadeIn"
        style={{ animationDelay: "1s" }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-[0.2em] text-muted">
            Scroll
          </span>

          <div className="h-9 w-5 rounded-full border border-border p-1">
            <div className="h-1.5 w-1.5 animate-bounceArrow rounded-full bg-muted" />
          </div>
        </div>
      </div>
    </section>
  );
}