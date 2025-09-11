import { Gift, Star, Zap, Users, BookOpen, Video } from "lucide-react";

export default function ExclusiveBonus() {
  const bonuses = [
    {
      icon: BookOpen,
      title: "Template workflow siap pakai untuk berbagai industri dan use case",
      value: "500+ Template Siap Pakai",
      description: ""
    },
    {
      icon: Video,
      title: "Exclusive video series dengan advanced automation strategies",
      value: "Video Masterclass Premium", 
      description: ""
    },
    {
      icon: Users,
      title: "Akses komunitas VIP dengan networking automation professionals",
      value: "Akses Komunitas VIP",
      description: ""
    },
    {
      icon: Zap,
      title: "Personal consultation untuk automation strategy bisnis kamu",
      value: "Konsultasi 1-on-1",
      description: ""
    },
    {
      icon: Star,
      title: "Akses selamanya ke semua update materi dan fitur baru",
      value: "Update Materi Selamanya",
      description: ""
    }
  ];

  const totalValue = bonuses.reduce((total, bonus) => {
    return total + parseInt(bonus.value.replace(/\D/g, ''));
  }, 0);

  return (
    <section className="relative py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0">
        {/* Gift Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.08)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        
        {/* Bonus Elements */}
        <div className="absolute top-24 left-24 w-20 h-20 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-3xl rotate-12 animate-pulse"></div>
        <div className="absolute bottom-32 right-32 w-16 h-16 bg-gradient-to-r from-indigo-400/25 to-purple-400/25 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-pink-400/20 rounded-xl rotate-45 animate-pulse animation-delay-500"></div>
        
        {/* Gift Icons */}
        <div className="absolute top-32 right-1/3 opacity-10">
          <div className="text-4xl text-purple-400">🎁</div>
        </div>
        <div className="absolute bottom-40 left-1/3 opacity-10">
          <div className="text-4xl text-pink-400">✨</div>
        </div>
        
        {/* Wave Shape */}
        <div className="absolute top-0 right-0 w-full h-32 bg-gradient-to-b from-purple-800/20 to-transparent rounded-b-[90px]"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-[#00ff88]/20 text-[#00ff88] px-6 py-3 rounded-full border border-[#00ff88]/30 mb-6">
            <Gift className="w-5 h-5" />
            <span className="font-semibold">BONUS EKSKLUSIF</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Bonus Senilai
            <span className="block text-[#00ff88]">
              Rp 10 Juta
            </span>
            <span className="text-2xl lg:text-3xl text-gray-300">GRATIS!</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Hanya untuk 100 orang pertama – bonus premium ini bisa kamu dapatkan tanpa biaya tambahan!         </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {bonuses.map((bonus, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:border-[#00ff88]/50 transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="w-16 h-16 bg-[#00ff88]/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#00ff88]/30 transition-colors duration-300">
                <bonus.icon className="w-8 h-8 text-[#00ff88]" />
              </div>
              
              <div className="mb-4">
                <div className="text-2xl font-bold text-[#00ff88] mb-2">
                  {bonus.value}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {bonus.title}
                </h3>
              </div>
              
              <p className="text-gray-300 leading-relaxed">
                {bonus.description}
              </p>
              
              <div className="mt-6 pt-6 border-t border-white/20">
                <div className="flex items-center gap-2 text-[#00ff88] font-semibold">
                  <Star className="w-4 h-4" />
                  <span className="text-sm">Eksklusif untuk member</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-[#00ff88] to-[#00cc6a] rounded-3xl p-12 text-[#0f172a] text-center">
          <div className="max-w-4xl mx-auto">
            <Gift className="w-20 h-20 mx-auto mb-6" />
            
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              Dapatkan Bonus Eksklusif Senilai Rp 10 Juta – 100% Gratis!
            </h3>
            
            <p className="text-xl mb-8 opacity-80">
              Tapi kamu bisa dapatkan SEMUA bonus ini GRATIS kalau daftar sekarang!
            </p>
            
            <div className="bg-[#0f172a]/10 rounded-2xl p-6 mb-8">
              <p className="text-lg font-semibold mb-2">
                ⚡ Penawaran Terbatas!
              </p>
              <p className="opacity-80">
                Bonus ini hanya berlaku untuk 100 pendaftar pertama. Setelah itu, semua bonus ini akan dijual terpisah dengan harga normal.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">73</div>
                <div className="text-sm opacity-80">Slot Tersisa</div>
              </div>
              
              <div className="hidden sm:block w-px h-12 bg-[#0f172a]/20"></div>
              
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">⏰</div>
                <div className="text-sm opacity-80">Berakhir Besok</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}