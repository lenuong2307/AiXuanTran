import React from 'react';
import { motion } from 'motion/react';
import { Trophy, CheckCircle2, PlayCircle, Quote } from 'lucide-react';

const logos = [
  "Giải CLB AKCLUB tại An Khê",
  "Giải pickleball CLB BFF tại Tuy Phước",
  "Giải AN THÁI TRIỆU tại An Nhơn",
  "Giải Pickleball Dinknutrition Open TPHCM",
  "Giải pickleball resort dankbaar",
  "Giải LÌ H2PHONE tại An Nhơn",
  "Giải pickleball Khánh Quỳnh Pleiku Gia Lai",
  "Giải CLB BFF LẦN THỨ 2"
];

const gallery = [
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80",
    testimonial: '"Đang đánh set 2 thì căng bắp chân, nhờ Xuân giãn cơ 5 phút mà vào đánh tiếp được luôn, quá nể!" - VĐV A'
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1622599511051-16fd808eec97?auto=format&fit=crop&q=80"
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80",
    testimonial: '"Sau giải đấu người ê ẩm, qua cơ sở của Xuân kết hợp máy sinh học xong người nhẹ bẫng như chưa từng thi đấu." - VĐV B'
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80"
  }
];

export default function InAction() {
  return (
    <section id="in-action" className="py-24 bg-[#0B132B] text-white overflow-hidden relative">
      {/* Background Decors */}
      <div className="absolute top-0 right-0 w-[50vh] h-[50vh] bg-coral/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[50vh] h-[50vh] bg-sage/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center relative z-10">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sage font-bold tracking-wider text-sm lg:text-base uppercase mb-4 block"
        >
          Thực Chiến Tại Thảm Đấu
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-6 pt-2 leading-[1.2]"
        >
          TỪ PHÒNG PHỤC HỒI ĐẾN THẢM ĐẤU: <br className="hidden md:block" />
          <span className="text-coral">BẢO CHỨNG THỂ LỰC</span> CHO NHỮNG NHÀ VÔ ĐỊCH
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-300 text-lg lg:text-xl font-medium max-w-3xl mx-auto leading-relaxed"
        >
          Đồng hành cùng các giải đấu lớn nhỏ – Nơi năng lực của 'Chuyên gia bắt chuột' được minh chứng bằng thực tế.
        </motion.p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-24">
        
        {/* Khối 1: CÂU CHUYỆN THÀNH CÔNG */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center bg-white/5 rounded-[2.5rem] border border-white/10 p-6 lg:p-12"
        >
          <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 group">
            <img 
              src="https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&q=80" 
              alt="Nhà vô địch" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B]/80 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center gap-3 text-coral font-bold uppercase tracking-widest text-sm mb-2">
                <Trophy className="w-5 h-5" />
                Câu Chuyện Thành Công
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <Quote className="w-12 h-12 text-sage opacity-50" />
            <h3 className="text-2xl sm:text-3xl font-heading font-bold italic text-white/90">
              "Đằng sau mỗi chiếc cúp, là sự bền bỉ của cơ bắp."
            </h3>
            <p className="text-gray-300 text-base lg:text-lg leading-relaxed text-justify">
              "Trong một giải đấu căng thẳng, thể lực chính là vũ khí quyết định. Rất tự hào khi phương pháp phục hồi của Ái Xuân đã trực tiếp xoa dịu những bó cơ quá tải, giúp VĐV tự tin bước vào trận chung kết với phong độ đỉnh cao và xuất sắc giành Ngôi Vô Địch. Thành tích của họ trên sân chính là tấm huy chương quý giá nhất cho phương pháp của tôi."
            </p>
          </div>
        </motion.div>

        {/* Khối 2: ĐỒNG HÀNH CÙNG CÁC GIẢI ĐẤU */}
        <div className="space-y-12">
          <div className="text-center max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-heading font-bold mb-6 text-white uppercase tracking-wide">
              GIẢI CỨU KỊP THỜI - NÂNG TẦM GIẢI ĐẤU
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              "Không chỉ là phục hồi cá nhân, Ái Xuân Trần vinh dự là đối tác y tế/chăm sóc thể lực được các Ban tổ chức và Chủ sân Pickleball tin tưởng 'chọn mặt gửi vàng'."
            </p>
            <ul className="grid sm:grid-cols-2 gap-4 text-left mb-8 max-w-3xl mx-auto">
              {[
                "Xử lý tức thì các tình huống căng cơ, chuột rút ngay tại mép sân.",
                "Mang đến sự an tâm tuyệt đối cho các VĐV thi đấu.",
                "Tạo điểm nhấn chuyên nghiệp, gia tăng giá trị cho mọi giải đấu."
              ].map((item, i) => (
                <li key={i} className="flex gap-3 items-start bg-white/5 p-4 rounded-xl border border-white/5">
                  <CheckCircle2 className="w-5 h-5 text-sage shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm md:text-base">{item}</span>
                </li>
              ))}
            </ul>
            <a 
              href="https://zalo.me/0938614687" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-sage hover:bg-[#688a6d] text-white px-8 py-4 rounded-2xl font-bold transition-all hover:scale-105 active:scale-95 shadow-[0_15px_30px_rgba(119,154,124,0.2)]"
            >
              Mời Ái Xuân đồng hành cùng giải đấu của bạn
            </a>
          </div>

          {/* Marquee Logos */}
          <div className="relative w-full flex overflow-x-hidden border-y border-white/10 bg-white/5 py-6">
            <div className="animate-marquee whitespace-nowrap flex items-center">
              {[...logos, ...logos].map((logo, index) => (
                <div key={index} className="mx-8 flex items-center gap-3">
                  <Trophy className="w-4 h-4 text-coral/60" />
                  <span className="text-sm md:text-base font-bold text-gray-400 uppercase tracking-widest">{logo}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Video Highlights */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden shadow-2xl border border-white/10 aspect-video max-w-4xl mx-auto relative group"
          >
            <video 
              src="https://videos.pexels.com/video-files/3196164/3196164-sd_640_360_25fps.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
            <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
              Highlights
            </div>
          </motion.div>
        </div>

        {/* Khối 3: THƯ VIỆN THỰC CHIẾN */}
        <div className="pt-12 border-t border-white/10">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-3xl font-heading font-bold mb-4 text-white uppercase tracking-wide">
              CHĂM SÓC TOÀN DIỆN: DÙ TRONG HAY NGOÀI SÂN BÓNG
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              "Từ việc nạp lại năng lượng thư giãn tại cơ sở của Xuân, đến những pha xử lý ép cơ, bấm huyệt đầy tốc độ giữa tiếng hò reo của khán giả. Ở đâu có sự nỗ lực của VĐV, ở đó có sự đồng hành của Ái Xuân."
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {gallery.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group rounded-2xl overflow-hidden aspect-[4/5] shadow-lg bg-white/5 border border-white/10"
              >
                <img 
                  src={item.src} 
                  alt="Ảnh thực chiến" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {item.testimonial && (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-t from-[rgb(11,19,43)]/90 via-[rgb(11,19,43)]/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-xl">
                        <p className="text-white text-xs leading-snug italic">
                          {item.testimonial}
                        </p>
                      </div>
                    </div>
                  </>
                )}
                {!item.testimonial && (
                  <div className="absolute inset-0 bg-[#0B132B]/20 group-hover:bg-transparent transition-colors duration-500"></div>
                )}
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <a 
              href="https://zalo.me/0938614687" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-coral hover:bg-[#e86b4f] text-white px-8 lg:px-10 py-4 lg:py-5 rounded-2xl font-bold text-lg lg:text-xl transition-all hover:scale-105 active:scale-95 shadow-[0_15px_30px_rgba(242,124,98,0.3)] hover:shadow-[0_20px_40px_rgba(242,124,98,0.4)]"
            >
              Đặt lịch chăm sóc & phục hồi thể lực
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

