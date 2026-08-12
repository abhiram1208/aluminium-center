// Placeholder wordmark. Replace with the official Aluminium Center logo
// (e.g. an <img src="/images/brand/logo.svg" /> ) when the asset is supplied —
// this file is the single place that controls the mark across the site.
export default function Logo({ className = "" }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      {/*       <svg width="22" height="22" viewBox="0 0 64 64" fill="none" aria-hidden="true">
        <path
          d="M16 46 L32 16 L48 46 M22 36 H42"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="square"
        />
      </svg> */}
           {" "}
      <span className="font-serif text-[17px] tracking-[0.02em]">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden">
          <img
            src="/images/brand/logo.jpg"
            alt="Aluminium Center"
            className="block h-full w-full object-contain"
          />
        </span>
                Aluminium <span className="text-champagne">Center</span>   
         {" "}
      </span>
         {" "}
    </span>
  );
}
