import SectionHeading from "./SectionHeading.jsx";
import { whyPoints } from "../data/siteData.js";

export default function WhyChooseUs() {
  return (
    <section className="bg-surface py-28 lg:py-36">
      <div className="section-pad mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Why Aluminium Center"
          title="Considered, in every detail."
          align="center"
        />

        <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {whyPoints.map((point) => (
            <div key={point.title} className="border-t border-hairline pt-6">
              <h3 className="font-serif text-2xl text-cream">{point.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-cream-60">
                {point.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
