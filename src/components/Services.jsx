import SmartImage from "./SmartImage.jsx";
import SectionHeading from "./SectionHeading.jsx";
import { services } from "../data/services.js";

export default function Services() {
  return (
    <section id="services" className="bg-surface py-28 lg:py-36">
      <div className="section-pad mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Services"
          title="What we create."
          body="Seven ways we bring precision aluminium fabrication into the way you live and work."
        />

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden bg-hairline sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article key={s.id} className="group relative bg-ink">
              <div className="relative overflow-hidden">
                <SmartImage
                  src={s.image}
                  alt={s.alt}
                  label={`${s.id}.webp`}
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                  className="aspect-[4/3]"
                  imgClassName=""
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl text-cream">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cream-60">
                  {s.description}
                </p>
              </div>
              <span className="pointer-events-none absolute left-6 top-6 h-px w-6  bg-champagne  " />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
