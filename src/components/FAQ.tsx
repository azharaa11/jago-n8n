import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { HelpCircle } from "lucide-react";

export default function FAQ() {
  const faqs = [
    {
      question: "Apakah saya perlu background programming untuk belajar n8n?",
      answer: "Tidak sama sekali! N8N adalah platform no-code yang dirancang untuk non-programmer. Di Jago N8N, kami mengajarkan dengan pendekatan visual drag-and-drop yang mudah dipahami bahkan untuk pemula."
    },
    {
      question: "Berapa lama waktu yang dibutuhkan untuk menguasai automation?",
      answer: "Dengan roadmap belajar 3 minggu di Jago N8N, kamu sudah bisa membuat automation workflow yang powerful. Minggu pertama untuk foundation, minggu kedua real implementation, dan minggu ketiga advanced optimization."
    },
    {
      question: "Apakah materi akan selalu update mengikuti perkembangan n8n?",
      answer: "Ya! Kami committed untuk selalu update materi mengikuti perkembangan terbaru n8n. Member mendapat lifetime access ke semua update materi tanpa biaya tambahan."
    },
    {
      question: "Bagaimana dengan support jika saya stuck di tengah pembelajaran?",
      answer: "Jago N8N punya community support yang aktif 24/7. Plus ada weekly Q&A session dengan mentor, dan untuk member premium ada 1-on-1 consultation call."
    },
    {
      question: "Apakah automation ini bisa diterapkan untuk bisnis kecil?",
      answer: "Absolutely! Justru bisnis kecil yang paling benefit dari automation karena bisa menghemat biaya operasional dan meningkatkan efisiensi dengan resource terbatas. Banyak template kami yang specifically untuk SME."
    },
    {
      question: "Saya sudah punya basic knowledge n8n, apakah course ini cocok?",
      answer: "Sangat cocok! Jago N8N punya learning path untuk semua level. Kamu bisa skip basic dan langsung ke advanced topics, atau review fundamental untuk strengthen foundation."
    },
    {
      question: "Bagaimana guarantee jika saya tidak satisfied dengan course ini?",
      answer: "Kami confident dengan kualitas materi, jadi ada 30-day money back guarantee. Jika dalam 30 hari kamu tidak puas, kami refund 100% tanpa pertanyaan."
    },
    {
      question: "Apakah ada certificate setelah menyelesaikan course?",
      answer: "Ya! Setelah menyelesaikan semua module dan project, kamu akan mendapat Jago N8N Automation Expert Certificate yang bisa kamu pakai untuk CV dan LinkedIn profile."
    }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-800 via-gray-800 to-zinc-800 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0">
        {/* Question Mark Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(100,116,139,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(100,116,139,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        
        {/* FAQ Symbols */}
        <div className="absolute top-20 left-24 w-18 h-18 bg-gradient-to-r from-slate-200/30 to-gray-200/30 rounded-2xl rotate-12 animate-pulse"></div>
        <div className="absolute bottom-28 right-28 w-14 h-14 bg-gradient-to-r from-gray-200/25 to-zinc-200/25 rounded-full animate-bounce"></div>
        <div className="absolute top-2/3 left-1/4 w-10 h-10 bg-zinc-300/20 rounded-lg rotate-45 animate-pulse animation-delay-600"></div>
        
        {/* Question Mark Icons */}
        <div className="absolute top-32 right-1/3 opacity-5">
          <div className="text-4xl text-slate-400 font-bold">?</div>
        </div>
        <div className="absolute bottom-32 left-1/3 opacity-5">
          <div className="text-4xl text-gray-400 font-bold">?</div>
        </div>
        
        {/* Help Circle Pattern */}
        <div className="absolute top-1/2 right-20 opacity-8">
          <div className="w-8 h-8 border-2 border-slate-300 rounded-full flex items-center justify-center">
            <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
          </div>
        </div>
        
        {/* Wave Shape */}
        <div className="absolute top-0 left-0 w-full h-28 bg-gradient-to-b from-slate-100/20 to-transparent rounded-b-[70px]"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-[#00ff88]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="w-8 h-8 text-[#00ff88]" />
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Frequently Asked
            <span className="block text-[#00ff88]">Questions</span>
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-6">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 px-8 py-2 hover:border-[#00ff88]/30 transition-colors duration-300"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6 text-lg font-semibold text-white hover:text-[#00ff88] transition-colors duration-300">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-6 pt-2 text-gray-200 leading-relaxed text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#0f172a] to-[#1e293b] rounded-3xl p-12 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Masih Ada Pertanyaan Lain?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Tim support kami siap membantu kamu 24/7. Jangan ragu untuk reach out!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center gap-3 bg-white/10 rounded-2xl px-6 py-4">
                <div className="w-3 h-3 bg-[#00ff88] rounded-full animate-pulse"></div>
                <span>WhatsApp Support: +62 812-3456-7890</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 rounded-2xl px-6 py-4">
                <div className="w-3 h-3 bg-[#00ff88] rounded-full animate-pulse"></div>
                <span>Email: hello@jagon8n.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}