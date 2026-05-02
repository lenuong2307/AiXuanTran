import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "Phục hồi xong có được đánh trận tiếp không?",
    answer: "Công nghệ và phương pháp giãn cơ của Ái Xuân giúp giải phóng cục máu đông, làm giãn bó cơ đang co rút lập tức. Phục hồi xong, VĐV hoàn toàn có thể vào sân đánh tiếp ngay với 100% thể lực mà không lo tái phát nếu giữ đúng nhịp độ."
  },
  {
    question: "Tôi là BTC giải, muốn thuê team Ái Xuân thì cần book trước bao lâu?",
    answer: "Để đảm bảo sắp xếp nhân sự chuyên môn và thiết bị sinh học đầy đủ, BTC nên liên hệ đặt lịch trước ít nhất 1-2 tuần. Đối với các giải quy mô trên 200 VĐV, vui lòng báo trước 1 tháng để chuẩn bị chu đáo nhất."
  },
  {
    question: "Đau mỏi cổ vai gáy mãn tính có điều trị được không?",
    answer: "Hoàn toàn được. Chúng tôi kết hợp nắn chỉnh, máy năng lượng sinh học và đông y để đi sâu giải quyết tận gốc các điểm tắc nghẽn, trả lại sự linh hoạt cho cơ khớp chứ không chỉ giảm đau tạm thời."
  },
  {
    question: "Mỗi buổi phục hồi kéo dài bao lâu?",
    answer: "Tại giải đấu: Các ca xử lý cấp tốc chuột rút/căng cơ mất khoảng 10-15 phút. Tại cơ sở: Một buổi phục hồi chuyên sâu thường kéo dài từ 45 - 60 phút, bao gồm khám, nắn chỉnh và massage trị liệu."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 lg:py-16 bg-cream text-text-dark relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-heading font-bold text-forest mb-4"
          >
            Các Câu Hỏi Thường Gặp
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-text-body"
          >
            Mọi thắc mắc của bạn về dịch vụ phục hồi thể lực và y tế giải đấu.
          </motion.p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className="text-lg font-bold text-forest pr-4">{faq.question}</span>
                <ChevronDown 
                  className={`w-6 h-6 text-[#FF6B35] transition-transform duration-300 shrink-0 ${openIndex === index ? 'rotate-180' : ''}`} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 pt-0 text-text-body leading-relaxed border-t border-gray-50 mt-2">
                      <div className="mt-4">{faq.answer}</div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
