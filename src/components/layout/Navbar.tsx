import React, { useState, useEffect } from 'react';
import { Menu, X, Activity, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Vấn đề', href: '#pain-points' },
    { name: 'Phương pháp', href: '#approach' },
    { name: 'Thực chiến', href: '#in-action' },
    { name: 'Dịch vụ', href: '#services' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-forest/95 backdrop-blur-md shadow-sm py-3 border-b border-white/10' : 'bg-forest py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src="https://i.postimg.cc/wvC6gjm4/Logo-A-i-Xua-n-Tra-n.png" alt="Ái Xuân Trần Logo" className="w-10 h-10 md:w-12 md:h-12 object-contain" />
            <span className="font-heading font-bold text-xl sm:text-2xl text-white">
              Ái Xuân Trần
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-white/80 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
            <motion.a 
              href="tel:0938614687"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="flex items-center gap-1.5 px-5 py-2.5 rounded-full text-white text-sm font-bold tracking-wide transition-all border border-transparent hover:bg-white/10"
            >
              <motion.div animate={{ rotate: [0, -10, 10, -10, 10, 0], scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 1.5, repeatDelay: 1 }}>
                <Phone className="w-4 h-4 text-[#FF6B35]" />
              </motion.div>
              <span className="text-[#FF6B35]">0938614687</span>
            </motion.a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="md:hidden absolute top-full left-0 w-full bg-forest shadow-lg border-t border-white/10"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <div className="flex flex-col px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-base font-medium text-white/90 py-2 border-b border-white/10"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <motion.a 
                href="tel:0938614687"
                animate={{ opacity: [1, 0.6, 1] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                className="mt-4 px-5 py-3 flex justify-center items-center gap-2 rounded-lg text-[#FF6B35] font-bold tracking-wide border border-white/10 hover:bg-white/5 shadow-sm bg-[#FF6B35]/10"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="animate-pulse">
                  <Phone className="w-5 h-5" />
                </div>
                0938614687
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
