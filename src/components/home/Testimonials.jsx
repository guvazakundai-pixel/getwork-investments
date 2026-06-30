import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import { testimonials } from "../../content/testimonials";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function Testimonials() {
  return (
    <section className="relative py-24 overflow-hidden bg-white">
      <div className="hero-glow top-[-100px] right-[-50px]" />
      <div className="hero-glow bottom-[-100px] left-[-50px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="glass inline-block px-4 py-1.5 rounded-full mb-4">
            <span className="text-xs font-semibold text-primary tracking-wide">TESTIMONIALS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-dark-navy tracking-tight">
            What Our Customers Say
          </h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto font-light">
            Real reviews from real customers across Harare.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="glass-card rounded-3xl p-6"
            >
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={14} className="fill-accent text-accent" />
                ))}
              </div>
              <div className="relative mb-4">
                <Quote size={20} className="text-primary/20 absolute -top-1 -left-1" />
                <p className="text-gray-600 text-sm leading-relaxed pl-5 font-light italic">
                  "{t.text}"
                </p>
              </div>
              <div className="border-t border-gray-100 pt-3 mt-3">
                <p className="font-semibold text-dark-navy text-sm">{t.name}</p>
                <p className="text-gray-400 text-xs">{t.location}</p>
                <p className="text-primary text-xs mt-1 font-medium">{t.repair}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
