import { business } from "../data/siteData.js";

export default function WhatsAppButton() {
  const number = (import.meta.env.VITE_WHATSAPP_NUMBER || "").replace(/[^\d]/g, "");

const message = encodeURIComponent(
  "Hi, I'd like to ask about a custom aluminium project."
);

const href = number
  ? `https://wa.me/${number}?text=${message}`
  : "#contact";

  return (
    <a
      href={href}
      target={number ? "_blank" : undefined}
      rel={number ? "noopener noreferrer" : undefined}
      aria-label="Chat with Aluminium Center on WhatsApp"
      className="group fixed z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#1f1f1f] shadow-[0_8px_30px_rgba(0,0,0,0.5)] ring-1 ring-cream/10 transition-transform duration-500 ease-cinematic hover:scale-105"
      style={{
        right: "max(1.25rem, env(safe-area-inset-right))",
        bottom: "max(1.25rem, env(safe-area-inset-bottom))",
      }}
    >
      <svg
        viewBox="0 0 32 32"
        width="24"
        height="24"
        fill="#25D366"
        aria-hidden="true"
      >
        <path d="M16.02 3C9.4 3 4.02 8.38 4.02 15c0 2.2.58 4.27 1.6 6.06L4 29l8.14-1.58a11.9 11.9 0 0 0 3.88.64c6.62 0 12-5.38 12-12S22.64 3 16.02 3Zm0 21.8c-1.9 0-3.66-.56-5.14-1.52l-.37-.22-4.83.94.97-4.7-.24-.38A9.76 9.76 0 0 1 5.22 15c0-5.96 4.84-10.8 10.8-10.8S26.82 9.04 26.82 15 21.98 24.8 16.02 24.8Zm5.94-8.1c-.32-.16-1.9-.94-2.2-1.04-.3-.11-.51-.16-.73.16-.21.32-.84 1.04-1.03 1.25-.19.22-.38.24-.7.08-.32-.16-1.34-.5-2.56-1.6-.95-.85-1.58-1.9-1.77-2.22-.19-.32-.02-.5.14-.66.14-.14.32-.38.48-.56.16-.19.21-.32.32-.54.11-.22.05-.4-.03-.56-.08-.16-.73-1.77-1-2.42-.26-.63-.53-.55-.73-.56h-.62c-.22 0-.56.08-.85.4-.3.32-1.12 1.1-1.12 2.67 0 1.57 1.15 3.09 1.3 3.3.16.22 2.26 3.45 5.47 4.84.77.33 1.36.53 1.83.68.77.24 1.47.21 2.02.13.62-.09 1.9-.78 2.17-1.53.27-.75.27-1.4.19-1.53-.08-.13-.29-.21-.6-.37Z" />
      </svg>

      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-sm bg-[#1f1f1f] px-3 py-1.5 text-xs text-cream opacity-0 ring-1 ring-cream/10 transition-opacity duration-300 group-hover:opacity-100 lg:block">
        Chat with us
      </span>
    </a>
  );
}
