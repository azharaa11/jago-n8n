import { Star, Quote, TrendingUp, Clock, DollarSign } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Andi Pratama",
      role: "Digital Marketing Manager",
      company: "PT. Tech Solutions",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Setelah belajar di Sobat N8N, saya berhasil otomatisasi semua campaign marketing. Sekarang hemat 6 jam per hari dan ROI campaign naik 150%!",
      highlight: "ROI naik 150%",
      icon: TrendingUp
    },
    {
      name: "Sarah Dewi",
      role: "Freelance Virtual Assistant",
      company: "Independent",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Dulu handle 5 client sudah overwhelmed. Setelah pakai automation dari Sobat N8N, sekarang bisa handle 15 client dengan mudah. Income naik 3x lipat!",
      highlight: "Income naik 3x",
      icon: DollarSign
    },
    {
      name: "Riko Ramadhan",
      role: "Startup Founder",
      company: "EduTech Startup",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Automation workflow dari Sobat N8N menghemat biaya operasional startup saya sampai 70%. Tim bisa fokus ke product development instead of manual tasks.",
      highlight: "Hemat 70% biaya ops",
      icon: TrendingUp
    },
    {
      name: "Maya Sari",
      role: "HR Manager",
      company: "Multinational Corp",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Proses recruitment yang biasanya 2 minggu, sekarang cuma 3 hari berkat automation. Boss sampai tanya 'Maya ini pake magic apa?'",
      highlight: "5x lebih cepat",
      icon: Clock
    },
    {
      name: "Dimas Aditya",
      role: "E-commerce Manager",
      company: "Online Retail",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Inventory management, order processing, customer service - semua otomatis! Revenue online store naik 200% dalam 3 bulan.",
      highlight: "Revenue naik 200%",
      icon: DollarSign
    },
    {
      name: "Linda Kusuma",
      role: "Content Creator",
      company: "Influencer",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Social media posting, analytics reporting, sponsor outreach - semua jalan otomatis. Sekarang bisa fokus bikin konten berkualitas.",
      highlight: "Hemat 4 jam/hari",
      icon: Clock
    }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-amber-900/80 via-orange-900/70 to-yellow-900/60 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0">
        {/* Star Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(245,158,11,0.05),transparent_50%),radial-gradient(circle_at_75%_75%,rgba(249,115,22,0.05),transparent_50%)]"></div>
        
        {/* Quote Shapes */}
        <div className="absolute top-24 left-20 w-16 h-16 bg-gradient-to-r from-amber-200/30 to-orange-200/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 right-24 w-20 h-20 bg-gradient-to-r from-orange-200/25 to-yellow-200/25 rounded-xl rotate-12 animate-bounce"></div>
        <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-yellow-300/20 rounded-lg rotate-45 animate-pulse animation-delay-400"></div>
        
        {/* Testimonial Quote Pattern */}
        <div className="absolute top-40 left-1/3 opacity-5">
          <div className="text-6xl text-amber-500">"</div>
        </div>
        <div className="absolute bottom-40 right-1/3 opacity-5">
          <div className="text-6xl text-orange-500 rotate-180">"</div>
        </div>
        
        {/* Stars Pattern */}
        <div className="absolute top-16 right-16 opacity-10">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-3 h-3 bg-amber-400" style={{clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'}}></div>
            ))}
          </div>
        </div>
        
        {/* Wave Decoration */}
        <div className="absolute bottom-0 right-0 w-72 h-36 bg-gradient-to-l from-orange-100/20 to-transparent rounded-tl-[90px]"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Testimoni & Bukti
            <span className="block text-[#00ff88]">Sosial</span>
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Ribuan profesional sudah transform karir mereka. Kamu yang selanjutnya?
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/20 hover:-translate-y-2 group hover:bg-white/15"
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-300">{testimonial.role}</p>
                  <p className="text-xs text-[#00ff88] font-semibold">{testimonial.company}</p>
                </div>
              </div>
              
              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              {/* Quote */}
              <div className="relative mb-6">
                <Quote className="w-8 h-8 text-[#00ff88]/20 absolute -top-2 -left-2" />
                <p className="text-gray-200 leading-relaxed italic pl-6">
                  "{testimonial.text}"
                </p>
              </div>
              
              {/* Highlight */}
              <div className="flex items-center gap-3 bg-[#00ff88]/10 rounded-2xl p-4 border border-[#00ff88]/20">
                <div className="w-10 h-10 bg-[#00ff88]/20 rounded-xl flex items-center justify-center">
                  <testimonial.icon className="w-5 h-5 text-[#00ff88]" />
                </div>
                <div>
                  <div className="font-bold text-[#00ff88]">{testimonial.highlight}</div>
                  <div className="text-xs text-gray-300">Hasil nyata</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Trust Signals */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-white/20">
          <h3 className="text-2xl font-bold text-center text-white mb-8">
            Dipercaya oleh 1000+ Professionals
          </h3>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-[#00ff88]">1000+</div>
              <div className="text-sm text-gray-300">Happy Learners</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-[#00ff88]">4.9/5</div>
              <div className="text-sm text-gray-300">Average Rating</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-[#00ff88]">95%</div>
              <div className="text-sm text-gray-300">Success Rate</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-[#00ff88]">100%</div>
              <div className="text-sm text-gray-300">Satisfaction</div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-lg text-gray-200 max-w-2xl mx-auto">
              "Platform terbaik untuk belajar automation di Indonesia. Materi lengkap, mentor berpengalaman, dan komunitas yang supportif."
            </p>
            <div className="mt-4 flex items-center justify-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-gray-300 ml-2">- Google Reviews</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}