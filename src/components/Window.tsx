import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useWindows, type WindowData } from '../contexts/WindowContext';
import { Minus, Square, X } from 'lucide-react';
import { cn } from './Taskbar';
import dogSpinning from '../assets/dog-spinning.gif';

interface WindowProps {
  windowData: WindowData;
}

const Window: React.FC<WindowProps> = ({ windowData }) => {
  const { closeWindow, minimizeWindow, focusWindow } = useWindows();
  
  // Default to maximized on mobile
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const [isMaximized, setIsMaximized] = useState(isMobile);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(t);
  }, []);


  if (windowData.isMinimized) return null;

  return (
    <motion.div
      drag={!isMaximized}
      dragMomentum={false}
      initial={{ scale: 0.9, opacity: 0 }}
      animate={
        isMaximized 
          ? { width: '100%', height: 'calc(100dvh - 40px)', top: 0, left: 0, x: 0, y: 0, scale: 1, opacity: 1 }
          : { width: isMobile ? '100%' : '800px', height: isMobile ? 'calc(100dvh - 40px)' : '600px', scale: 1, opacity: 1 }
      }
      exit={{ scale: 0.9, opacity: 0 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      style={{ zIndex: windowData.zIndex }}
      onPointerDown={() => focusWindow(windowData.id)}
      className={cn(
        "absolute rounded-t-lg flex flex-col bg-[#ece9d8] window-shadow border border-[#003da6]",
        !isMaximized && !isMobile && "top-[10%] left-[15%] max-w-[95vw] max-h-[90dvh]"
      )}
    >
      {/* Title Bar */}
      <div 
        className={cn(
          "h-8 flex items-center justify-between px-1 rounded-t-lg select-none",
          windowData.isActive 
            ? "bg-gradient-to-r from-[#0058e6] via-[#3a93ff] to-[#0058e6]" 
            : "bg-gradient-to-r from-[#7ea2e6] via-[#9ebdf5] to-[#7ea2e6]"
        )}
      >
        <div className="flex items-center gap-1.5 px-1 text-white font-bold text-sm tracking-wide text-shadow">
          {windowData.icon && <span className="w-4 h-4">{windowData.icon}</span>}
          <span style={{ textShadow: '1px 1px 1px rgba(0,0,0,0.5)' }}>{windowData.title}</span>
        </div>

        {/* Window Controls */}
        <div className="flex gap-0.5 pr-0.5">
          <button 
            onClick={(e) => { e.stopPropagation(); minimizeWindow(windowData.id); }}
            className="w-6 h-6 bg-white border border-white hover:bg-[#e0e0e0] flex items-center justify-center rounded-sm shadow-[inset_1px_1px_1px_rgba(255,255,255,0.8)]"
          >
            <Minus size={14} className="text-black" strokeWidth={3} />
          </button>
          <button 
            onClick={(e) => { e.stopPropagation(); setIsMaximized(!isMaximized); }}
            className="w-6 h-6 bg-white border border-white hover:bg-[#e0e0e0] flex items-center justify-center rounded-sm shadow-[inset_1px_1px_1px_rgba(255,255,255,0.8)]"
          >
            <Square size={12} className="text-black" strokeWidth={3} />
          </button>
          <button 
            onClick={(e) => { e.stopPropagation(); closeWindow(windowData.id); }}
            className="w-6 h-6 bg-[#e81123] border border-white hover:bg-[#f25056] flex items-center justify-center rounded-sm shadow-[inset_1px_1px_1px_rgba(255,255,255,0.8)]"
          >
            <X size={16} className="text-white" strokeWidth={3} />
          </button>
        </div>
      </div>

      {/* Modern Content Area */}
      <div className="flex-1 overflow-auto bg-white m-[2px] border border-[#a2a095] relative">
        {isLoading && (
          <div className="absolute inset-0 z-50 bg-[#ece9d8] flex items-center justify-center p-4">
            <div className="flex flex-col items-center gap-2 max-w-[280px] w-full text-center">
              <div className="w-24 h-24 mb-2">
                <img src={dogSpinning} alt="Cargando" className="w-full h-full object-contain" />
              </div>
              <p className="font-sans text-sm text-[#000] mb-4 leading-tight font-bold">
                {['about-me', 'contact'].includes(windowData.id)
                  ? "Cargando información sobre mí..."
                  : "Cargando casos que cambiaron la forma en que vimos el mundo..."}
              </p>
              <div className="w-48 h-4 bg-white border border-[#a2a095] shadow-[inset_1px_1px_2px_rgba(0,0,0,0.3)] p-[2px] relative overflow-hidden mt-2">
                <motion.div 
                  initial={{ x: "-100%" }}
                  animate={{ x: "400%" }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                  className="absolute top-[2px] bottom-[2px] w-8 flex gap-[2px]"
                >
                  <div className="flex-1 bg-gradient-to-b from-[#8fde8f] via-[#24d924] to-[#128a12] shadow-[inset_1px_1px_1px_rgba(255,255,255,0.5)]"></div>
                  <div className="flex-1 bg-gradient-to-b from-[#8fde8f] via-[#24d924] to-[#128a12] shadow-[inset_1px_1px_1px_rgba(255,255,255,0.5)]"></div>
                  <div className="flex-1 bg-gradient-to-b from-[#8fde8f] via-[#24d924] to-[#128a12] shadow-[inset_1px_1px_1px_rgba(255,255,255,0.5)]"></div>
                </motion.div>
              </div>
            </div>
          </div>
        )}
        {windowData.content}
      </div>
    </motion.div>
  );
};

export default Window;
