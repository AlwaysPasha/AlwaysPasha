import Aperture from "./Aperture";

const roles = [
  {
    title: "AI Builder",
    description:
      "Designing and shipping AI-powered tools that turn complex models into products people actually use.",
  },
  {
    title: "Automation Developer",
    description:
      "Wiring up smart automations that remove repetitive work and let systems run themselves.",
  },
  {
    title: "Web Developer",
    description:
      "Crafting fast, clean interfaces with modern web tooling — from idea to production.",
  },
  {
    title: "Part-time Photographer",
    description:
      "Framing the world through a lens when I'm away from the keyboard — light, timing, and detail.",
  },
];

export default function About() {
  return (
    <section id="about" className="section border-t border-border bg-white">
      <div className="mx-auto max-w-content container-px">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
          <div>
            <p className="eyebrow mb-5">
              <Aperture className="h-4 w-4" />
              About
            </p>
            <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl md:text-[2.75rem]">
              Hi, I&apos;m Pasha.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted md:text-lg">
              I sit at the intersection of AI and automation — building
              practical tools that quietly make everyday work easier. When
              I&apos;m not building, I&apos;m usually behind a camera, looking
              for the same kind of clarity in a frame that I look for in
              code.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {roles.map((role) => (
              <div
                key={role.title}
                className="group rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-ink/30 hover:bg-white hover:shadow-xl hover:shadow-ink/5"
              >
                <h3 className="font-display text-lg font-semibold text-ink">
                  {role.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {role.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
