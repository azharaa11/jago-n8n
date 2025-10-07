import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "./ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import { ImageWithFallback } from "./figma/ImageWithFallback"
import { 
  Sparkles, 
  Image as ImageIcon, 
  FileText, 
  Video, 
  BarChart3,
  Zap,
  Play,
  Download,
  ExternalLink,
  TrendingUp,
  Target,
  Clock
} from "lucide-react"

const aiExamples = {
  content: {
    title: "AI Content Generation",
    description: "Generate artikel, caption, email, dan berbagai konten dengan AI",
    examples: [
      {
        prompt: "Buat artikel SEO tentang 'Automation untuk E-commerce'",
        result: "# 10 Automation Strategies yang Wajib Diterapkan E-commerce di 2024\n\nDi era digital yang semakin kompetitif, e-commerce yang tidak menggunakan automation akan tertinggal jauh dari pesaing. Automation bukan lagi pilihan, melainkan kebutuhan untuk bertahan dan berkembang...\n\n## 1. Inventory Management Automation\nDengan sistem automated inventory, stok produk akan selalu update real-time, mencegah overselling dan stockout yang merugikan...",
        type: "Article",
        stats: "1,200 words • SEO optimized • 3 minutes generation"
      },
      {
        prompt: "Buat email welcome series untuk customer baru",
        result: "Subject: 🎉 Welcome to [Brand Name] - Your Journey Starts Here!\n\nHi [Customer Name],\n\nWelcome to our family! We're thrilled to have you join thousands of satisfied customers who trust us for their [product category] needs.\n\nHere's what happens next:\n✅ Your account is ready\n✅ Exclusive welcome discount: 15% OFF\n✅ Free shipping on your first order",
        type: "Email Sequence",
        stats: "5 emails • Personalized • High conversion rate"
      }
    ]
  },
  visual: {
    title: "AI Visual Content",
    description: "Generate images, graphics, dan visual content untuk marketing",
    examples: [
      {
        prompt: "Professional product mockup for tech gadget",
        image: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaSUyMGFydGlmaWNpYWwlMjBpbnRlbGxpZ2VuY2UlMjBkYXRhfGVufDF8fHx8MTc1ODg1MTMzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        type: "Product Mockup",
        stats: "4K resolution • Commercial use • 30 seconds generation"
      },
      {
        prompt: "Social media carousel design for automation tips",
        image: "https://images.unsplash.com/photo-1758626052247-79003b45f802?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbWF0aW9uJTIwd29ya2Zsb3clMjBkaWdpdGFsfGVufDF8fHx8MTc1ODgwNjU1OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        type: "Social Media",
        stats: "10 slides • Brand consistent • Ready to post"
      }
    ]
  },
  analytics: {
    title: "AI Analytics & Reports",
    description: "Generate insights, reports, dan dashboard secara otomatis",
    examples: [
      {
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          values: [65, 78, 90, 81, 95, 102]
        },
        insight: "📈 Revenue grew 57% in Q2 compared to Q1. Key drivers: automated email campaigns (+34% conversion) and optimized checkout flow (-23% cart abandonment).",
        type: "Revenue Analysis",
        stats: "Real-time data • Predictive insights • Action recommendations"
      },
      {
        data: {
          categories: ['Email', 'Social', 'PPC', 'Organic'],
          performance: [85, 72, 68, 91]
        },
        insight: "🎯 Organic traffic shows highest conversion rate (91%), while PPC needs optimization. Recommend reallocating 20% budget from PPC to content marketing.",
        type: "Marketing Performance",
        stats: "Multi-channel analysis • ROI calculations • Strategic recommendations"
      }
    ]
  }
}

export function AiPreview() {
  const [activeTab, setActiveTab] = useState("content")
  const [selectedExample, setSelectedExample] = useState(0)

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-600/5 via-pink-600/10 to-purple-500/5 dark:from-blue-500/10 dark:via-pink-500/15 dark:to-purple-400/10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-600 dark:text-purple-400 border-purple-500/30">
            AI Content Preview
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Lihat{" "}
            <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-text text-transparent">
              Magic AI
            </span>{" "}
            in Action
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Preview hasil nyata dari AI automation yang akan kamu pelajari. Dari content generation hingga visual creation dan analytics insights.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-muted/50 backdrop-blur-sm border border-border/50 h-14">
                <TabsTrigger 
                  value="content" 
                  className="data-[state=active]:bg-purple-500/20 data-[state=active]:text-purple-600 dark:data-[state=active]:text-purple-400 h-12"
                >
                  <FileText className="w-4 h-4 mr-2" />
                  Content AI
                </TabsTrigger>
                <TabsTrigger 
                  value="visual"
                  className="data-[state=active]:bg-pink-500/20 data-[state=active]:text-pink-600 dark:data-[state=active]:text-pink-400 h-12"
                >
                  <ImageIcon className="w-4 h-4 mr-2" />
                  Visual AI
                </TabsTrigger>
                <TabsTrigger 
                  value="analytics"
                  className="data-[state=active]:bg-orange-500/20 data-[state=active]:text-orange-600 dark:data-[state=active]:text-orange-400 h-12"
                >
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Analytics AI
                </TabsTrigger>
              </TabsList>

              <div className="mt-8">
                <AnimatePresence mode="wait">
                  <TabsContent key={activeTab} value={activeTab} className="mt-0">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.4 }}
                    >
                      <Card className="border-border/50 shadow-lg">
                        <CardHeader className="text-center pb-6">
                          <CardTitle className="text-2xl">
                            {aiExamples[activeTab as keyof typeof aiExamples].title}
                          </CardTitle>
                          <CardDescription className="text-lg">
                            {aiExamples[activeTab as keyof typeof aiExamples].description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          {activeTab === "content" && (
                            <div className="space-y-8">
                              {aiExamples.content.examples.map((example, index) => (
                                <div key={index} className="border border-border/50 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300">
                                  <div className="flex items-start justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                      <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500">
                                        <Sparkles className="w-4 h-4 text-white" />
                                      </div>
                                      <div>
                                        <Badge variant="outline" className="bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/30">
                                          {example.type}
                                        </Badge>
                                      </div>
                                    </div>
                                    <Button variant="outline" size="sm">
                                      <ExternalLink className="w-4 h-4 mr-2" />
                                      View Full
                                    </Button>
                                  </div>
                                  
                                  <div className="mb-4">
                                    <h4 className="font-medium text-sm text-muted-foreground mb-2">Prompt:</h4>
                                    <p className="text-sm bg-muted/50 rounded-lg p-3 border border-border/30">
                                      "{example.prompt}"
                                    </p>
                                  </div>
                                  
                                  <div className="mb-4">
                                    <h4 className="font-medium text-sm text-muted-foreground mb-2">Generated Result:</h4>
                                    <div className="bg-background border border-border/30 rounded-lg p-4 max-h-48 overflow-y-auto">
                                      <pre className="text-sm whitespace-pre-wrap">{example.result}</pre>
                                    </div>
                                  </div>
                                  
                                  <div className="text-xs text-muted-foreground">
                                    {example.stats}
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}

                          {activeTab === "visual" && (
                            <div className="space-y-8">
                              <div className="grid md:grid-cols-2 gap-8">
                                {aiExamples.visual.examples.map((example, index) => (
                                  <div key={index} className="border border-border/50 rounded-xl overflow-hidden hover:border-pink-500/50 transition-all duration-300">
                                    <div className="relative">
                                      <ImageWithFallback
                                        src={example.image}
                                        alt={example.prompt}
                                        className="w-full h-48 object-cover"
                                      />
                                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                      <Badge className="absolute top-3 right-3 bg-pink-500/90 text-white">
                                        {example.type}
                                      </Badge>
                                    </div>
                                    <div className="p-4">
                                      <p className="text-sm mb-3">
                                        <span className="text-muted-foreground">Prompt:</span> "{example.prompt}"
                                      </p>
                                      <div className="text-xs text-muted-foreground mb-3">
                                        {example.stats}
                                      </div>
                                      <Button variant="outline" size="sm" className="w-full">
                                        <Download className="w-4 h-4 mr-2" />
                                        Download Example
                                      </Button>
                                    </div>
                                  </div>
                                ))}
                              </div>
                              
                              {/* Enhanced Visual AI Features */}
                              <div className="border border-border/50 rounded-xl p-6 bg-gradient-to-r from-pink-50 to-purple-50">
                                <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                                  <ImageIcon className="w-5 h-5 text-pink-500" />
                                  Advanced Visual AI Capabilities
                                </h4>
                                <div className="grid md:grid-cols-3 gap-4">
                                  <div className="text-center p-4 bg-white/70 rounded-lg border border-pink-200/50">
                                    <div className="text-2xl mb-2">🎨</div>
                                    <div className="font-medium text-sm">Brand Consistency</div>
                                    <div className="text-xs text-muted-foreground mt-1">Automatic logo, color & style application</div>
                                  </div>
                                  <div className="text-center p-4 bg-white/70 rounded-lg border border-pink-200/50">
                                    <div className="text-2xl mb-2">⚡</div>
                                    <div className="font-medium text-sm">Bulk Generation</div>
                                    <div className="text-xs text-muted-foreground mt-1">100+ images in minutes</div>
                                  </div>
                                  <div className="text-center p-4 bg-white/70 rounded-lg border border-pink-200/50">
                                    <div className="text-2xl mb-2">🔄</div>
                                    <div className="font-medium text-sm">Smart Variations</div>
                                    <div className="text-xs text-muted-foreground mt-1">Auto A/B testing versions</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}

                          {activeTab === "analytics" && (
                            <div className="space-y-8">
                              {aiExamples.analytics.examples.map((example, index) => (
                                <div key={index} className="border border-border/50 rounded-xl p-6 hover:border-orange-500/50 transition-all duration-300">
                                  <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 rounded-lg bg-gradient-to-r from-orange-500 to-red-500">
                                      <BarChart3 className="w-4 h-4 text-white" />
                                    </div>
                                    <Badge variant="outline" className="bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/30">
                                      {example.type}
                                    </Badge>
                                  </div>
                                  
                                  <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                      <h4 className="font-medium text-sm text-muted-foreground mb-3">Auto-Generated Chart:</h4>
                                      <div className="bg-muted/30 rounded-lg p-4 h-32 flex items-center justify-center border border-border/30">
                                        <div className="text-center">
                                          <BarChart3 className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                                          <div className="text-xs text-muted-foreground">Interactive Chart Preview</div>
                                        </div>
                                      </div>
                                    </div>
                                    <div>
                                      <h4 className="font-medium text-sm text-muted-foreground mb-3">AI Insights:</h4>
                                      <div className="bg-background border border-border/30 rounded-lg p-4">
                                        <p className="text-sm">{example.insight}</p>
                                      </div>
                                    </div>
                                  </div>
                                  
                                  <div className="text-xs text-muted-foreground mt-4">
                                    {example.stats}
                                  </div>
                                </div>
                              ))}
                              
                              {/* Enhanced Analytics AI Features */}
                              <div className="border border-border/50 rounded-xl p-6 bg-gradient-to-r from-orange-50 to-red-50">
                                <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                                  <BarChart3 className="w-5 h-5 text-orange-500" />
                                  Advanced Analytics AI Capabilities
                                </h4>
                                <div className="grid md:grid-cols-3 gap-4">
                                  <div className="text-center p-4 bg-white/70 rounded-lg border border-orange-200/50">
                                    <div className="text-2xl mb-2">📊</div>
                                    <div className="font-medium text-sm">Predictive Analytics</div>
                                    <div className="text-xs text-muted-foreground mt-1">Forecast trends with 95% accuracy</div>
                                  </div>
                                  <div className="text-center p-4 bg-white/70 rounded-lg border border-orange-200/50">
                                    <div className="text-2xl mb-2">🤖</div>
                                    <div className="font-medium text-sm">Automated Reporting</div>
                                    <div className="text-xs text-muted-foreground mt-1">Daily, weekly, monthly reports</div>
                                  </div>
                                  <div className="text-center p-4 bg-white/70 rounded-lg border border-orange-200/50">
                                    <div className="text-2xl mb-2">🎯</div>
                                    <div className="font-medium text-sm">Action Recommendations</div>
                                    <div className="text-xs text-muted-foreground mt-1">AI-powered business insights</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    </motion.div>
                  </TabsContent>
                </AnimatePresence>
              </div>
            </Tabs>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <div className="bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-orange-500/10 rounded-2xl p-8 border border-purple-500/20">
              <h3 className="text-xl font-bold mb-4">
                🤖 Ini Baru Preview - Learn to Build Your Own!
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Contoh di atas hanya sebagian kecil dari yang bisa kamu achieve. Dalam kursus, kamu akan belajar membangun sistem AI automation yang lebih advanced dan customized sesuai kebutuhan bisnismu.
              </p>
              <Button 
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Zap className="w-5 h-5 mr-2" />
                Start Building Your AI Arsenal
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}