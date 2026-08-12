import { useState } from "react";

/**
 * Renders an <img> at `src`. If the file doesn't exist yet (real
 * photography not supplied), it falls back to a quiet architectural
 * placeholder panel instead of a broken-image icon — so the site looks
 * intentional today and upgrades automatically once real files are
 * dropped in at the same path.
 */
export default function SmartImage({ src, alt, label, className = "", imgClassName = "" }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`relative overflow-hidden bg-panel ${className}`}
        role="img"
        aria-label={alt}
      >
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.35]"
          preserveAspectRatio="none"
          viewBox="0 0 400 300"
        >
          <defs>
            <linearGradient id={`g-${label}`} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#1a1a1a" />
              <stop offset="100%" stopColor="#0a0a0a" />
            </linearGradient>
          </defs>
          <rect width="400" height="300" fill={`url(#g-${label})`} />
          <path d="M0 300 L140 130 L200 190 L260 90 L400 260" stroke="#C9A876" strokeOpacity="0.25" strokeWidth="1" fill="none" />
          <line x1="0" y1="0" x2="400" y2="300" stroke="#EDE8E0" strokeOpacity="0.04" strokeWidth="1" />
          <line x1="400" y1="0" x2="0" y2="300" stroke="#EDE8E0" strokeOpacity="0.04" strokeWidth="1" />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-6 text-center">
          <span className="text-[10px] uppercase tracking-widest2 text-cream-40">
            {label || "Image pending"}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={`overflow-hidden bg-panel ${className}`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onError={() => setFailed(true)}
        className={`h-full w-full object-cover ${imgClassName}`}
      />
    </div>
  );
}
