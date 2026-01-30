import React from 'react';
import { Disc, Package, Sparkles, Hammer } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <header className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Imagen de taller/industria automotriz con buena iluminación */}
        <img 
          src="https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?q=80&w=1974&auto=format&fit=crop" 
          alt="Taller automotriz e industrial profesional" 
          className="w-full h-full object-cover"
        />
        {/* Overlay con gradiente azul oscuro industrial - ajustado para mejor legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/80 to-slate-900/40"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6 grid md:grid-cols-2 items-center">
        <div className="text-left max-w-2xl py-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 border border-orange-500/50 rounded-full bg-orange-900/60 backdrop-blur-md text-orange-100 text-sm font-bold uppercase tracking-wider shadow-lg">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
            DEL SOLAR TRUCK & CARS SPA
          </div>
          <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
            Soluciones <span className="text-orange-500">Automotrices</span> <br />
            e Industriales.
          </h2>
          <p className="text-xl text-gray-200 mb-10 leading-relaxed max-w-lg font-medium shadow-black drop-shadow-md">
            Abastecemos flotas, talleres y plantas industriales con repuestos, lubricantes y equipos de seguridad de categoría mundial.
          </p>

          {/* Cuadro de Productos Destacados */}
          <div className="bg-slate-800/40 backdrop-blur-md border border-slate-700/50 rounded-2xl p-6 shadow-2xl">
            <h3 className="text-orange-400 text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
              <span className="w-8 h-[1px] bg-orange-500"></span>
              Categorías Principales
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 group">
                <div className="bg-slate-700/50 p-2 rounded-lg text-blue-400 group-hover:text-orange-400 transition-colors">
                  <Disc size={20} />
                </div>
                <span className="text-gray-100 font-semibold text-sm">CINTAS REFLECTANTES</span>
              </div>
              
              <div className="flex items-center gap-3 group">
                <div className="bg-slate-700/50 p-2 rounded-lg text-blue-400 group-hover:text-orange-400 transition-colors">
                  <Package size={20} />
                </div>
                <span className="text-gray-100 font-semibold text-sm">CINTAS INDUSTRIALES</span>
              </div>

              <div className="flex items-center gap-3 group">
                <div className="bg-slate-700/50 p-2 rounded-lg text-blue-400 group-hover:text-orange-400 transition-colors">
                  <Sparkles size={20} />
                </div>
                <span className="text-gray-100 font-semibold text-sm">ART. DE ASEO AUTOMOTRIZ</span>
              </div>

              <div className="flex items-center gap-3 group">
                <div className="bg-slate-700/50 p-2 rounded-lg text-blue-400 group-hover:text-orange-400 transition-colors">
                  <Hammer size={20} />
                </div>
                <span className="text-gray-100 font-semibold text-sm">INSUMOS DE FERRETERÍA</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Hero;