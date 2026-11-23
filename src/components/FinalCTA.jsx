export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-surface">
      <div className="absolute inset-0 bg-gradient-to-br from-champagne/10 via-transparent to-ink/80" />
      <div className="section-pad relative z-10 flex min-h-[420px] flex-col items-center justify-center py-24 text-center sm:min-h-[520px] lg:min-h-[600px]">
        <div className="mx-auto max-w-2xl">
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
        </div>
      </div>
    </section>
  );
}
