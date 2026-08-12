import { motion } from "framer-motion";
import { partners } from "../data/partners.js";

export default function InAssociation() {
  return (
    <section
      id="in-association"
      className="section-pad border-y border-hairline py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <span className="eyebrow block text-center">In Association With</span>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-12 grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-5"
        >
          {partners.map((p) =>
            p.logo ? (
              <div
                key={p.id}
                className="mx-auto flex h-16 w-full items-center justify-center"
              >
                <img
                  src={p.logo}
                  alt={p.name}
                  className="max-h-16 max-w-[180px] w-auto object-contain opacity-100 transition-opacity duration-300"
                />
              </div>
            ) : (
              <div
                key={p.id}
                className="mx-auto flex h-16 items-center justify-center text-center text-[13px] uppercase tracking-[0.08em] text-cream-40"
              >
                {p.name}
              </div>
            ),
          )}
        </motion.div>
      </div>
    </section>
  );
}
