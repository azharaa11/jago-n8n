import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "./ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { Quote, Star, ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"
import { ImageWithFallback } from "./figma/ImageWithFallback"

const testimonials = [
  {
    id: 1,
    name: "Sarah Wijaya",
    role: "Digital Marketing Manager",
    company: "TechStart Indonesia",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Kursus ini benar-benar game changer! Dalam 2 minggu, saya berhasil mengotomatisasi seluruh social media posting dan email campaign. ROI nya incredible - revenue naik 300% dengan effort yang jauh lebih sedikit.",
    result: "Revenue +300%",
    timeFrame: "2 minggu",
    highlight: "ROI incredible!"
  },
  {
    id: 2,
    name: "Ahmad Rizki",
    role: "E-commerce Owner",
    company: "Rizki Store",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Sebelumnya saya spend 8 jam per hari untuk manage inventory dan customer service. Sekarang cuma 2 jam karena semua sudah automated. Lebih fokus ke strategy dan bisnis development.",
    result: "Waktu kerja -75%",
    timeFrame: "3 minggu",
    highlight: "From 8 hours to 2 hours!"
  },
  {
    id: 3,
    name: "Lisa Pranata",
    role: "Content Creator",
    company: "Creative Studio",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "AI content generation workflow yang diajarkan di sini luar biasa! Sekarang saya bisa produce 50 konten per hari dengan kualitas konsisten. Client makin banyak dan income meningkat drastis.",
    result: "Produktivitas +10x",
    timeFrame: "1 bulan",
    highlight: "50 konten per hari!"
  },
  {
    id: 4,
    name: "Budi Santoso",
    role: "Sales Manager",
    company: "Global Solutions",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Lead qualification dan follow-up process yang otomatis membuat conversion rate naik signifikan. Team sales jadi lebih efisien dan closing rate meningkat 250%. Worth every penny!",
    result: "Closing rate +250%",
    timeFrame: "6 minggu",
    highlight: "Worth every penny!"
  },
  {
    id: 5,
    name: "Maya Sari",
    role: "Operations Manager",
    company: "Startup Hub",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Workflow automation untuk reporting dan analytics benar-benar membantu decision making. Data real-time dan insights yang dulu butuh 2 hari, sekarang available dalam hitungan menit.",
    result: "Efisiensi +80%",
    timeFrame: "4 minggu",
    highlight: "Real-time insights!"
  },
  {
    id: 6,
    name: "Doni Pratama",
    role: "Agency Owner",
    company: "Digital Pro Agency",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Sebagai agency owner, automation ini memungkinkan saya handle 3x lebih banyak client tanpa nambah team. Profit margin naik drastis dan client satisfaction juga meningkat karena delivery lebih cepat.",
    result: "Kapasitas +300%",
    timeFrame: "2 bulan",
    highlight: "3x more clients!"
  }
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [viewMode, setViewMode] = useState<'slider' | 'grid'>('slider')

  useEffect(() => {
    if (!isAutoPlaying || viewMode === 'grid') return
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 4000)
    
    return () => clearInterval(interval)
  }, [isAutoPlaying, viewMode])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying)
  }

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-blue-50/30 to-purple-50/30">
        {/* Animated background elements */}
        <motion.div 
          className="absolute top-20 left-20 w-40 h-40 bg-green-500/5 rounded-full blur-2xl"
          animate={{ x: [0, 40, 0], y: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-32 h-32 bg-blue-500/5 rounded-full blur-xl"
          animate={{ x: [0, -30, 0], y: [0, 15, 0] }}
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
            <Badge className="bg-gradient-to-r from-green-500/20 to-blue-500/20 text-green-600 border-green-500/30 text-lg px-6 py-2">
              ⭐ Success Stories
            </Badge>
          </motion.div>
          <motion.h2 
            className="text-4xl md:text-6xl font-bold mb-8"
            animate={{ scale: [1, 1.01, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <span className="bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              1000+
            </span>{" "}
            Students Berhasil
          </motion.h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed">
            Lihat bagaimana alumni Jago N8N berhasil transformasi bisnis mereka dengan N8N workflow automation dan AI integration.
          </p>
          
          {/* View Mode Toggle */}
          <div className="flex justify-center gap-4 mb-8">
            <Button
              variant={viewMode === 'slider' ? 'default' : 'outline'}
              onClick={() => setViewMode('slider')}
              className="transition-all duration-300"
            >
              🎭 Slider View
            </Button>
            <Button
              variant={viewMode === 'grid' ? 'default' : 'outline'}
              onClick={() => setViewMode('grid')}
              className="transition-all duration-300"
            >
              📱 Compact Grid
            </Button>
          </div>
        </motion.div>

        {/* Slider View */}
        {viewMode === 'slider' && (
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -100, scale: 0.95 }}
                  transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
                  className="grid lg:grid-cols-2 gap-8 items-center"
                >
                  {/* Testimonial Content */}
                  <Card className="border-2 border-green-200/50 hover:border-green-400/50 transition-all duration-500 shadow-xl hover:shadow-2xl bg-white/90 backdrop-blur-sm group">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-4 mb-6">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className="relative"
                        >
                          <Avatar className="w-16 h-16 border-2 border-green-500/30 group-hover:border-green-500/60 transition-all duration-300">
                            <AvatarImage src={testimonials[currentIndex].avatar} alt={testimonials[currentIndex].name} />
                            <AvatarFallback>{testimonials[currentIndex].name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                            <Star className="w-3 h-3 text-white fill-current" />
                          </div>
                        </motion.div>
                        <div>
                          <h4 className="font-bold text-xl text-gray-800">{testimonials[currentIndex].name}</h4>
                          <p className="text-muted-foreground">{testimonials[currentIndex].role}</p>
                          <p className="text-sm text-blue-600 font-medium">{testimonials[currentIndex].company}</p>
                        </div>
                      </div>
                      
                      <motion.div
                        className="mb-4"
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 4, repeat: Infinity }}
                      >
                        <Quote className="w-10 h-10 text-green-500" />
                      </motion.div>
                      
                      <blockquote className="text-lg leading-relaxed mb-6 text-gray-700 italic">
                        "{testimonials[currentIndex].text}"
                      </blockquote>
                      
                      <div className="flex flex-wrap gap-3 mb-4">
                        <Badge className="bg-green-500/10 text-green-600 border-green-500/30 px-3 py-1">
                          🎯 {testimonials[currentIndex].result}
                        </Badge>
                        <Badge className="bg-blue-500/10 text-blue-600 border-blue-500/30 px-3 py-1">
                          ⏱️ {testimonials[currentIndex].timeFrame}
                        </Badge>
                      </div>
                      
                      <div className="text-lg font-bold text-orange-600 bg-orange-50 rounded-lg p-3 text-center">
                        💡 "{testimonials[currentIndex].highlight}"
                      </div>
                    </CardContent>
                  </Card>

                  {/* Visual Element */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative"
                  >
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-green-400 to-blue-500 p-1">
                      <div className="bg-white rounded-3xl p-8 h-full">
                        <div className="text-center space-y-6">
                          <motion.div
                            animate={{ y: [-5, 5, -5] }}
                            transition={{ duration: 3, repeat: Infinity }}
                            className="w-24 h-24 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mx-auto flex items-center justify-center shadow-xl"
                          >
                            <Star className="w-12 h-12 text-white fill-current" />
                          </motion.div>
                          
                          <div>
                            <div className="text-4xl font-bold text-gray-800 mb-2">
                              {testimonials[currentIndex].result}
                            </div>
                            <div className="text-lg text-gray-600">
                              dalam {testimonials[currentIndex].timeFrame}
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-4 pt-4">
                            <div className="text-center p-3 bg-green-50 rounded-xl">
                              <div className="text-2xl font-bold text-green-600">4.9★</div>
                              <div className="text-xs text-gray-600">Rating</div>
                            </div>
                            <div className="text-center p-3 bg-blue-50 rounded-xl">
                              <div className="text-2xl font-bold text-blue-600">1000+</div>
                              <div className="text-xs text-gray-600">Success</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <div className="flex items-center justify-center gap-4 mt-8">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevTestimonial}
                  className="rounded-full border-green-500/30 hover:bg-green-500/10"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                
                <Button
                  variant="outline"
                  size="icon"
                  onClick={toggleAutoPlay}
                  className="rounded-full border-blue-500/30 hover:bg-blue-500/10"
                >
                  {isAutoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </Button>
                
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToTestimonial(index)}
                      className={`h-3 rounded-full transition-all duration-300 ${
                        index === currentIndex 
                          ? 'bg-green-500 w-8' 
                          : 'bg-muted hover:bg-green-500/50 w-3'
                      }`}
                    />
                  ))}
                </div>
                
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextTestimonial}
                  className="rounded-full border-green-500/30 hover:bg-green-500/10"
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Compact Grid View */}
        {viewMode === 'grid' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <Card className="h-full border border-gray-200 hover:border-green-400/50 transition-all duration-300 hover:shadow-xl bg-white/90 backdrop-blur-sm group">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Avatar className="w-12 h-12 border-2 border-green-500/30">
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <h5 className="font-bold text-sm text-gray-800 truncate">{testimonial.name}</h5>
                        <p className="text-xs text-muted-foreground truncate">{testimonial.role}</p>
                        <p className="text-xs text-blue-600 truncate">{testimonial.company}</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-1 mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    
                    <blockquote className="text-sm leading-relaxed mb-4 text-gray-700 line-clamp-4">
                      "{testimonial.text}"
                    </blockquote>
                    
                    <div className="space-y-2">
                      <Badge className="bg-green-500/10 text-green-600 border-green-500/30 text-xs w-full justify-center">
                        {testimonial.result}
                      </Badge>
                      <div className="text-xs text-center text-muted-foreground">
                        dalam {testimonial.timeFrame}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        )}

        {/* Enhanced Social Proof Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-green-50 to-blue-50 rounded-3xl p-8 border-2 border-green-200/50"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl font-bold text-green-600 mb-2">1000+</div>
              <div className="text-muted-foreground font-medium">Happy Students</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">4.9/5</div>
              <div className="text-muted-foreground font-medium">Average Rating</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl font-bold text-purple-600 mb-2">98%</div>
              <div className="text-muted-foreground font-medium">Completion Rate</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl font-bold text-cyan-600 mb-2">24/7</div>
              <div className="text-muted-foreground font-medium">Community Support</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}