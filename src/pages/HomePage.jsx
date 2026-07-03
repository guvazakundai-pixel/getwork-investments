import { motion } from "framer-motion";
import Hero from "../components/Hero";
import WhyChooseUs from "../components/WhyChooseUs";
import Services from "../components/Services";
import Pricing from "../components/Pricing";
import Process from "../components/Process";
import Stats from "../components/Stats";
import Testimonials from "../components/home/Testimonials";
import BrandsWeRepair from "../components/home/BrandsWeRepair";
import FAQ from "../components/home/FAQ";
import CTASection from "../components/home/CTASection";

export default function HomePage() {
  return (
    <main className="relative">
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: "url(/home-bg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />
      <div className="absolute inset-0 z-[1] bg-dark-navy/90" />
      <div className="relative z-10">
        <Hero />
        <WhyChooseUs />
        <Services />
        <Pricing />
        <Process />
        <Stats />
        <Testimonials />
        <BrandsWeRepair />
        <FAQ />
        <CTASection />
      </div>
    </main>
  );
}
