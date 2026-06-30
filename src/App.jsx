import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustBadge from "./components/TrustBadge";
import WhyChooseUs from "./components/WhyChooseUs";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Process from "./components/Process";
import Stats from "./components/Stats";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative">
          <Hero />
          <TrustBadge />
        </section>
        <WhyChooseUs />
        <Services />
        <Pricing />
        <Process />
        <Stats />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <ScrollToTop />
    </>
  );
}
