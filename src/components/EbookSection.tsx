import { Button } from "./ui/button";
import { Download, Star, BookOpen, Zap, Users, Trophy, Play, Award, Clock, MessageCircle, Crown, Shield } from "lucide-react";
import { useState, useEffect } from 'react';

// Move animatedItems outside component to prevent useEffect dependency issues
const ANIMATED_ITEMS = [
  {
    type: "book",
    title: "Jago N8N E-Book"
  },
  {
    type: "card",
    icon: Play,
    title: "50+ Video Tutorial",
    gradient: "from-red-500 to-orange-500"
  },
  {
    type: "card",
    icon: Award,
    title: "Best Mentor",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    type: "card",
    icon: Clock,
    title: "Lifetime Update",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    type: "card",
    icon: MessageCircle,
    title: "1 on 1 Consultation",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    type: "card",
    icon: Shield,
    title: "Money Back Guarantee",
    gradient: "from-indigo-500 to-purple-600"
  }
];

export default function EbookSection() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  // Auto-rotate items every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCardIndex(prevIndex => (prevIndex + 1) % ANIMATED_ITEMS.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures this effect runs only once on mount.

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

  const renderItemContent = (item) => {
    if (item.type === "book") {
      return (
        <div className="group">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#00ff88] via-purple-500 to-pink-500 rounded-3xl blur-sm opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative bg-gradient-to-br from-[#0f172a] via-purple-900 to-[#1e293b] rounded-3xl p-8 text-white transform rotate-3 group-hover:rotate-0 transition-all duration-500 shadow-2xl border border-purple-500/30 backdrop-blur-sm overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-[#00ff88]/20 rounded-full blur-xl"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-purple-500/20 rounded-full blur-lg"></div>
              <div className="relative z-10 space-y-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#00ff88] to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Jago N8N</h3>
                  <p className="text-[#00ff88] font-semibold mb-4">Panduan Lengkap</p>
                </div>
                <div className="text-center space-y-2">
                  <h4 className="text-xl font-bold">N8N AUTOMATION</h4>
                  <p className="text-sm text-gray-300">Master Guide</p>
                </div>
                <div className="flex justify-center">
                  <div className="w-24 h-16 bg-white/10 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-8 h-8 text-white/60" />
                  </div>
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
          <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-br from-purple-600/40 to-blue-600/40 rounded-3xl -z-10 backdrop-blur-sm border border-purple-400/20 shadow-lg"></div>
          <div className="absolute -bottom-8 -right-8 w-full h-full bg-gradient-to-br from-[#00ff88]/30 to-purple-500/30 rounded-3xl -z-20 backdrop-blur-sm shadow-xl"></div>
        </div>
      );
    } else {
      return (
        <div className="group">
          <div className="relative">
            <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} rounded-3xl blur-sm opacity-75 group-hover:opacity-100 transition-opacity duration-500`}></div>
            <div className={`relative bg-gradient-to-br ${item.gradient} rounded-3xl p-8 text-white transform rotate-3 group-hover:rotate-0 transition-all duration-500 shadow-2xl border border-white/20 backdrop-blur-sm overflow-hidden`}>
              <div className="absolute top-0 right-0 w-20 h-20 bg-white/20 rounded-full blur-xl"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full blur-lg"></div>
              <div className="relative z-10 space-y-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm border border-white/30">
                    <item.icon className="w-8 h-8 text-white drop-shadow-lg" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 drop-shadow-md">{item.title}</h3>
                  <p className="text-white/90 font-semibold mb-4 drop-shadow-sm">Premium Feature</p>
                </div>
                <div className="text-center space-y-2">
                  <h4 className="text-xl font-bold drop-shadow-md">JAGO N8N</h4>
                  <p className="text-sm text-white/80 drop-shadow-sm">Exclusive Access</p>
                </div>
                <div className="flex justify-center">
                  <div className="w-24 h-16 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20 flex items-center justify-center">
                    <div className="text-center">
                      <item.icon className="w-6 h-6 text-white/70 mx-auto mb-1" />
                      <div className="text-xs text-white/60 font-medium">Premium</div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="flex justify-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-300 fill-current drop-shadow-sm" />
                    ))}
                  </div>
                  <p className="text-xs text-white/70 drop-shadow-sm">Premium quality assured</p>
                </div>
              </div>
            </div>
          </div>
          <div className={`absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-br ${item.gradient} opacity-40 rounded-3xl -z-10 backdrop-blur-sm border border-white/10 shadow-lg`}></div>
          <div className={`absolute -bottom-8 -right-8 w-full h-full bg-gradient-to-br ${item.gradient} opacity-30 rounded-3xl -z-20 backdrop-blur-sm shadow-xl`}></div>
        </div>
      );
    }
  };

  return (
    <section className="relative py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.1)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-[#00ff88]/20 to-purple-500/20 rounded-xl rotate-12 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-sm animate-bounce"></div>
        <div className="absolute bottom-32 left-1/4 w-12 h-12 bg-[#00ff88]/30 rounded-lg rotate-45 animate-pulse"></div>
        <div className="absolute bottom-20 right-1/3 w-8 h-8 bg-purple-400/40 rounded-full animate-ping"></div>
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-purple-600/10 to-transparent rounded-b-[100px]"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-l from-blue-600/10 to-transparent rounded-tl-full"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-white space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 bg-purple-500/20 text-purple-300 px-6 py-3 rounded-full border border-purple-400/30 backdrop-blur-sm">
                <BookOpen className="w-5 h-5" />
                <span className="font-semibold">BONUS EKSKLUSIF</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-[#00ff88] to-purple-400 bg-clip-text text-transparent">
                    Video Course Premium
                </span>
                <span className="block text-white mt-2">
                  Panduan Lengkap N8N Automation
                </span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Nikmati video pembelajaran lengkap dengan strategi, tips, dan real case studies untuk menguasai automation di berbagai industri.
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
            {/* Bagian yang diubah */}
            <div className="space-y-6">
              <div className="flex justify-between items-center bg-gradient-to-r from-purple-500/20 to-blue-600/20 rounded-2xl p-6 border border-purple-400/30 backdrop-blur-sm">
                <div className="flex flex-col items-center flex-1">
                  <div className="text-3xl font-bold text-[#00ff88]">150+</div>
                  <div className="text-sm text-gray-400">Halaman</div>
                </div>
                <div className="flex flex-col items-center flex-1">
                  <div className="text-3xl font-bold text-[#00ff88]">15</div>
                  <div className="text-sm text-gray-400">Case Studies</div>
                </div>
                <div className="flex flex-col items-center flex-1">
                  <div className="text-3xl font-bold text-[#00ff88]">20+</div>
                  <div className="text-sm text-gray-400">Templates</div>
                </div>
              </div>
              <Button 
                size="lg"
                className="w-full bg-gradient-to-r from-[#00ff88] to-purple-500 hover:from-[#00cc6a] hover:to-purple-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold group transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-purple-500/25"
              >
                <Download className="mr-3 w-5 h-5 group-hover:animate-bounce" />
                Mulai Belajar Sekarang
              </Button>
            </div>
          </div>
          
          {/* Right Visual - Animated Items, hidden on smaller screens */}
          <div className="hidden lg:block relative">
            <div className="relative z-10 min-h-[500px] w-full max-w-md mx-auto">
              {ANIMATED_ITEMS.map((item, index) => {
                const isCurrent = index === currentCardIndex;
                const isNext = (currentCardIndex + 1) % ANIMATED_ITEMS.length === index;

                let animationClasses = '';
                let zIndex = 1;

                if (isCurrent) {
                  // Kartu saat ini, terlihat, sedikit di-zoom
                  animationClasses = 'opacity-100 visible scale-100 rotate-3';
                  zIndex = 10;
                } else if (isNext) {
                  // Kartu berikutnya, siap masuk dari belakang
                  animationClasses = 'opacity-0 scale-75 -rotate-12 translate-y-12';
                  zIndex = 5;
                } else {
                  // Kartu yang sudah terlewati, kembali ke belakang
                  animationClasses = 'opacity-0 scale-75 -rotate-12 translate-y-12';
                  zIndex = 1;
                }

                return (
                  <div
                    key={`item-${index}`}
                    // Gunakan `transform-gpu` untuk performa animasi yang lebih baik
                    className={`absolute top-0 left-0 w-full h-full transition-all duration-1000 ease-in-out transform-gpu ${animationClasses}`}
                    style={{ zIndex }}
                  >
                    {renderItemContent(item)}
                  </div>
                );
              })}
            </div>
            
            {/* Progress Indicators */}
            <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
              {ANIMATED_ITEMS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentCardIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentCardIndex
                      ? 'bg-[#00ff88] scale-125'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            
            {/* Floating Icons */}
            <div className="absolute -top-8 -left-8 w-16 h-16 z-20">
              <div className="absolute inset-0 bg-gradient-to-r from-[#00ff88] to-purple-500 rounded-full blur-sm opacity-75 animate-pulse"></div>
              <div className="relative bg-gradient-to-r from-[#00ff88] to-purple-500 rounded-full w-full h-full flex items-center justify-center animate-bounce shadow-2xl border border-[#00ff88]/30">
                <Zap className="w-8 h-8 text-white drop-shadow-lg" />
              </div>
            </div>
            
            <div className="absolute -bottom-8 -right-8 w-12 h-12 z-20">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl blur-sm opacity-75 animate-pulse"></div>
              <div className="relative bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl w-full h-full flex items-center justify-center animate-pulse shadow-2xl border border-purple-400/30">
                <Trophy className="w-6 h-6 text-white drop-shadow-lg" />
              </div>
            </div>
            
            {/* Additional Decorative Elements */}
            <div className="absolute top-1/4 -left-4 w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-60 animate-ping z-10"></div>
            <div className="absolute bottom-1/3 -right-4 w-4 h-4 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full opacity-50 animate-bounce z-10"></div>
            <div className="absolute top-1/2 left-0 w-2 h-2 bg-[#00ff88] rounded-full opacity-70 animate-pulse z-10"></div>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-white/5 to-purple-500/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
          <div className="text-center text-white mb-8">
            <h3 className="text-2xl font-bold mb-2">Sudah Di Tonton Ribuan Kali!</h3>
          </div>
          <div className="grid grid-cols-4 gap-4 md:grid-cols-4 md:gap-8 text-center text-white">
            <div>
              <div className="text-xl md:text-3xl font-bold text-[#00ff88] mb-1 md:mb-2">5,847+</div>
              <div className="text-xs md:text-sm text-gray-400">Peserta</div>
            </div>
            <div>
              <div className="text-xl md:text-3xl font-bold text-purple-400 mb-1 md:mb-2">4.9/5</div>
              <div className="text-xs md:text-sm text-gray-400">Rating</div>
            </div>
            <div>
              <div className="text-xl md:text-3xl font-bold text-[#00ff88] mb-1 md:mb-2">50+</div>
              <div className="text-xs md:text-sm text-gray-400">Video</div>
            </div>
            <div>
              <div className="text-xl md:text-3xl font-bold text-purple-400 mb-1 md:mb-2">100%</div>
              <div className="text-xs md:text-sm text-gray-400">Mudah diakses</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}