import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo.jsx";
import { navLinks } from "../data/siteData.js";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b ${
          scrolled
            ? "border-hairline bg-ink/95 backdrop-blur-md"
            : "border-transparent bg-ink/30"
        }`}
      >
        <nav className="section-pad flex h-[76px] items-center justify-between">
          <a
            href="#top"
            className="text-cream"
            aria-label="Aluminium Center home"
          >
            <Logo />
          </a>

          <ul className="hidden items-center gap-6 xl:gap-10 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[13px] uppercase tracking-[0.1em] text-cream-60 hover:text-champagne"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="btn-ghost hidden !px-5 !py-2.5 text-[11px] lg:inline-flex"
          >
            Get a Quote
          </a>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((value) => !value)}
            className="flex h-11 w-11 items-center justify-center text-cream lg:hidden"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      {open && (
        <div
          id="mobile-navigation"
          className="fixed inset-0 z-40 flex flex-col bg-ink pt-[76px] lg:hidden"
        >
          <nav className="section-pad flex flex-1 flex-col justify-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="block py-3 font-serif text-3xl text-cream hover:text-champagne sm:text-4xl"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={closeMenu}
              className="btn-primary mt-6 self-start"
            >
              Get a Quote
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
