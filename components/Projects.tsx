import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section
      id="projects"
      className="section-padding border-t border-line py-24 sm:py-32"
    >
      <div className="mx-auto max-w-content">
        <Reveal>
          <p className="eyebrow mb-3">Projects</p>
        </Reveal>

        <Reveal delay={80}>
          <div className="flex min-h-[28vh] items-center justify-start sm:min-h-[34vh]">
            <p className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Coming soon.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
