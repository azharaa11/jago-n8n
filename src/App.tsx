import { Header } from "./components/header"
import { HeroSection } from "./components/hero-section"
import { TransformationSection } from "./components/transformation-section"
import { ProblemSolutionSection } from "./components/problem-solution-section"
import Course from "./components/course-module1"
import { WorkflowGenerator } from "./components/workflow-generator"
import { AiPreview } from "./components/ai-preview"
import { Testimonials } from "./components/testimonials"
import { FaqSection } from "./components/faq-section"
import { ContactSection } from "./components/contact-section"
import { Button } from "./components/ui/button"
import { Badge } from "./components/ui/badge"
import AutomationIllustration from "./components/AutomationIllustration"
import { motion } from "framer-motion"
import { ArrowUp, Zap, Heart } from "lucide-react"
import { useState, useEffect } from "react"
import Footer from "./components/footer"
import { CTASection } from "./components/CTASection"

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed bottom-8 right-8 z-50"
        >
          <Button
            onClick={scrollToTop}
            size="icon"
            className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
          >
            <ArrowUp className="w-5 h-5" />
          </Button>
        </motion.div>
      )}
    </>
  )
}
export default function App() {
  return (
    <div className="min-h-screen text-foreground">
        <Header />
        <HeroSection />
        <TransformationSection />
        <ProblemSolutionSection />
        <Course />
        <WorkflowGenerator />
        <Testimonials />
        <FaqSection />
        <ContactSection /> 
        <CTASection/>
        <Footer />
        <ScrollToTop />
      </div>
    )
}