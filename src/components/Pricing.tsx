import { Button } from "./ui/button";
import { Check, Crown, Zap, Gift, Star } from "lucide-react";
import Countdown from "./Coutdown"; // benar


export default function Pricing() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-emerald-900/80 via-teal-900/70 to-green-900/60 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0">
        {/* Money Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.04)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        {/* Pricing Elements */}
        <div className="absolute top-24 left-28 w-20 h-20 bg-gradient-to-r from-emerald-200/30 to-teal-200/30 rounded-2xl rotate-12 animate-pulse"></div>
        <div className="absolute bottom-32 right-32 w-16 h-16 bg-gradient-to-r from-teal-200/25 to-green-200/25 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/5 w-12 h-12 bg-green-300/20 rounded-xl rotate-45 animate-pulse animation-delay-800"></div>
        
        {/* Dollar Sign Pattern */}
        <div className="absolute top-40 right-1/4 opacity-5">
          <div className="text-5xl text-emerald-400 font-bold">$</div>
        </div>
        <div className="absolute bottom-40 left-1/4 opacity-5">
          <div className="text-5xl text-teal-400 font-bold">₹</div>
        </div>
        
        {/* Price Tag Pattern */}
        <div className="absolute top-1/3 right-20 opacity-8">
          <div className="w-6 h-6 bg-emerald-300 rounded-r-full rounded-l-none relative">
            <div className="absolute top-1/2 left-1 w-1 h-1 bg-white rounded-full transform -translate-y-1/2"></div>
          </div>
        </div>
        
        {/* Wave Shape */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-emerald-100/20 to-transparent rounded-t-[80px]"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Penawaran Spesial
            <span className="block text-[#00ff88]">Terbatas!</span>
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Investasi terbaik untuk masa depan karirmu. Pilih paket yang sesuai dengan kebutuhanmu.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Free Plan */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-xl border-2 border-white/20 relative">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Starter Pack</h3>
              <p className="text-gray-200 mb-6">Perfect untuk yang mau coba dulu</p>
              
              <div className="mb-6">
                <div className="text-5xl font-bold text-white">GRATIS</div>
                <div className="text-gray-300">Selamanya</div>
              </div>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-200">5 Basic Tutorial Videos</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-gray-200">3 Ready-to-Use Templates</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-gray-200">Community Access</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-gray-200">Basic Email Support</span>
              </div>
            </div>
            
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl text-lg font-semibold">
              Mulai Sekarang
            </Button>
            
            <p className="text-center text-sm text-gray-300 mt-4">
              No credit card required
            </p>
          </div>
          
          {/* Premium Plan */}
          <div className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] rounded-3xl p-8 shadow-2xl border-2 border-[#00ff88] relative overflow-hidden">
            {/* Popular Badge */}
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <div className="bg-[#00ff88] text-[#0f172a] px-6 py-2 rounded-full font-bold text-sm flex items-center gap-2">
                <Crown className="w-4 h-4" />
                MOST POPULAR
              </div>
            </div>
            
            <div className="text-center mb-8 text-white">
              <div className="w-16 h-16 bg-[#00ff88]/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Crown className="w-8 h-8 text-[#00ff88]" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Master Premium</h3>
              <p className="text-gray-300 mb-6">All-in-one automation mastery</p>
              
              <div className="mb-6">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-2xl text-gray-400 line-through">Rp 2.999.000</span>
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">50% OFF</span>
                </div>
                <div className="text-5xl font-bold text-[#00ff88]">Rp 1.499.000</div>
                <div className="text-gray-300">Lifetime Access</div>
              </div>
            </div>
            
            <div className="space-y-4 mb-8 text-white">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-[#00ff88] rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-[#0f172a]" />
                </div>
                <span>50+ Advanced Tutorial Videos</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-[#00ff88] rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-[#0f172a]" />
                </div>
                <span>30+ Ready-to-Use Templates</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-[#00ff88] rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-[#0f172a]" />
                </div>
                <span>VIP Community Access</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-[#00ff88] rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-[#0f172a]" />
                </div>
                <span>1-on-1 Consultation Call</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-[#00ff88] rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-[#0f172a]" />
                </div>
                <span>Private Masterclass Series</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-[#00ff88] rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-[#0f172a]" />
                </div>
                <span>Priority Support (24/7)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-[#00ff88] rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-[#0f172a]" />
                </div>
                <span>Lifetime Updates</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-[#00ff88] rounded-full flex items-center justify-center flex-shrink-0">
                  <Gift className="w-4 h-4 text-[#0f172a]" />
                </div>
                <span className="text-[#00ff88] font-semibold">Bonus Senilai Rp 10 Juta!</span>
              </div>
            </div>
            
            <Button className="w-full bg-[#00ff88] hover:bg-[#00cc6a] text-[#0f172a] py-4 rounded-2xl text-lg font-bold mb-4 transform hover:scale-105 transition-all duration-300">
              Ambil Penawaran Spesial Ini!
            </Button>
            
            <div className="text-center text-gray-300 text-sm">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Star className="w-4 h-4 text-[#00ff88]" />
                <span>30-day money back guarantee</span>
              </div>
              <p>Penawaran terbatas untuk 100 orang pertama</p>
            </div>
            
            {/* Background decoration */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#00ff88] rounded-full blur-3xl opacity-10"></div>
            <div className="absolute -bottom-20 -left-20 w-32 h-32 bg-[#00ff88] rounded-full blur-2xl opacity-10"></div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-red-500 to-red-600 text-white rounded-2xl p-8 max-w-4xl mx-auto">
            <p className="text-xl font-bold opacity-90">
              ⚠️ PERINGATAN SERIUS:
            </p>
            <p>Setelah countdown selesai: Harga NAIK PERMANEN menjadi Rp 2.999.000 💸 & Semua bonus eksklusif HILANG SELAMANYA ❌</p>
          </div>
        </div>
        <Countdown/>
      </div>
    </section>
  );
}