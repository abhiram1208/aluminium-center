import SmartImage from "./SmartImage.jsx";
import { images } from "../data/images.js";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[520px] h-[100svh] items-end overflow-hidden bg-ink sm:items-center"
    >
      <SmartImage
        src={images.hero.posterDesktop}
        alt="Premium aluminium interior designed by Aluminium Center"
        loading="eager"
        fetchPriority="high"
        decoding="async"
        sizes="100vw"
        className="absolute inset-0 h-full w-full"
        imgClassName="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-ink/25" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/45 via-transparent to-transparent" />

      <div className="section-pad relative z-10 w-full pb-16 pt-28 sm:py-0">
        <div className="w-full max-w-2xl">
          <span className="eyebrow mb-5 block">Aluminium Center</span>

          <h1 className="text-[clamp(2.1rem,5.4vw,4.4rem)] leading-[1.05] text-cream">
            Designed to belong.
          </h1>

          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-cream-60 sm:text-base">
            Contemporary interiors, precisely crafted around your space.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3 sm:gap-4">
            <a href="#works" className="btn-primary">
              Explore Our Works
            </a>
            <a href="#contact" className="btn-ghost">
              Get a Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
