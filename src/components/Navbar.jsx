import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
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

  const handleLinkClick = () => setOpen(false);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-cinematic ${
          scrolled ? "bg-ink/85 backdrop-blur-md border-b border-hairline" : "bg-transparent border-b border-transparent"
        }`}
      >
        <nav className="section-pad flex h-[76px] items-center justify-between">
          <a href="#top" className="text-cream" aria-label="Aluminium Center home">
            <Logo />
          </a>

          <ul className="hidden items-center gap-10 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[13px] uppercase tracking-[0.1em] text-cream-60 transition-colors duration-300 hover:text-champagne"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a href="#contact" className="hidden lg:inline-flex btn-ghost !py-2.5 !px-5 text-[11px]">
            Get a Quote
          </a>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center text-cream lg:hidden"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 flex flex-col bg-ink lg:hidden"
          >
            <div className="h-[76px] section-pad flex items-center justify-end shrink-0" />
            <motion.ul
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } } }}
              className="flex flex-1 flex-col justify-center gap-2 section-pad"
            >
              {navLinks.map((link) => (
                <motion.li
                  key={link.href}
                  variants={{
                    hidden: { opacity: 0, y: 16 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
                  }}
                >
                  <a
                    href={link.href}
                    onClick={handleLinkClick}
                    className="block py-4 font-serif text-4xl text-cream transition-colors duration-300 hover:text-champagne"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <motion.li
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
                }}
                className="pt-6"
              >
                <a href="#contact" onClick={handleLinkClick} className="btn-primary">
                  Get a Quote
                </a>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
