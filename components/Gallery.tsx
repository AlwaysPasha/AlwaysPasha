"use client";

import Image from "next/image";
import Reveal from "./Reveal";

const photos = [
  { src: "/images/sunset.webp", alt: "Sunset over water", width: 1800, height: 1012, className: "md:col-span-2" },
  { src: "/images/architecture.webp", alt: "Historic architectural towers", width: 1200, height: 1800, className: "md:row-span-2" },
  { src: "/images/coffee-bean.webp", alt: "Coffee bean on a branch", width: 1800, height: 1012, className: "" },
  { src: "/images/portrait.webp", alt: "Portrait photograph", width: 1200, height: 1800, className: "" },
  { src: "/images/perspective.webp", alt: "Low-angle perspective through leaves", width: 1200, height: 1800, className: "" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="section-padding py-28 sm:py-36">
      <div className="mx-auto max-w-content">
        <Reveal>
          <h2 className="text-sm font-medium uppercase tracking-widest text-white">PHOTOGRAPHY</h2>
          <p className="mt-4 text-lg text-muted">Moments, places, and details that caught my eye.</p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3 md:items-start md:gap-6">
          {photos.map((photo, i) => (
            <Reveal key={photo.src} delay={(i % 3) * 70} className={photo.className}>
              <div
                className="relative w-full overflow-hidden bg-surface/20"
                onDragStart={(event) => event.preventDefault()}
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
          <p className="mt-12 border-t border-border pt-6 text-xs font-medium uppercase tracking-[0.18em] text-muted">
            MORE THROUGH MY LENS — COMING SOON.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
