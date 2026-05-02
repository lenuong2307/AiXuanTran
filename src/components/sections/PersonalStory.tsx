import React from 'react';
import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

export default function PersonalStory() {
  return (
    <section id="story" className="py-24 bg-beige relative overflow-hidden">
      {/* Decorative fire/wood elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-coral/5 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-sage/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:items-stretch items-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col h-full pb-12 lg:pt-[64px] lg:pb-[96px] relative"
          >
            {/* Main Picture */}
            <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] lg:aspect-auto lg:flex-1 shadow-2xl border-4 border-white z-0 relative">
              <img 
                src="https://i.postimg.cc/SxR4JCN2/Chat-GPT-Image-01-45-45-2-thg-5-2026.png" 
                alt="Ái Xuân Trần" 
                className="w-full h-full object-cover lg:absolute lg:inset-0 bg-cream"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/40 to-transparent pointer-events-none"></div>
            </div>

            {/* Small Polaroid Picture */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.05, rotate: -2, y: -5 }}
              className="absolute bottom-16 -right-2 sm:bottom-24 sm:-right-4 lg:bottom-28 lg:-right-8 w-32 sm:w-40 lg:w-[190px] rounded-[1rem] lg:rounded-[1.2rem] border-[3px] border-white shadow-[0_15px_40px_rgba(0,0,0,0.2)] rotate-[4deg] lg:rotate-[5deg] z-20 cursor-pointer transition-all hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:scale-105 overflow-hidden"
            >
              <div className="aspect-[3/4] relative bg-cream">
                <img 
                  src="https://i.postimg.cc/m2dV2FnZ/z7117925463719-13eb48ffca865f94d7b1d596aa829469.jpg" 
                  alt="Ảnh nhỏ Polaroid" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            
            {/* Signature or Quote */}
            <div className="absolute bottom-12 lg:bottom-[96px] left-1/2 -translate-x-1/2 translate-y-1/2 bg-white p-4 sm:p-5 rounded-2xl shadow-xl w-64 sm:w-72 max-w-xs rotate-[-2deg] z-30 text-center">
              <p className="font-script text-xl sm:text-2xl text-coral mb-1 sm:mb-2">"Sức khoẻ là tài sản quý giá nhất"</p>
              <p className="text-sm text-text-body font-medium">- Ái Xuân Trần</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-forest/5 text-forest font-semibold text-sm mb-6 uppercase tracking-wider">
              <Heart className="w-4 h-4 text-coral" />
              <span>Câu chuyện của tôi</span>
            </div>
            
            <h2 className="text-xl sm:text-2xl lg:text-[22px] xl:text-[28px] font-heading font-bold text-text-dark mb-4 leading-tight">
              HƠN CẢ MỘT CHUYÊN GIA, <br/>TÔI LÀ NGƯỜI ĐỒNG HÀNH CÙNG ĐAM MÊ CỦA BẠN
            </h2>
            
            <div className="space-y-2 sm:space-y-3 text-base sm:text-lg text-text-body text-justify">
              <p>
                Xin chào, tôi là <strong className="text-forest">Ái Xuân Trần</strong>. Nhưng trên sân, mọi người thường gọi vui tôi là <strong>'Chuyên gia bắt chuột'</strong>.
              </p>
              <p>
                Tôi không chỉ là một người làm nghề chăm sóc sức khỏe, mà trước hết, tôi là một người mang trong mình tình yêu mãnh liệt với bộ môn Pickleball. Chính vì trực tiếp cầm vợt, trực tiếp vã mồ hôi và cháy hết mình trên sân, tôi thấu hiểu tận cùng cảm giác hụt hẫng khi một pha bóng đẹp bị cắt ngang bởi cơn chuột rút. Tôi hiểu sự bất lực khi cơ bắp căng cứng, khớp gối đau nhức khiến bạn phải ngồi ngoài nhìn đồng đội thi đấu.
              </p>
              <p>
                Nỗi sợ chấn thương, sợ phải dùng thuốc giảm đau hay sợ phải nghỉ chơi dài ngày là nỗi ám ảnh của bất kỳ tay vợt nào.
              </p>
              <p>
                Sự đồng cảm đó đã thôi thúc tôi – một người được đào tạo bài bản về <strong className="text-forest">Dưỡng sinh Đông y</strong> – quyết tâm tìm ra một giải pháp phục hồi tối ưu nhất cho dân thể thao. Tôi đã kiên trì tìm hiểu, ứng dụng thực tế và kết hợp thành công tinh hoa <strong>Y học Cổ truyền</strong> và <strong>Kỹ thuật giãn cơ hiện đại</strong>.
              </p>
              <p>
                Phương pháp này không chỉ giúp bạn giảm cơn đau ngay tại mép sân, mà còn giải phóng các bó cơ bó tắc, lưu thông khí huyết, giúp cơ thể tự phục hồi năng lượng một cách tự nhiên nhất.
              </p>
              <p>
                Sứ mệnh của tôi rất đơn giản: Giúp bạn thỏa mãn trọn vẹn đam mê Pickleball với một thể trạng khỏe mạnh. Bạn cứ việc tỏa sáng trên sân, bảo vệ cơ bắp của bạn hãy để Xuân lo!
              </p>
            </div>

            <div className="mt-10 flex justify-end">
              <a 
                href="#services" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-coral text-white rounded-full font-bold hover:bg-coral-light transition-all shadow-lg shadow-coral/30"
              >
                Đặt lịch tư vấn ngay
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
