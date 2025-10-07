import { motion } from 'framer-motion';
import { Zap, Calendar, CheckCircle, Mail, Database, Globe, Clock } from 'lucide-react';

export default function AutomationIllustration() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Central Monitor/Screen */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative"
      >
        {/* Monitor Base */}
        <div className="relative z-10">
          {/* Screen */}
          <div className="w-80 h-64 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border-8 border-gray-800 shadow-2xl overflow-hidden">
            {/* Screen Content - N8N Logo Style */}
            <div className="w-full h-full bg-gradient-to-br from-blue-600/10 to-purple-600/10 p-6 flex items-center justify-center">
              <div className="relative w-full h-full">
                {/* Workflow Nodes */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.6, type: 'spring' }}
                  className="absolute top-8 left-1/2 -translate-x-1/2 w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center shadow-lg"
                >
                  <Zap className="w-6 h-6 text-white" />
                </motion.div>

                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8, type: 'spring' }}
                  className="absolute top-1/2 left-8 -translate-y-1/2 w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center shadow-lg"
                >
                  <Database className="w-5 h-5 text-white" />
                </motion.div>

                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1, type: 'spring' }}
                  className="absolute top-1/2 right-8 -translate-y-1/2 w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center shadow-lg"
                >
                  <Mail className="w-5 h-5 text-white" />
                </motion.div>

                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.2, type: 'spring' }}
                  className="absolute bottom-8 left-1/2 -translate-x-1/2 w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center shadow-lg"
                >
                  <CheckCircle className="w-6 h-6 text-white" />
                </motion.div>

                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <motion.line
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 1.4, duration: 0.5 }}
                    x1="50%"
                    y1="56"
                    x2="25%"
                    y2="50%"
                    stroke="#3B82F6"
                    strokeWidth="3"
                    strokeDasharray="5,5"
                  />
                  <motion.line
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 1.6, duration: 0.5 }}
                    x1="50%"
                    y1="56"
                    x2="75%"
                    y2="50%"
                    stroke="#8B5CF6"
                    strokeWidth="3"
                    strokeDasharray="5,5"
                  />
                  <motion.line
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 1.8, duration: 0.5 }}
                    x1="25%"
                    y1="50%"
                    x2="50%"
                    y2="calc(100% - 56px)"
                    stroke="#10B981"
                    strokeWidth="3"
                    strokeDasharray="5,5"
                  />
                  <motion.line
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 2, duration: 0.5 }}
                    x1="75%"
                    y1="50%"
                    x2="50%"
                    y2="calc(100% - 56px)"
                    stroke="#F97316"
                    strokeWidth="3"
                    strokeDasharray="5,5"
                  />
                </svg>

                {/* Animated Data Flow */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute top-8 left-1/2 -translate-x-1/2 w-12 h-12 bg-green-400/30 rounded-lg blur-sm"
                />
              </div>
            </div>
          </div>

          {/* Monitor Stand */}
          <div className="flex justify-center mt-2">
            <div className="w-20 h-3 bg-gray-700 rounded-t-lg" />
          </div>
          <div className="flex justify-center">
            <div className="w-32 h-2 bg-gray-800 rounded-lg" />
          </div>
        </div>
      </motion.div>

      {/* Floating Elements Around Monitor */}
      {/* Calendar Icon - Top Left */}
      <motion.div
        initial={{ opacity: 0, x: -20, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 0.5, type: 'spring' }}
        className="absolute top-12 left-0 lg:left-8"
      >
        <motion.div
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="bg-white rounded-xl shadow-xl p-4 border border-blue-100"
        >
          <Calendar className="w-8 h-8 text-blue-600" />
        </motion.div>
      </motion.div>

      {/* Clock Icon - Top Right */}
      <motion.div
        initial={{ opacity: 0, x: 20, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 0.7, type: 'spring' }}
        className="absolute top-12 right-0 lg:right-8"
      >
        <motion.div
          animate={{
            y: [0, -12, 0],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.5,
          }}
          className="bg-white rounded-xl shadow-xl p-4 border border-purple-100"
        >
          <Clock className="w-8 h-8 text-purple-600" />
        </motion.div>
      </motion.div>

      {/* Globe Icon - Bottom Left */}
      <motion.div
        initial={{ opacity: 0, x: -20, y: -20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 0.9, type: 'spring' }}
        className="absolute bottom-12 left-0 lg:left-4"
      >
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
          className="bg-white rounded-xl shadow-xl p-4 border border-green-100"
        >
          <Globe className="w-8 h-8 text-green-600" />
        </motion.div>
      </motion.div>

      {/* Success Badge - Bottom Right */}
      <motion.div
        initial={{ opacity: 0, x: 20, y: -20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 1.1, type: 'spring' }}
        className="absolute bottom-12 right-0 lg:right-4"
      >
        <motion.div
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 3.2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1.5,
          }}
          className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl shadow-xl px-4 py-3 border border-green-400"
        >
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-white" />
            <span className="text-white text-sm">Berhasil!</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Animated Connection Lines Between Floating Elements */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10B981" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        
        <motion.path
          d="M 80 80 Q 200 100 320 160"
          stroke="url(#lineGradient1)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="8,8"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 2.2, duration: 1, repeat: Infinity, repeatType: 'reverse' }}
        />
        
        <motion.path
          d="M 80 320 Q 200 300 320 240"
          stroke="url(#lineGradient2)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="8,8"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 2.5, duration: 1, repeat: Infinity, repeatType: 'reverse' }}
        />
      </svg>

      {/* Glowing Orbs Background */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl -z-10"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
        className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl -z-10"
      />
    </div>
  );
}
