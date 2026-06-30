import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-white pt-20"
    >
      {/* Circuit pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230A2D7A' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="inline-block bg-royal-blue/10 text-royal-blue text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
              #1 Laptop Repair in Zimbabwe
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold text-dark-blue leading-tight">
              WE FIX
              <br />
              <span className="text-royal-blue">LAPTOPS</span>
            </h1>
            <p className="mt-4 text-gray-600 text-lg max-w-md leading-relaxed">
              Professional laptop repair services with genuine parts, expert
              technicians, and fair pricing. We Get It Working Again.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-block bg-royal-blue text-white px-8 py-3.5 rounded-full font-semibold text-sm hover:bg-dark-blue transition-colors shadow-lg shadow-royal-blue/20"
              >
                Book a Repair
              </a>
              <a
                href="tel:0781577166"
                className="inline-block border-2 border-dark-blue text-dark-blue px-8 py-3.5 rounded-full font-semibold text-sm hover:bg-dark-blue hover:text-white transition-colors"
              >
                Call Us
              </a>
            </div>
          </motion.div>

          {/* Right column - laptop image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="relative flex items-center justify-center"
          >
            {/* Radial glow behind laptop */}
            <div className="absolute w-[400px] h-[400px] rounded-full bg-royal-blue/10 blur-[80px]" />

            <div className="animate-float relative z-10">
              <img
                src="/laptop-hero.svg"
                alt="Getwork Investments laptop repair illustration"
                className="w-full max-w-[420px] h-auto drop-shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
