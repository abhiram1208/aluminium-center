import SectionHeading from "./SectionHeading.jsx";
import { processSteps } from "../data/siteData.js";

export default function Process() {
  return (
    <section className="section-pad py-10 lg:py-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Process" title="From idea to installation." />

        <div className="mt-16 grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <div
              key={step.number}
              className="border-t border-hairline py-8 pr-6 lg:border-l lg:border-t-0 lg:pl-8 lg:py-0"
            >
              <span className="font-serif text-champagne text-lg">
                {step.number}
              </span>
              <h3 className="mt-4 font-serif text-2xl text-cream">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-cream-60">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
