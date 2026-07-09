import React from 'react';
import { useWindows } from '../contexts/WindowContext';
import DesktopIcon from './DesktopIcon';
import Window from './Window';
import Taskbar from './Taskbar';
import { XpFolderIcon, XpUserIcon, XpMailIcon } from './XpIcons';
import AboutMe from './apps/AboutMe';
import BurgerKing from './apps/BurgerKing';
import Contact from './apps/Contact';
import Riopan from './apps/Riopan';
import Cafam from './apps/Cafam';

const Desktop: React.FC = () => {
  const { windows } = useWindows();

  return (
    <div className="relative w-screen h-screen overflow-hidden select-none">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat -z-10"
        style={{ backgroundImage: "url('/1685529688_windows-xp-wallpaper-generative-ai.jpg')" }}
      />

      {/* Desktop Icons Grid */}
      <div className="absolute inset-0 p-4 flex flex-col gap-4 flex-wrap content-start z-0">
        <DesktopIcon 
          id="about-me"
          title="Sobre Mí"
          icon={<XpUserIcon />}
          content={<AboutMe />}
        />
        <DesktopIcon 
          id="burger-king"
          title="Burger King"
          icon={<XpFolderIcon />}
          content={<BurgerKing />}
        />
        <DesktopIcon 
          id="riopan"
          title="Riopan"
          icon={<XpFolderIcon />}
          content={<Riopan />}
        />
        <DesktopIcon 
          id="cafam"
          title="Cafam"
          icon={<XpFolderIcon />}
          content={<Cafam />}
        />
        <DesktopIcon 
          id="contact"
          title="Contacto"
          icon={<XpMailIcon />}
          content={<Contact />}
        />
      </div>

      {/* Render Windows */}
      {windows.map((w) => (
        <Window key={w.id} windowData={w} />
      ))}

      {/* Taskbar */}
      <Taskbar />
    </div>
  );
};

export default Desktop;
