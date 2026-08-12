import { motion } from "framer-motion";
import SmartImage from "./SmartImage.jsx";
import { images } from "../data/images.js";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden">
      <SmartImage
        src={images.cta}
        alt="Cinematic premium interior scene representing custom aluminium design"
        label="final-cta.webp"
        className="absolute inset-0 h-full w-full"
      />
      <div className="absolute inset-0 bg-ink/70" />

      <div className="section-pad relative z-10 flex min-h-[70vh] flex-col items-center justify-center py-28 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-2xl"
        >
          <h2 className="text-[clamp(2.1rem,4.6vw,3.8rem)] leading-[1.1] text-cream">
            Your space. Your dimensions. Your design.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-[15px] leading-relaxed text-cream-60 sm:text-base">
            Create something made specifically for the way you live.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a href="#contact" className="btn-primary">
              Start Your Project
            </a>
            <a href="#contact" className="btn-ghost">
              Chat on WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
