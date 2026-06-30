import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { faqs } from "../../content/faq";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="relative py-24 overflow-hidden bg-light-gray">
      <div className="hero-glow top-[-100px] left-[-50px]" />
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="glass inline-block px-4 py-1.5 rounded-full mb-4">
            <span className="text-xs font-semibold text-primary tracking-wide">FAQ</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-dark-navy tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto font-light">
            Everything you need to know about our laptop repair services.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.03 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className={`w-full text-left glass-card rounded-2xl p-5 transition-all duration-300 ${
                  openIndex === i ? "shadow-lg" : ""
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="font-semibold text-dark-navy text-sm">{faq.q}</span>
                  <ChevronDown
                    size={18}
                    className={`text-primary shrink-0 transition-transform duration-300 ${
                      openIndex === i ? "rotate-180" : ""
                    }`}
                  />
                </div>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === i ? "max-h-96 mt-3 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-500 text-sm leading-relaxed font-light">{faq.a}</p>
                </div>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
