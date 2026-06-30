import { Wrench, ShieldCheck, Gauge, DollarSign } from "lucide-react";
import { motion } from "framer-motion";

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
  visible: {
    transition: { staggerChildren: 0.15 },
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

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-dark-blue">
            Why Choose Us
          </h2>
          <p className="mt-3 text-gray-600 max-w-xl mx-auto">
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
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center"
            >
              <div className="w-14 h-14 rounded-full bg-royal-blue/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-7 h-7 text-royal-blue" />
              </div>
              <h3 className="font-heading font-bold text-lg text-dark-blue mb-1">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
