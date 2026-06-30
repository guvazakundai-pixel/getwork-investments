import { motion } from "framer-motion";

const steps = [
  { num: 1, title: "Bring Your Laptop", desc: "Drop it off at our shop or contact us for pickup." },
  { num: 2, title: "We Diagnose", desc: "Thorough diagnosis to identify the issue." },
  { num: 3, title: "Professional Repair", desc: "Expert repair using quality parts." },
  { num: 4, title: "Collect & Enjoy", desc: "Pick up your fully repaired laptop." },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const stepVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Process() {
  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-dark-blue">
            How It Works
          </h2>
          <p className="mt-3 text-gray-600 max-w-xl mx-auto">
            Four simple steps to get your laptop working again.
          </p>
        </motion.div>

        {/* Desktop: horizontal row */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="hidden md:flex items-start justify-between gap-4 relative"
        >
          {/* Connecting line */}
          <div className="absolute top-8 left-[10%] right-[10%] h-0.5 bg-royal-blue/20" />

          {steps.map((step) => (
            <motion.div
              key={step.num}
              variants={stepVariants}
              className="flex flex-col items-center text-center relative z-10 flex-1"
            >
              <div className="w-16 h-16 rounded-full bg-royal-blue text-white flex items-center justify-center font-heading font-bold text-xl mb-4 relative z-10">
                {step.num}
              </div>
              <h3 className="font-heading font-bold text-dark-blue text-lg mb-1">
                {step.title}
              </h3>
              <p className="text-gray-500 text-sm max-w-[180px]">{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile: vertical stack with connecting line */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="md:hidden relative pl-10"
        >
          {/* Vertical line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-0.5 bg-royal-blue/20" />

          {steps.map((step) => (
            <motion.div
              key={step.num}
              variants={stepVariants}
              className="relative pb-10 last:pb-0"
            >
              <div className="absolute -left-10 top-0 w-9 h-9 rounded-full bg-royal-blue text-white flex items-center justify-center font-heading font-bold text-sm z-10">
                {step.num}
              </div>
              <div>
                <h3 className="font-heading font-bold text-dark-blue">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
