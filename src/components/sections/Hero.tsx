import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Phone, Stethoscope, Activity } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden bg-background">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] bg-sage/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[600px] h-[600px] bg-coral/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left"
          >
            <div className="inline-flex items-start sm:items-center gap-2 px-4 py-2 rounded-2xl sm:rounded-full bg-sage/10 text-sage font-medium text-sm sm:text-base mb-6 max-w-full">
              <Stethoscope className="w-5 h-5 shrink-0 mt-0.5 sm:mt-0" />
              <span className="leading-snug">Chăm sóc sức khỏe vận động viên Pickleball bằng Đông y</span>
            </div>
            
            <h1 className="text-[28px] min-[375px]:text-[34px] sm:text-5xl lg:text-6xl font-bold font-heading text-text-dark leading-[1.1] mb-6 tracking-tight">
              ÁI XUÂN TRẦN <br/>
              <span className="text-gradient whitespace-nowrap text-[6vw] min-[375px]:text-[28px] min-[400px]:text-[30px] sm:text-5xl lg:text-6xl">"Chuyên gia Bắt chuột"</span> <br/>
              & Phục Hồi Thể Lực
            </h1>
            
            <p className="text-base sm:text-lg text-text-body mb-8 max-w-xl font-sans leading-relaxed">
              Kết nối Tinh hoa Y học Cổ truyền và Hiện đại. Giải cứu cơ bắp tức thì, đánh thức phong độ đỉnh cao cho mọi tay vợt Pickleball.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 mb-8 w-full max-w-[540px]">
              <a 
                href="#services" 
                className="flex-1 inline-flex justify-center items-center gap-1.5 sm:gap-2 px-4 lg:px-3 xl:px-6 py-3.5 bg-coral text-white rounded-full font-semibold hover:bg-coral-light transition-all shadow-lg shadow-coral/30 text-[14px] xl:text-base whitespace-nowrap"
              >
                Đặt lịch chăm sóc cá nhân
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
              </a>
              <a 
                href="#services" 
                className="flex-1 inline-flex justify-center items-center gap-1.5 sm:gap-2 px-4 lg:px-3 xl:px-6 py-3.5 bg-transparent text-forest border-2 border-forest rounded-full font-semibold hover:bg-forest hover:text-white transition-all text-[14px] xl:text-base whitespace-nowrap"
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
                  100+
                </div>
              </div>
              <p className="text-sm text-text-body font-medium whitespace-nowrap">
                Vận động viên đã phục hồi thành công.
              </p>
            </div>
          </motion.div>

          {/* Image / Stats */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main Action Image */}
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] sm:aspect-square lg:aspect-[4/5] shadow-2xl bg-white flex items-center justify-center p-8">
              <img 
                src="https://i.postimg.cc/wvC6gjm4/Logo-A-i-Xua-n-Tra-n.png" 
                alt="Chuyên gia xoa bóp bấm huyệt thể thao" 
                className="w-full h-full object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/60 via-transparent to-transparent pointer-events-none"></div>
              
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-4 flex items-center gap-4">
                  <div className="w-12 h-12 bg-white flex justify-center items-center shrink-0" style={{ borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%' }}>
                    <Activity className="w-6 h-6 text-sage" />
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">Hết căng cơ sau 1 liệu trình</p>
                    <p className="text-white/80 text-xs">Trở lại sân đấu với thể trạng 100%</p>
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
