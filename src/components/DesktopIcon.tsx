import React from 'react';
import { useWindows } from '../contexts/WindowContext';

interface DesktopIconProps {
  id: string;
  title: string;
  icon: React.ReactNode;
  content: React.ReactNode;
  x?: number;
  y?: number;
  href?: string;
}

const DesktopIcon: React.FC<DesktopIconProps> = ({ id, title, icon, content, href }) => {
  const { openWindow } = useWindows();

  const handleOpen = () => {
    if (href) {
      window.open(href, '_blank');
    } else {
      openWindow(id, title, content, icon);
    }
  };

  return (
    <div 
      className="flex flex-col items-center justify-center w-20 h-24 gap-1 p-1 rounded hover:bg-white/10 active:bg-blue-500/50 cursor-pointer group select-none"
      onDoubleClick={handleOpen}
      onClick={() => {
        if (window.innerWidth < 768) {
          handleOpen();
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
