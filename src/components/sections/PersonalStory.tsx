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
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] shadow-2xl border-4 border-white">
              <img 
                src="https://i.postimg.cc/wvC6gjm4/Logo-A-i-Xua-n-Tra-n.png" 
                alt="Ái Xuân Trần" 
                className="w-full h-full object-cover bg-cream p-4"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/40 to-transparent"></div>
            </div>
            {/* Signature or Quote */}
            <div className="absolute -bottom-6 -right-2 sm:-right-6 lg:-right-12 bg-white p-4 sm:p-6 rounded-2xl shadow-xl w-64 sm:w-auto max-w-xs rotate-2 z-10">
              <p className="font-script text-2xl text-coral mb-2">"Sức khoẻ là tài sản quý giá nhất"</p>
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
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-text-dark mb-6 leading-tight">
              Lấy năng lượng chữa lành <br/> làm kim chỉ nam.
            </h2>
            
            <div className="space-y-6 text-lg text-text-body">
              <p>
                Xin chào, tôi là <strong className="text-forest">Ái Xuân Trần</strong>. Được dẫn dắt bởi ngọn lửa đam mê và sự am hiểu sâu sắc về y lý phương Đông, tôi chọn con đường đồng hành cùng các vận động viên Pickleball.
              </p>
              <p>
                Tôi mang trong mình mệnh Hỏa – ngọn lửa của sự ấm áp, chuyển hóa và chữa lành. Tôi tin rằng mỗi người chơi thể thao không chỉ cần một cơ bắp dẻo dai mà còn cần một hệ thống kinh lạc lưu thông trơn tru. 
              </p>
              <p>
                Sự kết hợp giữa <strong>Đông y dưỡng sinh</strong> và <strong>thể thao phục hồi</strong> không chỉ giúp bạn cắt đứt cơn đau do chuột rút, căng cơ ngay tại sân, mà còn tái tạo năng lượng từ sâu bên trong. Hãy để tôi dùng chuyên môn và tâm huyết bảo vệ nền tảng thể lực, giúp bạn luôn thăng hoa trong từng pha bóng.
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
