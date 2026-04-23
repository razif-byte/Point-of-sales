import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  CheckCircle2, 
  Store, 
  BarChart3, 
  QrCode, 
  Smartphone, 
  Zap, 
  Headphones, 
  Users, 
  ChevronRight,
  ShieldCheck,
  Receipt,
  LayoutDashboard,
  Moon,
  Sun,
  Globe,
  Mail,
  MapPin,
  MessageSquare
} from "lucide-react";

/**
 * Navbar - Refined with dark mode support
 */
const Navbar = ({ isDark, setIsDark }: { isDark: boolean, setIsDark: (v: boolean) => void }) => (
  <nav className="fixed top-0 w-full z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-100 dark:border-slate-800 transition-colors">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <h1 className="font-display text-2xl font-bold tracking-tight text-blue-900 dark:text-blue-400">SMART <span className="text-blue-500">POS</span></h1>
        </div>
        <p className="text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-widest leading-none mt-1">Penyelesaian Jualan No. 1 di Malaysia</p>
      </div>
      <div className="hidden md:flex gap-10 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
        <a href="#features" className="hover:text-blue-600 transition-colors">Kelebihan</a>
        <a href="#pricing" className="hover:text-blue-600 transition-colors">Pakej</a>
        <a href="#value" className="hover:text-blue-600 transition-colors">Informasi</a>
      </div>
      <div className="flex items-center gap-4">
        <button 
          onClick={() => setIsDark(!isDark)}
          className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 transition-colors"
          aria-label="Toggle Dark Mode"
        >
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        <div className="hidden lg:block text-right mr-2">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">WhatsApp Kami</p>
          <a href="https://wa.me/601168728510" target="_blank" className="text-sm font-bold text-slate-900 dark:text-white">+6011-6872-8510</a>
        </div>
        <button className="bg-blue-600 text-white px-7 py-2.5 rounded-full text-sm font-bold hover:bg-blue-700 transition-all shadow-sm">
          Demo Percuma
        </button>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="pt-40 pb-24 bg-slate-50 dark:bg-slate-950 overflow-hidden transition-colors">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-display text-6xl md:text-7xl font-black text-slate-900 dark:text-white leading-[1] mb-8 tracking-tighter">
            Jalankan Bisnes <span className="text-blue-600">Tanpa Gangguan.</span>
          </h1>
          <p className="text-xl text-slate-500 dark:text-slate-400 mb-10 max-w-xl font-medium leading-relaxed">
            Sistem Point of Sales (POS) serba lengkap untuk F&B dan peruncitan. Automatikkan urus niaga anda hari ini.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 items-start">
            <button className="bg-blue-600 text-white px-10 py-5 rounded-2xl text-lg font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 dark:shadow-blue-900/20">
              Mula Sekarang
            </button>
            <div className="py-2">
              <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1">HARGA MULA DARI</p>
              <p className="text-2xl font-black text-slate-900 dark:text-white">RM 1,750</p>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -inset-10 bg-blue-200/30 dark:bg-blue-900/20 rounded-full blur-3xl -z-10"></div>
          
          {/* YouTube Video Embed replaced image */}
          <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white dark:border-slate-800 aspect-[16/9] w-full bg-black">
             <iframe 
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/lgGIAtiVsGw?autoplay=1&mute=1&loop=1&playlist=lgGIAtiVsGw&controls=0&modestbranding=1" 
                title="SmartPOS Video"
                allow="autoplay; encrypted-media" 
                allowFullScreen
                referrerPolicy="no-referrer"
             ></iframe>
          </div>

          <div className="absolute -bottom-8 -right-8 bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700 hidden md:block">
            <div className="flex items-center gap-5">
              <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-2xl text-blue-600 dark:text-blue-400">
                <BarChart3 size={28} />
              </div>
              <div>
                <p className="text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-widest">Jualan Hari Ini</p>
                <p className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">RM 4,250.00</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const FeatureCard = ({ icon: Icon, title, desc, colorClass }: { icon: any, title: string, desc: string, colorClass: string }) => (
  <motion.div 
    whileHover={{ y: -8 }}
    className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all duration-300"
  >
    <div className={`w-14 h-14 ${colorClass} rounded-2xl flex items-center justify-center mb-6 font-bold text-2xl`}>
      <Icon size={28} />
    </div>
    <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white mb-3">{title}</h3>
    <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm font-medium">{desc}</p>
  </motion.div>
);

const Features = () => (
  <section id="features" className="py-32 bg-white dark:bg-slate-900 transition-colors text-slate-900 dark:text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-4 gap-8">
        <FeatureCard 
          icon={() => <span>✓</span>} 
          title="Mudah Digunakan" 
          desc="Tunai, Kad, QR DuitNow & eWallet dalam satu sistem mesra pengguna." 
          colorClass="bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
        />
        <FeatureCard 
          icon={() => <span>📦</span>} 
          title="Stok Automatik" 
          desc="Kawal stok masa-nyata & amaran stok rendah automatik terus ke telefon." 
          colorClass="bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400"
        />
        <FeatureCard 
          icon={() => <span>📊</span>} 
          title="Laporan Pintar" 
          desc="Analisis jualan & waktu puncak harian untuk strategi bisnes lebih pantas." 
          colorClass="bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400"
        />
        <FeatureCard 
          icon={() => <span>L</span>} 
          title="Patuh LHDN" 
          desc="Sistem e-Invois & SST sedia ada untuk pematuhan penuh undang-undang." 
          colorClass="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400"
        />
      </div>
    </div>
  </section>
);

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Starter Plan",
      basePrice: 1750,
      monthlyPrice: 149,
      yearlyPrice: 119,
      target: "Kiosk / Butik",
      features: [
        "1x Tablet POS 10.1\"",
        "Thermal Printer + Cash Drawer",
        "Software SmartPOS Asas",
        "100 Produk / SKU",
      ],
      color: "slate"
    },
    {
      name: "Business Plan",
      basePrice: 3200,
      monthlyPrice: 249,
      yearlyPrice: 199,
      target: "Restoran / Runcit",
      features: [
        "1x Terminal Android Lengkap",
        "Scanner + Printer + Drawer",
        "Laporan & Promosi Penuh",
        "1,000 Produk / SKU",
      ],
      popular: true,
      color: "blue"
    },
    {
      name: "Enterprise Plan",
      basePrice: 4800,
      monthlyPrice: 399,
      yearlyPrice: 319,
      target: "Francais / Rangkaian",
      features: [
        "Premium Dual Screen Terminal",
        "KDS + Integrasi Grab/Panda",
        "Multi-Outlet Support",
        "E-Invois Automatik LHDN",
      ],
      color: "slate"
    }
  ];

  return (
    <section id="pricing" className="py-32 bg-slate-50 dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 text-slate-900 dark:text-white">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-4">PILIHAN PAKEJ</p>
          <h2 className="font-display text-5xl font-black mb-8 tracking-tight">Pelan Peranti + Sistem</h2>
          
          {/* Monthly/Yearly Toggle */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <span className={`text-sm font-bold uppercase tracking-wider ${!isYearly ? 'text-blue-600' : 'text-slate-400'}`}>Bulanan</span>
            <button 
              onClick={() => setIsYearly(!isYearly)}
              className="w-14 h-7 bg-slate-200 dark:bg-slate-800 rounded-full relative p-1 transition-colors"
            >
              <div className={`w-5 h-5 bg-white dark:bg-blue-500 rounded-full shadow-sm transition-transform duration-300 ${isYearly ? 'translate-x-7' : 'translate-x-0'}`}></div>
            </button>
            <div className="flex items-center gap-2">
              <span className={`text-sm font-bold uppercase tracking-wider ${isYearly ? 'text-blue-600' : 'text-slate-400'}`}>Tahunan</span>
              <span className="bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-widest leading-none">Jimat 20%</span>
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col transition-colors">
          <div className="bg-slate-900 dark:bg-black text-white p-6 grid grid-cols-1 md:grid-cols-4 font-bold text-xs uppercase tracking-widest text-center md:text-left">
            <div className="md:pl-6">Butiran Pakej</div>
            <div className="hidden md:block text-center">Starter Plan</div>
            <div className="hidden md:block text-center text-blue-400">Business Plan</div>
            <div className="hidden md:block text-center">Enterprise Plan</div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-100 dark:divide-slate-800">
            {/* Headers for Mobile */}
            <div className="p-8 bg-slate-50/50 dark:bg-slate-800/30 flex flex-col gap-6 font-bold text-slate-400 dark:text-slate-600 text-[10px] tracking-widest uppercase">
              <p>Harga Per Langganan</p>
              <p>Device Utama</p>
              <p>Aksesori</p>
              <p>Ringkasan Sistem</p>
              <p>Sasaran Bisnes</p>
            </div>

            {plans.map((plan, i) => (
              <div key={i} className={`p-8 flex flex-col gap-6 text-center ${plan.popular ? 'bg-blue-50/30 dark:bg-blue-900/20 ring-2 ring-inset ring-blue-100 dark:ring-blue-900/50' : ''}`}>
                <div className="mb-2">
                   <p className={`text-3xl font-black ${plan.popular ? 'text-blue-600' : 'text-slate-900 dark:text-white'}`}>
                    RM {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">/ bulan</p>
                </div>
                <p className="text-slate-600 dark:text-slate-300 font-bold text-sm tracking-tight">{plan.features[0]}</p>
                <p className="text-slate-500 dark:text-slate-400 text-xs font-medium">{plan.features[1]}</p>
                <p className="text-slate-500 dark:text-slate-400 text-xs font-medium leading-relaxed">{plan.features[2]}</p>
                <div>
                   <p className={`${plan.popular ? 'bg-blue-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-300'} py-2 px-4 rounded-full text-[10px] font-black uppercase tracking-widest inline-block`}>
                    {plan.target}
                  </p>
                </div>
                <button className={`mt-4 w-full py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${plan.popular ? 'bg-blue-600 text-white shadow-lg shadow-blue-100 dark:shadow-blue-900/20 hover:bg-blue-700' : 'bg-slate-900 dark:bg-slate-800 text-white hover:bg-slate-800 dark:hover:bg-slate-700'}`}>
                  Pilih Pakej
                </button>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-12 text-center">
            <p className="text-sm font-medium text-slate-400 dark:text-slate-500">
               * Semua pakej memerlukan pembelian peranti (upfront) bermula dari <span className="text-slate-900 dark:text-white font-bold">RM 1,750</span>
            </p>
        </div>
      </div>
    </section>
  );
};

const ValueAdds = () => (
  <section id="value" className="py-24 bg-white dark:bg-slate-900 transition-colors">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-wrap justify-center gap-12 mb-20 border-y border-slate-100 dark:border-slate-800 py-10">
        <div className="flex items-center gap-3">
          <span className="text-blue-600 text-xl">●</span>
          <p className="text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-white">Sokongan 24/7 Tempatan</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-blue-600 text-xl">●</span>
          <p className="text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-white">Latihan Staf Percuma</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-blue-600 text-xl">●</span>
          <p className="text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-white">Patuh LHDN e-Invois</p>
        </div>
      </div>
      
      <div className="bg-blue-600 text-white p-10 md:p-16 rounded-[3rem] shadow-2xl flex flex-col md:flex-row items-center justify-between gap-10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-3xl rounded-full"></div>
        <div className="text-center md:text-left z-10">
          <p className="text-xs font-black uppercase tracking-[0.3em] opacity-80 mb-4">Masa Depan Bisnes Anda Bermula Sini</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter">Bermula RM 1,750 <span className="opacity-70 text-2xl font-medium block md:inline md:ml-4">Termasuk Hardware + Sistem</span></h2>
        </div>
        <a 
          href="https://wa.me/601168728510" 
          target="_blank"
          className="bg-white text-blue-700 px-12 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:scale-105 transition-transform z-10 shadow-xl flex items-center gap-3"
        >
          <MessageSquare size={20} /> WhatsApp Sekarang
        </a>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-white dark:bg-slate-950 pt-24 pb-12 border-t border-slate-100 dark:border-slate-800 transition-colors">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
        <div>
          <h4 className="font-display text-2xl font-black text-slate-900 dark:text-white mb-6 tracking-tight uppercase">SMART <span className="text-blue-600">POS</span></h4>
          <p className="text-slate-400 dark:text-slate-500 text-sm max-w-sm font-medium leading-relaxed mb-8">
            Bantu automasi urus niaga bisnes anda dengan teknologi POS yang stabil dan patuh undang-undang Malaysia. Sebahagian daripada Nasadef Group.
          </p>
          <div className="space-y-4">
             <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider">
                <MapPin size={16} className="text-blue-600" />
                Kota Bharu, Kelantan, Malaysia
             </div>
             <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider">
                <Mail size={16} className="text-blue-600" />
                nikrazif@nasadef.com.my
             </div>
             <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider">
                <Globe size={16} className="text-blue-600" />
                <a href="https://nasadef.com.my" target="_blank" className="hover:text-blue-600 decoration-dotted underline underline-offset-4">nasadef.com.my</a>
             </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-20">
          <div>
            <h5 className="font-black text-[10px] uppercase tracking-widest text-slate-900 dark:text-white mb-8">Penyelesaian</h5>
            <ul className="space-y-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              <li><a href="#" className="hover:text-blue-600 transition-colors">Retail Sync</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">F&B Management</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">E-Invois LHDN</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">SST Compliance</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-black text-[10px] uppercase tracking-widest text-slate-900 dark:text-white mb-8">Syarikat</h5>
            <ul className="space-y-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              <li><a href="#" className="hover:text-blue-600 transition-colors">Pusat Bantuan</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Polisi Privasi</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Terma Servis</a></li>
              <li><a href="https://nasadef.com.my" target="_blank" className="hover:text-blue-600 transition-colors">Laman Utama</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="pt-12 border-t border-slate-50 dark:border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[10px] font-bold text-slate-400 dark:text-slate-600 uppercase tracking-[0.2em]">© 2026 SMART POS MALAYSIA BY NASADEF GROUP. HAKCIPTA TERPELIHARA.</p>
        <div className="flex gap-10">
           <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-900 flex items-center justify-center text-slate-400">
              <Zap size={20} />
           </div>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans text-slate-900 dark:text-white selection:bg-blue-100 dark:selection:bg-blue-900 transition-colors duration-300">
      <Navbar isDark={isDark} setIsDark={setIsDark} />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <ValueAdds />
      </main>
      <Footer />
    </div>
  );
}
