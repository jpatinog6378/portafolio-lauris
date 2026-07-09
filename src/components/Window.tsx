import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useWindows, type WindowData } from '../contexts/WindowContext';
import { Minus, Square, X } from 'lucide-react';
import { cn } from './Taskbar';

interface WindowProps {
  windowData: WindowData;
}

const Window: React.FC<WindowProps> = ({ windowData }) => {
  const { closeWindow, minimizeWindow, focusWindow } = useWindows();
  const [isMaximized, setIsMaximized] = useState(false);


  if (windowData.isMinimized) return null;

  return (
    <motion.div
      drag={!isMaximized}
      dragMomentum={false}
      initial={{ scale: 0.9, opacity: 0 }}
      animate={
        isMaximized 
          ? { width: '100vw', height: 'calc(100vh - 40px)', top: 0, left: 0, x: 0, y: 0, scale: 1, opacity: 1 }
          : { width: '800px', height: '600px', scale: 1, opacity: 1 }
      }
      exit={{ scale: 0.9, opacity: 0 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      style={{ zIndex: windowData.zIndex }}
      onPointerDown={() => focusWindow(windowData.id)}
      className={cn(
        "absolute rounded-t-lg flex flex-col bg-[#ece9d8] window-shadow border border-[#003da6]",
        !isMaximized && "top-[10%] left-[15%] max-w-[95vw] max-h-[90vh]"
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
      <div className="flex-1 overflow-auto bg-white m-[2px] border border-[#a2a095]">
        {windowData.content}
      </div>
    </motion.div>
  );
};

export default Window;
