import { useState } from "react";
import { sections, content } from "./data";

export default function FoodBridge() {
  const [active, setActive] = useState("problem");

  return (
    <div style={{ minHeight: "100vh", background: "#0D0D0D", color: "#f0f0f0", fontFamily: "sans-serif", padding: "2rem 1rem" }}>
      <div style={{ maxWidth: "820px", margin: "0 auto" }}>
        
        {/* Header */}
        <header style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <div style={{ fontSize: "3rem" }}>🌉</div>
          <h1 style={{ fontSize: "3rem", background: "linear-gradient(135deg, #22C55E, #06B6D4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontWeight: "900" }}>FoodBridge</h1>
          <p style={{ color: "#666" }}>Connecting restaurant surplus to food banks — in real time</p>
        </header>

        {/* Nav Tabs */}
        <nav style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", justifyContent: "center", marginBottom: "2rem" }}>
          {sections.map((s) => (
            <button key={s.id} onClick={() => setActive(s.id)} style={{
              padding: "0.5rem 1rem", borderRadius: "999px", border: "none", cursor: "pointer", fontWeight: "700",
              background: active === s.id ? s.color : "rgba(255,255,255,0.06)",
              color: active === s.id ? "#000" : "#aaa",
            }}>
              {s.label}
            </button>
          ))}
        </nav>

        {/* Content Panel */}
        <main style={{ background: "#161616", border: "1px solid #2a2a2a", borderRadius: "20px", padding: "2rem", minHeight: "380px" }}>
          {content[active]}
        </main>

        <footer style={{ textAlign: "center", marginTop: "2rem", color: "#555", fontSize: "0.85rem" }}>
          Explore all 6 angles → then decide if this is your idea 🚀
        </footer>
      </div>
    </div>
  );
}