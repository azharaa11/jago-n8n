import { motion } from "framer-motion"
import { Card, CardContent } from "./ui/card"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { CheckCircle, X, ArrowRight, TrendingUp, Clock, Zap, Target } from "lucide-react"

const beforeItems = [
  { icon: X, text: "8+ jam untuk task manual", color: "text-red-500" },
  { icon: X, text: "Stress dengan deadline ketat", color: "text-red-500" },
  { icon: X, text: "Error rate tinggi & costly", color: "text-red-500" },
  { icon: X, text: "Growth bisnis lambat", color: "text-red-500" },
  { icon: X, text: "Burnout dari repetitive tasks", color: "text-red-500" }
]

const afterItems = [
  { icon: CheckCircle, text: "2 jam monitoring automation", color: "text-green-500" },
  { icon: CheckCircle, text: "Peace of mind dengan sistem reliable", color: "text-green-500" },
  { icon: CheckCircle, text: "Zero human error guaranteed", color: "text-green-500" },
  { icon: CheckCircle, text: "Scaling bisnis exponential", color: "text-green-500" },
  { icon: CheckCircle, text: "Focus pada strategy & innovation", color: "text-green-500" }
]

const transformationMetrics = [
  { icon: Clock, value: "80%", label: "Time Saved", color: "from-blue-500 to-cyan-500" },
  { icon: TrendingUp, value: "300%", label: "Productivity Boost", color: "from-purple-500 to-pink-500" },
  { icon: Zap, value: "10x", label: "ROI Return", color: "from-orange-500 to-yellow-500" },
  { icon: Target, value: "95%", label: "Accuracy Rate", color: "from-green-500 to-teal-500" }
]

export function TransformationSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Neutral Background with animated elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-100/50 via-white/30 to-slate-50/80"></div>
        
        {/* Animated geometric shapes */}
        <motion.div 
          className="absolute top-10 left-10 w-32 h-32 bg-blue-500/10 rounded-full"
          animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute top-40 right-20 w-24 h-24 bg-purple-400/10 rounded-lg rotate-45"
          animate={{ rotate: [45, 135, 45] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 left-1/4 w-20 h-20 bg-cyan-500/10 rounded-full"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        
        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-blue-300/30 rounded-full"
            animate={{
              x: [0, Math.random() * 200 - 100],
              y: [0, Math.random() * 200 - 100],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 8 + 6,
              repeat: Infinity,
              delay: Math.random() * 3
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-3xl md:text-6xl font-bold mb-6"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Siap{" "}
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
              Transform
            </span>{" "}
            Workflow Bisnismu?
          </motion.h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            <strong className="text-blue-600">Inilah Momen Terpenting:</strong> Ribuan professionals sudah merasakan perubahan dramatis setelah menguasai N8N automation. 
            Kini giliran Anda untuk bergabung dengan mereka dan transform karir serta bisnis Anda!
          </p>
        </motion.div>

        {/* Transformation Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {transformationMetrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <Card className="p-6 border-2 border-blue-200/50 bg-white/95 hover:border-blue-400 transition-all duration-300 hover:shadow-2xl hover:scale-105 backdrop-blur-sm">
                <CardContent className="p-0">
                  <motion.div 
                    className={`inline-flex p-3 rounded-full bg-gradient-to-r ${metric.color} mb-3 shadow-lg`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <metric.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <div className="text-3xl font-bold mb-1 text-gray-800">{metric.value}</div>
                  <div className="text-sm text-gray-600 font-medium">{metric.label}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Before vs After Comparison */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Before */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="h-full border-2 border-red-300/50 bg-white/90 hover:shadow-xl transition-all duration-300 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <motion.div 
                    className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center shadow-lg"
                    animate={{ rotate: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <X className="w-6 h-6 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold text-red-700">Sebelum Kursus</h3>
                    <p className="text-sm text-red-600">Kondisi yang melelahkan</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {beforeItems.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3"
                    >
                      <item.icon className={`w-5 h-5 ${item.color}`} />
                      <span className="text-sm text-gray-700">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* After */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="h-full border-2 border-green-300/50 bg-white/90 hover:shadow-xl transition-all duration-300 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <motion.div 
                    className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <CheckCircle className="w-6 h-6 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold text-green-700">Setelah Kursus</h3>
                    <p className="text-sm text-green-600">Hidup yang lebih produktif</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {afterItems.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3"
                    >
                      <item.icon className={`w-5 h-5 ${item.color}`} />
                      <span className="text-sm text-gray-700">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Transformation Arrow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex flex-col items-center">
            <motion.div 
              className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-2xl mb-4"
              animate={{ 
                rotate: [0, 180, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <ArrowRight className="w-10 h-10 text-white transform rotate-90" />
            </motion.div>
            <div className="text-lg font-bold text-white bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 rounded-full">
              ⚡ Transformasi dalam 30 hari
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}