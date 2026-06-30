import { motion } from "framer-motion";
import { Phone, Globe, MapPin, MessageCircle, Clock, Mail } from "lucide-react";

const contactMethods = [
  {
    icon: Phone,
    title: "Phone",
    value: "0781577166",
    href: "tel:0781577166",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "+263 78 157 7166",
    href: "https://wa.me/263781577166",
  },
  {
    icon: MapPin,
    title: "Address",
    value: "Cyruss Mall, Corner Speke & Mbuya Nehanda\nOpposite Chicken Slice, Second Floor, C16\nHarare, Zimbabwe",
    href: "https://www.google.com/maps/search/?api=1&query=Corner+Speke+and+Mbuya+Nehanda+Cyruss+Mall+Harare",
  },
  {
    icon: Globe,
    title: "Website",
    value: "www.getwork.co.zw",
    href: "https://www.getwork.co.zw",
  },
];

const businessHours = [
  { day: "Monday – Friday", hours: "8:00 AM – 5:00 PM" },
  { day: "Saturday", hours: "9:00 AM – 1:00 PM" },
  { day: "Sunday", hours: "Closed" },
];

export default function ContactPage() {
  return (
    <main className="pt-20">
      <section className="relative py-24 overflow-hidden bg-gradient-to-b from-light-gray via-white to-light-gray">
        <div className="hero-glow top-[-200px] right-[-100px]" />
        <div className="hero-glow bottom-[-200px] left-[-100px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl mb-16"
          >
            <div className="glass inline-block px-4 py-1.5 rounded-full mb-4">
              <span className="text-xs font-semibold text-primary tracking-wide">CONTACT</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-dark-navy tracking-tight mb-6">
              Get in <span className="text-gradient-blue">Touch</span>
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed font-light">
              Have a laptop issue? Need a quote? Reach out — we're here to help.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Methods */}
            <div className="space-y-4">
              {contactMethods.map((method, i) => (
                <motion.a
                  key={method.title}
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                  className="glass-card rounded-2xl p-5 flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <method.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">{method.title}</p>
                    <p className="font-semibold text-dark-navy text-sm whitespace-pre-line">{method.value}</p>
                  </div>
                </motion.a>
              ))}

              {/* Business Hours */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="glass-card-blue rounded-2xl p-5"
              >
                <h3 className="flex items-center gap-2 font-bold text-dark-navy text-sm mb-3">
                  <Clock size={16} className="text-primary" />
                  Business Hours
                </h3>
                <div className="space-y-2">
                  {businessHours.map((item) => (
                    <div key={item.day} className="flex justify-between text-sm">
                      <span className="text-gray-500 font-light">{item.day}</span>
                      <span className="text-dark-navy font-medium">{item.hours}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Book Repair Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="glass-card rounded-3xl p-8"
            >
              <h3 className="font-bold text-2xl text-dark-navy mb-6">Book a Repair</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-white/60 border border-gray-200 rounded-xl px-4 py-3 text-sm text-dark-navy placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full bg-white/60 border border-gray-200 rounded-xl px-4 py-3 text-sm text-dark-navy placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email (optional)"
                  className="w-full bg-white/60 border border-gray-200 rounded-xl px-4 py-3 text-sm text-dark-navy placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                />
                <select className="w-full bg-white/60 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all">
                  <option value="">Select Laptop Brand</option>
                  <option>Apple MacBook</option>
                  <option>Dell</option>
                  <option>HP</option>
                  <option>Lenovo</option>
                  <option>ASUS</option>
                  <option>Acer</option>
                  <option>MSI</option>
                  <option>Other</option>
                </select>
                <select className="w-full bg-white/60 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all">
                  <option value="">Select Issue</option>
                  <option>Screen Replacement</option>
                  <option>Battery Replacement</option>
                  <option>Keyboard Repair</option>
                  <option>Charging Port Repair</option>
                  <option>Software Issue</option>
                  <option>Upgrade (SSD/RAM)</option>
                  <option>Water Damage</option>
                  <option>Other</option>
                </select>
                <textarea
                  rows={3}
                  placeholder="Describe the issue..."
                  className="w-full bg-white/60 border border-gray-200 rounded-xl px-4 py-3 text-sm text-dark-navy placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
                />
                <button
                  type="submit"
                  className="w-full glass-btn text-white py-3.5 rounded-xl font-semibold text-sm"
                >
                  Send Repair Request
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-16 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-3xl overflow-hidden h-[300px] md:h-[400px] flex items-center justify-center">
            <div className="text-center">
              <MapPin size={40} className="text-primary mx-auto mb-3" />
              <p className="text-gray-500 font-light">Cyruss Mall, Corner Speke & Mbuya Nehanda</p>
              <p className="text-gray-400 text-sm font-light">Opposite Chicken Slice, Second Floor, C16</p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Corner+Speke+and+Mbuya+Nehanda+Cyruss+Mall+Harare"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-primary text-sm font-semibold hover:underline"
              >
                Open in Google Maps →
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
