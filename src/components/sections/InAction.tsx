import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Trophy, CheckCircle2, PlayCircle, Quote, ExternalLink, X } from 'lucide-react';

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

const videoReels = [
  {
    id: 1,
    title: "Không khí tại giải thi đấu",
    poster: "https://i.postimg.cc/CLS2Htnh/0503-(4)-Cover.jpg",
    video: "https://drive.google.com/file/d/1qyNXH3eJkPIqhnMs2cgm4KyalL_N6fTa/preview",
    isEmbed: true
  },
  {
    id: 2,
    title: "VĐV vô địch nói gì?",
    poster: "https://i.postimg.cc/fT887bhf/0503-666-Cover.jpg",
    video: "https://drive.google.com/file/d/18lIDeYb4EQ-e1WcVGoWyOMjMXr0U0nQ2/preview",
    isEmbed: true
  },
  {
    id: 3,
    title: "VĐV vô địch nói gì khi bị chuột rút?",
    poster: "https://i.postimg.cc/qBLw07gV/0503-(2)-Cover.jpg",
    video: "https://drive.google.com/file/d/1NYBGNmvogBRdxwqd-xNm-pgn-hOlzhm4/preview",
    isEmbed: true
  },
  {
    id: 4,
    title: "Cận cảnh VĐV được chăm sóc tại sân",
    poster: "https://i.postimg.cc/FHJ0fFFh/0503-(4)(1)-Cover.jpg",
    video: "https://drive.google.com/file/d/1h2iYN8CxYHaPPQBW0cKCA6WI0NNz95G3/preview",
    isEmbed: true
  }
];

const ReelCard: React.FC<{ item: any, onPlayingChange?: (playing: boolean) => void }> = ({ item, onPlayingChange }) => {
  const [playing, setPlaying] = React.useState(false);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  const onPlayingChangeRef = React.useRef(onPlayingChange);
  React.useEffect(() => {
    onPlayingChangeRef.current = onPlayingChange;
  }, [onPlayingChange]);

  React.useEffect(() => {
    if (onPlayingChangeRef.current) {
      onPlayingChangeRef.current(playing);
    }
  }, [playing]);

  const handlePlay = () => {
    setPlaying(true);
    if (!item.isEmbed && videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <div className="w-[280px] sm:w-[320px] aspect-[9/16] shrink-0 snap-center relative rounded-[2rem] overflow-hidden bg-black shadow-xl border border-white/10 group cursor-pointer" onClick={!playing ? handlePlay : undefined}>
      {item.isEmbed ? (
        playing ? (
          <iframe
            src={item.video}
            className="w-full h-full border-0 absolute inset-0 z-0 bg-transparent"
            allow="autoplay"
            allowFullScreen
            loading="lazy"
          />
        ) : (
          <img src={item.poster} className="w-full h-full object-cover" alt={item.title} loading="lazy" />
        )
      ) : (
        <video
          ref={videoRef}
          controls={playing}
          playsInline
          className="w-full h-full object-cover"
          poster={item.poster}
          onPause={() => setPlaying(false)}
          onEnded={() => setPlaying(false)}
        >
          <source src={item.video} type="video/mp4" />
        </video>
      )}
      
      {!playing && (
        <div className="absolute inset-0 z-10 flex flex-col justify-between p-6 bg-gradient-to-t from-[#2F5D50] via-transparent to-[#2F5D50]/80 transition-colors">
          <div className="text-center mt-2">
            <span className="inline-block bg-[#FF6B35] text-white font-bold text-sm uppercase tracking-wider px-4 py-2 rounded-xl shadow-[0_5px_15px_rgba(255,107,53,0.3)] border border-[#FF6B35]/30">
              [{item.title}]
            </span>
          </div>
          
          <div className="flex justify-center mb-10">
            <div 
              className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/40 group-hover:scale-110 group-hover:bg-[#FF6B35] group-hover:border-transparent transition-all shadow-[0_0_30px_rgba(255,107,53,0)] group-hover:shadow-[0_0_40px_rgba(255,107,53,0.6)]"
            >
              <PlayCircle className="w-12 h-12" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function FeedbackCarousel() {
  const baseImages = [
    "https://i.postimg.cc/4Nyq1w6p/FB0.jpg",
    "https://i.postimg.cc/YqSwFH2D/FB1.jpg",
    "https://i.postimg.cc/MpCkgf0z/FB3.jpg",
    "https://i.postimg.cc/LXSc8d0N/FB4.jpg",
    "https://i.postimg.cc/HWBqdh0c/FB5.jpg",
    "https://i.postimg.cc/9Fksqwnt/FB6.jpg",
    "https://i.postimg.cc/5tdGsd1v/FB7.jpg",
    "https://i.postimg.cc/gJHTkmrF/FB8.jpg",
    "https://i.postimg.cc/wT70nhXc/FB9.jpg"
  ];
  
  // Clone 50 times to create a virtually infinite scrolling experience
  const images = Array(50).fill(baseImages).flat();
  
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const [isAutoPlaying, setIsAutoPlaying] = React.useState(true);

  React.useEffect(() => {
    // Start somewhere in the middle so user can scroll left or right immediately
    if (scrollRef.current) {
        // approximate width calculation to set to middle
        const singleSetWidth = 9 * 280; // approx width + gap
        scrollRef.current.scrollLeft = singleSetWidth * 25;
    }
  }, []);

  React.useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      if (scrollRef.current) {
        // get exact width of one item + gap dynamically to scroll exactly one item
        const itemElement = scrollRef.current.children[0] as HTMLElement;
        const itemWidth = itemElement?.clientWidth || 250;
        const gap = 24; // typical gap spacing (sm:gap-6 which is 24px)
        scrollRef.current.scrollBy({ left: itemWidth + gap, behavior: 'smooth' });
      }
    }, 1500);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleScroll = (direction: 'left' | 'right') => {
    setIsAutoPlaying(false);
    if (scrollRef.current) {
       const itemElement = scrollRef.current.children[0] as HTMLElement;
       const itemWidth = itemElement?.clientWidth || 250;
       const gap = 24;
       const scrollAmount = direction === 'left' ? -(itemWidth + gap) : (itemWidth + gap);
       scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto mb-16 px-10 sm:px-16" onMouseEnter={() => setIsAutoPlaying(false)} onMouseLeave={() => setIsAutoPlaying(true)}>
      <button 
        onClick={() => handleScroll('left')}
        className="absolute left-0 lg:left-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-[#FF6B35] group p-3 sm:p-4 rounded-full backdrop-blur-sm transition-all border border-white/20 text-white shadow-xl hover:scale-110"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-0.5 transition-transform"><path d="m15 18-6-6 6-6"/></svg>
      </button>

      <div 
        ref={scrollRef}
        className="flex overflow-x-auto gap-4 sm:gap-6 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] px-2 py-4"
      >
        {images.map((img, index) => (
          <div key={index} className="w-[180px] sm:w-[220px] lg:w-[260px] shrink-0 snap-center rounded-xl overflow-hidden shadow-2xl border border-white/20 bg-white/5 transition-transform hover:scale-[1.02]">
            <img src={img} alt={`Feedback ${index}`} className="w-full h-auto object-cover pointer-events-none" />
          </div>
        ))}
      </div>

      <button 
        onClick={() => handleScroll('right')}
        className="absolute right-0 lg:right-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-[#FF6B35] group p-3 sm:p-4 rounded-full backdrop-blur-sm transition-all border border-white/20 text-white shadow-xl hover:scale-110"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-0.5 transition-transform"><path d="m9 18 6-6-6-6"/></svg>
      </button>
    </div>
  );
}

function VideoReelsCarousel() {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = React.useState(false);
  const [activeVideos, setActiveVideos] = React.useState<Set<string>>(new Set());
  const scrollDirectionRef = React.useRef<'left' | 'right'>('right');
  
  // Clone the reels 8 times to create an infinite circle scrolling experience
  const clonedReels = React.useMemo(() => Array(8).fill(videoReels).flat().map((item, i) => ({...item, uniqueKey: `${item.id}-${i}`})), []);

  const isAutoPlaying = !isHovered && activeVideos.size === 0;

  const handleVideoPlaying = React.useCallback((uniqueKey: string, playing: boolean) => {
    setActiveVideos(prev => {
      const next = new Set(prev);
      if (playing) next.add(uniqueKey);
      else next.delete(uniqueKey);
      return next;
    });
  }, []);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
       const el = scrollRef.current;
       const itemElement = el.children[1] as HTMLElement;
       const itemWidth = itemElement?.clientWidth || 280;
       const gap = 32;
       const scrollAmount = direction === 'left' ? -(itemWidth + gap) : (itemWidth + gap);
       el.scrollBy({ left: scrollAmount, behavior: 'smooth' });
       scrollDirectionRef.current = direction;
    }
  };

  React.useEffect(() => {
    // Start somewhere in the middle so user can scroll left or right immediately
    if (scrollRef.current) {
        const singleSetWidth = videoReels.length * (280 + 32);
        scrollRef.current.scrollLeft = singleSetWidth * 3;
    }
  }, []);

  React.useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const el = scrollRef.current;
        // Check actual scroll position vs max scroll to determine bounce
        const maxScroll = el.scrollWidth - el.clientWidth;
        
        let shouldScrollLeft = false;
        let shouldScrollRight = false;
        
        if (scrollDirectionRef.current === 'right') {
          if (el.scrollLeft >= maxScroll - 10) {
            scrollDirectionRef.current = 'left';
            shouldScrollLeft = true;
          } else {
            shouldScrollRight = true;
          }
        } else {
          if (el.scrollLeft <= 10) {
            scrollDirectionRef.current = 'right';
            shouldScrollRight = true;
          } else {
            shouldScrollLeft = true;
          }
        }

        // Get an approximate width to scroll
        const itemElement = el.children[1] as HTMLElement;
        const itemWidth = itemElement?.clientWidth || 280;
        const gap = 32;
        const scrollAmount = shouldScrollRight ? (itemWidth + gap) : -(itemWidth + gap);

        el.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }, 2500);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="w-full max-w-[1400px] relative px-10 sm:px-16 mx-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
    >
      <button 
        onClick={() => handleScroll('left')}
        className="absolute left-0 lg:left-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-[#FF6B35] group p-3 sm:p-4 rounded-full backdrop-blur-sm transition-all border border-white/20 text-white shadow-xl hover:scale-110"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-0.5 transition-transform"><path d="m15 18-6-6 6-6"/></svg>
      </button>

      <div 
        ref={scrollRef}
        className="flex overflow-x-auto gap-4 sm:gap-8 pb-4 pt-4 sm:px-6 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        <div className="hidden sm:block shrink-0 w-[1vw] xl:w-[5vw]"></div>
        
         {clonedReels.map((item) => (
           <ReelCard key={item.uniqueKey} item={item} onPlayingChange={(playing) => handleVideoPlaying(item.uniqueKey, playing)} />
         ))}
         
         <div className="hidden sm:block shrink-0 w-[1vw] xl:w-[5vw]"></div>
      </div>
      
      <button 
        onClick={() => handleScroll('right')}
        className="absolute right-0 lg:right-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-[#FF6B35] group p-3 sm:p-4 rounded-full backdrop-blur-sm transition-all border border-white/20 text-white shadow-xl hover:scale-110"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-0.5 transition-transform"><path d="m9 18 6-6-6-6"/></svg>
      </button>

      <div className="flex justify-center items-center text-gray-400 text-sm gap-2 animate-pulse mt-4 mb-4">
         <span className="uppercase tracking-widest font-bold text-white/50">← Vuốt ngang để xem thêm →</span>
      </div>
    </motion.div>
  );
}

export default function InAction() {
  const [currentChampionIndex, setCurrentChampionIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const championImages = [
    "https://i.postimg.cc/YS43mWMB/z7781678858930-b375f747edc0cbc223373494ef9a50a9.jpg",
    "https://i.postimg.cc/br0Lwf8c/z7782973594006-8837e9064fefb300ed79a1f08e171d8b.jpg"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentChampionIndex((prev) => (prev + 1) % championImages.length);
    }, 4000); // Change image every 4 seconds
    return () => clearInterval(timer);
  }, []);
  return (
    <section id="in-action" className="py-12 lg:py-16 bg-[#2F5D50] text-white overflow-hidden relative">
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
          className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-6 pt-2 leading-[1.4] sm:leading-[1.4] lg:leading-[1.3]"
        >
          <span className="block mb-3 sm:mb-4">TỪ PHÒNG PHỤC HỒI ĐẾN THẢM ĐẤU</span>
          <span className="text-[#FF6B35]">BẢO CHỨNG THỂ LỰC</span> CHO NHỮNG NHÀ VÔ ĐỊCH
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-300 text-lg lg:text-xl font-medium max-w-3xl mx-auto leading-relaxed"
        >
          Đồng hành cùng các giải đấu lớn nhỏ – Nơi năng lực của <span className="whitespace-nowrap">'Chuyên gia bắt chuột'</span> <br className="hidden sm:block" /> được minh chứng bằng thực tế.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-8 lg:gap-16 mt-12 mb-10"
        >
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-black text-[#FF6B35]">20+</span>
            <span className="text-sm font-bold text-gray-400 uppercase tracking-widest mt-2">Giải Đấu</span>
          </div>
          <div className="w-px h-16 bg-white/10 hidden md:block"></div>
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-black text-[#FF6B35]">500+</span>
            <span className="text-sm font-bold text-gray-400 uppercase tracking-widest mt-2">Vận Động Viên</span>
          </div>
          <div className="w-px h-16 bg-white/10 hidden md:block"></div>
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-black text-[#FF6B35]">100%</span>
            <span className="text-sm font-bold text-gray-400 uppercase tracking-widest mt-2">Chuyên nghiệp, tận tâm, hiệu quả</span>
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, y: 10 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.4 }}
        >
          <a 
            href="https://zalo.me/0938614687" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-[#FF6B35] hover:bg-[#e85d26] text-white w-full sm:w-auto px-4 sm:px-8 py-3 sm:py-4 rounded-2xl font-bold uppercase tracking-wider text-[13px] sm:text-sm text-center transition-all hover:scale-105 active:scale-95 shadow-[0_15px_30px_rgba(255,107,53,0.3)]"
          >
            Đăng ký chăm sóc thi đấu
          </a>
        </motion.div>
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
            <AnimatePresence mode="wait">
              <motion.img 
                key={currentChampionIndex}
                src={championImages[currentChampionIndex]} 
                alt={`Nhà vô địch ${currentChampionIndex + 1}`} 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-[#2F5D50]/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center gap-2 sm:gap-3 text-[#FF6B35] font-bold uppercase tracking-wider sm:tracking-widest text-[11px] sm:text-sm mb-2">
                <Trophy className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                Chúc mừng nhà vô địch
              </div>
            </div>
          </div>
          <div className="space-y-6 border-l-[6px] border-[#FF6B35] pl-6 pr-4 sm:pr-6 bg-white/5 py-6 rounded-r-2xl break-words">
            <Quote className="w-10 h-10 text-[#FF6B35] opacity-80" />
            <h3 className="text-xl sm:text-2xl font-heading font-bold italic text-white/90">
              "Đằng sau mỗi chiếc cúp, là sự bền bỉ của cơ bắp."
            </h3>
            <p className="text-gray-300 text-base lg:text-lg leading-relaxed text-justify">
              "Trong một giải đấu căng thẳng, thể lực chính là vũ khí quyết định. Rất tự hào khi phương pháp phục hồi của Ái Xuân Trần đã trực tiếp xoa dịu những bó cơ quá tải, giúp VĐV tự tin bước vào trận chung kết với phong độ đỉnh cao và xuất sắc giành <span className="text-[#FF6B35] font-bold">Ngôi Vô Địch</span>. Thành tích của bạn trên sân chính là tấm huy chương quý giá nhất cho phương pháp của tôi."
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
              "Không chỉ là phục hồi cá nhân, Ái Xuân Trần vinh dự là đối tác chăm sóc thể lực được các Ban tổ chức và Chủ sân Pickleball tin tưởng 'chọn mặt gửi vàng'."
            </p>
            <ul className="grid sm:grid-cols-2 gap-4 text-left mb-8 max-w-3xl mx-auto">
              {[
                "Xử lý tức thì các tình huống căng cơ, chuột rút ngay tại mép sân.",
                "Bù đắp vi khoáng và dưỡng chất tiêu hao sau khi vã mồ hôi trên sân. Hỗ trợ phục hồi thể lực nhanh chóng.",
                "Tạo điểm nhấn chuyên nghiệp, gia tăng giá trị cho mọi giải đấu.",
                "Mang đến sự an tâm tuyệt đối cho các VĐV thi đấu."
              ].map((item, i) => (
                <li key={i} className="flex gap-3 items-start bg-white/5 p-4 rounded-xl border border-white/5">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6B35] shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm md:text-base">{item}</span>
                </li>
              ))}
            </ul>
            <a 
              href="https://zalo.me/0938614687" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#FF6B35] hover:bg-[#e85d26] text-white w-full sm:w-auto px-4 sm:px-8 py-3 sm:py-4 rounded-2xl font-bold uppercase tracking-wider text-[13px] sm:text-sm text-center transition-all hover:scale-105 active:scale-95 shadow-[0_15px_30px_rgba(255,107,53,0.3)]"
            >
              Mời Ái Xuân đồng hành giải đấu
            </a>
          </div>

          {/* Marquee Logos */}
          <div className="relative w-full flex overflow-x-hidden border-y border-white/10 bg-white/5 py-6">
            <div className="animate-marquee whitespace-nowrap flex items-center">
              {[...logos, ...logos].map((logo, index) => (
                <div key={index} className="mx-8 flex items-center gap-3">
                  <Trophy className="w-4 h-4 text-sage/80" />
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

            <div className="flex flex-col gap-8 lg:gap-10 relative z-10">
              <div className="w-full">
                <div className="w-fit mb-4 bg-white px-3 py-1.5 rounded-lg">
                  <img src="https://i.postimg.cc/cL63CGBt/ldo-red.png" alt="Báo Lao Động" className="h-6 w-auto object-contain" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white uppercase tracking-wide leading-snug">
                  GÓP MẶT TẠI SỰ KIỆN QUY MÔ - BẢO CHỨNG BỞI TRUYỀN THÔNG ĐẠI CHÚNG
                </h3>
              </div>

              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
                <div className="w-full lg:w-[50%] flex flex-col justify-end">
                  <div className="space-y-6">
                    <p className="text-gray-300 text-base lg:text-lg leading-relaxed text-justify">
                      "Không chỉ đồng hành cùng các giải đấu phong trào, Ái Xuân Trần tự hào là đối tác chăm sóc thể lực tại các sự kiện thể thao tầm cỡ, mang ý nghĩa lớn của Thành phố.
                    </p>
                    <p className="text-gray-300 text-base lg:text-lg leading-relaxed text-justify">
                      Tại Hội thao chào mừng Đại hội đại biểu Đảng bộ TPHCM (Giải Pickleball Dinknutrition Open) do Sở Văn hóa và Thể thao TPHCM tổ chức với hơn 200 vận động viên tranh tài, Ái Xuân đã túc trực sát sao tại thảm đấu. Sự thành công rực rỡ của giải, nơi các VĐV thi đấu thăng hoa và an toàn, đã được báo chí và các cơ quan truyền thông lớn (như Báo Lao Động) ghi nhận."
                    </p>
                  </div>
                </div>
                
                <div className="w-full lg:w-[50%] flex flex-col justify-end mt-4 lg:mt-0">
                  <div className="w-full rounded-2xl overflow-hidden shadow-2xl border border-white/20 relative group">
                    <img 
                      src="https://i.postimg.cc/CK89y1dK/z7783996564835-90bb26969736a61c4af0a1d00a829bf4.jpg" 
                      alt="Hoạt động chăm sóc" 
                      className="w-full h-auto object-cover relative z-10"
                    />
                    
                    {/* Continuous radiating red circle effect */}
                    <div className="absolute top-[26%] right-[27%] w-8 h-8 lg:w-10 lg:h-10 rounded-full transform translate-x-[50%] -translate-y-[50%] z-20 pointer-events-none">
                      <div className="absolute inset-0 border-2 border-red-500 rounded-full animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
                      <div 
                        className="absolute inset-0 border-2 border-red-600 rounded-full animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]"
                        style={{ animationDelay: '1s' }}
                      ></div>
                      <div className="absolute inset-0 border-2 border-red-600 rounded-full shadow-[0_0_15px_rgba(220,38,38,0.8)] opacity-60"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6 pt-4 border-t border-white/10">
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
            </div>
          </motion.div>

          {/* Reel-style Video Library */}
          <div id="testimonials" className="mt-24 pt-12 border-t border-white/10 scroll-mt-24">
            <div className="text-center max-w-4xl mx-auto mb-10 px-4">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-6 text-[#FF6B35] uppercase tracking-wide leading-snug">
                CHUYÊN MÔN ĐƯỢC CHỨNG MINH BẰNG NHỮNG KHOẢNH KHẮC THỰC TẾ
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto italic mt-4 md:mt-6">
                "Không lý thuyết. Không cam kết suông. Uy tín của Ái Xuân Trần được xây dựng từ những giọt mồ hôi trên sân, những pha cứu nguy tức thì và nụ cười của các VĐV sau khi phục hồi thể lực. Hãy vuốt để xem những khoảnh khắc thực chiến và lắng nghe chia sẻ từ chính những người trong cuộc."
              </p>
            </div>
            
            <VideoReelsCarousel />
          </div>

          {/* Photo Grid / Gallery */}
          <div className="mt-24 pt-12 border-t border-white/10">
            <div className="text-center max-w-4xl mx-auto mb-10 px-4">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-6 text-[#FF6B35] uppercase tracking-wide leading-snug">
                KHÔNG GIAN CƠ SỞ TĨNH TẠI <span style={{ fontFamily: '"Times New Roman", Times, serif' }}>&</span> THỰC CHIẾN SÂN ĐẤU MÁU LỬA
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto italic mt-4 md:mt-6">
                "Từ cơ sở khang trang với máy móc hiện đại đến những pha 'bắt chuột' tốc độ bên mép sân Pickleball. Mọi không gian đều được Ái Xuân Trần chuẩn bị với sự chuyên nghiệp, tận tâm."
              </p>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 px-2 sm:px-0"
            >
              {[
                { src: "https://i.postimg.cc/02xB36tf/TD.jpg", alt: "Không gian trị liệu" },
                { src: "https://i.postimg.cc/hjdpN754/z7117866262068-a84204681e57719bf9388e2d7ce5bd0e.jpg", alt: "Không gian trị liệu" },
                { src: "https://i.postimg.cc/C50mWt4q/z7117866346113-171249ad62e161fbf658ccb8ba53f6b0.jpg", alt: "Không gian trị liệu" },
                { src: "https://i.postimg.cc/pXqq6s5D/z7117866352017-5299ff2334a0038fc271afdf0be38f1c.jpg", alt: "Không gian trị liệu" },
                { src: "https://i.postimg.cc/8cTmyv1Z/z7117866449922-1012cd823d1fc6b6bdbe6f14f1836402.jpg", alt: "Không gian trị liệu" },
                { src: "https://i.postimg.cc/CxRH6Sgx/z7117866494309-bf9cca093a9d431020490c0ded68c1e8.jpg", alt: "Không gian trị liệu" },
                { src: "https://i.postimg.cc/fW5czJWT/z7117866584505-c953459a3ed4937a8582cb6485506763.jpg", alt: "Thực chiến sân đấu" },
                { src: "https://i.postimg.cc/X7myq5R6/z7781660511391-ab880cf6e2c048ddf6ef69b806538a88.jpg", alt: "Thực chiến sân đấu" },
                { src: "https://i.postimg.cc/4NDmsgcs/z7781660528482-9f348ea08302aaaa7fa61b8ac80100b3.jpg", alt: "Thực chiến sân đấu" },
                { src: "https://i.postimg.cc/zB2GMZ5J/z7781678850701-22b7692fc5e164fd05d9b647cacbcd7b.jpg", alt: "Thực chiến sân đấu" },
                { src: "https://i.postimg.cc/CxpL94yT/z7781679206690-a8c9aaf0f3c75dea26503e4a70e41788.jpg", alt: "Thực chiến sân đấu" },
                { src: "https://i.postimg.cc/HLBYcDrk/z7781679218484-22159ca3f957e31b5feeecd342c06370.jpg", alt: "Thực chiến sân đấu" }
              ].map((img, i) => (
                <div 
                  key={i} 
                  onClick={() => setSelectedImage(img.src)}
                  className="aspect-square sm:aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-white/10 group cursor-pointer relative bg-white/5"
                >
                  <img src={img.src} alt={img.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                     <span className="text-white font-bold tracking-wider uppercase text-sm border border-white/40 px-4 py-2 rounded-full backdrop-blur-sm">Phóng to</span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Khối 3: BỨC TƯỜNG DANH VỌNG (Wall of Love) */}
        <div className="pt-12 border-t border-white/10">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-3xl font-heading font-bold mb-4 text-white uppercase tracking-wide">
              BẢO CHỨNG TỪ NHỮNG NGƯỜI TRONG CUỘC
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed italic">
              "Các tay vợt Pickleball nói gì về hiệu quả phục hồi tại Ái Xuân Trần?"
            </p>
          </div>

          <FeedbackCarousel />

          <div className="text-center">
            <a 
              href="https://zalo.me/0938614687" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#FF6B35] hover:bg-[#e85d26] text-white px-4 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 w-full sm:w-auto rounded-2xl font-bold text-[13px] sm:text-lg lg:text-xl uppercase tracking-wider text-center transition-all hover:scale-105 active:scale-95 shadow-[0_15px_30px_rgba(255,107,53,0.3)] hover:shadow-[0_20px_40px_rgba(255,107,53,0.4)]"
            >
              Đặt lịch phục hồi ngay
            </a>
          </div>
        </div>

      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 sm:p-8 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-4 right-4 sm:top-8 sm:right-8 text-white/70 hover:text-white transition-colors bg-white/10 hover:bg-white/20 rounded-full p-2"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImage}
              alt="Phóng to"
              className="max-w-full max-h-full rounded-2xl shadow-2xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

