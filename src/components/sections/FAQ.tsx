import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "Phương pháp của Ái Xuân Trần có giống với đi massage/spa thông thường không?",
    answer: (
      <>
        <strong className="text-[#2F5D50]">Hoàn toàn khác biệt.</strong> Massage thông thường chủ yếu làm thư giãn bề mặt da và cơ nhẹ. Phương pháp của Ái Xuân Trần là <strong className="text-[#2F5D50]">Phục hồi chuyên sâu</strong>, kết hợp <strong className="text-[#2F5D50]">bấm huyệt Đông y mở khóa điểm tắc nghẽn</strong> và dùng <strong className="text-[#2F5D50]">máy Năng lượng sinh học</strong> tác động thẳng vào vùng cơ đang bị bó. Nó mang tính <strong className="text-[#2F5D50]">giải quyết cơn đau và tối ưu hóa phong độ</strong>, chứ không chỉ là thư giãn đơn thuần.
      </>
    )
  },
  {
    question: "Nếu tôi đang bị đau nhức, liệu trình có gây đau đớn thêm không? Bao lâu thì tôi có thể ra sân trở lại?",
    answer: (
      <>
        Liệu trình được tinh chỉnh lực tác động phù hợp với ngưỡng chịu đựng của từng người, kết hợp kem đả thông kinh lạc cao cấp giúp làm mềm cơ nhanh chóng nên sẽ <strong className="text-[#2F5D50]">mang lại cảm giác dễ chịu, giải tỏa ngay lập tức chứ không gây đau đớn</strong>. Phần lớn các VĐV đều cảm thấy <strong className="text-[#2F5D50]">cơ thể nhẹ bẫng</strong> và <strong className="text-[#2F5D50]">có thể trở lại sân đấu ngay sau ngày hôm sau</strong>.
      </>
    )
  },
  {
    question: "Khi mời Ái Xuân đến giải đấu, Ban tổ chức có cần chuẩn bị không gian hay thiết bị gì phức tạp không?",
    answer: (
      <>
        <strong className="text-[#2F5D50]">Hoàn toàn không.</strong> Dịch vụ của chúng tôi mang tính chất <strong className="text-[#2F5D50]">'Chìa khóa trao tay'</strong>. Ái Xuân Trần và đội ngũ sẽ <strong className="text-[#2F5D50]">tự chuẩn bị đầy đủ trang thiết bị</strong>, giường gập chuyên dụng, máy móc và nguyên liệu đi kèm. Ban tổ chức chỉ cần hỗ trợ một góc nhỏ tại khu vực sân và nguồn điện cơ bản. Mọi công tác hậu cần chúng tôi sẽ <strong className="text-[#2F5D50]">tự chủ động để không làm ảnh hưởng đến luồng vận hành của giải</strong>.
      </>
    )
  },
  {
    question: "Sự có mặt của Ái Xuân Trần tại giải đấu mang lại giá trị thực tế gì ngoài việc xử lý chuột rút?",
    answer: (
      <>
        Ngoài việc chăm sóc khẩn cấp giúp VĐV an tâm thi đấu, sự hiện diện của một đội ngũ chăm sóc phục hồi chuyên nghiệp là <strong className="text-[#2F5D50]">thước đo đẳng cấp của giải đấu</strong>. Nó giúp Ban tổ chức <strong className="text-[#2F5D50]">tạo ra điểm nhấn truyền thông khác biệt</strong>, <strong className="text-[#2F5D50]">ghi điểm tuyệt đối</strong> trong mắt các nhà tài trợ và khiến các VĐV <strong className="text-[#2F5D50]">muốn quay lại thi đấu ở những mùa giải sau</strong>.
      </>
    )
  },
  {
    question: "Tôi chưa từng học qua ngành Y hay Đông y thì có thể tiếp thu và làm được mô hình này không?",
    answer: (
      <>
        <strong className="text-[#2F5D50]">Chắc chắn làm được.</strong> Khóa chuyển giao của Ái Xuân không dạy lý thuyết hàn lâm dài dòng, mà <strong className="text-[#2F5D50]">tập trung vào Quy trình thực chiến</strong>. Bạn sẽ được <strong className="text-[#2F5D50]">cầm tay chỉ việc các kỹ thuật cốt lõi</strong>, cách sử dụng máy móc và công thức xử lý từng vấn đề đặc thù của môn Pickleball. Chỉ cần bạn đam mê và chăm chỉ, bạn <strong className="text-[#2F5D50]">hoàn toàn làm chủ được tay nghề trong thời gian ngắn</strong>.
      </>
    )
  },
  {
    question: "Học xong tôi có được hướng dẫn cách làm sao để có khách hàng và tiếp cận các giải đấu không?",
    answer: (
      <>
        <strong className="text-[#2F5D50]">Đây chính là giá trị lớn nhất của khóa chuyển giao.</strong> Ái Xuân Trần <strong className="text-[#2F5D50]">không chỉ chuyển giao nghề, mà chuyển giao cả Bí quyết Kinh doanh</strong>. Bạn sẽ được chia sẻ <strong className="text-[#2F5D50]">cách xây dựng thương hiệu cá nhân</strong>, <strong className="text-[#2F5D50]">cách tiếp cận các chủ sân Pickleball</strong> và <strong className="text-[#2F5D50]">cách để trở thành đơn vị đồng hành được các giải đấu săn đón</strong> – bài học được đúc kết từ chính sự thành công thực tế của Ái Xuân Trần.
      </>
    )
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-12 lg:py-16 bg-cream text-text-dark relative overflow-hidden">
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
                <span className="text-lg font-bold text-forest pr-4 text-justify">{faq.question}</span>
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
                    <div className="px-6 pb-6 pt-0 text-text-body leading-relaxed border-t border-gray-50 mt-2 text-justify">
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
