import { Laptop, Monitor, Cpu, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

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
  },
  {
    gen: "11th Gen to Ultra",
    price: "$65",
    icon: Laptop,
    badge: null,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-dark-blue">
            Generation-Based Pricing
          </h2>
          <p className="mt-3 text-gray-600 max-w-xl mx-auto">
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
              className={`relative rounded-2xl p-8 text-center transition-all duration-300 ${
                plan.badge
                  ? "bg-white border-2 border-royal-blue shadow-xl scale-105 md:scale-105"
                  : "bg-white border border-gray-200 shadow-md hover:shadow-xl hover:-translate-y-1"
              }`}
            >
              {plan.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-royal-blue text-white text-xs font-bold px-4 py-1 rounded-full">
                  {plan.badge}
                </span>
              )}
              <div className="w-14 h-14 rounded-full bg-dark-blue/5 flex items-center justify-center mx-auto mb-4">
                <plan.icon className="w-7 h-7 text-royal-blue" />
              </div>
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                {plan.gen}
              </p>
              <p className="text-4xl md:text-5xl font-heading font-extrabold text-dark-blue mb-2">
                {plan.price}
              </p>
              <p className="text-xs text-gray-400 mb-6">
                Affordable. Reliable. Getwork.
              </p>
              <a
                href="#contact"
                className={`inline-block px-8 py-3 rounded-full text-sm font-semibold transition-colors ${
                  plan.badge
                    ? "bg-royal-blue text-white hover:bg-dark-blue"
                    : "bg-dark-blue text-white hover:bg-royal-blue"
                }`}
              >
                Book Now
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
