import Button from "./Button";
import Aperture from "./Aperture";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-36 pb-28 md:pt-44 md:pb-36"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-orange-500/10 blur-[140px]" />
        <div className="absolute -left-20 bottom-10 h-80 w-80 rounded-full bg-orange-400/5 blur-[120px]" />
        <div className="absolute right-0 top-40 h-72 w-72 rounded-full bg-white/5 blur-[120px]" />
      </div>

      <div className="mx-auto grid max-w-content items-center gap-16 container-px lg:grid-cols-2">

        {/* LEFT */}

        <div>

          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-5 py-2 text-sm text-orange-300">
            <Aperture className="h-4 w-4" />
            Currently Building • CheckOutDeals
          </div>

          <h1 className="font-display text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
            Building
            <span className="block text-orange-500">
              Intelligent Products
            </span>
            with AI.
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-400">
            Hi, I'm <span className="text-white font-semibold">Pasha</span>.
            I build AI-powered products, smart automations, and modern web
            experiences that solve real-world problems. When I'm away from
            code, you'll usually find me behind a camera capturing moments.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="#projects">
              View Projects
            </Button>

            <Button
              href="#contact"
              variant="secondary"
            >
              Contact Me
            </Button>
          </div>

          {/* Stats */}

          <div className="mt-16 grid grid-cols-3 gap-6 border-t border-zinc-800 pt-8">

            <div>
              <h2 className="text-3xl font-bold text-white">10+</h2>
              <p className="mt-2 text-sm text-zinc-500">
                Projects Built
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white">3+</h2>
              <p className="mt-2 text-sm text-zinc-500">
                Years Learning
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white">∞</h2>
              <p className="mt-2 text-sm text-zinc-500">
                Ideas Created
              </p>
            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="relative flex justify-center">

          <div className="absolute h-80 w-80 rounded-full bg-orange-500/20 blur-[120px]" />

          <div className="relative w-full max-w-md rounded-3xl border border-zinc-800 bg-zinc-900/60 p-8 backdrop-blur-xl">

            <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-orange-700 text-4xl font-bold text-white shadow-xl shadow-orange-500/20">
              P
            </div>

            <h3 className="mt-6 text-center text-2xl font-semibold text-white">
              Pasha
            </h3>

            <p className="mt-2 text-center text-zinc-400">
              AI Builder • Developer • Photographer
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">

              {[
                "Next.js",
                "React",
                "TypeScript",
                "AI",
                "Automation",
                "Photography",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-zinc-700 bg-zinc-800/60 px-4 py-2 text-sm text-zinc-300"
                >
                  {item}
                </span>
              ))}

            </div>

            <div className="mt-10 rounded-2xl border border-zinc-800 bg-black/30 p-5">

              <p className="text-sm uppercase tracking-widest text-orange-400">
                Current Focus
              </p>

              <h4 className="mt-3 text-lg font-semibold text-white">
                Building CheckOutDeals
              </h4>

              <p className="mt-2 text-sm leading-7 text-zinc-400">
                Creating a platform that helps shoppers discover the best
                product deals and discounts while exploring AI-powered features
                for smarter shopping.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}