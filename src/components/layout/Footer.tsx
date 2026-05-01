import React from 'react';
import { Facebook, Instagram, Phone, Mail, MapPin, Activity } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-forest pt-20 pb-24 md:pb-12 text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <img src="https://i.postimg.cc/wvC6gjm4/Logo-A-i-Xua-n-Tra-n.png" alt="Ái Xuân Trần Logo" className="w-10 h-10 object-contain" />
              <span className="font-heading font-bold text-xl">Ái Xuân Trần</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Sẵn sàng trở lại sân đấu với thể trạng 100%. Kết nối tinh hoa y học truyền thống và thể thao hiện đại.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/aixuan.tran.79?locale=vi_VN" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-sage hover:text-forest transition-colors text-white/80">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-sage hover:text-forest transition-colors text-white/80 font-semibold">
                <span className="text-[11px]">Zalo</span>
              </a>
              {/* Note: Insert Tiktok icon from external source if needed, or use simple a tag */}
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-sage hover:text-forest transition-colors text-white/80 font-bold border border-current">
                <span className="text-xs">TK</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-6 text-lg">Thông Tin</h4>
            <ul className="space-y-3">
              {['Về Ái Xuân Trần', 'Phương pháp phục hồi', 'Khách hàng nói gì', 'Câu hỏi thường gặp'].map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-6 text-lg">Dịch Vụ</h4>
            <ul className="space-y-3">
              {['Chăm sóc cá nhân (B2C)', 'Đồng hành giải đấu (B2B)', 'Tư vấn trực tuyến', 'Chương trình huấn luyện'].map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-6 text-lg">Liên Hệ</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-sage shrink-0 mt-0.5" />
                <span className="text-white/70 text-sm">0938614687</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-sage shrink-0 mt-0.5" />
                <span className="text-white/70 text-sm">Xuantocxu86@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-sage shrink-0 mt-0.5" />
                <span className="text-white/70 text-sm">63 Đường Phạm Ngọc Thạch, Thành phố Quy Nhơn, Tỉnh Gia Lai</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 text-center text-sm text-white/50">
          <p>&copy; {new Date().getFullYear()} Ái Xuân Trần. Bản quyền đã được bảo hộ.</p>
        </div>
      </div>
    </footer>
  );
}
