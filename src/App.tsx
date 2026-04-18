/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Network, 
  BookOpen, 
  Lightbulb, 
  Info, 
  Github, 
  Menu, 
  X,
  ChevronRight,
  ShieldCheck,
  Wifi,
  Zap,
  LayoutDashboard
} from 'lucide-react';
import { MATERI_DATA } from './data/materi';

// Components
const Navbar = ({ currentPage, setPage }: { currentPage: string, setPage: (p: string) => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'beranda', label: 'Beranda', icon: Network },
    { id: 'materi', label: 'Materi', icon: BookOpen },
    { id: 'tips', label: 'Tips', icon: Lightbulb },
    { id: 'tentang', label: 'Tentang', icon: Info },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-200 shadow-none h-[70px]">
      <div className="max-w-7xl mx-auto px-10 h-full">
        <div className="flex justify-between h-full items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setPage('beranda')}>
            <span className="text-xl font-extrabold tracking-tight text-primary">NetLearn</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 h-full">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setPage(item.id)}
                className={`text-[0.95rem] font-medium transition-colors h-full flex items-center border-b-2 ${
                  currentPage === item.id 
                    ? 'text-primary border-primary' 
                    : 'text-slate-600 border-transparent hover:text-primary'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setPage(item.id);
                    setIsOpen(false);
                  }}
                  className={`flex items-center gap-3 w-full px-3 py-3 rounded-xl text-left font-medium transition-all ${
                    currentPage === item.id 
                      ? 'bg-blue-50 text-blue-600' 
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <item.icon size={20} />
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-white border-t border-slate-200 h-[50px] flex items-center">
    <div className="max-w-7xl mx-auto px-10 w-full flex justify-between items-center text-[0.75rem] text-slate-600">
      <div>&copy; {new Date().getFullYear()} Edukasi Jaringan Komputer - SMK Karya Guna</div>
      <div>Platform Belajar Dasar IT & Networking</div>
    </div>
  </footer>
);

// Pages
const HomePage = ({ setPage }: { setPage: (p: string) => void }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="max-w-7xl mx-auto px-10 py-8 space-y-6"
  >
    {/* Hero Section */}
    <section className="bg-primary text-white p-8 md:p-10 rounded-2xl">
      <div className="max-w-4xl space-y-4">
        <h1 className="text-3xl font-bold tracking-tight leading-tight">
          Edukasi Jaringan Komputer
        </h1>
        <p className="text-[0.95rem] opacity-90 leading-relaxed">
          Pelajari fondasi teknologi yang menghubungkan dunia. Platform ini dirancang khusus untuk membantu siswa memahami konsep jaringan dari nol dengan penjelasan yang sederhana dan terstruktur.
        </p>
      </div>
    </section>

    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      <div className="lg:col-span-8 flex flex-col gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200">
          <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
            <LayoutDashboard size={20} className="text-primary" />
            Kurikulum Pembelajaran
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {MATERI_DATA.map((materi, idx) => (
              <div key={materi.id} className="p-4 bg-white border border-slate-200 rounded-xl flex items-center gap-4 hover:border-primary transition-colors cursor-pointer" onClick={() => setPage('materi')}>
                <div className="w-8 h-8 bg-primary-soft text-primary rounded-lg flex items-center justify-center font-bold text-xs">
                  {(idx + 1).toString().padStart(2, '0')}
                </div>
                <div className="materi-info">
                  <h3 className="text-sm font-semibold text-slate-800">{materi.title.replace(/^\d+\.\s*/, '')}</h3>
                  <p className="text-xs text-slate-600 mt-0.5 line-clamp-1">Mempelajari konsep dasar {materi.title.toLowerCase().replace(/^\d+\.\s*/, '')}.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="lg:col-span-4 flex flex-col gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200">
          <h2 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
            💡 Tips Keamanan
          </h2>
          <ul className="space-y-3">
            <li className="text-[0.85rem] text-slate-600 flex gap-2">
              <span className="text-green-500 font-bold">✓</span> Gunakan kombinasi simbol pada password.
            </li>
            <li className="text-[0.85rem] text-slate-600 flex gap-2">
              <span className="text-green-500 font-bold">✓</span> Hindari transaksi pada WiFi Publik.
            </li>
            <li className="text-[0.85rem] text-slate-600 flex gap-2">
              <span className="text-green-500 font-bold">✓</span> Gunakan kabel Cat6 untuk stabilitas.
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200">
          <h2 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
            ℹ️ Tentang Kami
          </h2>
          <p className="text-[0.85rem] text-slate-600 leading-relaxed">
            Dibuat oleh siswa <strong>SMK Karya Guna</strong> jurusan <strong>TJKT</strong> (Teknik Jaringan Komputer dan Telekomunikasi) sebagai media bantu belajar digital.
          </p>
          <button 
            onClick={() => setPage('tentang')}
            className="mt-4 text-xs font-semibold text-primary hover:underline flex items-center gap-1"
          >
            Projek Akhir Semester &rarr;
          </button>
        </div>
      </div>
    </div>
  </motion.div>
);

const MateriPage = () => {
  const [selectedId, setSelectedId] = useState(MATERI_DATA[0].id);
  const currentMateri = MATERI_DATA.find(m => m.id === selectedId);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-7xl mx-auto px-10 py-10"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200">
            <h2 className="text-lg font-bold text-slate-800 mb-4">Navigasi Materi</h2>
            <div className="space-y-1.5 text-sm">
              {MATERI_DATA.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setSelectedId(item.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`w-full text-left px-4 py-2.5 rounded-lg transition-all flex items-center gap-3 ${
                    selectedId === item.id 
                      ? 'bg-primary text-white' 
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <span className={`w-5 h-5 flex items-center justify-center rounded-md font-bold text-[10px] ${selectedId === item.id ? 'bg-white/20' : 'bg-slate-100'}`}>
                    {MATERI_DATA.indexOf(item) + 1}
                  </span>
                  {item.title.replace(/^\d+\.\s*/, '')}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="lg:col-span-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedId}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="bg-white rounded-2xl border border-slate-200 p-8 md:p-10 min-h-[500px]"
            >
              <h1 className="text-2xl font-bold text-slate-800 mb-6 pb-4 border-b border-slate-100">
                {currentMateri?.title}
              </h1>
              <div className="text-[0.95rem] text-slate-600 leading-relaxed space-y-6">
                {currentMateri?.content.split('\n').map((line, i) => {
                  const isListItem = line.trim().startsWith('*');
                  const processedLine = line
                    .replace(/\*\*(.*?)\*\*/g, '<strong class="text-slate-800">$1</strong>')
                    .replace(/^\s*\*\s+/, '');
                  
                  return (
                    <div 
                      key={i} 
                      className={`${isListItem ? 'ml-6 relative before:content-["•"] before:absolute before:-left-4 before:text-primary' : ''}`}
                      dangerouslySetInnerHTML={{ __html: processedLine }}
                    />
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

const TipsPage = () => {
  const tips = [
    {
      title: "Password yang Kuat",
      icon: ShieldCheck,
      items: [
        "Gunakan minimal 12 karakter.",
        "Gabungkan huruf besar, kecil, angka, dan simbol.",
        "Hindari menggunakan tanggal lahir.",
        "Gunakan password berbeda untuk setiap akun."
      ]
    },
    {
      title: "WiFi Aman",
      icon: Wifi,
      items: [
        "Hindari transaksi pada WiFi Publik.",
        "Aktifkan firewall di laptop atau HP.",
        "Gunakan VPN pada jaringan publik.",
        "Lupakan jaringan setelah selesai digunakan."
      ]
    },
    {
      title: "Kestabilan Jaringan",
      icon: Zap,
      items: [
        "Posisikan Router di lokasi terbuka.",
        "Jauhkan Router dari elektronik lain.",
        "Restart Router seminggu sekali.",
        "Batasi jumlah pengguna terhubung."
      ]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-7xl mx-auto px-10 py-16"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-800">Tips & Panduan</h2>
        <p className="text-slate-600">Praktik terbaik untuk produktivitas dan keamanan Anda.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {tips.map((tip, idx) => (
          <div 
            key={idx}
            className="bg-white rounded-2xl border border-slate-200 p-8"
          >
            <div className="w-12 h-12 bg-primary-soft text-primary rounded-xl flex items-center justify-center mb-6">
              <tip.icon size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-6">{tip.title}</h3>
            <ul className="space-y-4">
              {tip.items.map((item, i) => (
                <li key={i} className="flex gap-3 text-sm text-slate-600">
                  <span className="text-green-500 font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const AboutPage = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="max-w-4xl mx-auto px-10 py-20"
  >
    <div className="bg-white rounded-2xl border border-slate-200 p-10 text-center">
      <h2 className="text-2xl font-bold text-slate-800 mb-6">Tentang Kami</h2>
      <div className="space-y-6 text-[0.95rem] text-slate-600 leading-relaxed">
        <p>
          Dibuat oleh siswa <strong>SMK Karya Guna</strong> jurusan <strong>TJKT</strong> (Teknik Jaringan Komputer dan Telekomunikasi) sebagai media bantu belajar digital.
        </p>
        <p>
          Platform NetLearn bertujuan untuk menyediakan konten edukasi yang terstruktur, akurat, dan mudah dicerna bagi siswa tingkat menengah yang baru memulai perjalanan di dunia IT.
        </p>
      </div>

      <div className="mt-12 pt-8 border-t border-slate-100 text-left">
        <h4 className="font-bold text-primary mb-2 text-sm uppercase tracking-wider">Identitas Projek</h4>
        <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between">
          <span className="text-xs text-slate-600">Projek Akhir Semester Ganjil 2024</span>
          <span className="bg-[#fef3c7] text-[#92400e] px-2 py-1 rounded text-[10px] font-bold">TERVERIFIKASI</span>
        </div>
      </div>
    </div>
  </motion.div>
);

export default function App() {
  const [page, setPage] = useState('beranda');

  // Handle auto-scroll to top when page changes
  useMemo(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [page]);

  const renderPage = () => {
    switch(page) {
      case 'beranda': return <HomePage setPage={setPage} />;
      case 'materi': return <MateriPage />;
      case 'tips': return <TipsPage />;
      case 'tentang': return <AboutPage />;
      default: return <HomePage setPage={setPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-primary-soft selection:text-primary text-slate-800 pt-[70px]">
      <Navbar currentPage={page} setPage={setPage} />
      
      <main className="min-h-[calc(100vh-120px)] overflow-x-hidden">
        <AnimatePresence mode="wait">
          {renderPage()}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
