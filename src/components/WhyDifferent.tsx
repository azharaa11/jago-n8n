import { X, Check, BookOpen, Code, Users, Zap } from "lucide-react";

export default function WhyDifferent() {
  const comparisons = [
    {
      aspect: "Metode Pembelajaran",
      others: "Teori bertele-tele, slide presentation boring",
      jagoN8N: "Langsung praktik real case, learning by doing"
    },
    {
      aspect: "Fokus Konten",
      others: "Cuma teori automation, nggak ada implementasi nyata",
      jagoN8N: "Real world projects yang bisa langsung dipakai kerja"
    },
    {
      aspect: "Support System",
      others: "Beli course terus ditinggal, nggak ada komunitas",
      jagoN8N: "Community support aktif, mentoring, Q&A session"
    },
    {
      aspect: "Update Materi",
      others: "Sekali buat, nggak pernah update lagi",
      jagoN8N: "Materi selalu update mengikuti perkembangan n8n"
    }
  ];

  const features = [
    {
      icon: Code,
      title: "100% No Code",
      description: "Belajar automation tanpa perlu coding. Drag, drop, connect!"
    },
    {
      icon: Zap,
      title: "Langsung Praktik",
      description: "Setiap tutorial langsung praktek dengan real case scenario"
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Gabung dengan 1000+ automation enthusiasts di Indonesia"
    },
    {
      icon: BookOpen,
      title: "Step by Step",
      description: "Pembelajaran terstruktur dari basic sampai advanced level"
    }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-violet-50 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0">
        {/* Diamond Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(147,51,234,0.04)_1px,transparent_1px),linear-gradient(-45deg,rgba(147,51,234,0.04)_1px,transparent_1px)] bg-[size:30px_30px]"></div>
        
        {/* Geometric Shapes */}
        <div className="absolute top-16 left-16 w-24 h-24 bg-gradient-to-r from-purple-200/30 to-pink-200/30 rounded-2xl rotate-12 animate-pulse"></div>
        <div className="absolute bottom-24 right-20 w-18 h-18 bg-gradient-to-r from-violet-200/25 to-purple-200/25 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-14 h-14 bg-pink-300/20 rounded-xl rotate-45 animate-pulse animation-delay-500"></div>
        
        {/* Comparison Arrow Pattern */}
        <div className="absolute top-40 right-1/3 opacity-8">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-red-400 rounded-full"></div>
            <div className="w-6 h-0.5 bg-red-400"></div>
            <div className="w-0 h-0 border-l-2 border-l-red-400 border-t-1 border-t-transparent border-b-1 border-b-transparent"></div>
            <div className="w-6 h-0.5 bg-green-500"></div>
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          </div>
        </div>
        
        {/* Wave Decoration */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-purple-100/30 to-transparent rounded-b-[80px]"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0f172a] mb-6">
            Kenapa Jago N8N
            <span className="block text-[#00ff88]">Berbeda?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Jangan sampai salah pilih platform belajar. Ini perbandingan jujur dengan yang lain.
          </p>
        </div>
        
        {/* Comparison Table */}
<div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-16">
  {/* Header */}
  <div className="bg-gradient-to-r from-[#0f172a] to-[#1e293b] text-white p-6">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-center">
      <div className="hidden md:block"></div> {/* kosong biar rata */}
      <div>
        <h3 className="text-xl font-bold text-red-400">Kursus Lain</h3>
        <p className="text-sm text-gray-300">Teori & Membosankan</p>
      </div>
      <div>
        <h3 className="text-xl font-bold text-[#00ff88]">Jago N8N</h3>
        <p className="text-sm text-gray-300">Praktik & Real Case</p>
      </div>
    </div>
  </div>

  {/* Rows */}
  {comparisons.map((comparison, index) => (
    <div
      key={index}
      className={`grid grid-cols-1 md:grid-cols-3 gap-6 p-6 items-start ${
        index % 2 === 0 ? "bg-gray-50" : "bg-white"
      }`}
    >
      {/* Aspect */}
      <div className="font-semibold text-[#0f172a] text-center md:text-left mb-4 md:mb-0">
        {comparison.aspect}
      </div>

      {/* Others */}
      <div className="flex items-start gap-3">
        <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
          <X className="w-4 h-4 text-red-600" />
        </div>
        <p className="text-gray-600">{comparison.others}</p>
      </div>

      {/* Jago N8N */}
      <div className="flex items-start gap-3 mt-4 md:mt-0">
        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
          <Check className="w-4 h-4 text-[#00cc6a]" />
        </div>
        <p className="text-gray-600">{comparison.jagoN8N}</p>
      </div>
    </div>
  ))}
</div>

        
        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#00ff88]/30 group hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-[#00ff88]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#00ff88]/20 transition-colors duration-300">
                <feature.icon className="w-8 h-8 text-[#00ff88]" />
              </div>
              
              <h3 className="text-xl font-bold text-[#0f172a] mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-[#00ff88] to-[#00cc6a] text-[#0f172a] px-8 py-4 rounded-2xl font-semibold text-lg">
            <Zap className="w-6 h-6" />
            Makanya pilih yang terbukti efektif!
          </div>
        </div>
      </div>
    </section>
  );
}