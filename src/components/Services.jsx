import { motion } from "framer-motion";

const services = [
  { name: "Computer Repairs", icon: "🖥️" },
  { name: "Laptop Repairs", icon: "💻" },
  { name: "Desktop Repairs", icon: "🖥️" },
  { name: "Software Installation", icon: "📦" },
  { name: "Windows Installation", icon: "🪟" },
  { name: "Data Recovery", icon: "💾" },
  { name: "Virus Removal", icon: "🛡️" },
  { name: "Accessories", icon: "🎧" },
  { name: "Screen Replacement", icon: "📺" },
  { name: "Keyboard Replacement", icon: "⌨️" },
  { name: "Battery Replacement", icon: "🔋" },
  { name: "Charging Port Repair", icon: "🔌" },
  { name: "Performance Upgrades", icon: "⚡" },
  { name: "Motherboard Repair", icon: "🔧" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function Services() {
  return (
    <section id="services" className="relative py-24 overflow-hidden bg-dark-navy">
      {/* Ambient blues */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-royal/5 blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="glass inline-block px-4 py-1.5 rounded-full mb-4">
            <span className="text-xs font-semibold text-white/80 tracking-wide">WHAT WE DO</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            Our Services
          </h2>
          <p className="mt-3 text-white/50 max-w-xl mx-auto font-light">
            From hardware fixes to software solutions — we handle it all.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4"
        >
          {services.map((s) => (
            <motion.div
              key={s.name}
              variants={itemVariants}
              className="glass-dark rounded-2xl p-5 text-center group cursor-default hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">{s.icon}</div>
              <p className="font-medium text-sm text-white/80 group-hover:text-white transition-colors">
                {s.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
