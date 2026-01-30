import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
          <div className="flex items-center">
             {/* Reemplazo de imagen de logo por texto estilizado en Footer */}
            <span className="text-2xl font-black italic text-white tracking-tighter">
                TRUCKS<span className="text-orange-500">&</span>CARS
            </span>
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-full">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-full">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-full">
              <Twitter size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between text-sm">
          <p>&copy; {new Date().getFullYear()} Trucks & Cars Chile. Todos los derechos reservados.</p>
          <div className="flex gap-4 justify-center mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-200">Privacidad</a>
            <a href="#" className="hover:text-gray-200">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;