import { useState } from "react";
import { Sparkles, X, ChevronRight, ArrowLeft, Laptop, Monitor, Tablet, Clock, Shield } from "lucide-react";

const devices = [
  { id: "laptop", label: "Laptop", icon: Laptop },
  { id: "macbook", label: "MacBook", icon: Laptop },
  { id: "desktop", label: "Desktop", icon: Monitor },
  { id: "tablet", label: "Tablet", icon: Tablet },
];

const issues = {
  laptop: [
    { id: "screen", label: "Broken Screen", price: "$45 – $95" },
    { id: "battery", label: "Battery Replacement", price: "$30 – $60" },
    { id: "keyboard", label: "Keyboard Not Working", price: "$25 – $55" },
    { id: "slow", label: "Slow / Upgrade", price: "$30 – $80" },
    { id: "charging", label: "Charging Port", price: "$35 – $65" },
    { id: "wont-start", label: "Won't Turn On", price: "$25 – $50" },
    { id: "virus", label: "Virus / Software", price: "$15 – $35" },
    { id: "other", label: "Other Issue", price: "Free Diagnostic" },
  ],
  macbook: [
    { id: "screen", label: "Broken Screen", price: "$80 – $180" },
    { id: "battery", label: "Battery Replacement", price: "$50 – $90" },
    { id: "keyboard", label: "Keyboard Not Working", price: "$60 – $120" },
    { id: "charging", label: "Charging Port", price: "$45 – $85" },
    { id: "wont-start", label: "Won't Turn On", price: "$35 – $65" },
    { id: "other", label: "Other Issue", price: "Free Diagnostic" },
  ],
  desktop: [
    { id: "screen", label: "Monitor Issue", price: "$30 – $70" },
    { id: "slow", label: "Slow / Upgrade", price: "$25 – $80" },
    { id: "wont-start", label: "Won't Turn On", price: "$20 – $50" },
    { id: "virus", label: "Virus / Software", price: "$15 – $35" },
    { id: "other", label: "Other Issue", price: "Free Diagnostic" },
  ],
  tablet: [
    { id: "screen", label: "Broken Screen", price: "$35 – $80" },
    { id: "battery", label: "Battery Replacement", price: "$25 – $55" },
    { id: "charging", label: "Charging Port", price: "$30 – $60" },
    { id: "other", label: "Other Issue", price: "Free Diagnostic" },
  ],
};

export default function QuickQuote() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState("device");
  const [selectedDevice, setSelectedDevice] = useState(null);

  const handleDeviceSelect = (device) => {
    setSelectedDevice(device);
    setStep("issue");
  };

  const handleBack = () => {
    setStep("device");
    setSelectedDevice(null);
  };

  const handleClose = () => {
    setOpen(false);
    setStep("device");
    setSelectedDevice(null);
  };

  return (
    <>
      {open && (
        <div className="fixed bottom-6 left-6 z-50 w-80 sm:w-96 glass-card rounded-2xl flex flex-col shadow-2xl overflow-hidden animate-fade-in">
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/20 bg-dark-navy">
            <div className="flex items-center gap-2.5">
              {step === "issue" ? (
                <button onClick={handleBack} className="w-7 h-7 rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors">
                  <ArrowLeft size={15} className="text-white/60" />
                </button>
              ) : null}
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center shadow-lg shadow-primary/20">
                <Sparkles size={15} className="text-white" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Quick Quote</p>
                <p className="text-[10px] text-white/40">
                  {step === "device" ? "Select your device" : `${selectedDevice?.label} repair`}
                </p>
              </div>
            </div>
            <button onClick={handleClose} className="w-7 h-7 rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors">
              <X size={15} className="text-white/60" />
            </button>
          </div>

          <div className="p-4 bg-white/30">
            {step === "device" && (
              <div className="space-y-2">
                <p className="text-xs text-gray-400 font-medium mb-3 uppercase tracking-wider text-center">
                  What device needs repair?
                </p>
                {devices.map((device) => (
                  <button
                    key={device.id}
                    onClick={() => handleDeviceSelect(device)}
                    className="w-full flex items-center gap-3 px-4 py-3.5 rounded-xl bg-white/70 border border-gray-200 hover:border-primary hover:bg-white transition-all text-left group"
                  >
                    <device.icon size={20} className="text-primary shrink-0" />
                    <span className="text-sm font-medium text-dark-navy flex-1">{device.label}</span>
                    <ChevronRight size={16} className="text-gray-300 group-hover:text-primary transition-colors" />
                  </button>
                ))}
              </div>
            )}

            {step === "issue" && selectedDevice && (
              <div className="space-y-2">
                <p className="text-xs text-gray-400 font-medium mb-3 uppercase tracking-wider text-center">
                  What's the problem?
                </p>
                {issues[selectedDevice.id]?.map((issue) => (
                  <a
                    key={issue.id}
                    href="#contact"
                    onClick={handleClose}
                    className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-white/70 border border-gray-200 hover:border-primary hover:bg-white transition-all text-left group"
                  >
                    <span className="text-sm font-medium text-dark-navy">{issue.label}</span>
                    <span className="text-xs font-semibold text-primary bg-primary/5 px-2.5 py-1 rounded-full group-hover:bg-primary/10 transition-colors">
                      {issue.price}
                    </span>
                  </a>
                ))}
                <div className="mt-3 flex items-center justify-center gap-4 text-[10px] text-gray-400">
                  <span className="flex items-center gap-1"><Clock size={10} /> Fast turnaround</span>
                  <span className="flex items-center gap-1"><Shield size={10} /> Warranty</span>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      <div className="fixed bottom-6 left-6 z-50 flex items-end gap-3">
        {!open && (
          <div className="glass-dark rounded-2xl px-4 py-2.5 mb-1 animate-fade-in hidden sm:block">
            <p className="text-xs text-white font-medium whitespace-nowrap">Get a free quote ✨</p>
          </div>
        )}
        <div className="relative">
          {!open && (
            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-accent rounded-full border-2 border-dark-navy animate-pulse" />
          )}
          <button
            onClick={() => setOpen(!open)}
            className="relative w-14 h-14 rounded-full bg-gradient-to-br from-primary to-purple-500 shadow-xl shadow-primary/30 flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
            aria-label={open ? "Close" : "Get a quote"}
            style={{ filter: "drop-shadow(0 0 12px rgba(37,99,235,0.4))" }}
          >
            <div className="absolute inset-0 rounded-full bg-white/10 opacity-0 hover:opacity-100 transition-opacity" />
            {open ? (
              <X size={22} className="text-white relative z-10" />
            ) : (
              <Sparkles size={22} className="text-white relative z-10" />
            )}
          </button>
        </div>
      </div>
    </>
  );
}
