import { motion } from "framer-motion";
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
    <section id="about" className="section-pad py-28 lg:py-36">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-7 lg:sticky lg:top-32"
          >
            <span className="eyebrow">About Aluminium Center</span>
            <h2 className="text-[clamp(2rem,3.6vw,3.2rem)] leading-[1.1] text-cream">
              Built around better spaces.
            </h2>
            <p className="max-w-md text-[15px] leading-relaxed text-cream-60">
              Aluminium Center is a modern custom aluminium interior and fabrication brand.
              We design and build practical, contemporary, and carefully finished interior
              solutions — wardrobes, kitchens, cabinets, partitions, doors, and windows —
              shaped around the way each space is actually used.
            </p>
            <p className="max-w-md text-[15px] leading-relaxed text-cream-60">
              From the first measurement to the final fitting, every project is treated as
              its own piece of architecture: designed with intent, fabricated with
              precision, and finished with attention to the smallest detail.
            </p>

            <ul className="mt-2 flex flex-col gap-4">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm text-cream-60">
                  <span className="mt-2 h-px w-4 shrink-0 bg-champagne" />
                  {p}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-2 gap-4"
          >
            <SmartImage
              src={images.about.main}
              alt="Sophisticated contemporary interior with a premium custom aluminium wardrobe"
              label="about-main.webp"
              className="col-span-2 aspect-[4/3] sm:aspect-[13/11]"
            />
            <SmartImage
              src={images.about.detail}
              alt="Macro detail of an aluminium profile, panel junction, and handle"
              label="about-detail.webp"
              className="col-span-2 aspect-[3/2] sm:col-span-1"
            />
            <div className="hidden aspect-[3/2] flex-col justify-between border border-hairline p-6 sm:col-span-1 sm:flex">
              <span className="eyebrow">Since 2026</span>
              <span className="font-serif text-2xl text-cream">Precision, by hand and by design.</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
