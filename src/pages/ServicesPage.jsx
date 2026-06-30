import { motion } from "framer-motion";
import { services } from "../content/services";
import { Clock, CheckCircle, AlertTriangle, Wrench } from "lucide-react";

export default function ServicesPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-b from-light-gray via-white to-light-gray">
        <div className="hero-glow top-[-200px] right-[-100px]" />
        <div className="hero-glow bottom-[-200px] left-[-100px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <div className="glass inline-block px-4 py-1.5 rounded-full mb-4">
              <span className="text-xs font-semibold text-primary tracking-wide">SERVICES</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-dark-navy tracking-tight mb-6">
              Professional <span className="text-gradient-blue">Laptop Repair</span> Services
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed font-light">
              From screen replacements to motherboard repairs, we handle every laptop issue 
              with precision, care, and professional-grade equipment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                id={service.id}
                className="glass-card-blue rounded-3xl p-8 md:p-10 scroll-mt-24"
              >
                <div className="flex items-start gap-5">
                  <div className="text-4xl shrink-0">{service.icon}</div>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-2xl md:text-3xl font-bold text-dark-navy mb-3">{service.title}</h2>
                    <p className="text-gray-500 leading-relaxed font-light mb-6">{service.long}</p>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="flex items-center gap-2 font-semibold text-dark-navy text-sm mb-3">
                          <AlertTriangle size={16} className="text-accent" />
                          Common Symptoms
                        </h4>
                        <ul className="space-y-1.5">
                          {service.symptoms.map((s) => (
                            <li key={s} className="flex items-start gap-2 text-sm text-gray-500 font-light">
                              <span className="text-primary mt-0.5">•</span>
                              {s}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <div className="glass rounded-2xl p-5 mb-4">
                          <h4 className="flex items-center gap-2 font-semibold text-dark-navy text-sm mb-2">
                            <Clock size={16} className="text-primary" />
                            Typical Repair Time
                          </h4>
                          <p className="text-gray-500 text-sm font-light">{service.time}</p>
                        </div>
                        <div className="glass rounded-2xl p-5">
                          <h4 className="flex items-center gap-2 font-semibold text-dark-navy text-sm mb-2">
                            <CheckCircle size={16} className="text-green-500" />
                            Why Fix It Early
                          </h4>
                          <p className="text-gray-500 text-sm font-light">{service.benefit}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
