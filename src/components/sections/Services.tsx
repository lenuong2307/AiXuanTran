import React from 'react';
import { motion } from 'motion/react';
import { User, Users, GraduationCap, CheckCircle2, ArrowRight, Flame } from 'lucide-react';

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="services" className="py-16 lg:py-24 bg-[#5F7F6B] text-white overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-white/5 blur-[100px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[30%] h-[30%] rounded-full bg-[#FF6B35]/10 blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-6 uppercase tracking-wide leading-tight">
            GIẢI PHÁP PHỤC HỒI ĐA TẦNG CỦA ÁI XUÂN TRẦN
          </h2>
          <p className="text-white/90 text-lg md:text-xl leading-relaxed">
            Từ việc xoa dịu cơn đau của từng cá nhân, nâng tầm đẳng cấp cho các giải đấu, đến việc chuyển giao công thức thành công trong ngách phục hồi thể thao.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-3 gap-8 items-stretch"
        >
          {/* KHỐI 1: CHĂM SÓC & PHỤC HỒI CÁ NHÂN */}
          <motion.div variants={itemVariants} className="flex flex-col bg-white rounded-3xl overflow-hidden shadow-2xl group hover:-translate-y-2 transition-transform duration-300">
            <div className="relative h-48 sm:h-56 overflow-hidden">
              <img 
                src="https://i.postimg.cc/zBx3wY68/z7784666669813-3c337b6dfede4087f685b6f6595f6253.jpg" 
                alt="Chăm sóc và phục hồi cá nhân" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="inline-flex items-center gap-1.5 bg-[#FF6B35] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
                  <User className="w-3.5 h-3.5" /> Dành cho cá nhân
                </span>
                <h3 className="text-xl sm:text-2xl font-bold leading-tight shadow-sm">PHỤC HỒI THỂ LỰC CHUYÊN SÂU <span className="font-['Times_New_Roman']">1:1</span></h3>
              </div>
            </div>
            
            <div className="flex flex-col flex-1 p-6 sm:p-8 bg-white text-gray-800">
              <div className="mb-6">
                <p className="text-sm text-gray-500 font-bold uppercase tracking-wider mb-2">Vấn đề giải quyết</p>
                <p className="text-gray-700 text-sm leading-relaxed">Căng cơ bó tắc lâu ngày, đau khớp gối, cổ tay, viêm gót chân, kiệt sức sau các buổi đánh dài.</p>
              </div>
              
              <div className="mb-8 flex-1">
                <p className="text-sm text-gray-500 font-bold uppercase tracking-wider mb-3">Quyền lợi</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6B35] shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Ứng dụng liệu trình 3 Tác động (Đông y - Công nghệ - Thực dưỡng) thiết kế riêng theo thể trạng từng người.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6B35] shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">"Cắt" đứt sự mệt mỏi, giải phóng cơ bắp</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6B35] shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Rút ngắn <strong className="text-[#2F5D50]">50%</strong> thời gian nghỉ dưỡng, đưa bạn trở lại sân tập với trạng thái cơ thể nhẹ bẫng và linh hoạt nhất.</span>
                  </li>
                </ul>
              </div>
              
              <a href="https://zalo.me/0938614687" target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-[#2F5D50] text-white font-bold hover:bg-[#254a40] transition-all relative overflow-hidden group/btn mt-auto">
                <span className="relative z-10 flex items-center gap-2">Đặt Lịch Chăm Sóc Ngay <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" /></span>
                <div className="absolute inset-0 bg-[#FF6B35] translate-y-[100%] group-hover/btn:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
              </a>
            </div>
          </motion.div>

          {/* KHỐI 2: ĐỒNG HÀNH CÙNG GIẢI ĐẤU */}
          <motion.div variants={itemVariants} className="flex flex-col bg-white rounded-3xl overflow-hidden shadow-2xl group hover:-translate-y-2 transition-transform duration-300">
            <div className="relative h-48 sm:h-56 overflow-hidden">
              <img 
                src="https://i.postimg.cc/Kzpvkr3P/z7781660500541-cd54838831c30327b4ad3b086f1ac43c.jpg" 
                alt="Đồng hành cùng giải đấu" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="inline-flex items-center gap-1.5 bg-[#2F5D50] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
                  <Users className="w-3.5 h-3.5" /> Dành cho chủ sân/BTC
                </span>
                <h3 className="text-xl sm:text-2xl font-bold leading-tight shadow-sm uppercase">chăm sóc <span className="font-['Times_New_Roman']">&amp;</span> phục hồi</h3>
              </div>
            </div>
            
            <div className="flex flex-col flex-1 p-6 sm:p-8 bg-white text-gray-800">
              <div className="mb-6">
                <p className="text-sm text-gray-500 font-bold uppercase tracking-wider mb-2">Vấn đề giải quyết</p>
                <p className="text-gray-700 text-sm leading-relaxed">Rủi ro chấn thương trong thi đấu, giải đấu thiếu đội ngũ chăm sóc chuyên nghiệp để xử lý tình huống khẩn cấp.</p>
              </div>
              
              <div className="mb-8 flex-1">
                <p className="text-sm text-gray-500 font-bold uppercase tracking-wider mb-3">Quyền lợi</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-[#2F5D50] shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Trực tiếp sơ cứu, xử lý chuột rút, lật cổ chân, căng cơ cấp tốc tại sân cho VĐV.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-[#2F5D50] shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Thiết lập trạm phục hồi năng lượng ngay tại giải đấu (kết hợp máy móc và xoa bóp giãn cơ ngắn).</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-[#2F5D50] shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700"><strong className="text-[#FF6B35]">Giá trị cộng thêm:</strong> Bảo chứng uy tín, tạo trải nghiệm WOW cho người tham gia và nâng tầm sự chuyên nghiệp cho toàn bộ giải đấu của bạn.</span>
                  </li>
                </ul>
              </div>
              
              <a href="https://zalo.me/0938614687" target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-[#FF6B35] text-white font-bold hover:bg-[#e85d26] transition-all relative overflow-hidden group/btn mt-auto">
                <span className="relative z-10 flex items-center gap-2">Mời Đồng Hành Giải Đấu <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" /></span>
                <div className="absolute inset-0 bg-[#2F5D50] translate-y-[100%] group-hover/btn:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
              </a>
            </div>
          </motion.div>

          {/* KHỐI 3: CHUYỂN GIAO NGHỀ NGHIỆP */}
          <motion.div variants={itemVariants} className="flex flex-col bg-[#1A332B] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(26,51,43,0.5)] group hover:-translate-y-2 transition-transform duration-300 relative border border-white/10">
            {/* Premium Badge */}
            <div className="absolute top-4 right-4 z-20">
              <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-[0_0_15px_rgba(239,68,68,0.6)] flex items-center gap-1 uppercase tracking-widest animate-pulse border border-red-400">
                <Flame className="w-3.5 h-3.5" /> HOT
              </span>
            </div>

            <div className="relative h-48 sm:h-56 overflow-hidden">
              <img 
                src="https://i.postimg.cc/hjsQCdJ6/z7784556654540-f37dba3db71c53ee87e3c04ea22ebd6e.jpg" 
                alt="Chuyển giao nghề nghiệp" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A332B] via-[#1A332B]/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="inline-flex items-center gap-1.5 bg-amber-400/20 text-amber-400 border border-amber-400/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2 backdrop-blur-sm">
                  <GraduationCap className="w-3.5 h-3.5" /> Dành cho Chủ Spa
                </span>
                <h3 className="text-xl sm:text-2xl font-bold leading-tight text-white shadow-sm">CHUYỂN GIAO MÔ HÌNH "CHUYÊN GIA BẮT CHUỘT"</h3>
              </div>
            </div>
            
            <div className="flex flex-col flex-1 p-6 sm:p-8 text-white relative z-10">
              <div className="mb-6">
                <p className="text-sm text-gray-400 font-bold uppercase tracking-wider mb-2">Vấn đề giải quyết</p>
                <p className="text-gray-300 text-sm leading-relaxed">Đam mê lĩnh vực chăm sóc sức khỏe thể thao, muốn khai thác "đại dương xanh" Pickleball nhưng thiếu kiến thức chuẩn và quy trình kinh doanh.</p>
              </div>
              
              <div className="mb-8 flex-1">
                <p className="text-sm text-gray-400 font-bold uppercase tracking-wider mb-3">Quyền lợi</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-200"><strong className="text-white">Nắm giữ bí quyết:</strong> Chuyển giao toàn bộ kỹ thuật xoa bóp bấm huyệt và vận hành thiết bị năng lượng sinh học chuyên biệt cho chấn thương Pickleball.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-200"><strong className="text-white">Quy trình chuẩn:</strong> Công thức phục hồi đã được kiểm chứng trên hàng trăm VĐV và các nhà vô địch.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-200"><strong className="text-white">Đồng hành kinh doanh:</strong> Hỗ trợ tư vấn setup mô hình, cách xây dựng thương hiệu cá nhân để thu hút cả khách lẻ lẫn các giải đấu lớn. (Được học từ chính kinh nghiệm thực chiến của Ái Xuân Trần).</span>
                  </li>
                </ul>
              </div>
              
              <a href="https://zalo.me/0938614687" target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-amber-900 font-bold hover:from-amber-300 hover:to-amber-400 transition-all relative overflow-hidden group/btn mt-auto shadow-[0_0_20px_rgba(251,191,36,0.3)] hover:shadow-[0_0_30px_rgba(251,191,36,0.5)]">
                <span className="relative z-10 flex items-center gap-2">Nhận Tư Vấn Khóa Chuyển Giao <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" /></span>
                <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover/btn:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
              </a>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}

