import { useId, useState } from "react";

export default function SmartImage({
  src,
  alt,
  label,
  className = "",
  imgClassName = "",
  loading,
  fetchPriority,
  decoding,
  sizes,
  srcSet,
  width,
  height,
}) {
  const config = typeof src === "string" ? { src } : src || {};

  const imageSrc = config.src;
  const imageAlt = alt || config.alt || "";
  const imageLoading = loading || config.loading || "lazy";
  const imagePriority =
    fetchPriority ||
    config.fetchPriority ||
    (imageLoading === "eager" ? "high" : "auto");
  const imageDecoding = decoding || config.decoding || "async";
  const imageSizes = sizes || config.sizes;
  const imageSrcSet = srcSet || config.srcSet;
  const imageWidth = width ?? config.width;
  const imageHeight = height ?? config.height;

  const [failedSource, setFailedSource] = useState(null);
  const failed = failedSource === imageSrc;

  const generatedId = useId();
  const gradientId = `smart-image-gradient-${generatedId.replace(/:/g, "")}`;

  if (!imageSrc || failed) {
    return (
      <div
        className={`relative overflow-hidden bg-panel ${className}`}
        role="img"
        aria-label={imageAlt || label || "Image unavailable"}
      >
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.35]"
          preserveAspectRatio="none"
          viewBox="0 0 400 300"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#1a1a1a" />
              <stop offset="100%" stopColor="#0a0a0a" />
            </linearGradient>
          </defs>

          <rect width="400" height="300" fill={`url(#${gradientId})`} />

          <path
            d="M0 300 L140 130 L200 190 L260 90 L400 260"
            stroke="#C9A876"
            strokeOpacity="0.25"
            strokeWidth="1"
            fill="none"
          />
        </svg>

        <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
          <span className="text-[10px] uppercase tracking-widest2 text-cream-40">
            {label || "Image unavailable"}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={`overflow-hidden bg-panel ${className}`}>
      <img
        src={imageSrc}
        srcSet={imageSrcSet}
        sizes={imageSizes}
        alt={imageAlt}
        loading={imageLoading}
        fetchpriority={imagePriority}
        decoding={imageDecoding}
        width={imageWidth}
        height={imageHeight}
        onError={() => setFailedSource(imageSrc)}
        className={`h-full w-full object-cover ${imgClassName}`}
      />
    </div>
  );
}
