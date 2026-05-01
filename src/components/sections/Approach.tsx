import React from 'react';
import { motion } from 'motion/react';
import { Leaf, Zap, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: Leaf,
    title: "Không lạm dụng thuốc",
    desc: "Kích hoạt cơ chế tự lành, giảm đau tự nhiên không để lại tác dụng phụ."
  },
  {
    icon: Zap,
    title: "Hiệu quả tức thì",
    desc: "Cắt cơn co rút ngay tại sân, lưu thông khí huyết, giải cơ sâu."
  },
  {
    icon: ShieldCheck,
    title: "Phòng ngừa tái phát",
    desc: "Bảo trì gân cốt, tăng cường độ dẻo dai giúp bạn tự tin thi đấu dài hạn."
  }
];

export default function Approach() {
  return (
    <section id="approach" className="py-24 bg-forest text-white relative overflow-hidden">
      {/* Abstract wave background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-5 pointer-events-none">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full fill-sage">
          <path d="M0,50 C20,60 40,30 60,50 C80,70 100,50 100,50 L100,100 L0,100 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sage font-bold tracking-wider text-sm uppercase mb-4 block">Phương Pháp Đột Phá</span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-6 pt-2">
              Chữa lành từ gốc, <br /> Phục hồi thần tốc
            </h2>
            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              Áp dụng sự giao thoa hoàn hảo giữa <strong className="text-white">Y học Cổ truyền</strong> (trị gốc, lưu thông khí huyết thông qua xoa bóp bấm huyệt) và <strong className="text-white">Y học Thể thao Hiện đại</strong> (giãn cơ sâu, phục hồi chức năng vận động).
            </p>

            <ul className="space-y-8">
              {features.map((item, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0 border border-white/5">
                    <item.icon className="w-6 h-6 text-sage" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                    <p className="text-white/70">{item.desc}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="w-full aspect-[4/3] rounded-[2rem] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80" 
                alt="Phương pháp xoa bóp giãn cơ chuyên sâu" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="absolute -bottom-8 -left-2 sm:-left-8 bg-cream text-text-dark p-4 sm:p-6 rounded-3xl shadow-2xl max-w-[200px] sm:max-w-[240px] z-10">
              <div className="text-4xl font-heading font-bold text-coral mb-1">100%</div>
              <p className="font-medium text-sm text-text-body">Trị liệu tự nhiên bằng đôi tay chuyên gia, không phụ thuộc hóa dược.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
