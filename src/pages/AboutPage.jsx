import { motion } from "framer-motion";
import { Award, Shield, Heart, Zap, Users, Star } from "lucide-react";

const values = [
  { icon: Award, title: "Quality Work", desc: "Every repair meets our exacting standards. We don't cut corners." },
  { icon: Shield, title: "Trust & Integrity", desc: "Honest advice, fair pricing. We tell you what you need — not what we want to sell." },
  { icon: Heart, title: "Customer First", desc: "Your device is treated like our own. We communicate clearly throughout." },
  { icon: Zap, title: "Speed & Efficiency", desc: "Most repairs completed within 24-48 hours. Same-day service where possible." },
  { icon: Users, title: "Expert Team", desc: "Years of combined experience across every laptop brand and model." },
  { icon: Star, title: "Satisfaction Guaranteed", desc: "Not happy? We make it right. Your satisfaction is our reputation." },
];

export default function AboutPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-b from-light-gray via-white to-light-gray">
        <div className="hero-glow top-[-200px] right-[-100px]" />
        <div className="hero-glow bottom-[-200px] left-[-100px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <div className="glass inline-block px-4 py-1.5 rounded-full mb-4">
              <span className="text-xs font-semibold text-primary tracking-wide">ABOUT US</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-dark-navy tracking-tight mb-6">
              We're Zimbabwe's <span className="text-gradient-blue">Trusted</span> Laptop Repair Specialists
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed font-light">
              Getwork Investments has been serving Harare with professional laptop and desktop 
              computer repairs since [year established]. What started as a passion for solving 
              technology problems has grown into one of the city's most trusted repair destinations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="relative py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card-blue rounded-3xl p-8 md:p-10"
            >
              <h3 className="font-black text-2xl text-dark-navy mb-4">Our Mission</h3>
              <p className="text-gray-500 leading-relaxed font-light">
                To provide accessible, high-quality laptop repair services that extend the life of 
                technology, save our customers money, and reduce electronic waste. We believe every 
                laptop deserves a second chance, and every customer deserves transparent, honest service.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass-card-blue rounded-3xl p-8 md:p-10"
            >
              <h3 className="font-black text-2xl text-dark-navy mb-4">Our Vision</h3>
              <p className="text-gray-500 leading-relaxed font-light">
                To be Zimbabwe's leading laptop repair company — setting the standard for quality, 
                transparency, and customer care. We envision a future where professional repair is 
                always the first choice over replacement, and where our expertise helps Zimbabweans 
                get the most from their technology investments.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-24 overflow-hidden bg-light-gray">
        <div className="hero-glow top-[-100px] right-[-50px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <div className="glass inline-block px-4 py-1.5 rounded-full mb-4">
              <span className="text-xs font-semibold text-primary tracking-wide">VALUES</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-dark-navy tracking-tight">What We Stand For</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass-card rounded-3xl p-6"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                  <v.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-bold text-dark-navy text-lg mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm font-light leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass inline-block px-4 py-1.5 rounded-full mb-4">
              <span className="text-xs font-semibold text-primary tracking-wide">CERTIFICATIONS</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-dark-navy tracking-tight mb-6">
              Certified & Trusted
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto font-light">
              Our technicians hold professional certifications and continuously update their skills 
              to work on the latest laptop technologies. We invest in the best diagnostic equipment, 
              soldering stations, and repair tools to deliver Apple-level service quality.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
