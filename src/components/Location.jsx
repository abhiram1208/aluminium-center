import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, ArrowUpRight } from "lucide-react";
import { business } from "../data/siteData.js";

export default function Location() {
  const hasMap = business.googleMapsEmbedUrl && !business.googleMapsEmbedUrl.startsWith("[");

  return (
    <section className="bg-surface py-28 lg:py-36">
      <div className="section-pad mx-auto max-w-7xl">
        <span className="eyebrow">Location</span>
        <h2 className="mt-5 max-w-xl text-[clamp(2rem,3.6vw,3.2rem)] leading-[1.1] text-cream">
          Find Aluminium Center.
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="order-2 flex flex-col gap-7 lg:order-1 lg:col-span-4"
          >
            <div className="flex gap-4">
              <MapPin size={18} className="mt-1 shrink-0 text-champagne" />
              <div>
                <p className="text-xs uppercase tracking-[0.1em] text-cream-40">Address</p>
                <p className="mt-1 text-sm leading-relaxed text-cream-60">{business.address}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Phone size={18} className="mt-1 shrink-0 text-champagne" />
              <div>
                <p className="text-xs uppercase tracking-[0.1em] text-cream-40">Phone</p>
                <p className="mt-1 text-sm leading-relaxed text-cream-60">{business.phone}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Mail size={18} className="mt-1 shrink-0 text-champagne" />
              <div>
                <p className="text-xs uppercase tracking-[0.1em] text-cream-40">Email</p>
                <p className="mt-1 text-sm leading-relaxed text-cream-60">{business.email}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Clock size={18} className="mt-1 shrink-0 text-champagne" />
              <div>
                <p className="text-xs uppercase tracking-[0.1em] text-cream-40">Hours</p>
                {business.hours.map((h) => (
                  <p key={h.day} className="mt-1 text-sm leading-relaxed text-cream-60">
                    {h.day}: {h.time}
                  </p>
                ))}
              </div>
            </div>

            <a
              href={business.googleMapsDirectionsUrl.startsWith("[") ? "#" : business.googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost mt-2 self-start"
            >
              Get Directions <ArrowUpRight size={15} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="order-1 aspect-[4/3] w-full overflow-hidden bg-panel sm:aspect-[16/9] lg:order-2 lg:col-span-8"
          >
            {hasMap ? (
              <iframe
                title="Aluminium Center location"
                src={business.googleMapsEmbedUrl}
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center gap-2 px-6 text-center">
                <MapPin size={22} className="text-cream-40" />
                <span className="text-[11px] uppercase tracking-widest2 text-cream-40">
                  Map pending — add GOOGLE_MAPS_EMBED_URL in siteData.js
                </span>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
