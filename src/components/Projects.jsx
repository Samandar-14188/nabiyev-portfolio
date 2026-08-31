import React from "react";

export default function Projects() {
  const projects = [
    {
      icon: "🏛️",
      name: "Al Farg'oniy — O'quv Markazi",
      desc: "Zamonaviy o'quv markazi uchun rasmiy veb-sayt va kurslar portali. Kurslarga ro'yxatdan o'tish, yo'nalishlar bilan tanishish va qulay foydalanuvchi interfeysiga ega.",
      tags: ["React", "Next.js", "Tailwind CSS", "Vercel"],
      live: "https://al-farg-oniy-p3gd-eight.vercel.app/",
      github: "https://github.com/Samandar-14188/al-farg-oniy",
      color: "#6366F1", // Indigo
    },
    {
      icon: "🎭",
      name: "Bahona Platformasi",
      desc: "Reels/TikTok formatidagi interaktiv platforma. Har xil vaziyatlar uchun bahonalar ko'rish, TTS orqali ovozli eshitish va yangi bahona qo'shish imkoniyati.",
      tags: ["React", "Vite", "Tailwind CSS", "Web Speech", "PWA"],
      live: "https://bahona.vercel.app/",
      github: "https://github.com/Samandar-14188/bahona",
      color: "#EC4899", // Pushti / Pink
    },
    {
      icon: "📈",
      name: "Sarmoya — Moliyaviy Boshqaruv",
      desc: "Shaxsiy moliya, xarajatlar va investitsiyalarni monitoring qilish hamda boshqarish uchun mo'ljallangan qulay veb-platforma.",
      tags: ["React", "Tailwind CSS", "Data Viz", "JavaScript"],
      live: "https://sarmoya-fawn.vercel.app/",
      github: "https://github.com/Samandar-14188/sarmoya",
      color: "#3B82F6", // Ko'k / Blue
    },
    {
      icon: "💬",
      name: "Chat App",
      desc: "Real-time xabar almashish platformasi — online status, typing animatsiyasi, o'qilmagan xabarlar va browser bildirishnomalarini qo'llab-quvvatlaydi.",
      tags: ["React", "Node.js", "Socket.io", "MongoDB", "Tailwind"],
      github: "https://github.com/Samandar-14188/nabiyev-chat-client",
      live: "https://nabiyev-chat.vercel.app",
      color: "#7F77DD",
    },
    {
      icon: "🪑",
      name: "RishtonSoft CRM",
      desc: "Mebel do'koni va yetkazib berish jarayonlarini avtomatlashtiruvchi professional CRM tizimi — RishtonSoft buyurtmasi asosida tayyorlangan.",
      tags: ["React", "Next.js", "Tailwind", "CSS"],
      github: "", // Yopiq kodli loyiha
      live: "https://furniture-store-blush.vercel.app/sign-in",
      color: "#1D9E75",
    },
    {
      icon: "⚡",
      name: "AI Tools Hub",
      desc: "Eng sara sun'iy intellekt vositalari va tayyor promptlar katalogi. Real-time qidiruv, kategoriyalar bo'yicha saralash va promptlarni bir klikda nusxalash imkoniyatiga ega.",
      tags: ["React", "Next.js", "Tailwind", "JSON Server"],
      github: "https://github.com/Samandar-14188/ai-tools",
      live: "https://ai-tools-six-beta.vercel.app",
      color: "#10B981",
    },
    {
      icon: "🌙",
      name: "Ramazon Rejam",
      desc: "Ramazon oyi uchun maxsus ishlab chiqilgan shaxsiy rejalashtiruvchi ilova — kunlik namoz, Qur'on mutolaasi sahifalari, zikr va tarovih ibodatlari monitoringi.",
      tags: ["React", "Local Storage", "Tailwind CSS", "PWA"],
      github: "https://github.com/Samandar-14188/ramazon",
      live: "https://ramazon-tau.vercel.app/",
      color: "#F59E0B",
    },
  ];

  return (
    <section
      id="projects"
      style={{
        padding: "6rem 2rem",
        background:
          "radial-gradient(ellipse at bottom, #1a1a3e 0%, #0a0a0f 70%)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <p
          style={{
            fontSize: "14px",
            color: "#7F77DD",
            marginBottom: "0.5rem",
            textAlign: "center",
            letterSpacing: "2px",
            textTransform: "uppercase",
          }}
        >
          nima qildim
        </p>
        <h2
          style={{
            fontSize: "40px",
            fontWeight: "700",
            textAlign: "center",
            marginBottom: "0.75rem",
            background: "linear-gradient(135deg, #ffffff, #AFA9EC)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Loyihalar
        </h2>
        <p
          style={{
            textAlign: "center",
            color: "rgba(255,255,255,0.5)",
            marginBottom: "4rem",
            fontSize: "16px",
          }}
        >
          Yaratgan amaliy ishlarim va loyihalarim to'plami
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "28px",
          }}
        >
          {projects.map((p, i) => (
            <div
              key={i}
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "24px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                transition:
                  "transform 0.3s, border-color 0.3s, box-shadow 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.borderColor = p.color + "60";
                e.currentTarget.style.boxShadow = `0 10px 30px -10px ${p.color}20`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Header */}
              <div
                style={{
                  padding: "2.5rem 2rem 1.5rem",
                  background: `linear-gradient(135deg, #16162d, #0d0d15)`,
                  borderBottom: `1px solid ${p.color}20`,
                }}
              >
                <div style={{ fontSize: "42px", marginBottom: "16px" }}>
                  {p.icon}
                </div>
                <h3
                  style={{
                    fontSize: "22px",
                    fontWeight: "700",
                    color: "white",
                    marginBottom: "10px",
                  }}
                >
                  {p.name}
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    color: "rgba(255,255,255,0.6)",
                    lineHeight: "1.6",
                    minHeight: "64px",
                  }}
                >
                  {p.desc}
                </p>
              </div>

              {/* Body */}
              <div
                style={{
                  padding: "1.5rem 2rem 2.5rem",
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "8px",
                    marginBottom: "2rem",
                  }}
                >
                  {p.tags.map((tag, j) => (
                    <span
                      key={j}
                      style={{
                        background: "rgba(127,119,221,0.06)",
                        color: "#AFA9EC",
                        fontSize: "11px",
                        fontWeight: "500",
                        padding: "5px 14px",
                        borderRadius: "50px",
                        border: "1px solid rgba(127,119,221,0.15)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div style={{ display: "flex", gap: "12px" }}>
                  {p.github ? (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        flex: 1,
                        padding: "12px",
                        borderRadius: "14px",
                        fontSize: "14px",
                        fontWeight: "600",
                        textAlign: "center",
                        textDecoration: "none",
                        color: "white",
                        border: "1px solid rgba(255,255,255,0.12)",
                        background: "transparent",
                        transition: "background 0.2s",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.background =
                          "rgba(255,255,255,0.06)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.background = "transparent")
                      }
                    >
                      GitHub
                    </a>
                  ) : (
                    <span
                      style={{
                        flex: 1,
                        padding: "12px",
                        borderRadius: "14px",
                        fontSize: "14px",
                        fontWeight: "600",
                        textAlign: "center",
                        color: "rgba(255,255,255,0.3)",
                        border: "1px solid rgba(255,255,255,0.05)",
                        background: "rgba(255,255,255,0.01)",
                        cursor: "not-allowed",
                      }}
                    >
                      🔒 Private
                    </span>
                  )}

                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      flex: 1,
                      padding: "12px",
                      borderRadius: "14px",
                      fontSize: "14px",
                      fontWeight: "600",
                      textAlign: "center",
                      textDecoration: "none",
                      color: "#0a0a0f",
                      background: p.color,
                      boxShadow: `0 4px 12px ${p.color}30`,
                      transition: "transform 0.2s, opacity 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.opacity = "0.9";
                      e.currentTarget.style.transform = "scale(1.02)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.opacity = "1";
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                  >
                    Ko'rish
                  </a>
                </div>
              </div>
            </div>
          ))}

          {/* Kelgusi loyiha o'rni */}
          <div
            style={{
              background: "rgba(255,255,255,0.01)",
              border: "1px dashed rgba(255,255,255,0.08)",
              borderRadius: "24px",
              padding: "4rem 2rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              gap: "12px",
              minHeight: "380px",
            }}
          >
            <div style={{ fontSize: "42px", opacity: 0.3 }}>🚀</div>
            <p
              style={{
                color: "rgba(255,255,255,0.4)",
                fontSize: "16px",
                fontWeight: "600",
              }}
            >
              Yangi Loyihalar
            </p>
            <p style={{ color: "rgba(255,255,255,0.2)", fontSize: "13px" }}>
              Tez kunda yana qo'shiladi...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}