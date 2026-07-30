import Image from "next/image";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="section-padding py-28 sm:py-36">
      <div className="mx-auto grid max-w-content items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">

        {/* Profile Image */}
        <Reveal>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm">
            <div
              className="absolute -inset-4 rounded-[32px] bg-accent-gradient opacity-20 blur-3xl"
              aria-hidden="true"
            />

            <div className="glass-card relative h-full overflow-hidden rounded-[28px] border border-border">
              <Image
                src="/photos/profile.png"
                alt="Portrait of Pasha"
                fill
                priority
                sizes="(min-width:1024px) 380px, 80vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </Reveal>

        {/* Content */}
        <Reveal delay={100}>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-muted">
            About Me
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
            Hi, I'm{" "}
            <span className="gradient-text">
              Pasha
            </span>
          </h2>

          <div className="mt-8 space-y-6 text-lg leading-8 text-muted">

            <p>
              I'm passionate about SAP Security, AI automation, cloud
              technologies, and building practical digital solutions that solve
              real-world problems.
            </p>

            <p>
              I enjoy continuously learning new technologies, improving my
              technical skills, and exploring innovative ways to combine
              security, automation, and cloud computing into meaningful
              projects.
            </p>

            <p>
              Beyond technology, photography is my creative outlet. It allows
              me to slow down, observe details, and tell stories through images
              while constantly exploring new perspectives.
            </p>

          </div>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-3 gap-5">

            <div className="glass-card rounded-2xl p-5 text-center">
              <h3 className="text-3xl font-bold gradient-text">
                SAP
              </h3>
              <p className="mt-2 text-sm text-muted">
                Security
              </p>
            </div>

            <div className="glass-card rounded-2xl p-5 text-center">
              <h3 className="text-3xl font-bold gradient-text">
                AI
              </h3>
              <p className="mt-2 text-sm text-muted">
                Automation
              </p>
            </div>

            <div className="glass-card rounded-2xl p-5 text-center">
              <h3 className="text-3xl font-bold gradient-text">
                AWS
              </h3>
              <p className="mt-2 text-sm text-muted">
                Cloud
              </p>
            </div>

          </div>
        </Reveal>
      </div>
    </section>
  );
}