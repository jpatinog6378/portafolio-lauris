import React from 'react';
import { RotateCcw, Monitor } from 'lucide-react';

const MobileWarning: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 bg-[#245edb] text-white flex flex-col items-center justify-center p-8 text-center font-sans selection:bg-white selection:text-[#245edb]">
      
      {/* Neo-Brutalist / XP crossover style */}
      <div className="max-w-md w-full bg-[#fceba7] text-[#111] p-8 border-4 border-[#111] shadow-[8px_8px_0px_0px_rgba(17,17,17,1)] flex flex-col items-center gap-6">
        
        <div className="flex gap-4">
          <div className="w-16 h-16 bg-[#FF307A] border-4 border-[#111] shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] flex items-center justify-center rounded-full animate-bounce">
            <RotateCcw size={32} className="text-white" />
          </div>
          <div className="w-16 h-16 bg-[#30A0FF] border-4 border-[#111] shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] flex items-center justify-center rounded-full">
            <Monitor size={32} className="text-white" />
          </div>
        </div>

        <h1 className="text-3xl font-black uppercase tracking-tighter">
          ¡Opa! Pantalla muy pequeña
        </h1>
        
        <p className="text-lg font-bold">
          Este portafolio simula un escritorio retro completo. Para disfrutar de la experiencia visual al máximo:
        </p>

        <div className="flex flex-col gap-3 w-full text-left bg-white border-4 border-[#111] p-4 shadow-[4px_4px_0px_0px_rgba(17,17,17,1)]">
          <p className="font-bold">📱 <span className="underline">Gira tu celular</span> en modo horizontal.</p>
          <p className="font-bold">💻 O ábrelo desde un <span className="underline">computador</span>.</p>
        </div>

      </div>

    </div>
  );
};

export default MobileWarning;
