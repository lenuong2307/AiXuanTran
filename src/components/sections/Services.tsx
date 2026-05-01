import React from 'react';
import { motion } from 'motion/react';
import { User, Users, CheckCircle2 } from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-text-dark mb-4">
            Dịch Vụ Trọng Tâm
          </h2>
          <p className="text-text-body text-lg">
            Giải pháp chuyên sâu thiết kế riêng cho cá nhân đam mê thể thao và các ban tổ chức giải đấu chuyên nghiệp.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Service B2C */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col p-8 sm:p-10 rounded-[2rem] border border-beige bg-white shadow-xl shadow-beige relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-coral/5 rounded-bl-full -z-10" />
            
            <div className="w-14 h-14 bg-coral/10 text-coral rounded-2xl flex justify-center items-center mb-6">
              <User className="w-7 h-7" />
            </div>
            
            <h3 className="text-2xl font-heading font-bold text-text-dark mb-2">Chăm Sóc & Phục Hồi Cá Nhân</h3>
            <p className="text-text-body mb-8">Dành cho VĐV, người chơi phong trào cần lấy lại thể trạng nhanh chóng.</p>
            
            <ul className="space-y-4 mb-10 flex-grow">
              {['Giải cơ tóm, căng cơ cấp tốc', 'Phục hồi sau thi đấu cường độ cao', 'Điều trị dứt điểm đau khớp, mỏi cơ', 'Tư vấn dinh dưỡng & bài tập phòng ngừa'].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-text-dark">
                  <CheckCircle2 className="w-5 h-5 text-coral shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <button className="w-full py-4 rounded-xl bg-coral text-white font-bold hover:bg-coral-light transition-all shadow-lg shadow-coral/20">
              Đặt lịch giãn cơ ngay
            </button>
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
                  <CheckCircle2 className="w-5 h-5 text-sage shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <button className="w-full py-4 rounded-xl bg-sage text-forest font-bold hover:bg-white transition-all shadow-lg shadow-sage/20">
              Mời hợp tác đồng hành
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
