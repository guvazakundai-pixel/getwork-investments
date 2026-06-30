import { motion } from "framer-motion";
import { Wrench, ShieldCheck, Gauge, DollarSign, ArrowRight } from "lucide-react";

const reasons = [
  {
    icon: Wrench,
    title: "Expert Technicians",
    desc: "Skilled. Experienced. Trusted.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Parts",
    desc: "We use reliable high-quality parts.",
  },
  {
    icon: Gauge,
    title: "Fast Turnaround",
    desc: "Get back to what matters faster.",
  },
  {
    icon: DollarSign,
    title: "Affordable Prices",
    desc: "Top-notch service that won't break the bank.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function WhyChooseUs() {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-light-gray via-white to-light-gray">
      <div className="hero-glow top-[-200px] right-[-100px]" />
      <div className="hero-glow bottom-[-200px] left-[-100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="glass inline-block px-4 py-1.5 rounded-full mb-4">
            <span className="text-xs font-semibold text-primary tracking-wide">WHY GETWORK</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-dark-navy tracking-tight">
            Why Choose Us
          </h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto font-light">
            We take laptop repair seriously. Here's why customers trust us.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {reasons.map((item) => (
            <motion.div
              key={item.title}
              variants={cardVariants}
              className="glass-card-blue rounded-3xl p-8 text-center group"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold text-lg text-dark-navy mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm font-light">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
