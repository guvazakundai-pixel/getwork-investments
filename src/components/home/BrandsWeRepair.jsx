import { motion } from "framer-motion";
import { brands } from "../../content/brands";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
};

export default function BrandsWeRepair() {
  return (
    <section className="relative py-24 overflow-hidden bg-dark-navy">
      <div className="absolute top-0 left-1/3 w-96 h-96 rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute bottom-0 right-1/3 w-96 h-96 rounded-full bg-royal/5 blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="glass inline-block px-4 py-1.5 rounded-full mb-4">
            <span className="text-xs font-semibold text-white/80 tracking-wide">BRANDS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            Brands We Repair
          </h2>
          <p className="mt-3 text-white/50 max-w-xl mx-auto font-light">
            From Apple to Framework — we service virtually every laptop brand.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {brands.map((brand) => (
            <motion.div
              key={brand.name}
              variants={itemVariants}
              className="glass-dark rounded-2xl p-5 hover:bg-white/10 transition-all duration-300 group cursor-default"
            >
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white font-bold text-sm mb-3 group-hover:bg-primary/20 transition-colors">
                {brand.logo}
              </div>
              <h3 className="font-bold text-white text-sm mb-1">{brand.name}</h3>
              <p className="text-white/40 text-xs font-light leading-relaxed mb-3">{brand.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {brand.repairs.slice(0, 3).map((r) => (
                  <span key={r} className="text-[10px] bg-white/5 text-white/50 px-2 py-0.5 rounded-full">
                    {r}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
