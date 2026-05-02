import React from 'react';
import { motion } from 'motion/react';

const pains = [
  {
    image: "https://i.postimg.cc/Xv1QVFBd/66aef0a9-bd32-4d93-9d5a-caa64cab06dd.png",
    title: "Chuột Rút Bất Ngờ",
    desc: "Cơn co thắt đau đớn xuất hiện đột ngột giữa set đấu quan trọng, làm gián đoạn nhịp thi đấu và tâm lý."
  },
  {
    image: "https://i.postimg.cc/rmQJh4M2/Chat-GPT-Image-00-10-58-2-thg-5-2026.png",
    title: "Căng Cơ, Đau Khớp",
    desc: "Áp lực lên cổ tay, đầu gối và gót chân liên tục. Những chấn thương tiềm ẩn ngăn cản bạn vung vợt mãnh liệt."
  },
  {
    image: "https://i.postimg.cc/FH5jVp3y/Chat-GPT-Image-00-13-15-2-thg-5-2026.png",
    title: "Kiệt sức, chậm phục hồi",
    desc: "Phong độ sụt giảm nhanh chóng sau các set đấu, cơ thể nặng nề, sức bền giảm sút, toàn thân rã rời mệt mỏi kéo dài sang cả ngày hôm sau."
  },
  {
    image: "https://i.postimg.cc/HxR2DgcS/Chat-GPT-Image-00-16-50-2-thg-5-2026.png",
    title: "Sợ dùng thuốc Tây",
    desc: "Nhọc nhằn tìm cách hồi phục nhưng không muốn dùng thuốc giảm đau, e ngại tác dụng phụ ảnh hưởng sức khỏe lâu dài."
  }
];

export default function PainPoints() {
  return (
    <section id="pain-points" className="py-12 lg:py-16 bg-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className="text-coral font-bold tracking-wider text-sm uppercase">Đam mê Pickleball nhưng...</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-heading font-bold text-text-dark mb-4"
          >
            Cơ Thể Đang Lên Tiếng?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-text-body text-lg"
          >
            Đừng để cơn đau cắt ngang trận đấu của bạn. Thể thao là để rèn luyện, không phải để chịu đựng tổn thương.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {pains.map((pain, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.3 }}
              className="bg-white p-6 rounded-[2rem] border border-beige hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden mb-6 shadow-sm bg-gray-100">
                <img 
                  src={pain.image} 
                  alt={pain.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-heading font-bold text-text-dark mb-3">{pain.title}</h3>
              <p className="text-text-body leading-relaxed text-justify">
                {pain.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
