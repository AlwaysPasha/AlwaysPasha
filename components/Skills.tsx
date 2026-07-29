import Aperture from "./Aperture";

const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "JavaScript",
  "Python",
  "AI",
  "Automation",
  "Git",
  "GitHub",
  "HTML",
  "CSS",
  "Tailwind",
];

export default function Skills() {
  return (
    <section id="skills" className="section border-t border-border bg-white">
      <div className="mx-auto max-w-content container-px">
        <div className="mb-14 max-w-xl">
          <p className="eyebrow mb-5">
            <Aperture className="h-4 w-4" />
            Skills
          </p>
          <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl md:text-[2.75rem]">
            Tools of the trade.
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="group flex items-center gap-3 rounded-2xl border border-border bg-surface px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-ink/30 hover:bg-white hover:shadow-lg hover:shadow-ink/5"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ink bg-ink text-xs font-semibold text-white transition-colors duration-300 group-hover:bg-white group-hover:text-ink">
                {skill.slice(0, 2).toUpperCase()}
              </span>
              <span className="text-sm font-medium text-ink">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
