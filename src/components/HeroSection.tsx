import { Button } from "./ui/button";
import { ImageWithFallback } from './figma/ImageWithFallback';
import { PlayCircle, Zap, Users, ArrowRight, Sparkles, Network, Bot, Workflow } from "lucide-react";
import { motion } from "framer-motion";


export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 pb-24">
  {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Dynamic Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,136,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,136,0.1)_1px,transparent_1px)] bg-[size:60px_60px] animate-pulse"></div>
        
        {/* Floating Network Nodes */}
        <motion.div
          className="absolute top-20 left-20 w-4 h-4 bg-[#00ff88] rounded-full shadow-lg shadow-[#00ff88]/50"
          animate={{
            y: [0, -20, 0],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-40 right-32 w-3 h-3 bg-purple-400 rounded-full shadow-lg shadow-purple-400/50"
          animate={{
            y: [0, -15, 0],
            x: [0, 10, 0],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div
          className="absolute bottom-32 left-1/4 w-2 h-2 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50"
          animate={{
            y: [0, -10, 0],
            scale: [1, 1.2, 1],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
        
        {/* Connecting Lines Animation */}
        <svg className="absolute inset-0 w-full h-full opacity-20">
          <motion.line
            x1="80"
            y1="80"
            x2="300"
            y2="160"
            stroke="#00ff88"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
          <motion.line
            x1="300"
            y1="160"
            x2="200"
            y2="400"
            stroke="#8b5cf6"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: 0.5
            }}
          />
        </svg>
        
        {/* Large Decorative Shapes */}
        <motion.div
          className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-r from-[#00ff88]/10 to-purple-500/10 rounded-3xl backdrop-blur-sm"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-r from-blue-500/15 to-indigo-500/15 rounded-2xl backdrop-blur-sm"
          animate={{
            rotate: [360, 0],
            y: [0, -20, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Particle Effects */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#00ff88] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeOut"
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            className="text-white space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="inline-flex items-center gap-3 bg-[#00ff88]/20 text-[#00ff88] px-6 py-3 rounded-full border border-[#00ff88]/30 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-2">
  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 animate-pulse" />
  <span className="font-semibold text-xs sm:text-sm md:text-base">
    MODUL PEMBELAJARAN TERLENGKAP
  </span>
</div>

            </motion.div>
            
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-[#00ff88] via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Jago N8N
                </span>
                <span className="block text-white mt-4">
                Kursus 
                </span>
                <span className="block lg:text-6xl text-gray-300 mt-2">
                Interaktif
                </span>
              </h1>
              
              <p className="text-xl lg:text-xl text-gray-300 leading-relaxed max-w-2xl">
               Modul lengkap dan terstruktur untuk menguasai N8N, Cocok untuk pemula maupun profesional.
              </p>
            </motion.div>
            
            {/* Stats */}
           <motion.div
  className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.5 }}
>
  {/* Card 1 */}
  <div className="text-center bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 border border-white/10">
    <motion.div
      className="text-lg sm:text-xl md:text-3xl font-bold text-[#00ff88] mb-1"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5, delay: 0.7, type: "spring" }}
    >
      999+
    </motion.div>
    <div className="text-[10px] sm:text-xs md:text-sm text-gray-400">
      Peserta Belajar
    </div>
  </div>

  {/* Card 2 */}
  <div className="text-center bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 border border-white/10">
    <motion.div
      className="text-lg sm:text-xl md:text-3xl font-bold text-purple-400 mb-1"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5, delay: 0.8, type: "spring" }}
    >
      50+
    </motion.div>
    <div className="text-[10px] sm:text-xs md:text-sm text-gray-400">
      Modul
    </div>
  </div>

  {/* Card 3 */}
  <div className="text-center bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 border border-white/10">
    <motion.div
      className="text-lg sm:text-xl md:text-3xl font-bold text-blue-400 mb-1"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5, delay: 0.9, type: "spring" }}
    >
      95%
    </motion.div>
    <div className="text-[10px] sm:text-xs md:text-sm text-gray-400">
      Peserta Puas
    </div>
  </div>
</motion.div>

            
            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-[#00ff88] to-[#00cc6a] hover:from-[#00cc6a] hover:to-[#00aa55] text-black px-8 py-4 rounded-2xl text-lg font-semibold group transition-all duration-300 shadow-2xl shadow-[#00ff88]/25"
                >
                  <Zap className="mr-3 w-5 h-5 group-hover:animate-bounce" />
                  Mulai Belajar
                  <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
              
             <motion.div
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  <Button
    variant="outline"
    size="lg"
    className="
      border-2 border-white/30 
      text-white 
      bg-white/10 
      px-8 py-4 
      rounded-2xl 
      text-lg font-semibold 
      group backdrop-blur-sm 
      transition-all duration-300 
      hover:bg-white/20 
      hover:text-[#00ff88] 
      hover:border-[#00ff88]/50
    "
  >
    <PlayCircle className="mr-3 w-5 h-5 animate-pulse group-hover:animate-bounce" />
    Preview Materi
  </Button>
</motion.div>

            </motion.div>
            
            {/* Features Preview */}
            <motion.div
              className="flex items-center gap-8 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="flex items-center gap-2 text-gray-300">
                <Users className="w-4 h-4 text-[#00ff88]" />
                <span className="text-sm">10K+ Community</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Bot className="w-4 h-4 text-purple-400" />
                <span className="text-sm">AI-Powered</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Workflow className="w-4 h-4 text-blue-400" />
                <span className="text-sm">No-Code</span>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Right Visual */}
         <motion.div
  className="relative hidden lg:block"   // <-- tambahin hidden lg:block
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, delay: 0.4 }}
>
            {/* Main Automation Visual */}
            <div className="relative">
              {/* Central Hub */}
              <motion.div
                className="relative z-10 w-80 h-80 mx-auto"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-full h-full bg-gradient-to-br from-[#00ff88]/20 via-purple-500/20 to-blue-500/20 rounded-full border-4 border-[#00ff88]/30 backdrop-blur-sm flex items-center justify-center relative overflow-hidden">
                  {/* Central N8N Logo Area */}
                  <motion.div
                    className="w-32 h-32 bg-gradient-to-br from-[#00ff88] to-purple-500 rounded-2xl flex items-center justify-center shadow-2xl"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Network className="w-16 h-16 text-white" />
                  </motion.div>
                  
                  {/* Orbit Elements */}
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-8 h-8 bg-gradient-to-r from-purple-400 to-blue-400 rounded-lg flex items-center justify-center"
                      style={{
                        left: '50%',
                        top: '50%',
                        transformOrigin: `${120 * Math.cos((i * 45 * Math.PI) / 180)}px ${120 * Math.sin((i * 45 * Math.PI) / 180)}px`,
                      }}
                      animate={{ rotate: -360 }}
                      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    >
                      <div className="w-3 h-3 bg-white rounded-full" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              {/* Floating Action Cards */}
              <motion.div
                className="absolute -top-8 -left-8 bg-gradient-to-r from-[#00ff88]/90 to-green-500/90 backdrop-blur-sm rounded-2xl p-4 shadow-2xl border border-white/20"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="flex items-center gap-3">
                  <Zap className="w-6 h-6 text-white" />
                  <div>
                    <div className="text-white font-semibold text-sm">Auto Email</div>
                    <div className="text-green-100 text-xs">Running</div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                className="absolute -top-4 -right-12 bg-gradient-to-r from-purple-500/90 to-pink-500/90 backdrop-blur-sm rounded-2xl p-4 shadow-2xl border border-white/20"
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                <div className="flex items-center gap-3">
                  <Bot className="w-6 h-6 text-white" />
                  <div>
                    <div className="text-white font-semibold text-sm">AI Process</div>
                    <div className="text-purple-100 text-xs">Active</div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                className="absolute -bottom-6 -left-12 bg-gradient-to-r from-blue-500/90 to-cyan-500/90 backdrop-blur-sm rounded-2xl p-4 shadow-2xl border border-white/20"
                animate={{
                  y: [0, -8, 0],
                  rotate: [0, 3, 0]
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
              >
                <div className="flex items-center gap-3">
                  <Workflow className="w-6 h-6 text-white" />
                  <div>
                    <div className="text-white font-semibold text-sm">Data Sync</div>
                    <div className="text-blue-100 text-xs">Connected</div>
                  </div>
                </div>
              </motion.div>
              
              {/* Background Tech Image */}
              <motion.div
                className="absolute inset-0 -z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.1 }}
                transition={{ duration: 1, delay: 1 }}
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1661882217431-b64b303fb1d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwYXV0b21hdGlvbiUyMHdvcmtmbG93JTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NTc0Nzc2ODV8MA&ixlib=rb-4.0&q=80&w=800"
                  alt="Automation Technology"
                  className="w-full h-full object-cover rounded-3xl"
                />
              </motion.div>
            </div>
            
            {/* Glow Effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#00ff88]/20 via-transparent to-purple-500/20 rounded-full blur-3xl -z-20"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 via-transparent to-transparent rounded-full blur-2xl -z-20"></div>
          </motion.div>
        </div>
        
        {/* Bottom Tech Brands dengan Logo */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
 <p className="text-sm sm:text-base md:text-lg text-gray-400 mb-8">Pelajari Integrasi dengan 300+ Platform Populer</p>
          {/* Mobile: hanya logo, sejajar 1 baris */}
<div className="flex justify-between items-center gap-2 lg:hidden max-w-xs mx-auto">
  {[
    { name: 'Slack', icon: '💬', color: 'from-purple-500 to-pink-500' },
    { name: 'Gmail', icon: '📧', color: 'from-red-500 to-orange-500' },
    { name: 'Shopify', icon: '🛍️', color: 'from-green-500 to-emerald-500' },
    { name: 'Discord', icon: '🎮', color: 'from-indigo-500 to-purple-500' },
    { name: 'Notion', icon: '📝', color: 'from-gray-600 to-gray-800' },
    { name: 'Airtable', icon: '📊', color: 'from-blue-500 to-cyan-500' }
  ].map((brand, index) => (
    <motion.div
      key={brand.name}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className={`w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r ${brand.color} rounded-xl flex items-center justify-center`}
    >
      <span className="text-base sm:text-lg">{brand.icon}</span>
    </motion.div>
  ))}
</div>

{/* Desktop: grid dengan logo + nama */}
<div className="hidden lg:grid grid-cols-6 gap-6 max-w-5xl mx-auto">
  {[
    { name: 'Slack', icon: '💬', color: 'from-purple-500 to-pink-500' },
    { name: 'Gmail', icon: '📧', color: 'from-red-500 to-orange-500' },
    { name: 'Shopify', icon: '🛍️', color: 'from-green-500 to-emerald-500' },
    { name: 'Discord', icon: '🎮', color: 'from-indigo-500 to-purple-500' },
    { name: 'Notion', icon: '📝', color: 'from-gray-600 to-gray-800' },
    { name: 'Airtable', icon: '📊', color: 'from-blue-500 to-cyan-500' }
  ].map((brand, index) => (
    <motion.div
      key={brand.name}
      className="group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
      whileHover={{ scale: 1.08, y: -5 }}
    >
      <div className="bg-white/8 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group-hover:bg-white/12">
        <div
          className={`w-12 h-12 bg-gradient-to-r ${brand.color} rounded-xl flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform duration-300`}
        >
          <span className="text-2xl filter brightness-110">{brand.icon}</span>
        </div>
        <div className="text-white font-semibold text-sm group-hover:text-[#00ff88] transition-colors duration-300">
          {brand.name}
        </div>
      </div>
    </motion.div>
  ))}
</div>

          
          {/* Integration Stats */}
          <motion.div
            className="mt-12 flex justify-center items-center gap-8 flex-wrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.8 }}
          >
            <div
  className="
    flex flex-wrap justify-center items-center gap-6 text-gray-300
    mb-8 sm:mb-16
  "
>
  <div className="flex items-center gap-2">
    <div className="w-3 h-3 bg-[#00ff88] rounded-full animate-pulse"></div>
    <span className="text-sm font-medium">300+ Studi Kasus</span>
  </div>

  <div className="hidden sm:block w-px h-4 bg-gray-600"></div>

  <div className="flex items-center gap-2">
    <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse animation-delay-300"></div>
    <span className="text-sm font-medium">Belajar Tanpa Ribet</span>
  </div>

  <div className="hidden sm:block w-px h-4 bg-gray-600"></div>

  <div className="flex items-center gap-2">
    <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse animation-delay-500"></div>
    <span className="text-sm font-medium">Praktik Langsung</span>
  </div>
</div>

          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}