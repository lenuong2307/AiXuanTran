import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Phone, Stethoscope, Trophy } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-20 pb-12 lg:pt-28 lg:pb-16 overflow-hidden bg-cream">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] bg-sage/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[600px] h-[600px] bg-coral/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center lg:items-stretch">
          
          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left flex flex-col justify-center py-10 lg:py-0"
          >
            <div className="inline-flex items-start sm:items-center gap-2 px-4 py-2 rounded-2xl sm:rounded-full bg-sage/10 text-sage font-medium text-sm sm:text-base mb-6 max-w-full">
              <Stethoscope className="w-5 h-5 shrink-0 mt-0.5 sm:mt-0" />
              <span className="leading-snug">Chăm sóc sức khỏe vận động viên Pickleball bằng Đông y</span>
            </div>
            
            <h1 className="text-[28px] min-[375px]:text-[34px] sm:text-5xl lg:text-6xl font-bold font-heading text-text-dark leading-[1.25] mb-6 tracking-tight">
              ÁI XUÂN TRẦN <br/>
              <span className="text-gradient sm:whitespace-nowrap text-[6vw] min-[375px]:text-[28px] min-[400px]:text-[30px] sm:text-5xl lg:text-6xl">"Chuyên gia Bắt chuột"</span> <br/>
              <span className="font-['Times_New_Roman']">&amp;</span> Phục Hồi Thể Lực
            </h1>
            
            <p className="text-base sm:text-lg text-text-body mb-8 max-w-xl font-sans leading-relaxed">
              Kết nối Tinh hoa Y học Cổ truyền và Hiện đại. Giải cứu cơ bắp tức thì, đánh thức phong độ đỉnh cao cho mọi tay vợt Pickleball.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 mb-8 w-full max-w-[540px]">
              <a 
                href="https://zalo.me/0938614687" target="_blank" rel="noopener noreferrer"
                className="flex-1 inline-flex justify-center items-center gap-1.5 sm:gap-2 px-4 lg:px-3 xl:px-6 py-3.5 bg-[#FF6B35] hover:bg-[#e85d26] text-white rounded-full font-bold transition-all shadow-[0_10px_20px_rgba(255,107,53,0.3)] text-[13px] sm:text-[14px] xl:text-base sm:whitespace-nowrap uppercase tracking-wider"
              >
                Đặt lịch phục hồi ngay
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
              </a>
              <a 
                href="https://zalo.me/0938614687" target="_blank" rel="noopener noreferrer"
                className="flex-1 inline-flex justify-center items-center gap-1.5 sm:gap-2 px-4 lg:px-3 xl:px-6 py-3.5 bg-transparent text-sage border-2 border-sage rounded-full font-semibold hover:bg-sage hover:text-white transition-all text-[13px] sm:text-[14px] xl:text-base sm:whitespace-nowrap"
              >
                Mời đồng hành giải đấu
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
              </a>
            </div>

            {/* Social Proof */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-4 border-t border-forest/10">
              <div className="flex -space-x-4">
                {[...Array(4)].map((_, i) => (
                  <img
                    key={i}
                    src={`https://i.pravatar.cc/100?img=${i + 10}`}
                    alt="Khách hàng"
                    className="w-10 h-10 rounded-full border-2 border-cream object-cover shrink-0"
                  />
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-cream bg-forest flex justify-center items-center text-white text-xs font-bold shrink-0">
                  500+
                </div>
              </div>
              <p className="text-sm text-text-body font-medium sm:whitespace-nowrap">
                Vận động viên đã phục hồi thành công.
              </p>
            </div>
          </motion.div>

          {/* Image / Stats */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:h-full lg:min-h-[500px]"
          >
            {/* Main Action Image */}
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] sm:aspect-square lg:aspect-auto lg:h-full lg:absolute lg:inset-0 shadow-2xl bg-white flex items-center justify-center p-3 sm:p-5">
              <img 
                src="https://i.postimg.cc/3NDjrvjv/z7781676558847-a23e3c4195086002e396e93703e2449b.jpg" 
                alt="Chuyên gia xoa bóp bấm huyệt thể thao" 
                className="w-full h-full object-cover rounded-2xl"
              />
              {/* Overlay #5F7F6B as requested - modified with radial-gradient to highlight subjects in the center */}
              <div className="absolute inset-x-3 inset-y-3 sm:inset-x-5 sm:inset-y-5 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(95,127,107,0.4)_100%)] pointer-events-none rounded-2xl"></div>
              <div className="absolute inset-x-3 inset-y-3 sm:inset-x-5 sm:inset-y-5 bg-gradient-to-t from-forest/80 via-transparent to-transparent pointer-events-none rounded-2xl"></div>
              
              <div className="absolute bottom-3 sm:bottom-6 lg:bottom-6 xl:bottom-8 left-3 sm:left-6 lg:left-4 xl:left-8 right-3 sm:right-6 lg:right-4 xl:right-8 z-10">
                <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-xl sm:rounded-2xl p-2 sm:p-3 lg:p-3 xl:p-4 flex items-center gap-2 sm:gap-3 lg:gap-2 xl:gap-3">
                  <div className="w-7 h-7 sm:w-10 sm:h-10 lg:w-6 lg:h-6 xl:w-8 xl:h-8 bg-white flex justify-center items-center shrink-0" style={{ borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%' }}>
                    <Trophy className="w-4 h-4 lg:w-3 lg:h-3 text-sage" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-bold text-xs lg:text-sm tracking-wide mb-0.5">Lý Hoàng Nam</p>
                    <div className="text-white/95 text-[9px] sm:text-[10px] lg:text-[10px] xl:text-[11px] font-medium leading-[1.3] sm:leading-[1.4] flex flex-col gap-0.5 lg:whitespace-nowrap overflow-hidden">
                      <p className="break-words line-clamp-2 lg:line-clamp-none">- VĐV Việt Nam đầu tiên VÔ ĐỊCH giải đấu Pickleball chuyên nghiệp PPA</p>
                      <p className="break-words line-clamp-2 lg:line-clamp-none">- Tay vợt nam xuất sắc nhất năm 2025 tại Gala Vietnam Pickleball Awards</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
