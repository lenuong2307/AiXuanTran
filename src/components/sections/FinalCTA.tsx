import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="text-white py-16 lg:py-24 relative overflow-hidden flex items-center min-h-[40vh]">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-[url('https://i.postimg.cc/qBLw07gV/0503-(2)-Cover.jpg')] bg-cover bg-[center_25%]"
        aria-hidden="true"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#2F5D50]/80" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center w-full">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[clamp(1.1rem,4.5vw,2.25rem)] sm:text-4xl lg:text-5xl font-heading font-black mb-6 uppercase tracking-wide leading-relaxed sm:leading-[1.4]"
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
            className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-[#FF6B35] hover:bg-[#e85a25] text-white w-full sm:w-auto px-4 sm:px-8 lg:px-12 py-3 sm:py-4 lg:py-5 rounded-full font-black text-[13px] sm:text-lg lg:text-xl text-center uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,107,53,0.6)] hover:shadow-[0_0_30px_rgba(255,107,53,0.8)]"
          >
            NHẬN TƯ VẤN <span className="font-['Times_New_Roman']">&amp;</span> ĐẶT LỊCH ƯU TIÊN NGAY
            <ArrowRight className="w-4 h-4 sm:w-6 sm:h-6 shrink-0" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
