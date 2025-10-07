import { motion } from "framer-motion"
import { Card, CardContent } from "./ui/card"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { 
  AlertTriangle, 
  Clock, 
  TrendingDown, 
  Zap, 
  Target, 
  TrendingUp,
  CheckCircle,
  ArrowRight,
  DollarSign,
  Users,
  Brain,
  Shield,
  Rocket,
  BarChart3,
  Timer,
  XCircle,
  Activity,
  PieChart,
  TrendingDownIcon
} from "lucide-react"

const problems = [
  {
    icon: Clock,
    title: "Waktu Terbuang Sia-sia",
    description: "8+ jam per hari untuk task repetitif yang seharusnya bisa diotomatisasi",
    color: "text-red-500",
    bgColor: "bg-red-500/10",
    impact: "Kehilangan 2.920 jam produktif per tahun",
    visual: (
      <div className="flex flex-col items-center justify-center mt-6 p-4 bg-red-50/80 rounded-xl">
        <div className="relative w-32 h-16 mb-3">
          {/* Time waste visualization */}
          <div className="flex items-end space-x-1 h-full">
            {[1,2,3,4,5,6,7,8].map((i) => (
              <motion.div 
                key={i} 
                className={`w-3 rounded-t ${i <= 6 ? 'bg-red-500' : 'bg-gray-200'}`}
                style={{ height: `${(i * 12) + 10}px` }}
                animate={{ scaleY: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
              />
            ))}
          </div>
          <div className="absolute -bottom-1 left-0 right-0 text-center">
            <span className="text-xs text-red-600 font-medium bg-white px-2 py-1 rounded">75% manual tasks</span>
          </div>
        </div>
        <motion.div 
          className="flex items-center gap-2 text-sm text-red-600"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Timer className="w-4 h-4" />
          <span>6 dari 8 jam terbuang</span>
        </motion.div>
      </div>
    )
  },
  {
    icon: TrendingDown,
    title: "Produktivitas Rendah",
    description: "Stuck dengan cara kerja konvensional yang menghambat growth",
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    impact: "Revenue potential loss hingga 60%",
    visual: (
      <div className="flex flex-col items-center justify-center mt-6 p-4 bg-orange-50/80 rounded-xl">
        <div className="relative w-32 h-16 mb-3">
          {/* Declining productivity chart */}
          <motion.div 
            className="w-full h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center relative overflow-hidden"
            animate={{ scale: [1, 0.95, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent transform -skew-x-12"></div>
            <TrendingDown className="w-8 h-8 text-white z-10" />
            <div className="absolute bottom-2 right-2 text-white text-xs font-bold">-60%</div>
          </motion.div>
        </div>
        <motion.div 
          className="flex items-center gap-2 text-sm text-orange-600"
          animate={{ x: [-2, 2, -2] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <BarChart3 className="w-4 h-4" />
          <span>Potensi revenue menurun</span>
        </motion.div>
      </div>
    )
  },
  {
    icon: AlertTriangle,
    title: "Human Error Mahal",
    description: "Kesalahan manual yang mengakibatkan kerugian finansial dan reputasi",
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
    impact: "Kerugian rata-rata $50K per error",
    visual: (
      <div className="flex flex-col items-center justify-center mt-6 p-4 bg-yellow-50/80 rounded-xl">
        <div className="relative w-32 h-16 mb-3">
          {/* Error cost visualization */}
          <div className="flex items-center justify-center h-full space-x-2">
            <motion.div 
              className="relative"
              animate={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <DollarSign className="w-12 h-12 text-yellow-500" />
              <motion.div 
                className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <AlertTriangle className="w-2 h-2 text-white" />
              </motion.div>
            </motion.div>
            <ArrowRight className="w-4 h-4 text-yellow-500" />
            <motion.div 
              className="text-lg font-bold text-red-500"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              50K+
            </motion.div>
          </div>
        </div>
        <motion.div 
          className="flex items-center gap-2 text-sm text-yellow-600"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <XCircle className="w-4 h-4" />
          <span>Loss per error</span>
        </motion.div>
      </div>
    )
  }
]

const solutions = [
  {
    icon: Zap,
    title: "Otomatisasi Pintar",
    description: "Setup workflow sekali, jalan selamanya tanpa intervensi manual",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    benefit: "Save 80% waktu kerja",
    roi: "ROI 500% dalam 3 bulan",
    visual: (
      <div className="flex flex-col items-center justify-center mt-6 p-4 bg-blue-50/80 rounded-xl">
        <div className="relative w-32 h-16 mb-3">
          {/* Automation flow */}
          <div className="flex items-center justify-between h-full">
            <motion.div 
              className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center shadow-lg"
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <Zap className="w-5 h-5 text-white" />
            </motion.div>
            <motion.div 
              className="flex-1 mx-2 h-1 bg-gradient-to-r from-blue-500 to-green-500 rounded"
              animate={{ scaleX: [0, 1, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div 
              className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center shadow-lg"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <CheckCircle className="w-5 h-5 text-white" />
            </motion.div>
          </div>
        </div>
        <motion.div 
          className="flex items-center gap-2 text-sm text-blue-600"
          animate={{ y: [0, -2, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Activity className="w-4 h-4" />
          <span>24/7 automation</span>
        </motion.div>
      </div>
    )
  },
  {
    icon: Target,
    title: "Efisiensi Maksimal",
    description: "Focus pada strategy dan innovation, bukan task repetitif",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    benefit: "300% productivity boost",
    roi: "2x faster goal achievement",
    visual: (
      <div className="flex flex-col items-center justify-center mt-6 p-4 bg-purple-50/80 rounded-xl">
        <div className="relative w-32 h-16 mb-3">
          {/* Efficiency visualization */}
          <div className="flex items-center justify-center h-full">
            <motion.div 
              className="relative"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <PieChart className="w-12 h-12 text-purple-500" />
              <motion.div 
                className="absolute top-1 right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <TrendingUp className="w-2 h-2 text-white" />
              </motion.div>
            </motion.div>
            <motion.div 
              className="ml-4 text-2xl font-bold text-purple-600"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              3x
            </motion.div>
          </div>
        </div>
        <motion.div 
          className="flex items-center gap-2 text-sm text-purple-600"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Target className="w-4 h-4" />
          <span>Efisiensi maksimal</span>
        </motion.div>
      </div>
    )
  },
  {
    icon: Rocket,
    title: "Scaling Exponential",
    description: "Investment sekali, benefit jangka panjang dengan compound growth",
    color: "text-cyan-500",
    bgColor: "bg-cyan-500/10",
    benefit: "10x return on investment",
    roi: "Unlimited scalability",
    visual: (
      <div className="flex flex-col items-center justify-center mt-6 p-4 bg-cyan-50/80 rounded-xl">
        <div className="relative w-32 h-16 mb-3">
          {/* Growth chart */}
          <div className="flex items-end justify-center h-full space-x-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <motion.div 
                key={i}
                className="w-4 bg-gradient-to-t from-cyan-500 to-blue-400 rounded-t"
                style={{ height: `${i * 8 + 10}px` }}
                animate={{ scaleY: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
              />
            ))}
            <motion.div 
              className="ml-2"
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Rocket className="w-6 h-6 text-cyan-500" />
            </motion.div>
          </div>
        </div>
        <motion.div 
          className="flex items-center gap-2 text-sm text-cyan-600"
          animate={{ x: [0, 2, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <TrendingUp className="w-4 h-4" />
          <span>Exponential growth</span>
        </motion.div>
      </div>
    )
  }
]

export function ProblemSolutionSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Enhanced gradient background with animations */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30">
        {/* Animated background elements */}
        <motion.div 
          className="absolute top-20 left-10 w-32 h-32 bg-red-500/10 rounded-full blur-xl"
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-24 h-24 bg-green-500/10 rounded-full blur-xl"
          animate={{ x: [0, -40, 0], y: [0, 20, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.h2 
            className="text-4xl md:text-6xl font-bold mb-8"
            animate={{ scale: [1, 1.01, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            Masih{" "}
            <span className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
              Terjebak
            </span>{" "}
            dalam Rutinitas Manual?
          </motion.h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            <strong className="text-red-600">Research menunjukkan:</strong> 75% waktu profesional habis hanya untuk pekerjaan berulang. Jangan biarkan siklus ini menggerogoti potensi kamu—saatnya move on ke otomasi cerdas!
          </p>
        </motion.div>

        {/* Enhanced Problems with Professional Visuals */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -12, scale: 1.02 }}
            >
              <Card className="h-full border-2 border-gray-200/50 hover:border-red-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/10 bg-white/80 backdrop-blur-sm group">
                <CardContent className="p-8 text-center h-full flex flex-col">
                  <motion.div 
                    className={`inline-flex p-5 rounded-3xl ${problem.bgColor} mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    whileHover={{ rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <problem.icon className={`w-10 h-10 ${problem.color}`} />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">{problem.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed text-lg">{problem.description}</p>
                  
                  {/* Enhanced Visual Representation */}
                  <div className="flex-1 flex items-center justify-center">
                    {problem.visual}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

       

        {/* Solution Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          
          <motion.h2 
            className="text-4xl md:text-6xl font-bold mb-8"
            animate={{ scale: [1, 1.01, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            Bebas Repot, Jadi {" "}
            <span className="bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
             Automation Hero
            </span>
          </motion.h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            <strong className="text-green-600">Proven Results:</strong> Dengan N8N automation yang powerful, ubah cara kerja manual 
            menjadi sistem pintar yang bekerja 24/7. Join 1000+ professionals yang sudah transform!
          </p>
        </motion.div>

        {/* Enhanced Solutions */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -12, scale: 1.02 }}
            >
              <Card className="h-full border-2 border-gray-200/50 hover:border-green-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/10 bg-white/80 backdrop-blur-sm group">
                <CardContent className="p-8 text-center h-full flex flex-col">
                  <motion.div 
                    className={`inline-flex p-5 rounded-3xl ${solution.bgColor} mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    whileHover={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <solution.icon className={`w-10 h-10 ${solution.color}`} />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">{solution.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed text-lg">{solution.description}</p>
                  
                  {/* Enhanced Visual Representation */}
                  <div className="flex-1 flex items-center justify-center">
                    {solution.visual}
                  </div>
                  
                  <div className="mt-6 space-y-3">
                    <div className="text-sm text-purple-600 font-bold bg-purple-50 rounded-lg py-2 px-3">
                      💰 {solution.roi}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}