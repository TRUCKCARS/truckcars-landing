import React from 'react';
import { MessageCircle } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-sm py-4 px-6 md:px-12 flex justify-between items-center sticky top-0 z-50 border-b border-gray-100">
      <div className="flex items-center">
        {/* Reemplazo de imagen de logo por texto estilizado */}
        <span className="text-2xl md:text-3xl font-black italic text-slate-900 tracking-tighter">
            TRUCKS<span className="text-orange-600">&</span>CARS
        </span>
      </div>
      
      <a 
        href="https://wa.me/56947436919" 
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-full font-bold transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
      >
        <MessageCircle size={20} />
        <span>Cotizar al WhatsApp</span>
      </a>
      {/* Mobile Icon Only */}
      <a 
        href="https://wa.me/56947436919" 
        className="md:hidden flex items-center justify-center bg-green-500 text-white p-2 rounded-full shadow-md"
      >
        <MessageCircle size={24} />
      </a>
    </nav>
  );
};

export default Navbar;