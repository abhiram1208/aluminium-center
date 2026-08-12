import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading.jsx";
import { processSteps } from "../data/siteData.js";

export default function Process() {
  return (
    <section className="section-pad py-28 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Process" title="From idea to installation." />

        <div className="mt-16 grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
              className="border-t border-hairline py-8 pr-6 lg:border-l lg:border-t-0 lg:pl-8 lg:py-0"
            >
              <span className="font-serif text-champagne text-lg">{step.number}</span>
              <h3 className="mt-4 font-serif text-2xl text-cream">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-cream-60">{step.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
