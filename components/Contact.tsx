import Aperture from "./Aperture";
import Button from "./Button";

const channels = [
  {
    label: "Email",
    value: "alwayspasha.in@gmail.com",
    href: "mailto:alwayspasha.in@gmail.com",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section border-t border-border">
      <div className="mx-auto max-w-content container-px">
        <div className="text-center">
          <p className="eyebrow justify-center mb-5">
            <Aperture className="h-4 w-4" />
            Contact
          </p>

          <h2 className="font-display text-4xl font-bold text-ink">
            Let's Build Something Together
          </h2>

          <p className="mt-5 text-muted max-w-xl mx-auto">
            Have an idea, project, or collaboration in mind? Feel free to reach
            out.
          </p>

          <div className="mt-10 flex flex-col gap-5 max-w-xl mx-auto">
            {channels.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-2xl border border-border bg-surface p-6 transition hover:border-orange-500 hover:-translate-y-1"
              >
                <p className="font-semibold text-ink">{item.label}</p>

                <p className="mt-1 text-muted">{item.value}</p>
              </a>
            ))}
          </div>

          <div className="mt-10">
            <Button href="mailto:alwayspasha.in@gmail.com">
              Send Email
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}