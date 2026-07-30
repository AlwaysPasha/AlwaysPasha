import {
  Bot,
  ShieldCheck,
  Cloud,
  BarChart3,
  Camera,
} from "lucide-react";
import Reveal from "./Reveal";

const items = [
  {
    icon: Bot,
    title: "AI & Automation",
    description:
      "Designing AI-powered tools, intelligent workflows, and automation solutions that improve productivity and simplify everyday work.",
  },
  {
    icon: ShieldCheck,
    title: "SAP Security",
    description:
      "Managing SAP user administration, role & authorization management, SAP GRC, Identity & Access Management (IAM), and security compliance.",
  },
  {
    icon: Cloud,
    title: "Cloud & Infrastructure",
    description:
      "Building a strong foundation in AWS Cloud, Linux, networking, and infrastructure concepts for secure and scalable environments.",
  },
  {
    icon: BarChart3,
    title: "Business Systems",
    description:
      "Applying SQL, business analysis, reporting, and decision support principles to solve business challenges and improve operational efficiency.",
  },
  {
    icon: Camera,
    title: "Photography",
    description:
      "Capturing moments through creative composition and visual storytelling while constantly exploring new perspectives behind the lens.",
  },
];

export default function Expertise() {
  return (
    <section
      id="expertise"
      className="section-padding py-28 sm:py-36"
    >
      <div className="mx-auto max-w-content">

        <Reveal>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-muted">
            What I Do
          </p>

          <h2 className="max-w-2xl text-3xl font-bold tracking-tight sm:text-5xl">
            Areas of{" "}
            <span className="gradient-text">
              Expertise
            </span>
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-muted">
            My interests span security, automation, cloud technologies,
            business systems, and creative photography. I enjoy learning,
            building practical solutions, and continuously expanding my
            technical knowledge.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal
                key={item.title}
                delay={index * 100}
              >
                <div
                  className="
                    glass-card
                    group
                    relative
                    overflow-hidden
                    rounded-3xl
                    p-8
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    hover:border-white/20
                    hover:shadow-[0_20px_60px_rgba(124,58,237,0.15)]
                  "
                >
                  {/* Glow */}
                  <div
                    className="
                      absolute
                      -right-16
                      -top-16
                      h-48
                      w-48
                      rounded-full
                      bg-accent-gradient
                      opacity-0
                      blur-3xl
                      transition-opacity
                      duration-500
                      group-hover:opacity-20
                    "
                  />

                  {/* Icon */}
                  <div
                    className="
                      relative
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      bg-accent-gradient-soft
                      text-white
                      transition-transform
                      duration-300
                      group-hover:scale-110
                      group-hover:rotate-3
                    "
                  >
                    <Icon size={26} strokeWidth={1.75} />
                  </div>

                  {/* Title */}
                  <h3 className="relative mt-7 text-xl font-semibold">
                    {item.title}
                  </h3>

                  {/* Divider */}
                  <div className="mt-3 h-px w-14 bg-accent-gradient rounded-full" />

                  {/* Description */}
                  <p className="relative mt-5 leading-7 text-muted">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}