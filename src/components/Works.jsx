import { useState } from "react";
import SmartImage from "./SmartImage.jsx";
import SectionHeading from "./SectionHeading.jsx";
import { categories, projects } from "../data/projects.js";

export default function Works() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((project) => project.category === active);

  return (
    <section id="works" className="section-pad py-10 lg:py-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <SectionHeading eyebrow="Portfolio" title="Selected Works." />

          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActive(category)}
                aria-pressed={active === category}
                className={`text-[12px] uppercase tracking-[0.1em]  ${
                  active === category
                    ? "text-champagne"
                    : "text-cream-40 hover:text-cream-60"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <article key={project.id} className="group">
              <SmartImage
                src={project.image}
                alt={project.alt}
                label={`${project.id}.webp`}
                loading="lazy"
                decoding="async"
                sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                className="aspect-[4/5]"
                imgClassName=""
              />

              <div className="mt-5 flex min-w-0 flex-wrap items-start justify-between gap-3">
                <div className="min-w-0 flex-1">
                  <h3 className="font-serif text-lg text-cream">
                    {project.title}
                  </h3>
                  {project.location && (
                    <p className="mt-1 text-sm text-cream-40">
                      {project.location}
                    </p>
                  )}
                </div>

                <span className="eyebrow shrink-0 pt-1">
                  {project.category}
                </span>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-cream-60">
                {project.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
