import { Calendar, CheckCircle, ArrowRight, Zap, Target, Trophy } from "lucide-react";

export default function LearningRoadmap() {
  const roadmapSteps = [
    {
      week: "Minggu 1",
      title: "Foundation & Basic Workflow",
      description: "Menguasai dasar-dasar n8n dan membuat workflow pertama",
      goals: [
        "Setup n8n dan environment",
        "Memahami konsep node dan connection",
        "Membuat 3 basic workflow",
        "Integrasi dengan Google Sheets & Email"
      ],
      color: "from-blue-500 to-blue-600",
      icon: Calendar
    },
    {
      week: "Minggu 2", 
      title: "Real World Implementation",
      description: "Implementasi automation untuk case nyata di dunia kerja",
      goals: [
        "Automation social media posting",
        "Lead generation dan nurturing",
        "Data synchronization antar platform",
        "Error handling dan monitoring"
      ],
      color: "from-purple-500 to-purple-600",
      icon: Target
    },
    {
      week: "Minggu 3",
      title: "Advanced & Optimization",
      description: "Level up dengan advanced features dan optimasi workflow",
      goals: [
        "Complex conditional logic",
        "API integration dan webhook",
        "Performance optimization",
        "Scaling dan deployment strategy"
      ],
      color: "from-[#00ff88] to-[#00cc6a]",
      icon: Trophy
    }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0">
        {/* Step Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_2px,transparent_2px),linear-gradient(90deg,rgba(59,130,246,0.03)_2px,transparent_2px)] bg-[size:60px_60px]"></div>
        
        {/* Road Elements */}
        <div className="absolute top-32 left-24 w-20 h-20 bg-gradient-to-r from-indigo-200/25 to-blue-200/25 rounded-full animate-pulse"></div>
        <div className="absolute bottom-40 right-32 w-16 h-16 bg-gradient-to-r from-blue-200/30 to-cyan-200/30 rounded-xl rotate-45 animate-bounce"></div>
        <div className="absolute top-2/3 left-1/3 w-12 h-12 bg-cyan-300/20 rounded-lg rotate-12 animate-pulse animation-delay-700"></div>
        
        {/* Roadmap Icons */}
        <div className="absolute top-20 right-1/4 opacity-8">
          <div className="flex flex-col items-center gap-3">
            <div className="w-4 h-4 bg-indigo-400 rounded-full"></div>
            <div className="w-0.5 h-8 bg-indigo-400"></div>
            <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
            <div className="w-0.5 h-8 bg-blue-500"></div>
            <div className="w-4 h-4 bg-cyan-500 rounded-full"></div>
          </div>
        </div>
        
        {/* Curved Wave */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-blue-100/20 to-transparent rounded-t-[60px]"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0f172a] mb-6">
            Roadmap Belajar
            <span className="block text-[#00ff88]">Journey</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transformasi dari zero ke hero dalam 3 minggu dengan metode step-by-step yang terbukti
          </p>
        </div>
        
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-32 left-1/2 transform -translate-x-1/2 w-0.5 h-96 bg-gradient-to-b from-[#00ff88] to-transparent"></div>
          
          <div className="space-y-16">
            {roadmapSteps.map((step, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Content */}
                <div className="flex-1 bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center`}>
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[#00ff88] uppercase tracking-wide">
                        {step.week}
                      </div>
                      <h3 className="text-2xl font-bold text-[#0f172a]">
                        {step.title}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    {step.description}
                  </p>
                  
                  <div className="space-y-4">
                    <h4 className="font-semibold text-[#0f172a] text-lg">Yang akan kamu kuasai:</h4>
                    {step.goals.map((goal, goalIndex) => (
                      <div key={goalIndex} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-[#00ff88] flex-shrink-0" />
                        <span className="text-gray-600">{goal}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Visual Indicator */}
                <div className="relative">
                  <div className={`w-32 h-32 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center shadow-2xl`}>
                    <div className="text-3xl font-bold text-white">
                      {index + 1}
                    </div>
                  </div>
                  
                  {index < roadmapSteps.length - 1 && (
                    <div className="lg:hidden absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                      <ArrowRight className="w-8 h-8 text-[#00ff88] rotate-90" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-20 px-4">
  <div className="bg-gradient-to-r from-[#0f172a] to-[#1e293b] 
                  rounded-2xl md:rounded-3xl 
                  p-6 md:p-10 lg:p-14 
                  text-white text-center 
                  max-w-2xl mx-auto shadow-lg hover:shadow-2xl transition-all duration-300">
    <div className="max-w-xl mx-auto">
      <Zap className="w-10 h-10 md:w-14 md:h-14 text-[#00ff88] mx-auto mb-4" />
      <h3 className="text-xl md:text-3xl font-bold mb-4">
        Siap Jadi Automation Expert dalam 3 Minggu?
      </h3>
      <p className="text-base md:text-lg text-gray-300 mb-6 leading-relaxed">
        Dengan metode learning by doing, kamu akan langsung praktik 
        dan bisa implement di pekerjaan real-time.
      </p>

      <div className="grid grid-cols-3 gap-4 md:gap-8 mt-8">
        <div className="text-center">
          <div className="text-2xl md:text-4xl font-bold text-[#00ff88] mb-1">21</div>
          <div className="text-gray-300 text-xs md:text-base">Hari Transformasi</div>
        </div>
        <div className="text-center">
          <div className="text-2xl md:text-4xl font-bold text-[#00ff88] mb-1">15+</div>
          <div className="text-gray-300 text-xs md:text-base">Real Projects</div>
        </div>
        <div className="text-center">
          <div className="text-2xl md:text-4xl font-bold text-[#00ff88] mb-1">∞</div>
          <div className="text-gray-300 text-xs md:text-base">Lifetime Access</div>
        </div>
      </div>
    </div>
  </div>
</div>

      </div>
    </section>
  );
}