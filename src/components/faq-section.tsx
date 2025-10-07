import { motion } from "framer-motion"
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion"
import { Badge } from "./ui/badge"
import { MessageSquare, Clock, Users, Award } from "lucide-react"

const faqs = [
  {
    question: "Apakah saya perlu background teknis untuk mengikuti kursus ini?",
    answer: "Tidak sama sekali! Kursus ini dirancang untuk pemula hingga advanced. Kami mulai dari fundamental dan step-by-step guidance yang mudah dipahami. Yang dibutuhkan hanya kemauan belajar dan praktik."
  },
  {
    question: "Berapa lama waktu yang dibutuhkan untuk menguasai materi?",
    answer: "Rata-rata student berhasil implement workflow pertama dalam 1-2 minggu. Untuk menguasai semua modul secara mendalam, biasanya membutuhkan 1-2 bulan dengan konsisten belajar 1-2 jam per hari."
  },
  {
    question: "Apakah ada garansi hasil atau money back guarantee?",
    answer: "Ya! Kami memberikan 30 hari money back guarantee. Jika dalam 30 hari kamu merasa kursus ini tidak sesuai ekspektasi atau tidak memberikan value, kami akan refund 100% tanpa pertanyaan."
  },
  {
    question: "Bisakah saya akses kursus selamanya?",
    answer: "Absolutely! Setelah pembelian, kamu mendapat akses seumur hidup ke semua materi, termasuk update content terbaru, bonus materials, dan akses ke komunitas eksklusif."
  },
  {
    question: "Apakah ada support jika saya stuck atau butuh bantuan?",
    answer: "Tentu saja! Kami provide community support 24/7 melalui Discord, weekly Q&A sessions, dan untuk premium members ada 1-on-1 mentoring session dengan instructor."
  },
  {
    question: "Tools apa saja yang diperlukan dan apakah berbayar?",
    answer: "Sebagian besar tools yang digunakan memiliki free tier yang cukup untuk belajar dan implementasi awal. Untuk n8n, bisa self-hosted gratis. Kami juga provide alternative free tools untuk semua scenario."
  },
  {
    question: "Apakah materi selalu di-update dengan teknologi terbaru?",
    answer: "Ya! Kami commit untuk selalu update materi mengikuti perkembangan AI dan automation tools terbaru. Student mendapat akses gratis ke semua update dan new features."
  },
  {
    question: "Bisakah implementasi workflow ini untuk berbagai jenis bisnis?",
    answer: "Absolutely! Workflow automation principles yang diajarkan bersifat universal dan bisa di-adapt untuk berbagai industri - e-commerce, marketing agency, consulting, SaaS, dan lainnya."
  },
  {
    question: "Apakah ada sertifikat setelah menyelesaikan kursus?",
    answer: "Ya! Setelah menyelesaikan semua modul dan final project, kamu akan mendapat official certificate yang bisa digunakan untuk portfolio atau LinkedIn profile."
  },
  {
    question: "Bagaimana cara pembayaran dan apakah bisa dicicil?",
    answer: "Kami terima berbagai metode pembayaran: credit card, bank transfer, e-wallet. Untuk kemudahan, tersedia juga opsi cicilan 3x atau 6x tanpa bunga."
  }
]

export function FaqSection() {
  return (
    <section id="faq" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-600/5 via-cyan-600/10 to-purple-500/5 dark:from-blue-500/10 dark:via-cyan-500/15 dark:to-purple-400/10"></div>
      
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-600 dark:text-cyan-400 border-cyan-500/30">
            Frequently Asked Questions
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Masih Ada{" "}
            <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Pertanyaan?
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Kami kumpulkan pertanyaan yang paling sering ditanyakan calon students. Jika masih ada yang belum terjawab, feel free to contact us!
          </p>
        </motion.div>

        {/* FAQ Accordion - semuanya rata tengah */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full max-w-3xl"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border/50 rounded-lg px-6 hover:border-cyan-500/50 transition-all duration-300"
              >
                <AccordionTrigger className="text-left hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
