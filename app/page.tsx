import Link from 'next/link';
import {
  XCircle,
  CheckCircle2,
  Globe,
  Lock,
  BarChart3,
  ArrowRight
} from 'lucide-react';

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProblemSolution />
      <Features />
      <HowItWorks />
      <CTA />
      <Footer />
    </>
  );
}

function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700 py-4">
      <div className="container flex justify-between items-center">
        <div className="text-2xl font-bold text-slate-50 tracking-tight">BudgetOne</div>
        <div className="flex gap-8 items-center">
          <Link href="#features" className="text-slate-400 hover:text-slate-50 transition-colors">Özellikler</Link>
          <Link href="#how-it-works" className="text-slate-400 hover:text-slate-50 transition-colors">Nasıl Çalışır?</Link>
          <Link href="/login" className="btn btn-primary">Giriş Yap</Link>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <header className="pt-32 pb-16 text-center relative overflow-hidden bg-slate-900">
      {/* Background Glow */}
      <div className="absolute -top-[50%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-500/15 rounded-full blur-3xl -z-10"></div>

      <div className="container">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight text-slate-50">
          Global Bütçenizi <br /> <span className="gradient-text">Tek Ekranda</span> Yönetin.
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10">
          Çok lokasyonlu işletmeler için tasarlanmış, Excel kaosunu bitiren, gerçek zamanlı
          bütçe konsolidasyon platformu.
        </p>

        <div className="flex gap-4 justify-center mb-16">
          <Link href="/login" className="btn btn-primary btn-lg">Erken Erişim İçin Katılın</Link>
          <Link href="/login" className="btn btn-secondary btn-lg">Demoyu İncele</Link>
        </div>

        {/* Abstract Dashboard Preview (Mockup) */}
        <div className="mt-8 perspective-1000">
          <div className="relative bg-slate-800 border border-slate-700 rounded-xl shadow-2xl max-w-4xl mx-auto overflow-hidden rotate-x-6 transform hover:rotate-0 transition-transform duration-500">
            <div className="bg-slate-950 px-4 py-3 border-b border-slate-700 flex gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
              <span className="w-3 h-3 rounded-full bg-green-500"></span>
            </div>
            <div className="p-8 grid grid-cols-2 gap-6 text-left">
              <div className="bg-white/5 p-6 rounded-lg">
                <span className="block text-sm text-slate-400 mb-2">Total Budget (Q1)</span>
                <h3 className="text-3xl font-bold text-slate-50">₺450,000,000</h3>
              </div>
              <div className="bg-white/5 p-6 rounded-lg">
                <span className="block text-sm text-slate-400 mb-2">Approved Locations</span>
                <h3 className="text-3xl font-bold text-slate-50">12 / 15</h3>
              </div>
              <div className="col-span-2 h-24 flex items-end gap-4 mt-4">
                <div className="flex-1 bg-slate-700 rounded-t h-[60%]"></div>
                <div className="flex-1 bg-slate-700 rounded-t h-[80%]"></div>
                <div className="flex-1 bg-blue-500 rounded-t h-full shadow-[0_0_20px_rgba(59,130,246,0.5)]"></div>
                <div className="flex-1 bg-slate-700 rounded-t h-[40%]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function ProblemSolution() {
  return (
    <section className="py-20 bg-slate-900">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-4 text-slate-50">Why BudgetOne?</h2>
            <p className="text-lg text-slate-400 mb-6">
              Stop dealing with data lost in thousands of Excel files, erroneous versions,
              and email traffic.
            </p>
            <ul className="space-y-4">
              <li className="flex gap-3 text-slate-400 items-center"><XCircle className="text-red-500" size={20} /> Manual data merging errors</li>
              <li className="flex gap-3 text-slate-400 items-center"><XCircle className="text-red-500" size={20} /> Outdated budget versions</li>
              <li className="flex gap-3 text-slate-400 items-center"><XCircle className="text-red-500" size={20} /> Time loss in approval processes</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-10 rounded-xl border border-slate-700">
            <h3 className="text-2xl font-bold mb-6 text-slate-50">Our Solution</h3>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <CheckCircle2 className="text-teal-500 shrink-0" size={24} />
                <div>
                  <strong className="block text-slate-50 mb-1">Centralized Management</strong>
                  <p className="text-slate-400">All branches enter data into a single system, in a single format.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <CheckCircle2 className="text-teal-500 shrink-0" size={24} />
                <div>
                  <strong className="block text-slate-50 mb-1">Instant Consolidation</strong>
                  <p className="text-slate-400">Data is reflected in the overall total as soon as it's entered. No waiting.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <CheckCircle2 className="text-teal-500 shrink-0" size={24} />
                <div>
                  <strong className="block text-slate-50 mb-1">Flexible Chart of Accounts</strong>
                  <p className="text-slate-400">Define your own chart of accounts (CoA) suitable for your corporate structure.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section id="features" className="py-20 bg-slate-950">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4 text-slate-50">Powerful Features</h2>
          <p className="text-lg text-slate-400">Tools that simplify complex structures.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Globe, title: "Multi-Location", desc: "Wherever they are in the world, department managers securely upload their budgets to the system." },
            { icon: Lock, title: "Role-Based Auth", desc: "Each user only sees and edits the areas they are responsible for. Data security is paramount." },
            { icon: BarChart3, title: "Advanced Reporting", desc: "Instantly visualize consolidated data. Perform branch-based profitability and expense analyses." }
          ].map((feature, idx) => (
            <div key={idx} className="bg-slate-800 p-8 rounded-xl border border-slate-700 hover:-translate-y-1 hover:border-blue-500 transition-all duration-300">
              <feature.icon className="w-12 h-12 text-blue-500 mb-6" />
              <h3 className="text-xl font-bold mb-3 text-slate-50">{feature.title}</h3>
              <p className="text-slate-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-slate-900">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-16 text-slate-50">How It Works?</h2>
        <div className="flex flex-col md:flex-row justify-between items-start text-center relative">
          {/* Steps would go here, simplified for brevity in migration */}
          <div className="flex-1 px-4">
            <div className="w-10 h-10 bg-slate-800 border border-blue-500 text-blue-500 rounded-full flex items-center justify-center font-bold mx-auto mb-6">1</div>
            <h4 className="text-lg font-bold mb-2 text-slate-50">Define</h4>
            <p className="text-slate-400">As an admin, create account items and branches.</p>
          </div>

          <div className="hidden md:block w-24 h-[1px] bg-slate-700 mt-5"></div>

          <div className="flex-1 px-4">
            <div className="w-10 h-10 bg-slate-800 border border-blue-500 text-blue-500 rounded-full flex items-center justify-center font-bold mx-auto mb-6">2</div>
            <h4 className="text-lg font-bold mb-2 text-slate-50">Collect</h4>
            <p className="text-slate-400">Managers enter the budgets they are responsible for.</p>
          </div>

          <div className="hidden md:block w-24 h-[1px] bg-slate-700 mt-5"></div>

          <div className="flex-1 px-4">
            <div className="w-10 h-10 bg-slate-800 border border-blue-500 text-blue-500 rounded-full flex items-center justify-center font-bold mx-auto mb-6">3</div>
            <h4 className="text-lg font-bold mb-2 text-slate-50">Manage</h4>
            <p className="text-slate-400">The system automatically consolidates all data.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contact" className="py-20 bg-slate-900 text-center">
      <div className="container">
        <div className="bg-blue-500 rounded-2xl p-16 text-white max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Rid of Excel?</h2>
          <p className="text-blue-100 mb-8 max-w-lg mx-auto">Speed up your budget processes by 80% with BudgetOne.</p>
          <form className="flex gap-2 max-w-md mx-auto flex-col md:flex-row">
            <input type="email" placeholder="Your email address" required className="flex-1 px-5 py-3 rounded-lg border-none text-slate-900 focus:outline-none" />
            <button type="submit" className="bg-slate-900 text-white px-6 py-3 rounded-lg font-bold hover:bg-slate-800 transition-colors">Notify Me</button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-8 border-t border-slate-800 bg-slate-900 text-center text-slate-400 text-sm">
      <div className="container">
        &copy; 2024 BudgetOne SaaS. All rights reserved.
      </div>
    </footer>
  );
}
