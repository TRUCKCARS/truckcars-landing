import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppFloat: React.FC = () => {
  return (
    <a 
      href="https://wa.me/56947436919"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-110 flex items-center gap-2 group"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="h-8 w-8" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-in-out whitespace-nowrap font-bold">
        Chatea con nosotros
      </span>
    </a>
  );
};

export default WhatsAppFloat;