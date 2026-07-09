import React from 'react';
import { useWindows } from '../contexts/WindowContext';

interface DesktopIconProps {
  id: string;
  title: string;
  icon: React.ReactNode;
  content: React.ReactNode;
  x?: number;
  y?: number;
}

const DesktopIcon: React.FC<DesktopIconProps> = ({ id, title, icon, content }) => {
  const { openWindow } = useWindows();

  return (
    <div 
      className="flex flex-col items-center justify-center w-20 h-24 gap-1 p-1 rounded hover:bg-white/10 active:bg-blue-500/50 cursor-pointer group select-none"
      onDoubleClick={() => openWindow(id, title, content, icon)}
      onClick={() => {
        // En web a veces es mejor un click para abrir, pero en XP es doble click.
        // Podríamos soportar un solo click en mobile.
        if (window.innerWidth < 768) {
          openWindow(id, title, content, icon);
        }
      }}
    >
      <div className="w-10 h-10 flex items-center justify-center drop-shadow-md group-active:brightness-75 transition-all">
        {icon}
      </div>
      <span className="text-white text-xs text-center leading-tight drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)] break-words w-full" style={{ textShadow: '1px 1px 2px black' }}>
        {title}
      </span>
    </div>
  );
};

export default DesktopIcon;
