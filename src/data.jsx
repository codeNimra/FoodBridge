import React from "react";

export const sections = [
  { id: "problem", label: "🔴 The Problem", color: "#FF4D4D" },
  { id: "solution", label: "🟢 How It Solves It", color: "#22C55E" },
  { id: "flow", label: "🔄 How It Works", color: "#3B82F6" },
  { id: "customer", label: "👥 Who It Serves", color: "#F59E0B" },
  { id: "model", label: "💰 Business Model", color: "#A855F7" },
  { id: "edge", label: "⚡ Why It Wins", color: "#06B6D4" },
];

export const content = {
  problem: (
    <div style={{ fontFamily: "'Georgia', serif" }}>
      <h2 style={{ fontSize: "2rem", color: "#FF4D4D", marginBottom: "1rem" }}>The Real Crisis</h2>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
        {[
          { stat: "40%", label: "of all food in the US is wasted every year" },
          { stat: "119M", label: "Americans are food insecure in 2024" },
          { stat: "$408B", label: "worth of restaurant food is thrown out annually" },
          { stat: "0", label: "real-time systems connecting surplus to shelters" },
        ].map((item) => (
          <div key={item.stat} style={{ background: "rgba(255,77,77,0.08)", border: "1px solid rgba(255,77,77,0.3)", borderRadius: "12px", padding: "1.5rem", textAlign: "center" }}>
            <div style={{ fontSize: "2.5rem", fontWeight: "900", color: "#FF4D4D" }}>{item.stat}</div>
            <div style={{ fontSize: "0.9rem", color: "#ccc", marginTop: "0.4rem" }}>{item.label}</div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: "1.5rem", padding: "1.2rem", background: "rgba(255,77,77,0.05)", borderLeft: "4px solid #FF4D4D", borderRadius: "6px" }}>
        <p style={{ color: "#ddd", lineHeight: 1.7, margin: 0 }}>
          Restaurants prepare food that often goes unsold. The problem isn't <em>lack of food</em>. It's <em>lack of connection</em>.
        </p>
      </div>
    </div>
  ),
  solution: (
    <div>
      <h2 style={{ fontSize: "2rem", color: "#22C55E", marginBottom: "1rem", fontFamily: "Georgia, serif" }}>FoodBridge Closes the Gap</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {[
          { icon: "📍", title: "Real-Time Surplus Alerts", desc: "Restaurants post available food instantly." },
          { icon: "🤝", title: "Instant Matching", desc: "Algorithm matches surplus to the nearest food bank." },
          { icon: "🚗", title: "Pickup Coordination", desc: "Volunteers get a notification with pickup window." },
          { icon: "📊", title: "Impact Dashboard", desc: "Live data on meals donated and CO₂ saved." },
        ].map((item) => (
          <div key={item.title} style={{ display: "flex", gap: "1rem", alignItems: "flex-start", background: "rgba(34,197,94,0.07)", border: "1px solid rgba(34,197,94,0.2)", borderRadius: "10px", padding: "1rem" }}>
            <span style={{ fontSize: "1.8rem" }}>{item.icon}</span>
            <div>
              <div style={{ fontWeight: "700", color: "#22C55E", marginBottom: "0.3rem" }}>{item.title}</div>
              <div style={{ color: "#bbb", fontSize: "0.9rem", lineHeight: 1.6 }}>{item.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
  flow: (
    <div>
      <h2 style={{ fontSize: "2rem", color: "#3B82F6", marginBottom: "1.5rem", fontFamily: "Georgia, serif" }}>Step-by-Step</h2>
      {[
        { step: "1", actor: "🍕 Restaurant", action: "Taps 'Post Surplus' at closing time." },
        { step: "2", actor: "📡 FoodBridge", action: "Notifies food banks within 5 miles." },
        { step: "3", actor: "🏠 Food Bank", action: "Claims the post instantly." },
      ].map((item) => (
        <div key={item.step} style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
          <div style={{ minWidth: "36px", height: "36px", borderRadius: "50%", background: "#3B82F6", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff" }}>{item.step}</div>
          <div style={{ flex: 1, background: "rgba(59,130,246,0.07)", border: "1px solid rgba(59,130,246,0.2)", borderRadius: "10px", padding: "0.9rem" }}>
            <div style={{ fontWeight: "700", color: "#60A5FA" }}>{item.actor}</div>
            <div style={{ color: "#bbb", fontSize: "0.88rem" }}>{item.action}</div>
          </div>
        </div>
      ))}
    </div>
  ),
  customer: (
    <div>
      <h2 style={{ fontSize: "2rem", color: "#F59E0B", marginBottom: "1.5rem" }}>Two Customers</h2>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
        <div style={{ background: "rgba(245,158,11,0.08)", padding: "1rem", borderRadius: "10px" }}>
          <h3 style={{ color: "#F59E0B" }}>Restaurants</h3>
          <p style={{ fontSize: "0.8rem", color: "#ccc" }}>Small to mid-size seats.</p>
        </div>
        <div style={{ background: "rgba(245,158,11,0.08)", padding: "1rem", borderRadius: "10px" }}>
          <h3 style={{ color: "#F59E0B" }}>Food Banks</h3>
          <p style={{ fontSize: "0.8rem", color: "#ccc" }}>Community pantries.</p>
        </div>
      </div>
    </div>
  ),
  model: (
    <div>
      <h2 style={{ fontSize: "2rem", color: "#A855F7", marginBottom: "1rem" }}>Revenue</h2>
      <div style={{ background: "rgba(168,85,247,0.1)", padding: "1rem", borderRadius: "10px", color: "#bbb" }}>
        Phase 2: $30/month per restaurant.
      </div>
    </div>
  ),
  edge: (
    <div>
      <h2 style={{ fontSize: "2rem", color: "#06B6D4", marginBottom: "1rem" }}>The Edge</h2>
      <div style={{ color: "#bbb" }}>Faster than WhatsApp, more charitable than 'Too Good To Go'.</div>
    </div>
  ),
};