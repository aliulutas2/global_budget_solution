import Link from 'next/link';
import {
  ShieldCheck,
  Zap,
  Globe2,
  PieChart,
  ArrowRight,
  LayoutDashboard,
  Users,
  Building2
} from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen selection:bg-indigo-500/30">
      <Navbar />
      <Hero />
      <FeaturesBento />
      <HowItWorks />
      <CTA />
      <Footer />
    </div>
  );
}

function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-[100] border-b border-white/5 bg-slate-950/60 backdrop-blur-xl">
      <div className="container-custom flex justify-between items-center py-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-500 to-violet-500 flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-500/20">
            B
          </div>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
            BudgetOne
          </span>
        </div>

        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
          <Link href="#features" className="hover:text-white transition-colors">Özellikler</Link>
          <Link href="#how-it-works" className="hover:text-white transition-colors">Nasıl Çalışır?</Link>
        </div>

        <div className="flex gap-4">
          <Link href="/login" className="px-5 py-2 rounded-full text-sm font-semibold text-white bg-white/10 border border-white/10 hover:bg-white/20 transition-all">
            Giriş Yap
          </Link>
          <Link href="/login" className="hidden md:block btn-glow px-6 py-2 rounded-full text-sm font-bold">
            Demo Başlat
          </Link>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px] -z-10 animate-pulse"></div>

      <div className="container-custom text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/50 border border-indigo-500/30 text-indigo-300 text-xs font-semibold mb-8 animate-fade-in-up">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          v2.0 Şimdi Yayında
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight animate-fade-in-up delay-100">
          Global Bütçenizi <br />
          <span className="text-gradient">Tek Ekranda</span> Yönetin
        </h1>

        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 animate-fade-in-up delay-200">
          Binlerce Excel dosyasında kaybolmayın. Çok lokasyonlu işletmeler için tasarlanmış,
          yapay zeka destekli bütçe konsolidasyon platformu.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center mb-20 animate-fade-in-up delay-300">
          <Link href="/login" className="btn-glow px-8 py-4 rounded-full text-lg font-bold flex items-center justify-center gap-2 group">
            Hemen Başlayın
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link href="#features" className="px-8 py-4 rounded-full text-lg font-semibold text-white bg-slate-800 border border-slate-700 hover:bg-slate-700 transition-all">
            Nasıl Çalışır?
          </Link>
        </div>

        {/* 3D Dashboard Preview */}
        <div className="perspective-container max-w-5xl mx-auto animate-fade-in-up delay-300">
          <div className="relative bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl rotate-3d overflow-hidden group">
            {/* Top Bar */}
            <div className="bg-slate-950 px-6 py-4 border-b border-slate-800 flex items-center justify-between">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
              </div>
              <div className="text-xs font-mono text-slate-500">budget-one-dashboard.tsx</div>
            </div>

            {/* Content Mockup */}
            <div className="p-8 grid md:grid-cols-3 gap-6 text-left bg-slate-900/50">
              <div className="md:col-span-2 space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="glass-card p-6 rounded-xl">
                    <p className="text-sm text-slate-400 mb-1">Toplam Bütçe (Q1)</p>
                    <p className="text-3xl font-bold text-white">₺45,250,000</p>
                    <div className="mt-4 h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-indigo-500 w-[75%] rounded-full shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
                    </div>
                  </div>
                  <div className="glass-card p-6 rounded-xl">
                    <p className="text-sm text-slate-400 mb-1">Onaylanan Lokasyon</p>
                    <p className="text-3xl font-bold text-white">12 / 15</p>
                    <div className="flex -space-x-2 mt-3">
                      {[1, 2, 3, 4].map(i => (
                        <div key={i} className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-xs text-white">
                          MA
                        </div>
                      ))}
                      <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-xs text-slate-400">+8</div>
                    </div>
                  </div>
                </div>
                <div className="glass-card p-6 rounded-xl h-48 flex items-end gap-2">
                  {[40, 70, 45, 90, 60, 80, 50].map((h, i) => (
                    <div key={i} className="flex-1 bg-gradient-to-t from-indigo-900/50 to-indigo-500/50 rounded-t hover:bg-indigo-500 transition-colors cursor-pointer relative group/bar" style={{ height: `${h}%` }}>
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-xs py-1 px-2 rounded opacity-0 group-hover/bar:opacity-100 transition-opacity whitespace-nowrap border border-slate-700">
                        Veri: {h}%
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <div className="glass-card p-5 rounded-xl flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-emerald-500/10 text-emerald-400"><ShieldCheck size={20} /></div>
                  <div>
                    <p className="font-semibold text-white">Güvenli Mod</p>
                    <p className="text-xs text-slate-400">Aktif</p>
                  </div>
                </div>
                <div className="glass-card p-5 rounded-xl flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400"><Globe2 size={20} /></div>
                  <div>
                    <p className="font-semibold text-white">Senkronizasyon</p>
                    <p className="text-xs text-slate-400">Anlık (Real-time)</p>
                  </div>
                </div>
                <div className="glass-card p-5 rounded-xl flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-amber-500/10 text-amber-400"><Zap size={20} /></div>
                  <div>
                    <p className="font-semibold text-white">Yapay Zeka</p>
                    <p className="text-xs text-slate-400">Analiz Hazır</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Glow overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturesBento() {
  return (
    <section id="features" className="py-32 relative">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Excel Kaosuna Son Verin</h2>
          <p className="text-lg text-slate-400">
            Modern finans takımları için yeniden tasarlandı.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Feature 1 - Large */}
          <div className="md:col-span-2 glass-card p-8 rounded-3xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity">
              <Globe2 size={200} />
            </div>
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6">
                <Globe2 size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Global ve Yerel Uyum</h3>
              <p className="text-slate-400 max-w-md">
                New York'tan İstanbul'a tüm şubeleriniz tek bir standartta birleşir.
                Çoklu para birimi desteği ile kur farklarını otomatik yönetin.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="glass-card p-8 rounded-3xl group">
            <div className="w-12 h-12 rounded-xl bg-violet-500/20 flex items-center justify-center text-violet-400 mb-6">
              <Users size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Rol Bazlı Erişim</h3>
            <p className="text-slate-400">
              Her müdür sadece kendi sorumlu olduğu alanı görür. Veri güvenliği %100.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="glass-card p-8 rounded-3xl group">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6">
              <PieChart size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Anlık Konsolidasyon</h3>
            <p className="text-slate-400">
              Veri girildiği an tüm raporlar güncellenir. "Dosya birleştirme" derdi bitti.
            </p>
          </div>

          {/* Feature 4 - Wide */}
          <div className="md:col-span-2 glass-card p-8 rounded-3xl relative overflow-hidden group">
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-slate-800 rounded-full border border-slate-700/50 group-hover:scale-110 transition-transform"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 mb-6">
                <LayoutDashboard size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Esnek Hesap Planı (CoA)</h3>
              <p className="text-slate-400 max-w-lg">
                Kurumsal yapınıza uygun hesap planını (Chart of Accounts) kolayca tanımlayın,
                alt kırılımları yönetin ve raporlayın.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-slate-950 border-y border-white/5">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="md:w-1/3">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              3 Adımda <br />
              <span className="text-slate-400">Bütçe Sürecini Tamamla</span>
            </h2>
            <p className="text-slate-400 mb-8">
              Karmaşık süreçleri basit, takip edilebilir ve onaylanabilir adımlara böldük.
            </p>
            <Link href="/login" className="text-indigo-400 font-semibold hover:text-indigo-300 flex items-center gap-2">
              Hemen Başlayın <ArrowRight size={16} />
            </Link>
          </div>

          <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { step: "01", title: "Tanımla", desc: "Admin hesap planını ve şubeleri oluşturur." },
              { step: "02", title: "Topla", desc: "Müdürler sorumlu oldukları bütçeleri girer." },
              { step: "03", title: "Yönet", desc: "Sistem tüm veriyi anlık olarak birleştirir ve raporlar." }
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-indigo-500/50 transition-colors">
                <div className="text-4xl font-black text-slate-800 mb-4">{item.step}</div>
                <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-indigo-950/20"></div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-600/30 rounded-full blur-[100px]"></div>

      <div className="container-custom relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Excel Dosyalarından Kurtulun</h2>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
          Bütçe süreçlerinizi %80 hızlandırın ve hatasız raporlamanın keyfini çıkarın.
        </p>
        <Link href="/login" className="btn-glow px-10 py-5 rounded-full text-xl font-bold inline-flex items-center gap-3">
          Ücretsiz Deneyin <Zap className="fill-white" size={20} />
        </Link>
        <p className="mt-6 text-sm text-slate-500">Kredi kartı gerekmez • 14 gün ücretsiz deneme</p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 py-12">
      <div className="container-custom flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-gradient-to-tr from-indigo-500 to-violet-500"></div>
          <span className="font-bold text-white">BudgetOne</span>
        </div>
        <div className="text-slate-500 text-sm">
          &copy; 2024 Global Budget Solution. All rights reserved.
        </div>
        <div className="flex gap-6 text-slate-400 text-sm">
          <a href="#" className="hover:text-white">Gizlilik</a>
          <a href="#" className="hover:text-white">Kullanım Şartları</a>
          <a href="#" className="hover:text-white">İletişim</a>
        </div>
      </div>
    </footer>
  );
}
