import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { images } from "../data/images.js";
import { heroSlides } from "../data/siteData.js";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return isMobile;
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return reduced;
}

function activeSlideIndex(progress) {
  const idx = heroSlides.findIndex((s) => progress >= s.range[0] && progress < s.range[1]);
  if (idx !== -1) return idx;
  return progress >= 1 ? heroSlides.length - 1 : 0;
}

export default function Hero() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const [duration, setDuration] = useState(0);
  const [ready, setReady] = useState(false);
  const [slideIdx, setSlideIdx] = useState(0);

  const isMobile = useIsMobile();
  const reducedMotion = usePrefersReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Load metadata & duration without autoplaying
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const onLoaded = () => {
      setDuration(video.duration || 0);
      setReady(true);
    };
    video.addEventListener("loadedmetadata", onLoaded);
    if (video.readyState >= 1) onLoaded();
    return () => video.removeEventListener("loadedmetadata", onLoaded);
  }, []);

  // Drive currentTime from scroll progress via rAF for smoothness,
  // rather than setting state on every scroll tick.
  const rafId = useRef(null);
  const targetProgress = useRef(0);
  // The value we actually write to the video — eased toward the target
  // each frame rather than snapping straight to it, so fast/jerky scroll
  // input gets smoothed into a fluid scrub instead of a jump-cut.
  const smoothedProgress = useRef(0);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    targetProgress.current = Math.min(Math.max(v, 0), 1);
    setSlideIdx(activeSlideIndex(targetProgress.current));
  });

  useEffect(() => {
    if (reducedMotion || !ready || !duration) return;

    // Higher = snappier/more literal to scroll, lower = smoother/more lag.
    // 0.12–0.18 reads as cinematic easing without feeling disconnected
    // from the scrollbar. Raise toward 0.3+ if it starts to feel laggy;
    // lower toward 0.08 for an even silkier, more "eased" scrub.
    const SMOOTHING = 0.14;

    const tick = () => {
      const video = videoRef.current;
      if (video) {
        smoothedProgress.current +=
          (targetProgress.current - smoothedProgress.current) * SMOOTHING;

        // Snap once the gap is imperceptible so it settles instead of
        // drifting forever in tiny fractions.
        if (Math.abs(targetProgress.current - smoothedProgress.current) < 0.0005) {
          smoothedProgress.current = targetProgress.current;
        }

        const t = smoothedProgress.current * duration;
        if (Math.abs(video.currentTime - t) > 0.005) {
          video.currentTime = t;
        }
      }
      rafId.current = requestAnimationFrame(tick);
    };
    rafId.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId.current);
  }, [ready, duration, reducedMotion]);

  const scrollHint = useTransform(scrollYProgress, [0, 0.06], [1, 0]);

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative bg-ink"
      style={{ height: reducedMotion ? "100svh" : "380vh" }}
    >
      <div className="sticky top-0 h-[100svh] w-full overflow-hidden bg-ink">
        {/* Poster - always present underneath; video sits above once ready */}
        <img
          src={images.hero.posterDesktop}
          alt="Fully assembled premium aluminium wardrobe in a dark studio setting"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {!reducedMotion && (
          <video
            ref={videoRef}
            muted
            playsInline
            preload="auto"
            poster={images.hero.posterDesktop}
            src={isMobile ? images.hero.videoMobile : images.hero.videoDesktop}
            className="absolute inset-0 h-full w-full object-cover"
            style={{ opacity: ready ? 1 : 0, transition: "opacity 0.6s ease" }}
          />
        )}

        {/* Vignette for text legibility, no decorative particles/glow per brief */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/50 via-transparent to-ink/20" />

        {/* Text overlay synced to scroll */}
        <div className="section-pad relative z-10 flex h-full flex-col justify-end pb-24 sm:pb-28 lg:justify-center lg:pb-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={slideIdx}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-xl"
            >
              <span className="eyebrow mb-5 block">Aluminium Center</span>
              <h1 className="text-[clamp(2.1rem,5.4vw,4.4rem)] leading-[1.05] text-cream">
                {heroSlides[slideIdx].headline}
              </h1>
              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-cream-60 sm:text-base">
                {heroSlides[slideIdx].body}
              </p>

              {heroSlides[slideIdx].cta && (
                <div className="mt-9 flex flex-wrap items-center gap-4">
                  <a href="#works" className="btn-primary">
                    Explore Our Works
                  </a>
                  <a href="#contact" className="btn-ghost">
                    Get a Quote
                  </a>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {!reducedMotion && (
          <motion.div
            style={{ opacity: scrollHint }}
            className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex"
          >
            <span className="text-[10px] uppercase tracking-widest2 text-cream-40">Scroll</span>
            <span className="h-8 w-px bg-cream/25" />
          </motion.div>
        )}
      </div>
    </section>
  );
}
