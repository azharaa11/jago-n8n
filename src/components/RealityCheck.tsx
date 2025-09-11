import { ImageWithFallback } from './figma/ImageWithFallback';
import { TrendingDown, TrendingUp, Zap } from "lucide-react";

export default function RealityCheck() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-32 left-16 w-20 h-20 bg-gradient-to-r from-blue-200/40 to-indigo-200/40 rounded-2xl rotate-12 animate-pulse"></div>
        <div className="absolute bottom-32 right-20 w-16 h-16 bg-gradient-to-r from-indigo-300/30 to-purple-300/30 rounded-full animate-bounce"></div>
        <div className="absolute top-1/3 left-1/3 w-12 h-12 bg-blue-400/20 rounded-lg rotate-45 animate-pulse animation-delay-500"></div>
        
        {/* Workflow Icons Pattern */}
        <div className="absolute top-20 right-1/3 opacity-10">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <div className="w-8 h-0.5 bg-blue-500"></div>
            <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
            <div className="w-8 h-0.5 bg-indigo-500"></div>
            <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
          </div>
        </div>
        
        {/* Wave Decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-l from-blue-100/30 to-transparent rounded-bl-full"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0f172a] mb-6">
            1 Tahun Lagi...
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bayangkan dirimu 1 tahun ke depan. Pilihan hari ini menentukan masa depanmu.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Stuck Path */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-red-200 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-red-500 to-red-600"></div>
            
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingDown className="w-10 h-10 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-red-600 mb-2">Tetap Manual</h3>
              <p className="text-gray-600">Kalau kamu tidak berubah...</p>
            </div>
            
            <div className="relative mb-8">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1752650735615-9829d8008a01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwYnVybm91dCUyMGV4aGF1c3RlZCUyMHBlcnNvbnxlbnwxfHx8fDE3NTc0NzU3OTl8MA&ixlib=rb-4.0&q=80&w=1080"
                alt="Stuck in routine"
                className="w-full h-48 object-cover rounded-xl grayscale"
              />
              <div className="absolute inset-0 bg-red-900/20 rounded-xl"></div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-red-600">
                <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                <span>Masih kerja 12+ jam per hari</span>
              </div>
              <div className="flex items-center gap-3 text-red-600">
                <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                <span>Gaji stagnan, karir jalan di tempat</span>
              </div>
              <div className="flex items-center gap-3 text-red-600">
                <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                <span>Terus jadi "operator" bukan "strategist"</span>
              </div>
              <div className="flex items-center gap-3 text-red-600">
                <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                <span>Tertinggal dari kompetitor yang sudah otomasi</span>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-red-50 rounded-xl border border-red-200">
              <p className="text-red-700 text-center font-semibold">
                "Kenapa dulu nggak belajar automation ya?"
              </p>
            </div>
          </div>
          
          {/* Success Path */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-[#00ff88] relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#00ff88] to-[#00cc6a]"></div>
            
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-10 h-10 text-[#00cc6a]" />
              </div>
              <h3 className="text-2xl font-bold text-[#00cc6a] mb-2">Master Automation</h3>
              <p className="text-gray-600">Kalau kamu ambil action sekarang...</p>
            </div>
            
            <div className="relative mb-8">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1607567122082-527142de9cad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdWNjZXNzZnVsJTIwZW50cmVwcmVuZXVyJTIwYXV0b21hdGlvbnxlbnwxfHx8fDE3NTc0NzU3OTl8MA&ixlib=rb-4.0&q=80&w=1080"
                alt="Successful with automation"
                className="w-full h-48 object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-green-500/10 rounded-xl"></div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-[#00cc6a]">
                <div className="w-2 h-2 bg-[#00cc6a] rounded-full"></div>
                <span>Kerja cuma 4-6 jam, hasil 2x lipat</span>
              </div>
              <div className="flex items-center gap-3 text-[#00cc6a]">
                <div className="w-2 h-2 bg-[#00cc6a] rounded-full"></div>
                <span>Naik jabatan atau dapat client premium</span>
              </div>
              <div className="flex items-center gap-3 text-[#00cc6a]">
                <div className="w-2 h-2 bg-[#00cc6a] rounded-full"></div>
                <span>Jadi "automation expert" yang dicari perusahaan</span>
              </div>
              <div className="flex items-center gap-3 text-[#00cc6a]">
                <div className="w-2 h-2 bg-[#00cc6a] rounded-full"></div>
                <span>Punya waktu untuk keluarga dan hobi</span>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-green-50 rounded-xl border border-[#00ff88]">
              <p className="text-[#00cc6a] text-center font-semibold">
                "Alhamdulillah belajar automation di Jago N8N!"
              </p>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-[#0f172a] to-[#1e293b] text-white px-8 py-4 rounded-2xl">
            <Zap className="w-6 h-6 text-[#00ff88]" />
            <span className="text-lg font-semibold">Pilihan ada di tanganmu. Mau yang mana?</span>
          </div>
        </div>
      </div>
    </section>
  );
}