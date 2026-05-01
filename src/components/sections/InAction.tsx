import React from 'react';
import { motion } from 'motion/react';
import { Trophy } from 'lucide-react';

const logos = [
  "Giải CLB AKCLUB tại An Khê",
  "Giải pickleball CLB BFF tại tuy Phước",
  "Giải AN THÁI TRIỆU tại An Nhơn",
  "Giải Pickleball Dinknutrition Open TPHCM",
  "Giải pickleball resort dankbaar"
];

const actions = [
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1622599511051-16fd808eec97?auto=format&fit=crop&q=80"
  },
  {
    type: "video",
    src: "https://videos.pexels.com/video-files/3196164/3196164-sd_640_360_25fps.mp4"
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80"
  }
];

export default function InAction() {
  return (
    <section id="in-action" className="py-24 bg-beige overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <span className="text-sage font-bold tracking-wider text-sm uppercase mb-4 block">Bằng Chứng Chuyên Môn</span>
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-text-dark mb-4">
          Thực Chiến Tại Thảm Đấu
        </h2>
        <p className="text-text-body max-w-2xl mx-auto text-lg">
          Đồng hành cùng hàng chục giải đấu lớn nhỏ. Kịp thời cứu nguy cho hàng trăm tay vợt ngay tại mép sân căng thẳng.
        </p>
      </div>

      {/* Marquee Logos */}
      <div className="relative w-full flex overflow-x-hidden border-y border-beige bg-cream py-8 mb-16">
        <div className="animate-marquee whitespace-nowrap flex items-center">
          {[...logos, ...logos].map((logo, index) => (
            <div key={index} className="mx-8 flex items-center gap-3">
              <Trophy className="w-5 h-5 text-sage/40" />
              <span className="text-lg font-bold text-text-body/60 uppercase tracking-widest">{logo}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Action Gallery */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6">
          {actions.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group rounded-3xl overflow-hidden aspect-[4/5] shadow-lg cursor-pointer bg-cream border border-beige"
            >
              {item.type === 'video' ? (
                <video 
                  src={item.src} 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <img 
                  src={item.src} 
                  alt="Hình ảnh thực chiến tại sân" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              )}
              <div className="absolute inset-0 bg-forest/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-medium px-4 py-2 border rounded-full backdrop-blur-sm bg-black/20">
                  Xem hoạt động
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
