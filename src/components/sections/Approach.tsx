import React from 'react';
import { motion } from 'motion/react';
import { HandHeart, Zap, Sprout } from 'lucide-react';

const methods = [
  {
    icon: HandHeart,
    title: "Y HỌC CỔ TRUYỀN",
    subtitle: "(Khơi Thông & Thư Giãn)",
    method: "Xoa bóp, bấm huyệt",
    benefits: [
      "Hỗ trợ kích hoạt và khơi thông các huyệt đạo, tăng cường lưu thông khí huyết.",
      "Giúp làm mềm các bó cơ đang căng cứng sau quá trình di chuyển liên tục.",
      "Giải phóng áp lực, trả lại sự nhẹ nhõm và linh hoạt cho hệ vận động."
    ]
  },
  {
    icon: Zap,
    title: "CÔNG NGHỆ HIỆN ĐẠI",
    subtitle: "(Hỗ Trợ Giải Cơ Sâu)",
    method: "Ứng dụng Thiết bị Năng lượng Sinh học & Kem đả thông kinh lạc cao cấp.",
    benefits: [
      "Dòng năng lượng sinh học kết hợp dược liệu giúp tác động sâu vào vùng cơ bó tắc.",
      "Hỗ trợ xoa dịu nhanh chóng cảm giác căng mỏi cơ, ở cổ tay, khớp gối, gót chân.",
      "Giúp rút ngắn thời gian nghỉ ngơi, tạo điều kiện để VĐV sớm quay trở lại trận đấu với cảm giác thoải mái nhất."
    ]
  },
  {
    icon: Sprout,
    title: "THỰC DƯỠNG BỔ SUNG",
    subtitle: "(Nạp Năng Lượng Từ Bên Trong)",
    method: "Kết hợp thực dưỡng chuyên biệt cho người chơi thể thao.",
    benefits: [
      "Bù đắp vi khoáng và dưỡng chất tiêu hao sau khi vã mồ hôi trên sân.",
      "Hỗ trợ phục hồi thể lực nhanh chóng, nuôi dưỡng cơ thể khỏe mạnh từ bên trong.",
      "Duy trì năng lượng bền bỉ để bạn luôn sẵn sàng cho những set đấu tiếp theo."
    ]
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
        <div className="text-center max-w-5xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sage font-bold tracking-wider text-sm lg:text-base uppercase mb-4 block"
          >
            Hệ Phương Pháp Phục Hồi Toàn Diện
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[clamp(13px,3.5vw,40px)] sm:text-[clamp(16px,2.8vw,40px)] md:text-[clamp(20px,2.5vw,40px)] lg:text-[40px] font-heading font-bold mb-6 pt-2 leading-[1.2] whitespace-nowrap tracking-tight sm:tracking-normal"
          >
            KẾT HỢP TINH HOA ĐÔNG Y, CÔNG NGHỆ & THỰC DƯỠNG
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-coral text-lg lg:text-xl font-medium mb-8 max-w-4xl mx-auto"
          >
            Hỗ trợ giải cơ, xoa dịu căng thẳng và nạp lại năng lượng nhanh chóng – Giúp bạn duy trì phong độ đỉnh cao trên sân Pickleball.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-white/80 text-base lg:text-lg leading-relaxed italic max-w-4xl mx-auto"
          >
            "Trên sân Pickleball, cường độ vận động cao dễ khiến cơ bắp quá tải và kiệt sức. Để duy trì sức bền và hạn chế tối đa rủi ro chấn thương, cơ thể cần được chăm sóc đúng cách và kịp thời. Ái Xuân Trần mang đến giải pháp Phục hồi 3 Tác động, giúp cơ bắp và thể lực của bạn được tái tạo một cách tự nhiên và mạnh mẽ nhất."
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {methods.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.4 }}
              className="bg-white text-text-dark rounded-[2rem] p-8 shadow-xl border border-gray-100 flex flex-col transition-transform hover:-translate-y-2 hover:shadow-2xl duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-forest/10 text-forest flex items-center justify-center mb-6 shrink-0">
                <item.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold font-heading mb-1 text-forest">{item.title}</h3>
              <div className="text-coral font-medium mb-6">{item.subtitle}</div>
              
              <div className="mb-6 bg-cream/50 p-4 rounded-xl">
                <span className="font-bold text-xs lg:text-sm uppercase tracking-wider text-text-body block mb-2">Phương pháp:</span>
                <p className="font-medium text-base lg:text-lg leading-snug text-justify">{item.method}</p>
              </div>

              <div className="flex-1">
                <span className="font-bold text-xs lg:text-sm uppercase tracking-wider text-text-body block mb-4">Tác dụng:</span>
                <ul className="space-y-4">
                  {item.benefits.map((benefit, i) => (
                    <li key={i} className="flex gap-4 text-text-body">
                      <div className="w-2 h-2 rounded-full bg-coral mt-2 shrink-0"></div>
                      <span className="leading-relaxed text-sm lg:text-base text-justify">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="text-center max-w-4xl mx-auto bg-gradient-to-br from-white/10 to-transparent p-8 sm:p-12 rounded-[2rem] border border-white/20 backdrop-blur-sm"
        >
          <p className="text-xl sm:text-2xl font-medium mb-10 leading-relaxed text-white italic">
            "Chăm sóc đúng cách hôm nay là bảo vệ đam mê cho ngày mai. Dù bạn là tay vợt phong trào hay đang thi đấu giải, hệ phương pháp của Ái Xuân Trần luôn sẵn sàng đồng hành cùng thể trạng của bạn."
          </p>
          <a 
            href="https://zalo.me/0938614687" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-coral hover:bg-[#e86b4f] text-white px-8 lg:px-10 py-4 lg:py-5 rounded-2xl font-bold text-lg lg:text-xl transition-all hover:scale-105 active:scale-95 shadow-[0_15px_30px_rgba(242,124,98,0.3)] hover:shadow-[0_20px_40px_rgba(242,124,98,0.4)]"
          >
            Nhận tư vấn lộ trình phục hồi cá nhân
          </a>
        </motion.div>
      </div>
    </section>
  );
}
