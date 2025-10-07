import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { Zap, ArrowRight, PlayCircle, Workflow, Cpu, Network, BrainCircuit, GitBranch, CheckCircle } from "lucide-react";

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen pt-20 relative overflow-hidden  bg-gradient-to-br from-purple-600/10 via-blue-600/15 to-cyan-500/10">
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge with enhanced animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 border border-orange-500/30 rounded-full px-4 py-2"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Zap className="w-4 h-4 text-orange-500" />
              </motion.div>
              <span className="text-sm">Kursus N8N Automation Terlengkap</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold leading-tight"
            >
              Jago{" "}
              <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                N8N: Kerja Cerdas,
              </span>{" "}
              Bukan Kerja Keras!
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              Ubah kerja manual jadi otomasi cerdas. Hemat waktu, biarkan sistem
              yang bekerja untukmu.{" "}
            </motion.p>

            {/* Enhanced CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Mulai Belajar Sekarang
                <motion.div
                                  animate={{ x: [0, 5, 0] }}
                                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                                >
                                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </motion.div>
              </Button>
              <Button
                size="lg"
                className="border-2 border-purple-500 text-purple-600 bg-transparent hover:bg-purple-500/10 hover:border-purple-600 backdrop-blur-sm transition-all duration-300 hover:scale-105"
              >
                <PlayCircle className="w-4 h-4 mr-2" />
                Tonton Preview
              </Button>
            </motion.div>

            {/* Enhanced Stats with animations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="grid grid-cols-3 gap-6"
            >
              <motion.div
                className="text-center"
                whileHover={{ scale: 1.05 }}
                animate={{ y: [0, -2, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="text-2xl font-bold text-purple-600">1000+</div>
                <div className="text-sm text-muted-foreground">Students</div>
              </motion.div>
              <motion.div
                className="text-center"
                whileHover={{ scale: 1.05 }}
                animate={{ y: [0, -2, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              >
                <div className="text-2xl font-bold text-blue-600">4.9★</div>
                <div className="text-sm text-muted-foreground">Rating</div>
              </motion.div>
              <motion.div
                className="text-center"
                whileHover={{ scale: 1.05 }}
                animate={{ y: [0, -2, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                <div className="text-2xl font-bold text-cyan-600">6</div>
                <div className="text-sm text-muted-foreground">Modules</div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Side - Animated Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative h-[500px] lg:h-[600px] flex items-center justify-center"
          >
            {/* Central Glowing Orb */}
            <motion.div
              className="absolute w-48 h-48 rounded-full bg-gradient-to-br from-purple-500/30 via-blue-500/30 to-cyan-500/30 blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Workflow Nodes */}
            <div className="relative w-full h-full">
              {/* Node 1 - Top */}
              <motion.div
                className="absolute top-12 left-1/2 -translate-x-1/2"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="relative">
                  <motion.div
                    className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-yellow-500 shadow-lg flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Zap className="w-8 h-8 text-white" />
                  </motion.div>
                  <motion.div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500 to-yellow-500 blur-xl opacity-50"
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
              </motion.div>

              {/* Node 2 - Left */}
              <motion.div
                className="absolute top-1/2 left-8 -translate-y-1/2"
                animate={{
                  x: [-10, 0, -10],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              >
                <div className="relative">
                  <motion.div
                    className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 shadow-lg flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                  >
                    <Workflow className="w-8 h-8 text-white" />
                  </motion.div>
                  <motion.div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 blur-xl opacity-50"
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                  />
                </div>
              </motion.div>

              {/* Node 3 - Right */}
              <motion.div
                className="absolute top-1/2 right-8 -translate-y-1/2"
                animate={{
                  x: [10, 0, 10],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                <div className="relative">
                  <motion.div
                    className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <BrainCircuit className="w-8 h-8 text-white" />
                  </motion.div>
                  <motion.div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 blur-xl opacity-50"
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                  />
                </div>
              </motion.div>

              {/* Node 4 - Bottom Left */}
              <motion.div
                className="absolute bottom-20 left-1/4"
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5,
                }}
              >
                <div className="relative">
                  <motion.div
                    className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-teal-500 shadow-lg flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                  >
                    <Network className="w-7 h-7 text-white" />
                  </motion.div>
                  <motion.div
                    className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-500 to-teal-500 blur-xl opacity-50"
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.9 }}
                  />
                </div>
              </motion.div>

              {/* Node 5 - Bottom Right */}
              <motion.div
                className="absolute bottom-20 right-1/4"
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
              >
                <div className="relative">
                  <motion.div
                    className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Cpu className="w-7 h-7 text-white" />
                  </motion.div>
                  <motion.div
                    className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 blur-xl opacity-50"
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1.2 }}
                  />
                </div>
              </motion.div>

              {/* Connecting Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <motion.line
                  x1="50%"
                  y1="15%"
                  x2="20%"
                  y2="50%"
                  stroke="url(#gradient1)"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
                <motion.line
                  x1="50%"
                  y1="15%"
                  x2="80%"
                  y2="50%"
                  stroke="url(#gradient2)"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 0.5 }}
                />
                <motion.line
                  x1="20%"
                  y1="50%"
                  x2="35%"
                  y2="75%"
                  stroke="url(#gradient3)"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1 }}
                />
                <motion.line
                  x1="80%"
                  y1="50%"
                  x2="65%"
                  y2="75%"
                  stroke="url(#gradient4)"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1.5 }}
                />
                <defs>
                  <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#a855f7" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.5" />
                  </linearGradient>
                  <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.5" />
                  </linearGradient>
                  <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#14b8a6" stopOpacity="0.5" />
                  </linearGradient>
                  <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#a855f7" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#ec4899" stopOpacity="0.5" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Floating Particles */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-blue-400"
                  style={{
                    left: `${Math.random() * 80 + 10}%`,
                    top: `${Math.random() * 80 + 10}%`,
                  }}
                  animate={{
                    y: [0, -30, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>

            {/* Success Indicator */}
            <motion.div
              className="absolute bottom-4 left-1/2 -translate-x-1/2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.6 }}
            >
              <div className="flex items-center space-x-2 bg-green-500/10 border border-green-500/30 rounded-full px-4 py-2">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <CheckCircle className="w-4 h-4 text-green-500" />
                </motion.div>
                <span className="text-sm text-green-600">Automation Active</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}