import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import ShopGallery from "./components/ShopGallery.jsx";
import Services from "./components/Services.jsx";
import Process from "./components/Process.jsx";
import Works from "./components/Works.jsx";
import FeaturedWork from "./components/FeaturedWork.jsx";
import InAssociation from "./components/InAssociation.jsx";
import WhyChooseUs from "./components/WhyChooseUs.jsx";
import Contact from "./components/Contact.jsx";
import Location from "./components/Location.jsx";
import FinalCTA from "./components/FinalCTA.jsx";
import Footer from "./components/Footer.jsx";
import WhatsAppButton from "./components/WhatsAppButton.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-ink">
      <Navbar />
      <main>
        <Hero />
        <About />
        <ShopGallery />
        <Services />
        <Process />
        <Works />
        {/* <FeaturedWork /> */}
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
