"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Reveal from "./Reveal";

type Category = "Nature" | "Street" | "Travel" | "Architecture";

const categories: Category[] = ["Nature", "Street", "Travel", "Architecture"];

const photos = [
  { seed: "pasha-nature-01", category: "Nature", height: 460, alt: "Forest canopy, natural light" },
  { seed: "pasha-nature-02", category: "Nature", height: 340, alt: "Mountain ridge at golden hour" },
  { seed: "pasha-nature-03", category: "Nature", height: 400, alt: "Macro detail of leaves" },
  { seed: "pasha-nature-04", category: "Nature", height: 320, alt: "Coastal cliffs and sea" },

  { seed: "pasha-street-01", category: "Street", height: 420, alt: "Candid street scene, low angle" },
  { seed: "pasha-street-02", category: "Street", height: 300, alt: "Night market, long exposure" },
  { seed: "pasha-street-03", category: "Street", height: 380, alt: "Urban alley, shadow play" },
  { seed: "pasha-street-04", category: "Street", height: 440, alt: "Crosswalk motion blur" },

  { seed: "pasha-travel-01", category: "Travel", height: 380, alt: "Old town rooftops" },
  { seed: "pasha-travel-02", category: "Travel", height: 460, alt: "Coastal village at dusk" },
  { seed: "pasha-travel-03", category: "Travel", height: 320, alt: "Mountain village path" },
  { seed: "pasha-travel-04", category: "Travel", height: 400, alt: "Harbor at sunrise" },

  { seed: "pasha-arch-01", category: "Architecture", height: 480, alt: "Minimalist facade, hard shadow" },
  { seed: "pasha-arch-02", category: "Architecture", height: 340, alt: "Glass tower, upward angle" },
  { seed: "pasha-arch-03", category: "Architecture", height: 400, alt: "Concrete staircase, symmetry" },
  { seed: "pasha-arch-04", category: "Architecture", height: 360, alt: "Bridge structure, geometric lines" },
] as const;

export default function Gallery() {
  const [active, setActive] = useState<Category>("Nature");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () => photos.filter((p) => p.category === active),
    [active]
  );

  const close = useCallback(() => setActiveIndex(null), []);
  const prev = useCallback(
    () => setActiveIndex((i) => i === null ? null : (i - 1 + filtered.length) % filtered.length),
    [filtered.length]
  );
  const next = useCallback(
    () => setActiveIndex((i) => i === null ? null : (i + 1) % filtered.length),
    [filtered.length]
  );

  useEffect(() => {
    if (activeIndex === null) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [activeIndex, close, prev, next]);

  return (
    <section id="gallery" className="section-padding py-28 sm:py-36">
      <div className="mx-auto max-w-content">
        <Reveal>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-muted">
            Photography
          </p>

          <h2 className="max-w-2xl text-3xl font-bold tracking-tight sm:text-5xl">
            Moments Through <span className="gradient-text">My Lens</span>
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-muted">
            Photography allows me to slow down, observe details, and capture stories from
            unique perspectives. Here are a few moments I've documented through my lens.
          </p>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-10 flex flex-wrap gap-2.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => { setActive(cat); setActiveIndex(null); }}
                className={`rounded-full border px-5 py-2 text-sm font-medium transition-all duration-300 ${
                  cat === active
                    ? "border-transparent bg-accent-gradient text-white"
                    : "border-border bg-surface/40 text-muted hover:border-white/20 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        <div key={active} className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {filtered.map((photo, i) => (
            <Reveal key={photo.seed} delay={(i % 3) * 90} className="mb-4 break-inside-avoid">
              <button
                onClick={() => setActiveIndex(i)}
                className="group relative block w-full overflow-hidden rounded-[20px] border border-border"
                style={{ height: photo.height }}
              >
                <Image
                  src={`https://picsum.photos/seed/${photo.seed}/800/${photo.height * 2}`}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </button>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-16 text-center">
            <p className="text-lg text-muted">
              More photographs coming soon...
            </p>
          </div>
        </Reveal>
      </div>

      {activeIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90" onClick={close}>
          <button onClick={(e)=>{e.stopPropagation();prev();}} className="absolute left-6 text-white"><ChevronLeft /></button>
          <div className="relative h-[70vh] w-full max-w-3xl" onClick={(e)=>e.stopPropagation()}>
            <Image
              src={`https://picsum.photos/seed/${filtered[activeIndex].seed}/1400/1600`}
              alt={filtered[activeIndex].alt}
              fill
              className="object-contain"
            />
          </div>
          <button onClick={(e)=>{e.stopPropagation();next();}} className="absolute right-6 text-white"><ChevronRight /></button>
          <button onClick={close} className="absolute top-6 right-6 text-white"><X /></button>
        </div>
      )}
    </section>
  );
}