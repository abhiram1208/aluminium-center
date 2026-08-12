import { motion } from "framer-motion";

export default function SectionHeading({
  eyebrow,
  title,
  body,
  align = "left",
  size = "lg",
}) {
  const alignClass = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";
  const sizeClass =
    size === "xl"
      ? "text-[clamp(2.2rem,5vw,4.2rem)]"
      : "text-[clamp(1.9rem,3.6vw,3rem)]";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className={`flex flex-col gap-5 max-w-2xl ${alignClass}`}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className={`${sizeClass} leading-[1.08] text-cream`}>{title}</h2>
      {body && <p className="text-cream-60 text-[15px] sm:text-base leading-relaxed max-w-xl">{body}</p>}
    </motion.div>
  );
}
