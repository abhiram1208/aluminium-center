import { partners } from "../data/partners.js";

export default function InAssociation() {
  return (
    <section
      id="in-association"
      className="section-pad border-y border-hairline py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <span className="eyebrow block text-center">In Association With</span>

        <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
          {partners.map((p) =>
            p.logo ? (
              <div
                key={p.id}
                className="mx-auto flex h-16 w-full items-center justify-center"
              >
                <img
                  src={p.logo}
                  alt={p.name}
                  loading="lazy"
                  decoding="async"
                  className="max-h-16 max-w-[180px] w-auto object-contain opacity-100 "
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
        </div>
      </div>
    </section>
  );
}
