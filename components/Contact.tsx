import Aperture from "./Aperture";
import Button from "./Button";

const channels = [
  {
    label: "Email",
    value: "hello@alwayspasha.com",
    href: "mailto:hello@alwayspasha.com",
    icon: (
      <path
        d="M3 6.5A1.5 1.5 0 014.5 5h15A1.5 1.5 0 0121 6.5v11a1.5 1.5 0 01-1.5 1.5h-15A1.5 1.5 0 013 17.5v-11zm1.6.4l6.9 5.4a1 1 0 001.2 0l6.9-5.4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    ),
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/alwayspasha",
    href: "#",
    icon: (
      <path
        d="M6.5 8.5v9M6.5 5.5v.01M11 17.5v-5.2c0-1.8 1.2-3.3 3-3.3s3 1.5 3 3.3v5.2M11 12v5.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    ),
  },
  {
    label: "GitHub",
    value: "github.com/alwayspasha",
    href: "#",
    icon: (
      <path
        d="M12 3a9 9 0 00-2.85 17.54c.45.08.61-.2.61-.43v-1.68c-2.5.54-3.03-1.2-3.03-1.2-.41-1.03-1-1.3-1-1.3-.82-.56.06-.55.06-.55.9.06 1.38.93 1.38.93.8 1.37 2.1.97 2.6.74.08-.58.32-.98.58-1.2-2-.23-4.1-1-4.1-4.44 0-.98.35-1.78.93-2.4-.09-.23-.4-1.15.09-2.4 0 0 .76-.24 2.5.93a8.6 8.6 0 014.55 0c1.74-1.17 2.5-.93 2.5-.93.5 1.25.18 2.17.09 2.4.58.62.93 1.42.93 2.4 0 3.45-2.1 4.2-4.11 4.43.33.29.61.85.61 1.72v2.55c0 .23.16.51.61.43A9 9 0 0012 3z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    ),
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section border-t border-border bg-surface/60">
      <div className="mx-auto max-w-content container-px">
        <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="eyebrow mb-5">
              <Aperture className="h-4 w-4" />
              Contact
            </p>
            <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl md:text-[2.75rem]">
              Let&apos;s build something.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted md:text-lg">
              Got an idea, a product, or a problem worth automating? I&apos;m
              always open to a good conversation.
            </p>
            <div className="mt-8">
              <Button href="mailto:hello@alwayspasha.com" variant="primary">
                Contact Me
              </Button>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {channels.map((channel) => (
              <a
                key={channel.label}
                href={channel.href}
                className="group flex items-center gap-4 rounded-2xl border border-border bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-ink/30 hover:shadow-lg hover:shadow-ink/5"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-ink bg-ink text-white transition-colors duration-300 group-hover:bg-white group-hover:text-ink">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    {channel.icon}
                  </svg>
                </span>
                <span className="flex flex-col">
                  <span className="text-sm font-semibold text-ink">
                    {channel.label}
                  </span>
                  <span className="text-sm text-muted">{channel.value}</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
