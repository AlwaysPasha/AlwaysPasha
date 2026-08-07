import Image from "next/image";
import Reveal from "./Reveal";

const photos = [
  {
    src: "/images/sunset.webp",
    alt: "Sunset over water with a distant city skyline",
    width: 1800,
    height: 1012,
    className: "md:col-span-2",
  },
  {
    src: "/images/architecture.webp",
    alt: "Historic minaret towers against the sky",
    width: 1197,
    height: 1800,
    className: "md:row-span-2",
  },
  {
    src: "/images/coffee-bean.webp",
    alt: "A single coffee bean resting on a branch",
    width: 1800,
    height: 1012,
    className: "",
  },
  {
    src: "/images/portrait.webp",
    alt: "Close-up portrait photograph",
    width: 1200,
    height: 1800,
    className: "",
  },
  {
    src: "/images/perspective.webp",
    alt: "Low-angle perspective looking up through leaves",
    width: 1200,
    height: 1800,
    className: "",
  },
];

export default function Photography() {
  return (
    <section
      id="photography"
      className="section-padding border-t border-line py-24 sm:py-32"
    >
      <div className="mx-auto max-w-content">
        <Reveal>
          <p className="eyebrow mb-3">Photography</p>
          <p className="text-lg text-muted">
            Moments, places, and details that caught my eye.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3 md:items-start md:gap-6">
          {photos.map((photo, i) => (
            <Reveal key={photo.src} delay={(i % 3) * 60} className={photo.className}>
              <div
                className="relative w-full overflow-hidden bg-bg-subtle"
>
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  draggable={false}
                  loading="lazy"
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="h-auto w-full select-none object-contain"
                />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={100}>
          <p className="mt-12 border-t border-line pt-6 text-xs font-medium uppercase tracking-[0.18em] text-muted">
            More through my lens — coming soon.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
