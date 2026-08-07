import Image from "next/image";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="section-padding py-28 sm:py-36">
      <div className="mx-auto max-w-content">
        <Reveal>
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-muted">
            About Me
          </p>

          <div className="max-w-4xl">
            <div className="flex items-start gap-5 sm:gap-7">
              <Image
                src="/images/profile.webp"
                alt="Pasha"
                width={80}
                height={80}
                priority={false}
                draggable={false}
                sizes="(max-width: 640px) 64px, 80px"
                className="mt-1 h-16 w-16 shrink-0 select-none rounded-xl object-cover sm:h-20 sm:w-20"
              />

              <p className="text-xl leading-relaxed text-muted sm:text-2xl sm:leading-relaxed">
                Working across <strong className="font-semibold text-white">SAP Security</strong>,{" "}
                <strong className="font-semibold text-white">AI Automation</strong>, and{" "}
                <strong className="font-semibold text-white">AWS Cloud</strong>, with a focus on secure systems,
                intelligent automation, and practical technology. I enjoy continuously learning and exploring new technologies.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-14 grid gap-8 border-t border-border pt-8 sm:grid-cols-3 sm:gap-10">
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-muted">EDUCATION</p>
              <p className="mt-3 text-[15px] leading-relaxed text-white/90">MBIS · Master of Business Information Systems</p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-muted">INTERESTS</p>
              <p className="mt-3 text-[15px] leading-relaxed text-white/90">Systems · Security · AI</p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-muted">AFTER HOURS</p>
              <p className="mt-3 text-[15px] leading-relaxed text-white/90">Photography · Tech · Explore</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
