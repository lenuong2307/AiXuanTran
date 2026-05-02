import React from 'react';
import { motion } from 'motion/react';
import { User, Users, CheckCircle2 } from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#5F7F6B] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
            Dịch Vụ Trọng Tâm
          </h2>
          <p className="text-white/90 text-lg">
            Giải pháp chuyên sâu thiết kế riêng cho cá nhân đam mê thể thao và các ban tổ chức giải đấu chuyên nghiệp.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Service B2C */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col p-8 sm:p-10 rounded-[2rem] border border-white/20 bg-white shadow-2xl relative overflow-hidden text-text-dark"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-coral/5 rounded-bl-full -z-10" />
            
            <div className="w-14 h-14 bg-sage/10 text-sage rounded-2xl flex justify-center items-center mb-6">
              <User className="w-7 h-7" />
            </div>
            
            <h3 className="text-2xl font-heading font-bold text-text-dark mb-2">Chăm Sóc & Phục Hồi Cá Nhân</h3>
            <p className="text-text-body mb-8">Dành cho VĐV, người chơi phong trào cần lấy lại thể trạng nhanh chóng.</p>
            
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-start gap-3 text-text-dark">
                <CheckCircle2 className="w-5 h-5 text-[#FF6B35] shrink-0 mt-0.5" />
                <span>Giải cơ tóm, căng cơ cấp tốc <strong className="text-forest">chỉ trong 30 phút</strong></span>
              </li>
              <li className="flex items-start gap-3 text-text-dark">
                <CheckCircle2 className="w-5 h-5 text-[#FF6B35] shrink-0 mt-0.5" />
                <span>Phục hồi <strong className="text-forest">ngay lập tức</strong> sau thi đấu cường độ cao</span>
              </li>
              <li className="flex items-start gap-3 text-text-dark">
                <CheckCircle2 className="w-5 h-5 text-[#FF6B35] shrink-0 mt-0.5" />
                <span>Điều trị <strong className="text-forest">dứt điểm</strong> đau khớp, mỏi cơ</span>
              </li>
              <li className="flex items-start gap-3 text-text-dark">
                <CheckCircle2 className="w-5 h-5 text-[#FF6B35] shrink-0 mt-0.5" />
                <span>Tư vấn dinh dưỡng & bài tập phòng ngừa</span>
              </li>
            </ul>
            
            <div className="mb-4 text-center">
              <span className="inline-block bg-red-100 text-red-600 font-bold text-xs px-3 py-1.5 rounded-full uppercase tracking-wider">
                Giới hạn 5 suất đặt lịch/ngày để đảm bảo chất lượng
              </span>
            </div>

            <a href="https://zalo.me/0938614687" target="_blank" rel="noopener noreferrer" className="w-full flex justify-center py-4 rounded-xl bg-[#FF6B35] text-white font-bold hover:bg-[#e85d26] transition-all shadow-[0_10px_20px_rgba(255,107,53,0.3)] uppercase tracking-wider hover:scale-[1.02] active:scale-95">
              Đặt lịch phục hồi ngay
            </a>
          </motion.div>

          {/* Service B2B */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col p-8 sm:p-10 rounded-[2rem] border border-forest bg-forest text-white shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-sage/20 rounded-bl-full -z-10" />
            
            <div className="w-14 h-14 bg-sage/20 text-sage rounded-2xl flex justify-center items-center mb-6">
              <Users className="w-7 h-7" />
            </div>
            
            <h3 className="text-2xl font-heading font-bold mb-2">Đồng Hành Y Tế Giải Đấu</h3>
            <p className="text-white/80 mb-8">Bảo chứng y tế chuyên nghiệp cho Ban Tổ Chức (BTC) và nhà tài trợ.</p>
            
            <ul className="space-y-4 mb-10 flex-grow">
              {['Đội ngũ túc trực sơ cứu tại sân', 'Xử lý chấn thương khẩn cấp (chuột rút, bong gân)', 'Khu vực phục hồi riêng biệt cho VĐV', 'Nâng tầm uy tín, sự chuyên nghiệp cho giải'].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-white/90">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6B35] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <a href="https://zalo.me/0938614687" target="_blank" rel="noopener noreferrer" className="w-full flex justify-center py-4 rounded-xl bg-[#FF6B35] text-white font-bold hover:bg-[#e85d26] transition-all shadow-[0_10px_20px_rgba(255,107,53,0.3)] uppercase tracking-wider hover:scale-[1.02] active:scale-95">
              Đăng ký chăm sóc thi đấu
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
