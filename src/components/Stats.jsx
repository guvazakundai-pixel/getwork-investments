import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const stats = [
  { value: 500, suffix: "+", label: "Repairs Completed" },
  { value: 98, suffix: "%", label: "Customer Satisfaction" },
  { value: 1, suffix: "", label: "Same Day Repairs", prefix: "✔" },
  { value: 1, suffix: "", label: "Transparent Pricing", prefix: "✔" },
];

function AnimatedCounter({ target, suffix, prefix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const start = performance.now();
          function animate(now) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          }
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-black text-white">
      {prefix || ""}{count}{suffix}
    </span>
  );
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Stats() {
  return (
    <section className="relative py-20 overflow-hidden bg-dark-navy">
      <div className="absolute top-0 left-1/3 w-80 h-80 rounded-full bg-primary/5 blur-[100px]" />
      <div className="absolute bottom-0 right-1/3 w-80 h-80 rounded-full bg-primary/5 blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={itemVariants}>
              <AnimatedCounter target={stat.value} suffix={stat.suffix} prefix={stat.prefix || ""} />
              <p className="mt-2 text-primary font-semibold text-sm md:text-base">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
