import { GraduationCap, Briefcase, Rocket, BarChart3, Users } from "lucide-react";

export default function TargetAudience() {
  const audiences = [
    {
      icon: GraduationCap,
      title: "Mahasiswa",
      description: "Yang mau punya skill automation sebelum lulus dan jadi favorit recruiter",
      color: "bg-blue-500",
      lightColor: "bg-blue-50",
      textColor: "text-blue-600"
    },
    {
      icon: Briefcase,
      title: "Freelancer",
      description: "Yang ingin otomatisasi workflow client dan naikkan rate per project",
      color: "bg-purple-500",
      lightColor: "bg-purple-50",
      textColor: "text-purple-600"
    },
    {
      icon: Rocket,
      title: "Startup Founder",
      description: "Yang butuh efisiensi operasional dan scaling bisnis dengan budget terbatas",
      color: "bg-orange-500",
      lightColor: "bg-orange-50",
      textColor: "text-orange-600"
    },
    {
      icon: BarChart3,
      title: "Digital Marketer",
      description: "Yang mau otomatisasi campaign, lead nurturing, dan reporting analytics",
      color: "bg-green-500",
      lightColor: "bg-green-50",
      textColor: "text-green-600"
    },
    {
      icon: Users,
      title: "Karyawan Kantoran",
      description: "Yang pengen jadi 'automation hero' di kantor dan naik jabatan lebih cepat",
      color: "bg-indigo-500",
      lightColor: "bg-indigo-50",
      textColor: "text-indigo-600"
    }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0">
        {/* Hexagon Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.05),transparent_70%)]"></div>
        
        {/* Geometric Elements */}
        <div className="absolute top-20 left-20 w-16 h-16 bg-gradient-to-r from-emerald-200/30 to-teal-200/30 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-20 h-20 bg-gradient-to-r from-teal-200/20 to-cyan-200/20 rounded-xl rotate-45 animate-bounce"></div>
        <div className="absolute bottom-32 left-1/4 w-12 h-12 bg-emerald-300/25 rounded-lg rotate-12 animate-pulse animation-delay-300"></div>
        
        {/* User Icons Pattern */}
        <div className="absolute bottom-20 right-16 opacity-5">
          <div className="grid grid-cols-3 gap-2">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="w-4 h-4 bg-teal-500 rounded-full"></div>
            ))}
          </div>
        </div>
        
        {/* Wave Shape */}
        <div className="absolute bottom-0 right-0 w-80 h-40 bg-gradient-to-l from-teal-100/20 to-transparent rounded-tl-[100px]"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0f172a] mb-6">
            Siapa yang Harus
            <span className="block text-[#00ff88]">Bergabung?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Jago N8N membantu siapa pun yang ingin belajar dan berkembang dengan automation
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <div 
              key={index}
              className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#00ff88]/30 hover:-translate-y-2"
            >
              <div className={`w-16 h-16 ${audience.lightColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <audience.icon className={`w-8 h-8 ${audience.textColor}`} />
              </div>
              
              <h3 className="text-xl font-bold text-[#0f172a] mb-4">
                {audience.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {audience.description}
              </p>
              
              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex items-center gap-2 text-[#00ff88] font-semibold">
                  <div className="w-2 h-2 bg-[#00ff88] rounded-full"></div>
                  Perfect fit untuk kamu!
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-gradient-to-r from-[#0f172a] to-[#1e293b] rounded-2xl p-6 text-white text-center">
          <h3 className="text-xl font-bold mb-3">
            Kamu Termasuk Salah Satunya?
          </h3>
          <p className="text-md text-gray-300 mb-5 max-w-lg mx-auto">
            Gabung dengan 1000+ learners yang sudah transform karir mereka dengan automation
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-[#00ff88]">87%</div>
              <div className="text-xs text-gray-400">Naik Gaji/Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#00ff88]">92%</div>
              <div className="text-xs text-gray-400">Hemat Waktu 5+ Jam/Hari</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#00ff88]">95%</div>
              <div className="text-xs text-gray-400">Lebih Produktif</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}