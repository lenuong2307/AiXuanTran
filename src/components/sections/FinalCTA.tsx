import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="bg-[#FF6B35] text-white py-12 lg:py-16 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="diagonal-stripes" width="10" height="10" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="0" y2="10" stroke="currentColor" strokeWidth="2" />
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#diagonal-stripes)" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[clamp(1.1rem,4.5vw,2.25rem)] sm:text-4xl lg:text-5xl font-heading font-black mb-6 uppercase tracking-wide leading-tight"
        >
          <span className="whitespace-nowrap">Đừng để chấn thương tước đi</span><br />
          <span className="whitespace-nowrap">cơ hội cầm cúp của bạn!</span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-white/90 text-lg lg:text-xl mb-10 max-w-2xl mx-auto font-medium"
        >
          Liên hệ ngay với "chuyên gia bắt chuột" Ái Xuân Trần để lấy lại phong độ đỉnh cao.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <a 
            href="https://zalo.me/0938614687" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-[#2F5D50] hover:bg-black text-white w-full sm:w-auto px-4 sm:px-8 lg:px-12 py-3 sm:py-4 lg:py-5 rounded-full font-black text-[13px] sm:text-lg lg:text-xl text-center uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-[0_15px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
          >
            NHẬN TƯ VẤN <span className="font-['Times_New_Roman']">&amp;</span> ĐẶT LỊCH ƯU TIÊN NGAY
            <ArrowRight className="w-4 h-4 sm:w-6 sm:h-6 shrink-0" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
