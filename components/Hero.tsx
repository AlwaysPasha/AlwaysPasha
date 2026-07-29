import Button from "./Button";
import Aperture from "./Aperture";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-40 pb-28 md:pt-52 md:pb-36"
    >
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="absolute -top-40 left-1/2 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-orange-500/10 blur-[150px]"
      />

      <div
        aria-hidden="true"
        className="absolute right-0 top-24 h-80 w-80 rounded-full bg-orange-400/5 blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="absolute left-0 bottom-0 h-80 w-80 rounded-full bg-white/5 blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-8 h-72 w-72 -translate-x-1/2 opacity-5"
      >
        <Aperture spin className="h-full w-full" />
      </div>

      <div className="relative mx-auto max-w-content container-px">

        {/* Badge */}

        <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-orange-500/30 bg-orange-500/10 px-5 py-2 text-sm text-orange-300">
          <Aperture className="h-4 w-4" />
          Currently Building • CheckOutDeals
        </div>

        {/* Heading */}

        <h1 className="max-w-5xl text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl">
          Building AI Products
          <br />
          <span className="text-orange-500">
            That Solve Real Problems.
          </span>
        </h1>

        {/* Description */}

        <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400 md:text-xl">
          I'm Pasha — an AI Builder, Automation Enthusiast, and Photographer.
          I enjoy creating practical products, experimenting with new ideas,
          and turning simple concepts into polished digital experiences.
        </p>

        {/* Buttons */}

        <div className="mt-12 flex flex-wrap gap-4">
          <Button href="#projects" variant="primary">
            View My Projects
          </Button>

          <Button href="#contact" variant="secondary">
            Let's Connect
          </Button>
        </div>

        {/* Stats */}

        <div className="mt-20 grid max-w-3xl grid-cols-3 gap-6 border-t border-zinc-800 pt-10">

          <div>
            <h3 className="text-3xl font-bold text-white">10+</h3>
            <p className="mt-2 text-sm text-zinc-500">
              AI & Automation Projects
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-white">24/7</h3>
            <p className="mt-2 text-sm text-zinc-500">
              Learning & Building
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-white">∞</h3>
            <p className="mt-2 text-sm text-zinc-500">
              Ideas to Explore
            </p>
          </div>

        </div>

        {/* Scroll */}

        <div className="mt-20 flex flex-col items-center text-zinc-500">

          <span className="mb-3 text-xs uppercase tracking-[0.25em]">
            Scroll Down
          </span>

          <svg
            className="h-6 w-6 animate-bounce"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 4V20M12 20L6 14M12 20L18 14"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

        </div>

      </div>
    </section>
  );
}