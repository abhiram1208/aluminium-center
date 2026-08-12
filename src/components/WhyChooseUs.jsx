import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading.jsx";
import { whyPoints } from "../data/siteData.js";

export default function WhyChooseUs() {
  return (
    <section className="bg-surface py-28 lg:py-36">
      <div className="section-pad mx-auto max-w-7xl">
        <SectionHeading eyebrow="Why Aluminium Center" title="Considered, in every detail." align="center" />

        <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {whyPoints.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: (i % 3) * 0.08 }}
              className="border-t border-hairline pt-6"
            >
              <h3 className="font-serif text-2xl text-cream">{point.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-cream-60">{point.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
