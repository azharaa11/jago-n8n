import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { ArrowRight, Zap, CheckCircle, Clock } from "lucide-react";

export default function FinalCTA() {
  // Hitung target date **sekali saja** saat component mount
  const [targetDate] = useState(() => {
    const now = new Date();
    return new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 3, // 3 hari dari sekarang
      23, 59, 59, 0      // jam 23:59:59
    );
  });

  const [timeLeft, setTimeLeft] = useState({
    hours: "00",
    minutes: "00",
    seconds: "00"
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(timer);
        setTimeLeft({ hours: "00", minutes: "00", seconds: "00" });
      } else {
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({
          hours: hours.toString().padStart(2, "0"),
          minutes: minutes.toString().padStart(2, "0"),
          seconds: seconds.toString().padStart(2, "0")
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,136,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,136,0.06)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        <div className="absolute top-20 left-20 w-24 h-24 bg-gradient-to-r from-[#00ff88]/20 to-purple-500/20 rounded-3xl rotate-12 animate-pulse"></div>
        <div className="absolute bottom-24 right-24 w-18 h-18 bg-gradient-to-r from-purple-400/25 to-indigo-400/25 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/3 w-14 h-14 bg-[#00ff88]/20 rounded-xl rotate-45 animate-pulse animation-delay-700"></div>
        <div className="absolute top-40 right-1/4 opacity-8">
          <div className="text-5xl text-[#00ff88]">🚀</div>
        </div>
        <div className="absolute bottom-40 left-1/4 opacity-8">
          <div className="text-5xl text-purple-400">⚡</div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-purple-800/15 to-transparent rounded-t-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-12">
            <div className="inline-flex items-center gap-3 bg-[#00ff88]/20 text-[#00ff88] px-6 py-3 rounded-full border border-[#00ff88]/30 mb-8">
              <Zap className="w-5 h-5" />
              <span className="font-semibold">LAST CHANCE - PENAWARAN BERAKHIR BESOK!</span>
            </div>

            <h2 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
              Siap Jadi
              <span className="block text-[#00ff88]">Automation Expert</span>
              <span className="block">Hari Ini?</span>
            </h2>

            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Jangan biarkan kesempatan ini terlewat. Ribuan profesional sudah transform karir mereka. 
              <span className="block mt-4 text-[#00ff88] font-semibold">
                Kamu yang selanjutnya!
              </span>
            </p>
          </div>

          {/* Key Benefits Recap */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="w-12 h-12 bg-[#00ff88]/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6 text-[#00ff88]" />
              </div>
              <h3 className="font-bold text-lg mb-2">3 Minggu Transform</h3>
              <p className="text-gray-300 text-sm">Dari zero ke automation expert</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="w-12 h-12 bg-[#00ff88]/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-[#00ff88]" />
              </div>
              <h3 className="font-bold text-lg mb-2">Bonus 1.000 </h3>
              <p className="text-gray-300 text-sm">Gratis untuk 100 orang pertama</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="w-12 h-12 bg-[#00ff88]/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-[#00ff88]" />
              </div>
              <h3 className="font-bold text-lg mb-2">Lifetime Access</h3>
              <p className="text-gray-300 text-sm">Sekali bayar, akses selamanya</p>
            </div>
          </div>

       

          {/* Final Message */}
          <div className="mt-16 p-8 bg-gradient-to-r from-[#00ff88]/10 to-transparent rounded-2xl border border-[#00ff88]/20">
            <p className="text-lg text-gray-300 italic">
              "1 tahun dari sekarang, kamu akan berterima kasih pada diri sendiri karena mengambil keputusan hari ini. 
              <span className="block mt-2 text-[#00ff88] font-semibold not-italic">
                Don't let this moment pass. Transform your career today!"
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
