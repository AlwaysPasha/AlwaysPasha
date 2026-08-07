import Image from "next/image";
import { GraduationCap, Star, Clock } from "lucide-react";
import Reveal from "./Reveal";

const details = [
  {
    icon: GraduationCap,
    label: "EDUCATION",
    value: "MBIS · Master of Business Information Systems",
  },
  {
    icon: Star,
    label: "INTERESTS",
    value: "Systems · Security · AI",
  },
  {
    icon: Clock,
    label: "AFTER HOURS",
    value: "Photography · Tech · Explore",
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding py-24 sm:py-32">
      <div className="mx-auto max-w-content">
        <Reveal>
          <p className="eyebrow mb-3">About</p>
        </Reveal>

        <div className="grid gap-14 lg:grid-cols-[1.25fr_1fr] lg:gap-20">
          {/* Left: heading, photo, introduction */}
          <div>
            <Reveal>
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Hi, I&apos;m Pasha.
              </h1>
            </Reveal>

            <Reveal delay={100}>
              <div className="mt-10 flex flex-col gap-7 sm:flex-row sm:items-start sm:gap-9">
                <div className="w-40 shrink-0 overflow-hidden rounded-md sm:w-48">
                  <Image
                    src="/images/profile.webp"
                    alt="Pasha standing in silhouette against a dusk sky, camera in hand"
                    width={533}
                    height={800}
                    priority
                    draggable={false}
                    sizes="(min-width: 640px) 192px, 160px"
                    className="h-auto w-full select-none object-cover"
                  />
                </div>

                <p className="text-lg leading-relaxed text-muted sm:text-xl sm:leading-relaxed">
                  Working across{" "}
                  <strong className="font-semibold text-ink">SAP Security</strong>,{" "}
                  <strong className="font-semibold text-ink">AI Automation</strong>, and{" "}
                  <strong className="font-semibold text-ink">AWS Cloud</strong>, with a
                  focus on secure systems, intelligent automation, and practical
                  technology. I enjoy continuously learning and exploring new
                  technologies.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right: education / interests / after hours */}
          <Reveal delay={150}>
            <div className="flex h-full flex-col divide-y divide-line border-t border-line lg:border-t-0 lg:border-l lg:pl-12">
              {details.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex gap-4 py-7 first:pt-0 lg:first:pt-0">
                  <Icon
                    size={18}
                    strokeWidth={1.5}
                    className="mt-0.5 shrink-0 text-muted"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="eyebrow">{label}</p>
                    <p className="mt-2.5 text-[15px] leading-relaxed text-ink/90">
                      {value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
