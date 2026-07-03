import { useState, useRef, useEffect } from "react";
import { X, Send, Loader2, Sparkles } from "lucide-react";

const quickReplies = [
  "What services do you offer?",
  "How much does a screen replacement cost?",
  "Do you repair MacBooks?",
  "How long does a repair take?",
  "Where are you located?",
];

export default function RukaAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "👋 Hi there! I'm Ruka, your AI assistant from Getwork Investments. How can I help you with your laptop repair needs today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const listRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

  const sendMessage = async (text) => {
    const msg = text || input.trim();
    if (!msg || loading) return;

    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: msg }]);
    setLoading(true);

    try {
      const history = messages.slice(1).map((m) => ({
        role: m.role,
        content: m.content,
      }));

      const res = await fetch("/api/ruka", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: msg, history }),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Failed to get response");
      }

      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Sorry, I'm having trouble connecting right now. Please try again or contact us directly.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {open && (
        <div className="fixed bottom-6 left-6 z-50 w-80 sm:w-96 h-[500px] max-h-[80vh] glass-card rounded-2xl flex flex-col shadow-2xl overflow-hidden animate-fade-in">
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/20 bg-dark-navy">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center shadow-lg shadow-primary/20">
                <Sparkles size={15} className="text-white" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Ruka</p>
                <p className="text-[10px] text-white/40">AI Assistant</p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="w-7 h-7 rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              <X size={15} className="text-white/60" />
            </button>
          </div>

          <div
            ref={listRef}
            className="flex-1 overflow-y-auto px-4 py-3 space-y-3 bg-white"
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-xl px-3.5 py-2.5 text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-gradient-to-br from-primary to-purple-500 text-white shadow-lg shadow-primary/20"
                      : "bg-white/80 text-dark-navy shadow-sm"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white/80 rounded-xl px-3.5 py-2.5 text-sm text-dark-navy shadow-sm flex items-center gap-2">
                  <Loader2 size={14} className="animate-spin text-primary" />
                  Ruka is typing...
                </div>
              </div>
            )}
          </div>

          {messages.length === 1 && (
            <div className="px-4 pb-2">
              <p className="text-[10px] text-gray-400 mb-1.5 text-center uppercase tracking-wider font-medium">
                Quick Questions
              </p>
              <div className="flex flex-wrap gap-1.5 justify-center">
                {quickReplies.map((q) => (
                  <button
                    key={q}
                    onClick={() => sendMessage(q)}
                    className="text-[11px] bg-white/60 text-dark-navy px-2.5 py-1 rounded-full border border-gray-200 hover:bg-primary hover:text-white hover:border-primary transition-all"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="border-t border-white/20 p-3 bg-white">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type your message..."
                className="flex-1 bg-white border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                disabled={loading}
              />
              <button
                onClick={() => sendMessage()}
                disabled={!input.trim() || loading}
                className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center hover:opacity-90 transition-opacity disabled:opacity-40 shrink-0 shadow-lg shadow-primary/20"
              >
                <Send size={15} className="text-white" />
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="fixed bottom-6 left-6 z-50 flex items-end gap-3">
        {!open && (
          <div className="glass-dark rounded-2xl px-4 py-2.5 mb-1 animate-fade-in hidden sm:block">
            <p className="text-xs text-white font-medium whitespace-nowrap">Chat with Ruka ✨</p>
          </div>
        )}
        <div className="relative">
          {!open && (
            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-accent rounded-full border-2 border-dark-navy animate-pulse" />
          )}
          <button
            onClick={() => setOpen(!open)}
            className="relative w-14 h-14 rounded-full bg-gradient-to-br from-primary to-purple-500 shadow-xl shadow-primary/30 flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
            style={{ filter: "drop-shadow(0 0 12px rgba(37,99,235,0.4))" }}
            aria-label={open ? "Close Ruka" : "Chat with Ruka"}
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
