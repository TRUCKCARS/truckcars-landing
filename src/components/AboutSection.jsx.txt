import React from 'react';
import { MapPin, Phone, Mail, Package, Wrench, ShieldCheck, Truck, Info } from 'lucide-react';
import ContactForm from './ContactForm';

const AboutSection: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
        
        {/* Left Column: Content */}
        <div>
          <h3 className="text-sm font-bold text-orange-600 tracking-widest uppercase mb-2">Sobre Nosotros</h3>
          <h4 className="text-4xl font-extrabold text-gray-900 mb-6">Tu socio estratégico en abastecimiento técnico.</h4>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            En <strong>Trucks & Cars</strong>, nos dedicamos a mantener tu operación en movimiento. Proveemos insumos automotrices e industriales de las marcas más reconocidas, garantizando calidad y durabilidad en cada componente.
            Desde lubricantes de alto desempeño hasta equipamiento de seguridad, somos el aliado que tu taller o industria necesita.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            <div className="flex items-center gap-3">
              <div className="bg-orange-100 p-2 rounded-lg text-orange-600"><Package size={20} /></div>
              <span className="font-medium text-gray-700">Stock Permanente</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-orange-100 p-2 rounded-lg text-orange-600"><Truck size={20} /></div>
              <span className="font-medium text-gray-700">Despacho a todo Chile</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-orange-100 p-2 rounded-lg text-orange-600"><Wrench size={20} /></div>
              <span className="font-medium text-gray-700">Asesoría Técnica</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-orange-100 p-2 rounded-lg text-orange-600"><ShieldCheck size={20} /></div>
              <span className="font-medium text-gray-700">Garantía Certificada</span>
            </div>
          </div>

          <div className="space-y-6 border-t pt-8 border-gray-100">
            <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors">
              <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                <MapPin size={24} />
              </div>
              <div>
                <p className="font-bold text-gray-900">Casa Matriz</p>
                <p className="text-gray-600">Av. Manquehue Sur # 520 Of. 205, Las Condes, Santiago</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors">
              <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                <Phone size={24} />
              </div>
              <div>
                <p className="font-bold text-gray-900">Ventas y WhatsApp</p>
                <p className="text-gray-600">+56 9 4743 6919</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors">
              <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                <Mail size={24} />
              </div>
              <div>
                <p className="font-bold text-gray-900">Cotizaciones</p>
                <p className="text-gray-600">sadelsolar@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Sticky Form & Logistics Info */}
        <div className="lg:sticky lg:top-24 space-y-8">
          <ContactForm />
          
          {/* Logistics Info Card */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xl overflow-hidden group">
             <div className="relative h-48 -mx-6 -mt-6 mb-6 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000" 
                  alt="Logística y Despacho" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent flex items-end p-6">
                  <div className="flex items-center gap-2 text-white font-bold text-lg">
                    <Truck className="text-orange-500" size={24} />
                    <span>Logística Nacional</span>
                  </div>
                </div>
             </div>
             
             <div className="flex gap-4 items-start">
                <div className="shrink-0 bg-blue-50 p-3 rounded-full text-blue-600">
                    <Info size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg mb-2">Importante: Despachos</h4>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    Para agilizar nuestra logística, <strong>solo realizamos despachos a domicilio</strong> o a la dirección de tu empresa. No contamos con retiro presencial en sucursales.
                  </p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;