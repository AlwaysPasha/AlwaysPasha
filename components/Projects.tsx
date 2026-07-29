import Aperture from "./Aperture";
import Button from "./Button";

type Project = {
  name: string;
  description: string;
  tags: string[];
  visitHref: string;
  githubHref: string;
  status?: string;
};

const projects: Project[] = [
  {
    name: "CheckoutDeals",
    description:
      "A deal-discovery platform that surfaces the best live discounts at checkout, saving shoppers money without the extra tabs.",
    tags: ["Next.js", "TypeScript", "Automation"],
    visitHref: "#",
    githubHref: "#",
  },
  {
    name: "Swing Trader Analytics",
    description:
      "An analytics dashboard that scans market data and flags swing-trading setups with clear, at-a-glance signals.",
    tags: ["Python", "AI", "Data"],
    visitHref: "#",
    githubHref: "#",
  },
  {
    name: "Paper Trading Bot",
    description:
      "A risk-free simulated trading bot that tests strategies against real market conditions before any real money moves.",
    tags: ["Python", "Automation", "AI"],
    visitHref: "#",
    githubHref: "#",
  },
  {
    name: "Future AI Projects",
    description:
      "New AI-powered tools are always in motion. This slot is reserved for what's shipping next.",
    tags: ["AI", "In Progress"],
    visitHref: "#",
    githubHref: "#",
    status: "Coming soon",
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-ink/10">
      {/* Image placeholder */}
      <div className="relative flex h-48 items-center justify-center overflow-hidden bg-surface">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-br from-black/[0.04] via-transparent to-transparent transition-transform duration-500 group-hover:scale-110"
        />
        <Aperture className="h-16 w-16 text-ink opacity-60 transition-transform duration-500 group-hover:rotate-45" />
        {project.status && (
          <span className="absolute right-4 top-4 rounded-full bg-ink px-3 py-1 text-xs font-medium text-white">
            {project.status}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-7">
        <h3 className="font-display text-xl font-semibold text-ink">
          {project.name}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-ink/70"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-3">
          <Button href={project.visitHref} variant="primary" className="px-5 py-2.5 text-xs">
            Visit
          </Button>
          <Button
            href={project.githubHref}
            variant="secondary"
            className="px-5 py-2.5 text-xs"
          >
            GitHub
          </Button>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section border-t border-border bg-surface/60">
      <div className="mx-auto max-w-content container-px">
        <div className="mb-14 max-w-xl">
          <p className="eyebrow mb-5">
            <Aperture className="h-4 w-4" />
            Projects
          </p>
          <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl md:text-[2.75rem]">
            Things I&apos;ve built.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">
            A mix of AI tools, trading automations, and products built to
            solve problems I ran into myself.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
