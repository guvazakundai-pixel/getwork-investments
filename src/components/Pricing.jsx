import { motion } from "framer-motion";
import { Monitor, Cpu, Laptop, Star, Zap } from "lucide-react";

const plans = [
  {
    gen: "1st – 6th Gen",
    price: "$30",
    icon: Monitor,
    badge: null,
  },
  {
    gen: "7th – 10th Gen",
    price: "$45",
    icon: Cpu,
    badge: "Most Popular",
    accent: "text-accent",
  },
  {
    gen: "11th Gen – Ultra",
    price: "$65",
    icon: Laptop,
    badge: null,
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 overflow-hidden bg-gradient-to-b from-light-gray via-white to-light-gray">
      <div className="hero-glow top-[-100px] right-[-50px]" />
      <div className="hero-glow bottom-[-100px] left-[-50px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="glass inline-block px-4 py-1.5 rounded-full mb-4">
            <span className="text-xs font-semibold text-primary tracking-wide">PRICING</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-dark-navy tracking-tight">
            Generation-Based Pricing
          </h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto font-light">
            Fair, transparent pricing based on your laptop's generation.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto items-start"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.gen}
              variants={cardVariants}
              className={`relative rounded-3xl p-8 text-center transition-all duration-500 ${
                plan.badge
                  ? "glass-card-blue border-2 border-primary/30 shadow-xl shadow-primary/10 scale-105 md:scale-105 animate-float-card"
                  : "glass-card"
              }`}
            >
              {plan.badge && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-accent text-dark-navy text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1 shadow-lg">
                  <Star size={12} className="fill-dark-navy" />
                  {plan.badge}
                </span>
              )}

              <div className="text-4xl mb-4">
                <plan.icon className="w-10 h-10 text-primary mx-auto" />
              </div>

              <p className="text-xs font-semibold text-gray-400 uppercase tracking-[0.15em] mb-3">
                {plan.gen}
              </p>

              <p className={`text-5xl md:text-6xl font-black tracking-tight mb-1 ${
                plan.badge ? "text-gradient" : "text-dark-navy"
              }`}>
                {plan.price}
              </p>

              <p className="text-xs text-gray-400 mb-6 font-light">
                Affordable. Reliable. Getwork.
              </p>

              <a
                href="#contact"
                className={`inline-block px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                  plan.badge
                    ? "glass-btn text-white shadow-lg shadow-primary/20"
                    : "glass-btn-outline text-dark-navy"
                }`}
              >
                Book Now
              </a>

              {plan.badge && (
                <div className="mt-4 flex items-center justify-center gap-1 text-accent text-xs">
                  <Zap size={12} />
                  <span>Best Value</span>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
