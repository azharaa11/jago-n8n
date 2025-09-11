// src/FlashSaleCard.jsx
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function FlashSaleCard() {
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 45, seconds: 12 });

  useEffect(() => {
    const targetTime = new Date();
    targetTime.setHours(targetTime.getHours() + 23);
    targetTime.setMinutes(targetTime.getMinutes() + 45);
    targetTime.setSeconds(targetTime.getSeconds() + 12);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const diff = targetTime.getTime() - now;

      if (diff <= 0) {
        clearInterval(timer);
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
      } else {
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        setTimeLeft({ hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ position: "relative", width: "100%", display: "flex", justifyContent: "center", marginTop: "20px" }}>
      {/* ===== Card ===== */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", duration: 1 }}
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "900px",
          width: "95%",
          borderRadius: "25px",
          padding: "30px",
          background: "linear-gradient(135deg, #e40000, #ff6600)",
          boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
          overflow: "hidden",
          color: "white",
        }}
      >
        {/* Background decorative elements */}
        <GlowCircle top="10%" left="15%" size="150px" color="rgba(255,255,0,0.1)" />
        <GlowCircle top="60%" left="75%" size="200px" color="rgba(255,0,0,0.15)" />
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i}>
            <Particle delay={i * 0.5} />
          </div>
        ))}

        {/* Judul */}
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          style={{
            fontSize: "32px",
            fontWeight: "900",
            marginBottom: "25px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <span role="img" aria-label="fire">🔥</span>
          PENAWARAN BERAKHIR DALAM
          <span role="img" aria-label="fire">🔥</span>
        </motion.div>

        {/* Countdown */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          style={{ display: "flex", justifyContent: "center", gap: "30px", marginBottom: "20px" }}
        >
          <Box value={timeLeft.hours} label="JAM" />
          <Box value={timeLeft.minutes} label="MENIT" />
          <Box value={timeLeft.seconds} label="DETIK" />
        </motion.div>

        {/* Promo */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          style={{
            background: "linear-gradient(90deg, #a40000, #660000)",
            padding: "12px",
            borderRadius: "12px",
            marginBottom: "20px",
            fontSize: "18px",
            fontWeight: "bold",
            color: "#ffeb3b",
            textAlign: "center",
          }}
        >
          ⚠️ HEMAT Rp 1.500.000 ⚠️
          <br />
          <span style={{ color: "white", fontWeight: "normal" }}>
            Setelah timer habis, harga kembali normal <b>Rp 2.999.000</b>
          </span>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          style={{ display: "flex", justifyContent: "center", gap: "25px", fontSize: "14px" }}
        >
          <span><Dot color="white" /> Hanya tersisa 47 slot</span>
          <span><Dot color="yellow" /> 253 orang sedang melihat</span>
        </motion.div>
      </motion.div>
    </div>
  );
}

/* ==================== SUBKOMPONEN ==================== */
function Box({ value, label }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      animate={{
        scale: [1, 1.05, 1],
        boxShadow: [
          "0 0 8px rgba(255,235,59,0.6)",
          "0 0 18px rgba(255,235,59,0.8)",
          "0 0 8px rgba(255,235,59,0.6)",
        ],
      }}
      transition={{ duration: 1.5, repeat: Infinity }}
      style={{
        background: "rgba(255,255,255,0.1)",
        padding: "20px 25px",
        borderRadius: "12px",
        textAlign: "center",
      }}
    >
      <div style={{ fontSize: "42px", fontWeight: "bold", color: "#ffeb3b" }}>
        {String(value).padStart(2, "0")}
      </div>
      <div style={{ fontSize: "14px", marginTop: "5px", fontWeight: "bold", color: "white" }}>
        {label}
      </div>
    </motion.div>
  );
}

function Dot({ color }) {
  return (
    <motion.span
      animate={{ opacity: [1, 0.3, 1], scale: [1, 0.8, 1] }}
      transition={{ duration: 1.5, repeat: Infinity }}
      style={{
        display: "inline-block",
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        background: color,
      }}
    />
  );
}

function GlowCircle({ top, left, size, color }) {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0.6 }}
      animate={{ scale: [0.9, 1.1, 0.9], opacity: [0.6, 0.9, 0.6] }}
      transition={{ duration: 6, repeat: Infinity }}
      style={{
        position: "absolute",
        top,
        left,
        width: size,
        height: size,
        borderRadius: "50%",
        background: color,
        filter: "blur(60px)",
        zIndex: 1,
      }}
    />
  );
}

function Particle({ delay }) {
  const size = Math.random() * 6 + 4;
  const left = Math.random() * 100;
  return (
    <motion.div
      initial={{ y: "100%", opacity: 0 }}
      animate={{ y: ["100%", "-10%"], opacity: [0, 1, 0] }}
      transition={{ duration: 10 + Math.random() * 5, repeat: Infinity, delay }}
      style={{
        position: "absolute",
        left: `${left}%`,
        width: size,
        height: size,
        borderRadius: "50%",
        background: "rgba(255,255,255,0.5)",
        zIndex: 0,
      }}
    />
  );
}
