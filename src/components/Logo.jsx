export default function Logo({ className = "" }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span className="flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden">
        <img
          src="/images/brand/logo.jpg"
          alt="Aluminium Center"
          className="block h-full w-full object-contain"
        />
      </span>

      <span className="font-serif text-[17px] tracking-[0.02em]">
        Aluminium <span className="text-champagne">Center</span>
      </span>
    </span>
  );
}
