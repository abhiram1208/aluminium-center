import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SmartImage from "./SmartImage.jsx";
import { images } from "../data/images.js";

export default function FeaturedWork() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section ref={ref} className="relative h-[85vh] min-h-[560px] overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 -top-[6%] h-[112%]">
        <SmartImage
          src={images.featured}
          alt="Wide architectural view of a featured custom aluminium interior project"
          label="featured-project.webp"
          className="h-full w-full"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-ink/10" />

      <div className="section-pad relative z-10 flex h-full flex-col items-start justify-end pb-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-xl"
        >
          <span className="eyebrow mb-5 block">Featured Project</span>
          <h2 className="text-[clamp(2rem,4.4vw,3.6rem)] leading-[1.08] text-cream">Made to measure.</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-cream-60 sm:text-base">
            Every project begins with the space itself.
          </p>
          <a href="#works" className="btn-primary mt-8">
            View Our Work
          </a>
        </motion.div>
      </div>
    </section>
  );
}
