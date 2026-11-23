import Logo from "./Logo.jsx";
import { business, navLinks } from "../data/siteData.js";

const socialEntries = Object.entries(business.social).filter(
  ([, url]) => url && url.trim() !== "",
);

export default function Footer() {
  return (
    <footer className="section-pad border-t border-hairline py-12 sm:py-16">
      <div className="mx-auto flex min-w-0 max-w-7xl flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
        <div className="w-full max-w-sm min-w-0">
          <Logo />

          <p className="mt-4 text-sm leading-relaxed text-cream-60">
            {business.tagline}
          </p>
        </div>

        <div className="grid min-w-0 grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 sm:gap-x-10">
          <div className="min-w-0">
            <p className="eyebrow mb-4">Explore</p>

            <ul className="flex flex-col gap-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-cream-60 hover:text-champagne"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-0">
            <p className="eyebrow mb-4">Contact</p>

            <ul className="flex flex-col gap-3 break-words text-sm text-cream-60">
              <li>{business.phone}</li>
              <li className="break-all">{business.email}</li>
              <li>{business.address}</li>
            </ul>
          </div>

          {socialEntries.length > 0 && (
            <div className="min-w-0">
              <p className="eyebrow mb-4">Follow</p>

              <ul className="flex flex-col gap-3">
                {socialEntries.map(([key, url]) => (
                  <li key={key}>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm capitalize text-cream-60 hover:text-champagne"
                    >
                      {key}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-hairline pt-8 text-xs text-cream-40 sm:mt-14">
        © {business.name}. All rights reserved.
      </div>
    </footer>
  );
}
