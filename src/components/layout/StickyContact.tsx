import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

export default function StickyContact() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full bg-cream border-t border-beige p-3 z-50 flex gap-3 pb-safe">
      <a 
        href="tel:0938614687" 
        className="flex-1 py-3 px-4 bg-coral text-white rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg"
      >
        <Phone className="w-5 h-5" />
        <span className="text-sm">Gọi Ngay</span>
      </a>
      <a 
        href="https://zalo.me/0938614687" 
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 py-3 px-4 bg-[#0068FF] text-white rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg"
      >
        <MessageCircle className="w-5 h-5" />
        <span className="text-sm">Zalo</span>
      </a>
    </div>
  );
}
