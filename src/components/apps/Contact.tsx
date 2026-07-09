import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, ArrowUpRight, Copy, Check } from 'lucide-react';

const LinkedinIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const BehanceIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M8.22 10.3c-.6-.22-1.2-.33-1.8-.33H2v9h4.42c1.6 0 2.87-.33 3.8-1 .85-.92 1.28-2.12 1.28-3.6 0-1.03-.23-1.87-.68-2.52-.45-.65-1.12-1.07-2-1.25.68-.2 1.2-.6 1.57-1.15.37-.56.55-1.24.55-2.03 0-1.13-.38-2.02-1.15-2.65-.77-.63-1.87-.95-3.32-.95H2v9h4.42M5.62 6.64h2.4c.55 0 .97.12 1.25.37.28.25.42.63.42 1.13 0 .5-.14.88-.42 1.15-.28.27-.72.4-1.33.4H5.62V6.64zm0 5.4h2.67c.65 0 1.14.15 1.47.45.33.3.5.75.5 1.35 0 .62-.18 1.08-.53 1.4-.35.3-.85.45-1.5.45H5.62v-3.65zM19.12 9.4c-1.38 0-2.53.45-3.45 1.35-.92.9-1.38 2.08-1.38 3.55 0 1.5.45 2.72 1.35 3.65.9.92 2.05 1.38 3.45 1.38 1.2 0 2.18-.33 2.95-1 .77-.67 1.25-1.6 1.45-2.8H20.3c-.15.55-.42.97-.83 1.25-.4.28-.9.42-1.5.42-.72 0-1.32-.23-1.8-.7-.48-.47-.73-1.1-.75-1.9h5.58v-.4c0-1.53-.45-2.73-1.35-3.62-.9-.88-2.07-1.32-3.52-1.32zm-1.85 3.25c.1-.55.33-.97.7-1.25.37-.28.83-.42 1.4-.42.53 0 .98.15 1.35.43.37.28.58.7.63 1.25h-4.08zM15.42 6.55h7.2v2.1h-7.2v-2.1z"/>
  </svg>
);

const Contact: React.FC = () => {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyToClipboard = (text: string, type: 'phone' | 'email') => {
    navigator.clipboard.writeText(text);
    if (type === 'phone') {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    } else {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    }
  };

  return (
    <div className="h-full bg-[#f4f4f0] text-[#111] overflow-y-auto overflow-x-hidden selection:bg-[#111] selection:text-[#FF307A] font-sans relative">
      
      {/* Background Marquee */}
      <div className="absolute top-20 -left-10 w-[120%] -rotate-6 pointer-events-none opacity-5">
        <h1 className="text-[12rem] font-black uppercase whitespace-nowrap overflow-hidden">
          HABLEMOS • HABLEMOS • HABLEMOS • 
        </h1>
      </div>

      <div className="max-w-5xl mx-auto p-6 md:p-12 relative z-10 flex flex-col min-h-full">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12 md:mb-16"
        >
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-4" style={{ textShadow: '4px 4px 0px #111' }}>
            <span className="text-[#FF8730]">Let's</span><br/>Create.
          </h1>
          <p className="text-xl md:text-2xl font-bold max-w-lg bg-white border-4 border-[#111] p-4 shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] inline-block">
            Abierta a nuevas oportunidades, colaboraciones estratégicas y proyectos de alto impacto. Construyamos la próxima gran historia.
          </p>
        </motion.div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-1">
          
          {/* EMAIL */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, type: "spring", stiffness: 100 }}
            whileHover={{ y: -5, x: -5, boxShadow: '12px 12px 0px 0px rgba(17,17,17,1)' }}
            className="group relative bg-[#FF307A] border-4 border-[#111] p-8 shadow-[8px_8px_0px_0px_rgba(17,17,17,1)] flex flex-col justify-between transition-all overflow-hidden"
          >
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/20 rounded-full blur-2xl group-hover:bg-white/40 transition-colors"></div>
            
            <div className="flex justify-between items-start mb-12 relative z-10">
              <div className="bg-white border-4 border-[#111] p-3 shadow-[4px_4px_0px_0px_rgba(17,17,17,1)]">
                <Mail size={32} className="text-[#111]" />
              </div>
              <motion.a 
                whileHover={{ rotate: 45 }}
                href="mailto:lauralizarazotique@gmail.com"
                className="w-12 h-12 bg-[#111] rounded-full flex items-center justify-center text-white cursor-pointer shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] hover:bg-white hover:text-[#111] hover:border-2 hover:border-[#111] transition-colors"
              >
                <ArrowUpRight size={24} />
              </motion.a>
            </div>
            
            <div className="relative z-10">
              <h2 className="text-white font-black uppercase tracking-widest mb-2 text-sm">Escríbeme</h2>
              <button 
                onClick={() => copyToClipboard('lauralizarazotique@gmail.com', 'email')}
                className="text-white text-lg md:text-xl font-black underline decoration-4 decoration-white/30 hover:decoration-white transition-all text-left flex items-center gap-3 break-all"
              >
                lauralizarazotique@gmail.com
                <span className="shrink-0">{copiedEmail ? <Check size={24} className="text-green-300" /> : <Copy size={20} className="opacity-50 hover:opacity-100" />}</span>
              </button>
            </div>
          </motion.div>

          {/* PHONE */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
            whileHover={{ y: -5, x: -5, boxShadow: '12px 12px 0px 0px rgba(17,17,17,1)' }}
            className="group relative bg-[#00D084] border-4 border-[#111] p-8 shadow-[8px_8px_0px_0px_rgba(17,17,17,1)] flex flex-col justify-between transition-all"
          >
            <div className="flex justify-between items-start mb-12 relative z-10">
              <div className="bg-white border-4 border-[#111] p-3 shadow-[4px_4px_0px_0px_rgba(17,17,17,1)]">
                <Phone size={32} className="text-[#111]" />
              </div>
              <motion.a 
                whileHover={{ rotate: 45 }}
                href="https://wa.me/573016751132" target="_blank" rel="noopener noreferrer"
                className="w-12 h-12 bg-[#111] rounded-full flex items-center justify-center text-white cursor-pointer shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] hover:bg-white hover:text-[#111] hover:border-2 hover:border-[#111] transition-colors"
              >
                <ArrowUpRight size={24} />
              </motion.a>
            </div>
            
            <div className="relative z-10">
              <h2 className="text-[#111] font-black uppercase tracking-widest mb-2 text-sm bg-white inline-block px-2 border-2 border-[#111]">Llamada / WhatsApp</h2>
              <button 
                onClick={() => copyToClipboard('+57 3016751132', 'phone')}
                className="text-[#111] text-2xl md:text-3xl font-black block mt-2 flex items-center gap-3 hover:text-white transition-colors text-left"
              >
                +57 301 675 1132
                <span className="shrink-0">{copiedPhone ? <Check size={28} className="text-[#111]" /> : <Copy size={24} className="opacity-50 hover:opacity-100" />}</span>
              </button>
            </div>
          </motion.div>

          {/* LINKEDIN */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
            whileHover={{ y: -5, x: -5, boxShadow: '12px 12px 0px 0px rgba(17,17,17,1)' }}
            className="group relative bg-[#30A0FF] border-4 border-[#111] p-8 shadow-[8px_8px_0px_0px_rgba(17,17,17,1)] flex items-center justify-between transition-all cursor-pointer"
            onClick={() => window.open('https://www.linkedin.com/in/laura-lizarazo-604538203?utm_source=share_via&utm_content=profile&utm_medium=member_ios', '_blank')}
          >
            <div className="flex items-center gap-6">
              <div className="bg-white border-4 border-[#111] p-4 shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] group-hover:rotate-12 transition-transform">
                <LinkedinIcon size={36} className="text-[#111] fill-[#111]" />
              </div>
              <h2 className="text-white text-3xl md:text-4xl font-black tracking-tight">LinkedIn</h2>
            </div>
            <motion.div 
              whileHover={{ rotate: 45 }}
              className="w-12 h-12 bg-[#111] rounded-full flex items-center justify-center text-white shrink-0"
            >
              <ArrowUpRight size={24} />
            </motion.div>
          </motion.div>

          {/* BEHANCE */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
            whileHover={{ y: -5, x: -5, boxShadow: '12px 12px 0px 0px rgba(17,17,17,1)' }}
            className="group relative bg-[#111] border-4 border-[#111] p-8 shadow-[8px_8px_0px_0px_rgba(17,17,17,1)] flex items-center justify-between transition-all cursor-pointer"
            onClick={() => window.open('https://www.behance.net/lauralizarazo4', '_blank')}
          >
            <div className="flex items-center gap-6">
              <div className="bg-[#FFD000] border-4 border-[#111] p-4 shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] group-hover:-rotate-12 transition-transform">
                <BehanceIcon size={36} className="text-[#111]" />
              </div>
              <h2 className="text-white text-3xl md:text-4xl font-black tracking-tight">Behance</h2>
            </div>
            <motion.div 
              whileHover={{ rotate: 45 }}
              className="w-12 h-12 bg-white border-2 border-[#111] rounded-full flex items-center justify-center text-[#111] shrink-0"
            >
              <ArrowUpRight size={24} />
            </motion.div>
          </motion.div>

        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center text-sm font-bold text-[#111] border-t-4 border-[#111] pt-6 uppercase tracking-widest">
          Desarrollado con ♥ y mucho código
        </div>
      </div>
    </div>
  );
};

export default Contact;
