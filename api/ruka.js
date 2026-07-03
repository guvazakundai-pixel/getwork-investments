export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { message, history = [] } = req.body;

  if (!message?.trim()) {
    return res.status(400).json({ error: "Message is required" });
  }

  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: "API key not configured" });
  }

  const messages = [
    {
      role: "system",
      content: `You are Ruka, a friendly and knowledgeable AI assistant for Getwork Investments, a premium laptop repair company based in Harare, Zimbabwe.

Key information about Getwork Investments:
- Services: Laptop screen replacement, keyboard repair, battery replacement, motherboard repair, data recovery, software troubleshooting, virus removal, upgrade services (RAM/SSD), MacBook repair, desktop repair
- Location: Harare, Zimbabwe
- Contact: Available on the website contact form, WhatsApp, and phone
- Tagline: "We Get It Working Again"
- They use genuine/quality parts and offer fast turnaround times
- They service all major brands: Dell, HP, Lenovo, Apple MacBook, Acer, ASUS, Toshiba
- They offer free diagnostics and competitive pricing

Your personality:
- Friendly, professional, and helpful
- Use simple, clear language - avoid overly technical jargon unless asked
- Be concise but thorough
- If you don't know something specific, guide the user to contact Getwork Investments directly
- Never make up pricing - direct users to request a quote
- Stay on topic about laptop repair and Getwork Investments services

Keep responses brief and helpful.`
    },
    ...history.slice(-10),
    { role: "user", content: message }
  ];

  try {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages,
        max_tokens: 512,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      console.error("Groq API error:", err);
      return res.status(500).json({ error: "Failed to get response" });
    }

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content || "";

    return res.status(200).json({ reply });
  } catch (error) {
    console.error("Ruka error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
