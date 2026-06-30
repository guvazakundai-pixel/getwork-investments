import {
  Smartphone,
  Keyboard,
  Battery,
  Plug,
  Thermometer,
  Bug,
  Gauge,
  MoreHorizontal,
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  { icon: Smartphone, title: "Screen Replacement" },
  { icon: Keyboard, title: "Keyboard Replacement" },
  { icon: Battery, title: "Battery Replacement" },
  { icon: Plug, title: "Charging Port Repair" },
  { icon: Thermometer, title: "Overheating Issues" },
  { icon: Bug, title: "Software Problems" },
  { icon: Gauge, title: "Slow Performance" },
  { icon: MoreHorizontal, title: "And More" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function Services() {
  return (
    <section id="services" className="py-20 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-dark-blue">
            Our Services
          </h2>
          <p className="mt-3 text-gray-600 max-w-xl mx-auto">
            From hardware fixes to software solutions — we handle it all.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {services.map((s) => (
            <motion.div
              key={s.title}
              variants={itemVariants}
              className="bg-white rounded-xl p-5 md:p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 text-center group cursor-default"
            >
              <div className="w-12 h-12 rounded-full bg-dark-blue/5 flex items-center justify-center mx-auto mb-3 group-hover:bg-royal-blue/10 transition-colors">
                <s.icon className="w-5 h-5 text-royal-blue" />
              </div>
              <p className="font-heading font-semibold text-sm md:text-base text-dark-blue">
                {s.title}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
