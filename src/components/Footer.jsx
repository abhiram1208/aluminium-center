import Logo from "./Logo.jsx";
import { business, navLinks } from "../data/siteData.js";

const socialEntries = Object.entries(business.social).filter(([, url]) => url && url.trim() !== "");

export default function Footer() {
  return (
    <footer className="section-pad border-t border-hairline py-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-sm">
          <Logo />
          <p className="mt-4 text-sm leading-relaxed text-cream-60">{business.tagline}</p>
        </div>

        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
          <div>
            <p className="eyebrow mb-4">Explore</p>
            <ul className="flex flex-col gap-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-cream-60 transition-colors hover:text-champagne">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-4">Contact</p>
            <ul className="flex flex-col gap-3 text-sm text-cream-60">
              <li>{business.phone}</li>
              <li>{business.email}</li>
              <li>{business.address}</li>
            </ul>
          </div>

          {socialEntries.length > 0 && (
            <div>
              <p className="eyebrow mb-4">Follow</p>
              <ul className="flex flex-col gap-3">
                {socialEntries.map(([key, url]) => (
                  <li key={key}>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm capitalize text-cream-60 transition-colors hover:text-champagne"
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

      <div className="mx-auto mt-14 max-w-7xl border-t border-hairline pt-8 text-xs text-cream-40">
        © {business.name}. All rights reserved.
      </div>
    </footer>
  );
}
