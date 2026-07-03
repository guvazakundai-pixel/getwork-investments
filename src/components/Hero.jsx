import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Wrench, ShieldCheck, Timer, DollarSign, Clock } from "lucide-react";

const badges = [
  { icon: Wrench, label: "Expert Technicians" },
  { icon: ShieldCheck, label: "Quality Parts" },
  { icon: DollarSign, label: "Affordable Prices" },
  { icon: Timer, label: "Fast Turnaround" },
  { icon: Clock, label: "Same-Day Service" },
];

export default function Hero() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const move = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX - 60}px, ${e.clientY - 60}px)`;
      }
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-transparent"
    >
      {/* Ambient cursor glow */}
      <div
        ref={cursorRef}
        className="hidden md:block fixed top-0 left-0 w-32 h-32 rounded-full bg-primary/5 blur-[60px] pointer-events-none z-0 transition-all duration-700 ease-out"
      />

      {/* Background ambient glow */}
      <div className="hero-glow top-[-200px] right-[-200px]" />
      <div className="hero-glow bottom-[-300px] left-[-200px]" />

      {/* Glass decoration elements */}
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-gradient-to-br from-primary/5 to-transparent blur-3xl animate-float-slow" />
      <div className="absolute bottom-40 right-20 w-48 h-48 rounded-full bg-gradient-to-br from-royal/5 to-transparent blur-3xl animate-float-slow" style={{ animationDelay: "-3s" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="glass inline-block px-4 py-1.5 rounded-full mb-6">
              <span className="text-xs font-semibold text-white tracking-wide">
                #1 Premium Laptop Repair in Zimbabwe
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-none tracking-tight text-white">
              <span className="text-white">WE FIX</span>
              <br />
              <span className="text-gradient-blue text-[1.1em]">LAPTOPS</span>
            </h1>

            <p className="mt-4 text-white/90 text-base sm:text-lg max-w-lg leading-relaxed font-light">
              Professional Laptop & Desktop Repairs
            </p>

            <div className="flex flex-wrap gap-2 mt-1 mb-6 text-sm text-white/80">
              <span className="text-white font-medium">Fast Turnaround</span>
              <span className="text-white/50">•</span>
              <span className="text-white font-medium">Genuine Parts</span>
              <span className="text-white/50">•</span>
              <span className="text-white font-medium">Affordable Prices</span>
              <span className="text-white/50">•</span>
              <span className="text-white font-medium">Same-Day Service</span>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="#contact"
                className="glass-btn text-white px-8 py-3.5 rounded-full font-semibold text-sm"
              >
                Book a Repair
              </a>
              <a
                href="https://wa.me/263781577166"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-btn-outline text-white px-8 py-3.5 rounded-full font-semibold text-sm flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                </svg>
                WhatsApp Us
              </a>
            </div>

            {/* Trust badges row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 mt-10"
            >
              {badges.map((b) => (
                <div
                  key={b.label}
                  className="glass-card flex items-center gap-2 px-3.5 py-2 rounded-full"
                >
                  <b.icon size={14} className="text-white" />
                  <span className="text-xs font-medium text-white whitespace-nowrap">{b.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - hero visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="relative flex items-center justify-center"
          >
            {/* Glow behind */}
            <div className="absolute w-[450px] h-[450px] rounded-full bg-gradient-to-br from-primary/10 via-primary/5 to-transparent blur-[100px]" />
            <div className="absolute w-[300px] h-[300px] rounded-full bg-gradient-to-tr from-royal/10 to-primary/5 blur-[80px] top-20" />

            {/* Technician photo */}
            <div className="relative z-10">
              <div className="glass-card rounded-3xl p-3 md:p-4 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=500&q=80"
                  alt="Expert laptop technician in Zimbabwe"
                  className="w-full max-w-[400px] h-auto rounded-2xl object-cover"
                />
              </div>
            </div>

            {/* Floating badge */}
            <div className="hidden lg:flex absolute -top-4 -right-4 items-center gap-2 glass px-4 py-2 rounded-full animate-float" style={{ animationDelay: "-1s" }}>
              <Wrench size={14} className="text-primary" />
              <span className="text-xs font-semibold text-dark-navy whitespace-nowrap">Expert Repairs</span>
            </div>
            <div className="hidden lg:flex absolute bottom-8 -left-6 items-center gap-2 glass px-4 py-2 rounded-full animate-float" style={{ animationDelay: "-3s" }}>
              <ShieldCheck size={14} className="text-primary" />
              <span className="text-xs font-semibold text-dark-navy whitespace-nowrap">Genuine Parts</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
