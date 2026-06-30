import { motion } from "framer-motion";

const steps = [
  { num: 1, title: "Bring Your Laptop", desc: "Drop it off at our shop or contact us for pickup." },
  { num: 2, title: "We Diagnose", desc: "Thorough diagnosis to identify the issue." },
  { num: 3, title: "Professional Repair", desc: "Expert repair using quality parts." },
  { num: 4, title: "Collect & Enjoy", desc: "Pick up your fully repaired laptop." },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const stepVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Process() {
  return (
    <section className="relative py-24 overflow-hidden bg-light-gray">
      <div className="hero-glow top-[-150px] right-[-100px]" />
      <div className="hero-glow bottom-[-150px] left-[-100px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="glass inline-block px-4 py-1.5 rounded-full mb-4">
            <span className="text-xs font-semibold text-primary tracking-wide">PROCESS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-dark-navy tracking-tight">
            How It Works
          </h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto font-light">
            Four simple steps to get your laptop working again.
          </p>
        </motion.div>

        {/* Desktop */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="hidden md:flex items-start justify-between gap-4 relative"
        >
          <div className="absolute top-8 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-primary/10 via-primary/30 to-primary/10" />
          {steps.map((step) => (
            <motion.div
              key={step.num}
              variants={stepVariants}
              className="flex flex-col items-center text-center relative z-10 flex-1"
            >
              <div className="glass w-16 h-16 rounded-2xl flex items-center justify-center font-bold text-xl text-primary mb-4 relative z-10 shadow-lg">
                {step.num}
              </div>
              <h3 className="font-bold text-dark-navy text-lg mb-1">{step.title}</h3>
              <p className="text-gray-500 text-sm max-w-[180px] font-light">{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="md:hidden relative pl-12"
        >
          <div className="absolute left-[23px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/30 to-primary/10" />
          {steps.map((step) => (
            <motion.div
              key={step.num}
              variants={stepVariants}
              className="relative pb-10 last:pb-0"
            >
              <div className="glass absolute -left-12 top-0 w-11 h-11 rounded-xl flex items-center justify-center font-bold text-sm text-primary z-10 shadow-lg">
                {step.num}
              </div>
              <div>
                <h3 className="font-bold text-dark-navy">{step.title}</h3>
                <p className="text-gray-500 text-sm font-light">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
