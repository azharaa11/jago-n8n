import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Zap, 
  Brain, 
  Database, 
  Target, 
  TrendingUp 
} from "lucide-react"

const cards = [
  {
    id: 1,
    icon: Zap,
    gradient: "from-violet-500 to-cyan-500",
    title: "Automation Journey",
    duration: "30",
    unit: "DAYS",
    steps: [
      { label: "Foundation & Setup", status: "✓", color: "bg-violet-500", textColor: "text-green-600" },
      { label: "Advanced Workflows", status: "◐", color: "bg-cyan-500", textColor: "text-violet-600" },
      { label: "Expert Integration", status: "", color: "bg-slate-300", textColor: "text-slate-400" }
    ]
  },
  {
    id: 2,
    icon: Brain,
    gradient: "from-purple-500 to-pink-500",
    title: "AI-Powered Learning",
    duration: "50+",
    unit: "TOOLS",
    steps: [
      { label: "ChatGPT Integration", status: "✓", color: "bg-purple-500", textColor: "text-green-600" },
      { label: "Smart Workflows", status: "✓", color: "bg-pink-500", textColor: "text-green-600" },
      { label: "AI Optimization", status: "◐", color: "bg-slate-300", textColor: "text-purple-600" }
    ]
  },
  {
    id: 3,
    icon: Database,
    gradient: "from-blue-500 to-teal-500",
    title: "Data Integration Hub",
    duration: "500+",
    unit: "APPS",
    steps: [
      { label: "Real-time Sync", status: "✓", color: "bg-blue-500", textColor: "text-green-600" },
      { label: "API Connections", status: "✓", color: "bg-teal-500", textColor: "text-green-600" },
      { label: "Custom Endpoints", status: "◐", color: "bg-slate-300", textColor: "text-blue-600" }
    ]
  },
  {
    id: 4,
    icon: Target,
    gradient: "from-orange-500 to-red-500",
    title: "Results & Analytics",
    duration: "98%",
    unit: "SUCCESS",
    steps: [
      { label: "Performance Tracking", status: "✓", color: "bg-orange-500", textColor: "text-green-600" },
      { label: "Error Monitoring", status: "✓", color: "bg-red-500", textColor: "text-green-600" },
      { label: "ROI Analysis", status: "◐", color: "bg-slate-300", textColor: "text-orange-600" }
    ]
  },
  {
    id: 5,
    icon: TrendingUp,
    gradient: "from-green-500 to-emerald-500",
    title: "Business Growth",
    duration: "10x",
    unit: "FASTER",
    steps: [
      { label: "Process Automation", status: "✓", color: "bg-green-500", textColor: "text-green-600" },
      { label: "Scale Operations", status: "◐", color: "bg-emerald-500", textColor: "text-green-600" },
      { label: "ROI Optimization", status: "", color: "bg-slate-300", textColor: "text-slate-400" }
    ]
  }
]

export default function RotatingCard() {
  const [currentCard, setCurrentCard] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentCard((prev) => (prev + 1) % cards.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative w-full max-w-md mx-auto h-96">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentCard}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          {/* CARD WRAPPER */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 border border-slate-200 h-full flex flex-col">
            
            {/* Header (ikon + angka) */}
            <div className="flex items-center justify-between mb-6">
              <div className={`w-12 h-12 bg-gradient-to-r ${cards[currentCard].gradient} rounded-xl flex items-center justify-center`}>
                {(() => {
                  const Icon = cards[currentCard].icon
                  return <Icon className="w-6 h-6 text-white" />
                })()}
              </div>
              <div className="text-right">
                <div className="text-2xl font-semibold">{cards[currentCard].duration}</div>
                <div className="text-xs text-slate-500">{cards[currentCard].unit}</div>
              </div>
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold text-slate-900 mb-4">
              {cards[currentCard].title}
            </h3>

            {/* Steps */}
            <div className="space-y-3">
              {cards[currentCard].steps.map((step, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className={`w-2 h-2 ${step.color} rounded-full`}></div>
                  <span className="text-sm">{step.label}</span>
                  {step.status && (
                    <span className={`ml-auto text-xs ${step.textColor}`}>
                      {step.status}
                    </span>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Indicator dots */}
      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {cards.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentCard(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentCard 
                ? 'bg-violet-500 w-6' 
                : 'bg-slate-300 hover:bg-violet-300 w-2'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
