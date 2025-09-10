import { ImageWithFallback } from './figma/ImageWithFallback';
import { Clock, AlertTriangle, RefreshCw } from "lucide-react";

export default function ProblemAwareness() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-purple-900/70 via-red-700/50 to-orange-200/30 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0">
        {/* Thin Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        
        {/* Soft Floating Shapes */}
        <div className="absolute top-16 right-16 w-24 h-24 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-16 h-16 bg-pink-300/20 rounded-full blur-sm animate-bounce"></div>
        <div className="absolute top-1/2 right-1/4 w-8 h-8 bg-orange-400/30 rounded-lg rotate-45 animate-pulse animation-delay-700"></div>
        
        {/* Bottom Wave for smooth transition to white slide */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white/0 to-white rounded-t-[80px]"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                Berhenti Jadi
                <span className="block text-red-400">Budak Digital</span>
              </h2>
              
              <p className="text-xl text-gray-200 leading-relaxed">
                Sudah berapa lama kamu terjebak dalam rutinitas yang menguras waktu dan energi?
              </p>
            </div>
            
            <div className="space-y-6">
              {/* Card Function */}
              {[
                { icon: Clock, title: "8+ Jam Kerja Manual Setiap Hari", desc: "Copy-paste data, update spreadsheet, kirim email berulang-ulang..." },
                { icon: AlertTriangle, title: "Burnout & Stress Berkepanjangan", desc: "Lelah fisik dan mental karena mengerjakan hal yang sama berulang kali" },
                { icon: RefreshCw, title: "Tidak Ada Waktu untuk Hal Penting", desc: "Waktu tersedot untuk task repetitif, tidak bisa fokus pada strategi dan growth" }
              ].map((item, idx) => (
                <div 
                  key={idx} 
                  className="flex items-start gap-4 p-6 bg-red-700/20 backdrop-blur-sm rounded-2xl border-l-4 border-red-400 hover:scale-105 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-red-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-300">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Quote Box */}
            <div className="p-8 bg-gradient-to-r from-gray-900/70 to-gray-800/50 rounded-2xl text-white backdrop-blur-sm">
              <p className="text-lg italic">
                "Kalau terus begini, kapan bisa naik level? Kapan bisa fokus ke hal yang benar-benar penting?"
              </p>
            </div>
          </div>
          
          {/* Right Visual */}
          <div className="relative">
            <div className="relative z-10">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1752650735615-9829d8008a01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwYnVybm91dCUyMGV4aGF1c3RlZCUyMHBlcnNvbnxlbnwxfHx8fDE3NTc0NzU3OTl8MA&ixlib=rb-4.0&q=80&w=1080"
                alt="Digital Burnout"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            
            {/* Floating Indicators */}
            <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full animate-pulse">
              😩 Stress Level: 95%
            </div>
            
            <div className="absolute bottom-4 left-4 bg-red-500 text-white px-4 py-2 rounded-full animate-bounce">
              ⏰ Overtime: 12 Jam
            </div>
            
            {/* Background Shapes */}
            <div className="absolute -top-8 -left-8 w-20 h-20 bg-red-200 rounded-full blur-xl opacity-40"></div>
            <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-red-300 rounded-full blur-lg opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
