import SmartImage from "./SmartImage.jsx";
import { images } from "../data/images.js";

const points = [
  "Custom design built around your room, not a catalogue size",
  "Precision fabrication with consistent, tight tolerances",
  "Durable construction finished for everyday use",
  "Professional installation by our own team",
];

export default function About() {
  return (
    <section id="about" className="section-pad py-12 lg:py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
        {/* About content */}
        <div className="lg:col-span-5">
          <div className="flex flex-col gap-6 lg:sticky lg:top-28">
            <span className="eyebrow">About Aluminium Center</span>

            <h2 className="text-[clamp(2rem,3.6vw,3.2rem)] leading-[1.1] text-cream">
              Built around better spaces.
            </h2>

            <p className="max-w-md text-[15px] leading-relaxed text-cream-60">
              Aluminium Center is a modern custom aluminium interior and
              fabrication brand. We design and build practical, contemporary,
              and carefully finished interior solutions — wardrobes, kitchens,
              cabinets, partitions, doors, and windows — shaped around the way
              each space is actually used.
            </p>

            <p className="max-w-md text-[15px] leading-relaxed text-cream-60">
              From the first measurement to the final fitting, every project is
              treated as its own piece of architecture: designed with intent,
              fabricated with precision, and finished with attention to the
              smallest detail.
            </p>

            <ul className="flex flex-col gap-4">
              {points.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 text-sm text-cream-60"
                >
                  <span className="mt-2 h-px w-4 shrink-0 bg-champagne" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Images */}
        <div className="min-w-0 lg:col-span-7">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <SmartImage
              src={images.about.main}
              alt="Premium aluminium interior"
              label="about-main.webp"
              sizes="(max-width: 1023px) 100vw, 58vw"
              className="sm:col-span-2"
              imgClassName="!h-auto object-contain"
            />

            <SmartImage
              src={images.about.detail}
              alt="Aluminium profile and handle detail"
              label="about-detail.webp"
              sizes="(max-width: 639px) 100vw, 29vw"
              className="aspect-[3/2]"
            />

            <div className="hidden aspect-[3/2] flex-col justify-between border border-hairline p-5 sm:flex sm:p-6">
              {" "}
              <span className="eyebrow">Since 2026</span>
              <span className="font-serif text-xl text-cream sm:text-2xl">
                Precision, by hand and by design.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
