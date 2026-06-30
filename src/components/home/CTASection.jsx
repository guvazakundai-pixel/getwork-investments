import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-light-gray to-white">
      <div className="hero-glow top-[-200px] left-1/2 -translate-x-1/2" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="glass inline-block px-4 py-1.5 rounded-full mb-4">
            <span className="text-xs font-semibold text-primary tracking-wide">GET STARTED</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-dark-navy tracking-tight mb-4">
            Ready to Fix Your Laptop?
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto font-light mb-10">
            Drop off your device at our shop, send us a message, or book a repair online. 
            We'll diagnose, repair, and have it back to you faster than you expect.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#contact"
              className="glass-btn text-white px-8 py-4 rounded-full font-semibold text-sm inline-flex items-center gap-2"
            >
              Book a Repair
              <ArrowRight size={16} />
            </a>
            <a
              href="https://wa.me/263781577166"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-btn-outline text-dark-navy px-8 py-4 rounded-full font-semibold text-sm inline-flex items-center gap-2"
            >
              <MessageCircle size={16} />
              WhatsApp Us
            </a>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-400 font-light">
            <span>📞 0781577166</span>
            <span>📍 Cyruss Mall, C16</span>
            <span>🕐 Mon–Fri 8AM–5PM</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
