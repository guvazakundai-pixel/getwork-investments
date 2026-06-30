import { Phone, Globe, MapPin, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const contacts = [
  {
    icon: Phone,
    title: "Phone",
    value: "0781577166",
    href: "tel:0781577166",
    action: "Call Now",
  },
  {
    icon: MapPin,
    title: "Address",
    value: "Corner Speke & Mbuya Nehanda, Cyruss Mall, C16",
    href: "https://www.google.com/maps/search/?api=1&query=Corner+Speke+and+Mbuya+Nehanda+Cyruss+Mall+Harare",
    action: "Get Directions",
  },
  {
    icon: Globe,
    title: "Website",
    value: "www.getwork.co.zw",
    href: "https://www.getwork.co.zw",
    action: "Visit Site",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 overflow-hidden bg-gradient-to-b from-light-gray via-white to-light-gray">
      <div className="hero-glow top-[-150px] right-[-80px]" />
      <div className="hero-glow bottom-[-150px] left-[-80px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="glass inline-block px-4 py-1.5 rounded-full mb-4">
            <span className="text-xs font-semibold text-primary tracking-wide">CONTACT</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-dark-navy tracking-tight">
            Need Help? We've Got You!
          </h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto font-light">
            Reach out to us anytime. We're here to help.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {contacts.map((item) => (
            <motion.div
              key={item.title}
              variants={cardVariants}
              className="glass-card-blue rounded-3xl p-8 text-center group"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold text-dark-navy text-lg mb-1">{item.title}</h3>
              <p className="text-gray-500 text-sm mb-5 font-light">{item.value}</p>
              <a
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="glass-btn text-white inline-block px-6 py-2.5 rounded-full text-sm font-semibold"
              >
                {item.action}
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* WhatsApp CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-10"
        >
          <div className="glass inline-block px-6 py-1.5 rounded-full mb-4">
            <span className="text-xs font-semibold text-gray-500">PREFER CHAT?</span>
          </div>
          <a
            href="https://wa.me/263781577166"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-btn text-white inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm shadow-lg"
          >
            <MessageCircle size={18} />
            Chat on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
