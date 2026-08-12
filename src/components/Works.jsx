import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SmartImage from "./SmartImage.jsx";
import SectionHeading from "./SectionHeading.jsx";
import { categories, projects } from "../data/projects.js";

export default function Works() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="works" className="section-pad py-28 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <SectionHeading eyebrow="Portfolio" title="Selected Works." />

          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`text-[12px] uppercase tracking-[0.1em] transition-colors duration-300 ${
                  active === cat ? "text-champagne" : "text-cream-40 hover:text-cream-60"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="group"
              >
                <SmartImage
                  src={project.image}
                  alt={project.alt}
                  label={`${project.id}.webp`}
                  className="aspect-[4/5]"
                  imgClassName="transition-transform duration-[1200ms] ease-cinematic group-hover:scale-[1.05]"
                />
                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-serif text-lg text-cream">{project.title}</h3>
                    <p className="mt-1 text-sm text-cream-40">{project.location}</p>
                  </div>
                  <span className="eyebrow whitespace-nowrap pt-1">{project.category}</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-cream-60">{project.description}</p>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
