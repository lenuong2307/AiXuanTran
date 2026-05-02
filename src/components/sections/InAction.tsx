import React from 'react';
import { motion } from 'motion/react';
import { Trophy, CheckCircle2, PlayCircle, Quote, ExternalLink } from 'lucide-react';

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

          {/* Press Feature */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto mt-12 bg-white/5 rounded-[2rem] border border-white/10 p-6 sm:p-10 relative overflow-hidden"
          >
            {/* Background Decor for Press Feature */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-red-600/10 rounded-full blur-[80px] pointer-events-none"></div>

            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center relative z-10">
              <div className="flex-1 space-y-6">
                <div className="bg-red-600 w-fit px-4 py-2 rounded-lg mb-4 flex items-center gap-2">
                  <span className="text-white font-bold tracking-widest text-sm uppercase">Báo Lao Động</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white uppercase tracking-wide leading-snug">
                  GÓP MẶT TẠI CÁC SỰ KIỆN QUY MÔ - BẢO CHỨNG BỞI TRUYỀN THÔNG ĐẠI CHÚNG
                </h3>
                <p className="text-gray-300 text-base lg:text-lg leading-relaxed text-justify">
                  "Không chỉ đồng hành cùng các giải đấu phong trào, Ái Xuân Trần tự hào là đối tác chăm sóc thể lực tại các sự kiện thể thao tầm cỡ, mang ý nghĩa lớn của Thành phố.
                </p>
                <p className="text-gray-300 text-base lg:text-lg leading-relaxed text-justify">
                  Tại Hội thao chào mừng Đại hội đại biểu Đảng bộ TPHCM (Giải Pickleball Dinknutrition Open) do Sở Văn hóa và Thể thao TPHCM tổ chức với hơn 200 vận động viên tranh tài, Ái Xuân đã túc trực sát sao tại thảm đấu. Sự thành công rực rỡ của giải, nơi các VĐV thi đấu thăng hoa và an toàn, đã được báo chí và các cơ quan truyền thông lớn (như Báo Lao Động) ghi nhận."
                </p>
                
                <div className="bg-gradient-to-r from-red-600/10 to-transparent p-5 rounded-2xl border-l-[6px] border-red-600">
                  <p className="text-gray-200 text-base md:text-lg italic font-medium leading-relaxed">
                    "Giải Pickleball quy tụ hơn 200 vận động viên, tạo sân chơi mới mẻ, hấp dẫn... cho thấy sự đồng hành tích cực của doanh nghiệp và cộng đồng trong việc phát triển phong trào thể dục thể thao"
                  </p>
                  <p className="text-red-400 text-sm mt-3 font-bold uppercase tracking-wider">- Nguồn: Báo Lao Động</p>
                </div>

                <a 
                  href="https://laodong.vn/the-thao/soi-noi-hoi-thao-chao-mung-dai-hoi-dai-bieu-dang-bo-tphcm-nhiem-ki-2025-2030-1590375.ldo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-red-500 hover:text-red-400 font-bold transition-all hover:gap-3"
                >
                  Đọc toàn bộ bài viết trên báo Lao Động
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
              
              <div className="flex-1 w-full relative">
                <div className="rounded-2xl overflow-hidden border border-white/20 shadow-2xl relative group bg-[#0B132B]">
                  {/* Mockup of an article screen */}
                  <div className="bg-white p-4">
                    <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200">
                      <div className="text-red-600 font-bold text-xl uppercase font-serif tracking-tighter">Lao Động</div>
                      <div className="flex gap-2">
                        <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                        <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                        <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                      </div>
                    </div>
                    <img 
                      src="https://images.unsplash.com/photo-1622599511051-16fd808eec97?auto=format&fit=crop&q=80" 
                      alt="Tranh tài Pickleball" 
                      className="w-full h-auto rounded-lg mb-4" 
                    />
                    <h4 className="text-gray-900 font-bold text-xl md:text-2xl leading-snug mb-3">
                      Sôi nổi Hội thao chào mừng Đại hội đại biểu Đảng bộ TPHCM nhiệm kì 2025-2030
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                      Giải Pickleball quy tụ hơn 200 vận động viên tham gia tranh tài trong khuôn khổ Hội thao chào mừng Đại hội đại biểu Đảng bộ TPHCM. Sự kiện được tổ chức chuyên nghiệp với sự hỗ trợ y tế và phục hồi xuất sắc...
                    </p>
                  </div>

                  {/* Red highlight circle overlay simulation if needed, but since it's a dynamic image we might just use CSS */}
                  <div className="absolute top-1/2 left-3/4 w-12 h-12 border-2 border-red-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-ping opacity-50"></div>
                  <div className="absolute top-1/2 left-3/4 w-12 h-12 border-2 border-red-600 rounded-full transform -translate-x-1/2 -translate-y-1/2 shadow-[0_0_15px_rgba(220,38,38,0.5)]"></div>
                </div>
              </div>
            </div>
          </motion.div>

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

