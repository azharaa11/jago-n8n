import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { 
  Workflow, 
  Brain, 
  Database, 
  Zap, 
  ImageIcon, 
  FileText, 
  BarChart3,
  Clock,
  Users,
  CheckCircle,
  Star,
  Target,
  TrendingUp,
  PlayCircle,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Award,
  Rocket
} from "lucide-react"

const modules = [
  {
    id: 1,
    title: "N8N Fundamentals & Workflow Thinking",
    description: "Master dasar-dasar n8n dan konsep workflow automation untuk membangun fondasi yang kuat.",
    duration: "4 jam",
    lessons: 12,
    level: "Pemula",
    icon: Workflow,
    color: "from-blue-500 to-cyan-500",
    bgPattern: "bg-gradient-to-br from-blue-50 to-cyan-50",
    borderColor: "border-blue-200",
    features: [
      "Instalasi dan setup n8n professional",
      "Interface mastery & navigation",
      "Workflow design principles & best practices",
      "Error handling & debugging techniques"
    ],
    highlight: "Foundation Module",
    difficulty: 1,
    completion: "95%"
  },
  {
    id: 2,
    title: "Data Integration & API Mastery",
    description: "Kuasai integrasi data advanced dari berbagai sumber dan API management yang powerful.",
    duration: "6 jam",
    lessons: 18,
    level: "Menengah",
    icon: Database,
    color: "from-purple-500 to-pink-500",
    bgPattern: "bg-gradient-to-br from-purple-50 to-pink-50",
    borderColor: "border-purple-200",
    features: [
      "REST API integrations & authentication",
      "Database connections (SQL, NoSQL)",
      "Advanced data transformation",
      "Webhook configurations & triggers"
    ],
    highlight: "Integration Expert",
    difficulty: 2,
    completion: "87%"
  },
  {
    id: 3,
    title: "AI Content Generation Revolution",
    description: "Revolusi content creation dengan AI integration yang menghasilkan konten berkualitas tinggi.",
    duration: "5 jam",
    lessons: 15,
    level: "Menengah",
    icon: Brain,
    color: "from-cyan-500 to-teal-500",
    bgPattern: "bg-gradient-to-br from-cyan-50 to-teal-50",
    borderColor: "border-cyan-200",
    features: [
      "OpenAI API integration & optimization",
      "AI image generation workflows",
      "Automated content publishing",
      "Advanced prompt engineering"
    ],
    highlight: "AI Specialist",
    difficulty: 2,
    completion: "92%"
  },
  {
    id: 4,
    title: "Advanced Automation Strategies",
    description: "Teknik enterprise-level untuk monitoring, scaling, dan optimasi workflow automation.",
    duration: "7 jam",
    lessons: 20,
    level: "Advanced",
    icon: Zap,
    color: "from-orange-500 to-red-500",
    bgPattern: "bg-gradient-to-br from-orange-50 to-red-50",
    borderColor: "border-orange-200",
    features: [
      "Performance optimization & scaling",
      "Advanced monitoring & alerting",
      "Enterprise integrations & security",
      "Workflow architecture best practices"
    ],
    highlight: "Enterprise Ready",
    difficulty: 3,
    completion: "78%"
  },
  {
    id: 5,
    title: "Visual Content Automation Hub",
    description: "Otomatisasi complete untuk konten visual, social media, dan brand consistency.",
    duration: "4 jam",
    lessons: 14,
    level: "Menengah",
    icon: ImageIcon,
    color: "from-green-500 to-emerald-500",
    bgPattern: "bg-gradient-to-br from-green-50 to-emerald-50",
    borderColor: "border-green-200",
    features: [
      "Automated design generation",
      "Social media automation tools",
      "Brand template systems",
      "Bulk content creation workflows"
    ],
    highlight: "Creative Automation",
    difficulty: 2,
    completion: "89%"
  },
  {
    id: 6,
    title: "Analytics & Business Intelligence",
    description: "Dashboard otomatis, reporting real-time, dan business intelligence yang actionable.",
    duration: "5 jam",
    lessons: 16,
    level: "Advanced",
    icon: BarChart3,
    color: "from-violet-500 to-purple-500",
    bgPattern: "bg-gradient-to-br from-violet-50 to-purple-50",
    borderColor: "border-violet-200",
    features: [
      "Automated reporting systems",
      "Real-time dashboard creation",
      "Advanced data visualization",
      "Business intelligence automation"
    ],
    highlight: "Data Expert",
    difficulty: 3,
    completion: "84%"
  }
]

const getDifficultyStars = (difficulty: number) => {
  return Array.from({ length: 3 }, (_, i) => (
    <Star 
      key={i} 
      className={`w-3 h-3 ${i < difficulty ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} 
    />
  ))
}

export function CourseModules() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  // Auto-scroll functionality with pause on hover
  useEffect(() => {
    if (isHovered) return // Stop auto-scroll when hovered

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % modules.length)
    }, 5000) // Auto-scroll every 5 seconds

    return () => clearInterval(interval)
  }, [isHovered])

  const nextModule = () => {
    setCurrentIndex((prev) => (prev + 1) % modules.length)
  }

  const prevModule = () => {
    setCurrentIndex((prev) => (prev - 1 + modules.length) % modules.length)
  }

  const currentModule = modules[currentIndex]

  return (
    <section id="modules" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30">
        {/* Animated background elements */}
        <motion.div 
          className="absolute top-10 right-20 w-40 h-40 bg-blue-500/5 rounded-full blur-2xl"
          animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 left-10 w-32 h-32 bg-purple-500/5 rounded-full blur-xl"
          animate={{ x: [0, -40, 0], y: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="mb-6"
          >
            <Badge className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-600 border-blue-500/30 text-lg px-6 py-2">
              📚 Kurikulum Terdepan
            </Badge>
          </motion.div>
          <motion.h2 
            className="text-4xl md:text-6xl font-bold mb-8"
            animate={{ scale: [1, 1.01, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            6 Modul{" "}
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
              Game-Changing
            </span>
          </motion.h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
            Kurikulum terlengkap dan terupdate yang dirancang khusus untuk Indonesian market. 
            Dari zero to hero dalam automation mastery!
          </p>
        </motion.div>

        {/* New Split Layout: Narrative + Single Card */}
        <div 
          className="relative mb-12"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              {/* Left: Dynamic Narrative */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6 p-8"
              >
                <div className="flex items-center gap-3 mb-4">
                  <currentModule.icon className={`w-12 h-12 bg-gradient-to-r ${currentModule.color} p-2 rounded-xl text-white`} />
                  <Badge className={`bg-gradient-to-r ${currentModule.color} text-white border-0 text-base px-4 py-1`}>
                    {currentModule.highlight}
                  </Badge>
                </div>

                <h3 className="text-3xl md:text-4xl font-bold leading-tight text-gray-800">
                  {currentModule.title}
                </h3>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  {currentModule.description}
                </p>

                <div className="space-y-3 pt-4">
                  <h4 className="font-bold text-lg text-gray-700 mb-3">Yang Akan Anda Kuasai:</h4>
                  {currentModule.features.map((feature: string, idx: number) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * idx }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-base text-gray-700">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="flex items-center gap-6 pt-4">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-blue-500" />
                    <span className="font-medium text-gray-700">{currentModule.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <PlayCircle className="w-5 h-5 text-green-500" />
                    <span className="font-medium text-gray-700">{currentModule.lessons} lessons</span>
                  </div>
                  <Badge variant="secondary" className="text-sm">
                    {currentModule.level}
                  </Badge>
                </div>

                <div className="pt-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-600">Tingkat Penyelesaian Siswa</span>
                    <span className="text-sm font-bold text-green-600">{currentModule.completion}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <motion.div
                      className="bg-gradient-to-r from-green-500 to-blue-500 h-3 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: currentModule.completion }}
                      transition={{ duration: 1 }}
                    />
                  </div>
                </div>
              </motion.div>

              {/* Right: Single Module Card */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <ModuleCard module={currentModule} index={0} />
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <Button
              variant="outline"
              size="icon"
              onClick={prevModule}
              className="rounded-full border-blue-500/30 hover:bg-blue-500/10"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            <div className="flex gap-2">
              {modules.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-blue-500 w-8'
                      : 'bg-muted hover:bg-blue-500/50'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextModule}
              className="rounded-full border-blue-500/30 hover:bg-blue-500/10"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-cyan-50 rounded-3xl p-12 border-2 border-blue-200/50 relative overflow-hidden shadow-xl">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="grid grid-cols-12 gap-4 transform rotate-12 scale-150">
                {Array.from({ length: 144 }).map((_, i) => (
                  <motion.div 
                    key={i} 
                    className="w-2 h-2 bg-purple-500 rounded-full"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity, delay: Math.random() * 2 }}
                  />
                ))}
              </div>
            </div>
            
            <div className="relative z-10">
              <motion.h3 
                className="text-4xl font-bold mb-6 text-gray-800"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                🎯 Complete Learning Experience
              </motion.h3>
              <p className="text-muted-foreground mb-10 max-w-3xl mx-auto text-xl leading-relaxed">
                Dapatkan akses unlimited ke semua modul, update terbaru, komunitas eksklusif, 
                dan personal mentoring untuk memastikan success journey Anda!
              </p>
              
              {/* Enhanced Features */}
              <div className="grid md:grid-cols-3 gap-8 mb-10">
                <motion.div 
                  className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/70 backdrop-blur-sm border border-white/50"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Users className="w-12 h-12 text-blue-500" />
                  <span className="font-bold text-lg">1000+ Community</span>
                  <span className="text-sm text-muted-foreground text-center">Active learners & experts sharing knowledge daily</span>
                </motion.div>
                <motion.div 
                  className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/70 backdrop-blur-sm border border-white/50"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Award className="w-12 h-12 text-green-500" />
                  <span className="font-bold text-lg">Sertifikat Resmi</span>
                  <span className="text-sm text-muted-foreground text-center">Industry recognized certification for career advancement</span>
                </motion.div>
                <motion.div 
                  className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/70 backdrop-blur-sm border border-white/50"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <TrendingUp className="w-12 h-12 text-purple-500" />
                  <span className="font-bold text-lg">Career Boost</span>
                  <span className="text-sm text-muted-foreground text-center">Average 40% salary increase within 6 months</span>
                </motion.div>
              </div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 text-xl px-16 py-8 h-auto"
                >
                  🚀 Enroll Now - Transform Your Career!
                </Button>
              </motion.div>
              <div className="mt-6 text-lg">
                <span className="line-through text-gray-500">Normal: Rp 4.997.000</span>
                <span className="text-cyan-600 ml-4 font-bold text-2xl">Special: Rp 2.997.000</span>
                <span className="text-blue-500 ml-4 font-bold">⏰ Limited time!</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function ModuleCard({ module, index }: { module: any, index: number }) {
  return (
    <motion.div
      whileHover={{ 
        y: -5,
        transition: { duration: 0.3 }
      }}
      className="group cursor-pointer h-full"
    >
      {/* Visual Device Mockup Style - Inspired by reference */}
      <div className={`relative rounded-3xl overflow-hidden bg-gradient-to-br ${module.color} p-8 shadow-2xl h-full min-h-[600px] flex items-center justify-center`}>
        {/* Decorative background elements */}
        <motion.div 
          className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-10 left-10 w-24 h-24 bg-white/10 rounded-full blur-xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        />
        
        {/* Main Content Container - Device Frame Style */}
        <div className="relative z-10 w-full max-w-sm">
          {/* Device Frame */}
          <div className="bg-gray-900 rounded-[2.5rem] p-3 shadow-2xl">
            {/* Screen */}
            <div className="bg-white rounded-[2rem] p-6 space-y-6 min-h-[480px] flex flex-col">
              {/* Header with Icon */}
              <div className="flex items-center justify-between">
                <motion.div 
                  className={`p-3 rounded-2xl bg-gradient-to-r ${module.color}`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <module.icon className="w-8 h-8 text-white" />
                </motion.div>
                <Badge className={`bg-gradient-to-r ${module.color} text-white border-0`}>
                  Modul {module.id}
                </Badge>
              </div>
              
              {/* Module Badge */}
              <div className="text-center">
                <Badge 
                  variant="outline" 
                  className="text-sm px-4 py-1 border-2"
                >
                  {module.highlight}
                </Badge>
              </div>
              
              {/* Progress Circle or Visual Element */}
              <div className="flex-1 flex items-center justify-center">
                <div className="relative w-40 h-40">
                  {/* Animated circular progress */}
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="80"
                      cy="80"
                      r="70"
                      stroke="#e5e7eb"
                      strokeWidth="8"
                      fill="none"
                    />
                    <motion.circle
                      cx="80"
                      cy="80"
                      r="70"
                      stroke="url(#gradient)"
                      strokeWidth="8"
                      fill="none"
                      strokeLinecap="round"
                      initial={{ strokeDasharray: "0 440" }}
                      animate={{ strokeDasharray: `${440 * parseInt(module.completion) / 100} 440` }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" className={`text-blue-500`} stopColor="currentColor" />
                        <stop offset="100%" className={`text-green-500`} stopColor="currentColor" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="text-3xl font-bold text-gray-900">{module.lessons}</div>
                    <div className="text-xs text-gray-500 uppercase">Lessons</div>
                  </div>
                </div>
              </div>
              
              {/* Stats Preview */}
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                  <span className="text-sm text-gray-600">Duration</span>
                  <span className="font-bold text-gray-900">{module.duration}</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                  <span className="text-sm text-gray-600">Completion Rate</span>
                  <span className={`font-bold bg-gradient-to-r ${module.color} bg-clip-text text-transparent`}>
                    {module.completion}
                  </span>
                </div>
              </div>
              
              {/* CTA Button */}
              <Button 
                className={`w-full bg-gradient-to-r ${module.color} hover:shadow-lg text-white transition-all duration-300`}
                size="lg"
              >
                <PlayCircle className="w-5 h-5 mr-2" />
                Start Learning
              </Button>
            </div>
          </div>
          
          {/* Device bottom indicator */}
          <div className="flex justify-center mt-4">
            <div className="w-16 h-1 bg-white/30 rounded-full"></div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}