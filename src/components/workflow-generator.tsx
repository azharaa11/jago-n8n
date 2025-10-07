import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { Separator } from "./ui/separator"
import { 
  Sparkles, 
  ArrowRight, 
  Workflow, 
  Zap, 
  Database,
  Mail,
  Calendar,
  FileText,
  BarChart3,
  MessageSquare
} from "lucide-react"

const workflowTemplates = {
  "marketing": {
    title: "Marketing Digital Automation",
    workflows: [
      {
        name: "Social Media Auto-Posting",
        description: "Otomatis posting konten ke multiple platform social media",
        steps: ["Content creation", "Schedule management", "Cross-platform posting", "Analytics tracking"],
        icon: MessageSquare,
        complexity: "Medium"
      },
      {
        name: "Email Campaign Automation",
        description: "Automated email sequences berdasarkan user behavior",
        steps: ["Lead capture", "Segmentation", "Personalized emails", "Performance tracking"],
        icon: Mail,
        complexity: "Easy"
      },
      {
        name: "Content Performance Analysis",
        description: "Analisis otomatis performa konten dan generate reports",
        steps: ["Data collection", "Performance analysis", "Report generation", "Insights delivery"],
        icon: BarChart3,
        complexity: "Hard"
      }
    ]
  },
  "sales": {
    title: "Sales Process Automation",
    workflows: [
      {
        name: "Lead Qualification Pipeline",
        description: "Otomatis qualify leads dan routing ke sales team",
        steps: ["Lead scoring", "Qualification criteria", "Team assignment", "Follow-up scheduling"],
        icon: Workflow,
        complexity: "Medium"
      },
      {
        name: "Customer Onboarding Flow",
        description: "Streamline proses onboarding customer baru",
        steps: ["Welcome sequence", "Document collection", "Account setup", "Success tracking"],
        icon: Zap,
        complexity: "Easy"
      },
      {
        name: "Sales Report Automation",
        description: "Generate sales reports dan forecasting otomatis",
        steps: ["Data aggregation", "Report creation", "Trend analysis", "Distribution"],
        icon: BarChart3,
        complexity: "Hard"
      }
    ]
  },
  "ecommerce": {
    title: "E-commerce Automation",
    workflows: [
      {
        name: "Inventory Management System",
        description: "Otomatis update stock, reorder alerts, dan supplier management",
        steps: ["Stock monitoring", "Reorder triggers", "Supplier coordination", "Update notifications"],
        icon: Database,
        complexity: "Hard"
      },
      {
        name: "Customer Service Automation",
        description: "AI-powered customer support dan ticket routing",
        steps: ["Query classification", "Auto-responses", "Escalation rules", "Satisfaction tracking"],
        icon: MessageSquare,
        complexity: "Medium"
      },
      {
        name: "Order Processing Pipeline",
        description: "Streamline dari order placement hingga fulfillment",
        steps: ["Order validation", "Payment processing", "Fulfillment trigger", "Tracking updates"],
        icon: Workflow,
        complexity: "Easy"
      }
    ]
  },
  "content": {
    title: "Content Creation Automation",
    workflows: [
      {
        name: "AI Content Generation Pipeline",
        description: "Generate, review, dan publish content secara otomatis",
        steps: ["Topic research", "AI content creation", "Quality review", "Multi-platform publishing"],
        icon: FileText,
        complexity: "Medium"
      },
      {
        name: "Visual Content Automation",
        description: "Generate images, videos, dan graphics untuk content",
        steps: ["Template selection", "AI image generation", "Brand consistency check", "Asset distribution"],
        icon: Sparkles,
        complexity: "Hard"
      },
      {
        name: "Content Calendar Management",
        description: "Plan, schedule, dan track content across platforms",
        steps: ["Content planning", "Schedule optimization", "Platform distribution", "Performance monitoring"],
        icon: Calendar,
        complexity: "Easy"
      }
    ]
  }
}

export function WorkflowGenerator() {
  const [profession, setProfession] = useState("")
  const [generatedWorkflows, setGeneratedWorkflows] = useState<any>(null)
  const [isGenerating, setIsGenerating] = useState(false)

  const generateWorkflow = () => {
    if (!profession.trim()) return
    
    setIsGenerating(true)
    
    // Simulate AI generation delay
    setTimeout(() => {
      const professionLower = profession.toLowerCase()
      let selectedCategory = "marketing" // default
      
      if (professionLower.includes("sales") || professionLower.includes("penjualan")) {
        selectedCategory = "sales"
      } else if (professionLower.includes("ecommerce") || professionLower.includes("toko") || professionLower.includes("online shop")) {
        selectedCategory = "ecommerce"
      } else if (professionLower.includes("content") || professionLower.includes("konten") || professionLower.includes("creator")) {
        selectedCategory = "content"
      }
      
      setGeneratedWorkflows(workflowTemplates[selectedCategory as keyof typeof workflowTemplates])
      setIsGenerating(false)
    }, 2000)
  }

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case "Easy": return "text-green-600 bg-green-100"
      case "Medium": return "text-yellow-600 bg-yellow-100"
      case "Hard": return "text-red-600 bg-red-100"
      default: return "text-gray-600 bg-gray-100"
    }
  }

  return (
    <section id="generator" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-600/5 via-purple-600/10 to-blue-500/5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-purple-600 border-purple-500/30">
            AI-Powered Generator
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
              Workflow Generator
            </span>{" "}
            Khusus Profesimu
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Masukkan profesi atau bidang kerjamu, AI akan menghasilkan ide workflow automation yang sesuai dengan kebutuhanmu. Lihat langsung nilai praktis dari kursus ini!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-card/50 backdrop-blur-lg border border-border/50 rounded-2xl p-8 mb-12"
          >
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <Input
                  placeholder="Contoh: Digital Marketing, Sales Manager, Content Creator, E-commerce Owner..."
                  value={profession}
                  onChange={(e) => setProfession(e.target.value)}
                  className="h-14 text-lg bg-background/50 border-border/50 focus:border-blue-500/50"
                  onKeyPress={(e) => e.key === 'Enter' && generateWorkflow()}
                />
              </div>
              <Button 
                onClick={generateWorkflow}
                disabled={!profession.trim() || isGenerating}
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 h-14 px-8"
              >
                {isGenerating ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                  />
                ) : (
                  <>
                    <Sparkles className="w-5 h-5 mr-2" />
                    Generate Workflow
                  </>
                )}
              </Button>
            </div>
          </motion.div>

          <AnimatePresence>
            {generatedWorkflows && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2">
                    🎯 Workflow Ideas untuk{" "}
                    <span className="text-purple-600">
                      {generatedWorkflows.title}
                    </span>
                  </h3>
                  <p className="text-muted-foreground">
                    Berikut adalah 3 workflow automation yang bisa kamu implement setelah mengikuti kursus ini:
                  </p>
                </div>

                <div className="grid md:grid-cols-1 gap-6">
                  {generatedWorkflows.workflows.map((workflow: any, index: number) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                    >
                      <Card className="border-border/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
                        <CardHeader>
                          <div className="flex items-start justify-between">
                            <div className="flex items-center gap-3">
                              <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 shadow-lg">
                                <workflow.icon className="w-6 h-6 text-white" />
                              </div>
                              <div>
                                <CardTitle className="text-xl">{workflow.name}</CardTitle>
                                <CardDescription className="mt-1">
                                  {workflow.description}
                                </CardDescription>
                              </div>
                            </div>
                            <Badge className={getComplexityColor(workflow.complexity)}>
                              {workflow.complexity}
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <h4 className="font-medium text-sm uppercase tracking-wide text-muted-foreground">
                              Automation Steps:
                            </h4>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                              {workflow.steps.map((step: string, stepIndex: number) => (
                                <div key={stepIndex} className="flex items-center gap-2">
                                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white text-xs font-bold">
                                    {stepIndex + 1}
                                  </div>
                                  <span className="text-sm">{step}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="text-center p-8 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10 rounded-2xl border border-purple-500/20"
                >
                  <h4 className="text-xl font-bold mb-4">
                    🚀 Siap Implement Workflow Ini?
                  </h4>
                  <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    Semua workflow di atas dan lebih banyak lagi akan kamu pelajari step-by-step dalam kursus AutoFlow Academy. Mulai otomatisasi sekarang!
                  </p>
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    Mulai Belajar Sekarang
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}