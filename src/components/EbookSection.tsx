import { Button } from "./ui/button";
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Download, Star, BookOpen, Zap, Users, Trophy } from "lucide-react";

export default function EbookSection() {
  const ebookFeatures = [
    {
      icon: Zap,
      title: "15 Real Case Studies",
      description: "Workflow automation nyata dari berbagai industri"
    },
    {
      icon: Users,
      title: "Best Practices Guide",
      description: "Tips dan trik dari automation experts"
    },
    {
      icon: Trophy,
      title: "Templates Library",
      description: "20+ ready-to-use workflow templates"
    },
    {
      icon: BookOpen,
      title: "Step-by-Step Tutorial",
      description: "Panduan lengkap dari basic sampai advanced"
    }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.1)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        
        {/* Floating Geometric Shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-[#00ff88]/20 to-purple-500/20 rounded-xl rotate-12 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-sm animate-bounce"></div>
        <div className="absolute bottom-32 left-1/4 w-12 h-12 bg-[#00ff88]/30 rounded-lg rotate-45 animate-pulse animation-delay-500"></div>
        <div className="absolute bottom-20 right-1/3 w-8 h-8 bg-purple-400/40 rounded-full animate-ping"></div>
        
        {/* Wave Shapes */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-purple-600/10 to-transparent rounded-b-[100px]"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-l from-blue-600/10 to-transparent rounded-tl-full"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 bg-purple-500/20 text-purple-300 px-6 py-3 rounded-full border border-purple-400/30 backdrop-blur-sm">
                <BookOpen className="w-5 h-5" />
                <span className="font-semibold">BONUS EKSKLUSIF</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-[#00ff88] to-purple-400 bg-clip-text text-transparent">
                  E-Book Premium
                </span>
                <span className="block text-white mt-2">
                  "Panduan Lengkap N8N Automation"
                </span>
              </h2>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                Dapatkan panduan komprehensif 150+ halaman yang berisi strategi, tips, dan real case studies 
                automation workflow untuk berbagai industri.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {ebookFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-4 bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10 hover:border-purple-400/30 transition-all duration-300">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#00ff88]/20 to-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-[#00ff88]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">{feature.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 bg-gradient-to-r from-purple-500/20 to-blue-600/20 rounded-2xl p-6 border border-purple-400/30 backdrop-blur-sm">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#00ff88]">150+</div>
                  <div className="text-sm text-gray-400">Halaman</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#00ff88]">15</div>
                  <div className="text-sm text-gray-400">Case Studies</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#00ff88]">20+</div>
                  <div className="text-sm text-gray-400">Templates</div>
                </div>
              </div>
              
              <Button 
                size="lg"
                className="w-full bg-gradient-to-r from-[#00ff88] to-purple-500 hover:from-[#00cc6a] hover:to-purple-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold group transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-purple-500/25"
              >
                <Download className="mr-3 w-5 h-5 group-hover:animate-bounce" />
                Download E-Book GRATIS
              </Button>
              
              <p className="text-center text-gray-400 text-sm">
                * Tersedia dalam format PDF, EPUB, dan online reading
              </p>
            </div>
          </div>
          
          {/* Right Visual - E-book Cover */}
          <div className="relative">
            <div className="relative z-10 group">
              {/* Main Book Cover */}
              <div className="bg-gradient-to-br from-white to-gray-100 rounded-3xl p-8 shadow-2xl transform rotate-3 group-hover:rotate-0 transition-all duration-500 border-4 border-white/20 backdrop-blur-sm">
                <div className="bg-gradient-to-br from-[#0f172a] via-purple-900 to-[#1e293b] rounded-2xl p-8 text-white relative overflow-hidden">
                  {/* Book cover decorative elements */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-[#00ff88]/20 rounded-full blur-xl"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-purple-500/20 rounded-full blur-lg"></div>
                  
                  <div className="relative z-10 space-y-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-[#00ff88] to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <BookOpen className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">Sobat N8N</h3>
                      <p className="text-[#00ff88] font-semibold mb-4">Panduan Lengkap</p>
                    </div>
                    
                    <div className="text-center space-y-2">
                      <h4 className="text-xl font-bold">N8N AUTOMATION</h4>
                      <p className="text-sm text-gray-300">Master Guide</p>
                    </div>
                    
                    <div className="flex justify-center">
                      <ImageWithFallback
                        src="https://images.unsplash.com/photo-1721369561708-6110173f5aa4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlYm9vayUyMGRpZ2l0YWwlMjBib29rJTIwY292ZXIlMjBtb2Rlcm4lMjBkZXNpZ258ZW58MXx8fHwxNzU3NDc2NTU2fDA&ixlib=rb-4.0&q=80&w=200"
                        alt="Automation Workflow"
                        className="w-24 h-16 object-cover rounded-lg opacity-60"
                      />
                    </div>
                    
                    <div className="text-center">
                      <div className="flex justify-center gap-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-xs text-gray-400">Rated 4.9/5 by readers</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Shadow books behind */}
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-br from-purple-600/30 to-blue-600/30 rounded-3xl -z-10 backdrop-blur-sm border border-white/10"></div>
              <div className="absolute -bottom-8 -right-8 w-full h-full bg-gradient-to-br from-[#00ff88]/20 to-purple-500/20 rounded-3xl -z-20 backdrop-blur-sm"></div>
            </div>
            
            {/* Floating Icons */}
            <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-r from-[#00ff88] to-purple-500 rounded-full flex items-center justify-center animate-bounce shadow-lg">
              <Zap className="w-8 h-8 text-white" />
            </div>
            
            <div className="absolute -bottom-8 -right-8 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center animate-pulse shadow-lg">
              <Trophy className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-white/5 to-purple-500/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
          <div className="text-center text-white mb-8">
            <h3 className="text-2xl font-bold mb-2">Sudah Didownload Ribuan Kali!</h3>
            <p className="text-gray-300">E-book paling komprehensif tentang N8N automation di Indonesia</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-3xl font-bold text-[#00ff88] mb-2">5,847</div>
              <div className="text-sm text-gray-400">Downloads</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">4.9/5</div>
              <div className="text-sm text-gray-400">Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#00ff88] mb-2">150+</div>
              <div className="text-sm text-gray-400">Pages</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">100%</div>
              <div className="text-sm text-gray-400">Free</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}