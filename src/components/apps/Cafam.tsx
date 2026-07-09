import React from 'react';
import { motion } from 'framer-motion';

const Cafam: React.FC = () => {
  return (
    <div className="h-full w-full bg-[#fceba7] text-[#111] overflow-y-auto selection:bg-[#111] selection:text-white font-sans relative flex items-center justify-center">
      {/* Background Dots Pattern */}
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#111 1px, transparent 1px)', backgroundSize: '24px 24px', opacity: 0.1 }}></div>

      <div className="relative z-10 text-center p-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-block bg-[#30A0FF] border-4 border-[#111] px-8 py-4 shadow-[8px_8px_0px_0px_rgba(17,17,17,1)] rotate-2"
        >
          <h1 className="text-4xl md:text-6xl font-black uppercase text-white tracking-tighter">
            Droguerías Cafam
          </h1>
        </motion.div>
        
        <p className="mt-8 text-xl font-bold bg-white border-4 border-[#111] p-4 shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] inline-block">
          Cargando material creativo... 🛠️
        </p>
      </div>
    </div>
  );
};

export default Cafam;
