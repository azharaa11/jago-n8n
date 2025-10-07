import { motion } from "framer-motion"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { 
  Mail, 
  Phone, 
  MessageSquare, 
  ExternalLink
} from "lucide-react"

const contactMethods = [
  {
    icon: MessageSquare,
    title: "WhatsApp",
    action: "+62 812-3456-7890",
    color: "text-green-600",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/30"
  },
  {
    icon: Mail,
    title: "Email", 
    action: "suratkita@gmail.com",
    color: "text-blue-600",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/30"
  },
  {
    icon: Phone,
    title: "Telepon",
    action: "+62 21-5555-0123",
    color: "text-purple-600",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/30"
  }
]

export function ContactSection() {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Smooth gradient transition */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-600/5 via-purple-600/10 to-blue-600/5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-600 border-blue-500/30">
            💬 Hubungi Kami
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Butuh{" "}
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
              Bantuan?
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tim support kami siap membantu Anda. Pilih metode komunikasi yang paling nyaman!
          </p>
        </motion.div>

        {/* Simple Contact Methods */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className={`border-2 ${method.borderColor} ${method.bgColor} hover:shadow-lg transition-all duration-300 text-center`}>
                  <CardContent className="p-6">
                    <div className={`inline-flex p-4 rounded-full ${method.bgColor} mb-4`}>
                      <method.icon className={`w-8 h-8 ${method.color}`} />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{method.title}</h3>
                    <p className={`${method.color} font-medium mb-4`}>{method.action}</p>
                    <Button 
                      className={`w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white`}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Hubungi
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Simple CTA */}
         
        </div>
      </div>
    </section>
  )
}