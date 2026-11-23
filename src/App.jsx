import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import ShopGallery from "./components/ShopGallery.jsx";
import Services from "./components/Services.jsx";
import Process from "./components/Process.jsx";
import Works from "./components/Works.jsx";
import InAssociation from "./components/InAssociation.jsx";
import WhyChooseUs from "./components/WhyChooseUs.jsx";
import Contact from "./components/Contact.jsx";
import Location from "./components/Location.jsx";
import FinalCTA from "./components/FinalCTA.jsx";
import Footer from "./components/Footer.jsx";
import WhatsAppButton from "./components/WhatsAppButton.jsx";
import Snowfall from "react-snowfall";
import { useEffect, useState } from "react";

function SnowballIntro() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="snowball-intro">
      {Array.from({ length: 20 }).map((_, i) => {
        const isLeft = i % 2 === 0;

        return (
          <span
            key={i}
            className={`intro-snowball ${isLeft ? "left-snow" : "right-snow"}`}
            style={{
              width: `${10 + (i % 4) * 6}px`,
              height: `${10 + (i % 4) * 6}px`,
              animationDelay: `${(i % 7) * 0.18}s`,
              animationDuration: `${1.8 + (i % 4) * 0.3}s`,
            }}
          />
        );
      })}
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-ink">
      <SnowballIntro />

      <Snowfall
        snowflakeCount={35}
        color="#A8BCE8"
        radius={[0.5, 2]}
        speed={[0.5, 1.5]}
        wind={[-0.3, 1]}
        opacity={[0.15, 0.45]}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      <Navbar />

      <main>
        <Hero />
        <About />
        <ShopGallery />
        <Services />
        <Process />
        <Works />
        <InAssociation />
        <WhyChooseUs />
        <Contact />
        <Location />
        <FinalCTA />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
