import React, { useState, useEffect } from 'react';
import { useWindows } from '../contexts/WindowContext';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

const Taskbar: React.FC = () => {
  const { windows, focusWindow, restoreWindow } = useWindows();
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="absolute bottom-0 w-full h-10 bg-gradient-to-b from-[#245edb] to-[#143da1] flex items-center justify-between z-50 taskbar-shadow">
      <div className="flex h-full flex-1">
        {/* Start Button */}
        <button 
          className="h-full bg-gradient-to-b from-[#3c8142] to-[#255529] text-white font-bold italic px-5 flex items-center gap-2 rounded-r-2xl shadow-[inset_1px_1px_2px_rgba(255,255,255,0.4)] hover:brightness-110 active:brightness-90 transition-all"
        >
          <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center text-[#3c8142] not-italic text-xs">
            <span className="transform skew-x-[-10deg]">❖</span>
          </div>
          Inicio
        </button>

        {/* Open Windows Slots */}
        <div className="flex-1 flex gap-1 items-center px-2 overflow-x-hidden">
          {windows.map((w) => (
            <button
              key={w.id}
              onClick={() => {
                if (w.isMinimized) {
                  restoreWindow(w.id);
                } else {
                  focusWindow(w.id);
                }
              }}
              className={cn(
                "h-8 max-w-[150px] min-w-[100px] flex-1 px-3 py-1 flex items-center gap-2 rounded-sm text-white text-sm shadow-[inset_1px_1px_1px_rgba(255,255,255,0.2)] truncate",
                w.isActive && !w.isMinimized 
                  ? "bg-[#183f98] shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)]" 
                  : "bg-[#356ee0] hover:bg-[#4379e4]"
              )}
            >
              {w.icon && <span className="w-4 h-4 flex-shrink-0">{w.icon}</span>}
              <span className="truncate select-none">{w.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* System Tray */}
      <div className="h-full px-4 bg-gradient-to-b from-[#0a95e8] to-[#046fb0] flex items-center border-l border-[#003399] shadow-[inset_1px_1px_1px_rgba(255,255,255,0.2)]">
        <span className="text-white text-xs select-none">
          {formatTime(time)}
        </span>
      </div>
    </div>
  );
};

export default Taskbar;
