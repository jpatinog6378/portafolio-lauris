import React from 'react';

export const XpFolderIcon: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg width="100%" height="100%" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={{ filter: 'drop-shadow(2px 4px 4px rgba(0,0,0,0.4))' }}>
    {/* Back flap */}
    <path d="M4 14C4 11.7909 5.79086 10 8 10H22L28 16H56C58.2091 16 60 17.7909 60 20V52C60 54.2091 58.2091 56 56 56H8C5.79086 56 4 54.2091 4 52V14Z" fill="url(#paint0_linear)"/>
    <path d="M4 14C4 11.7909 5.79086 10 8 10H22L28 16H56C58.2091 16 60 17.7909 60 20V52C60 54.2091 58.2091 56 56 56H8C5.79086 56 4 54.2091 4 52V14Z" stroke="#B8860B" strokeWidth="1.5" strokeLinejoin="round"/>
    
    {/* Front flap */}
    <path d="M2 28L10 56H60L52 28H2Z" fill="url(#paint1_linear)"/>
    <path d="M2 28L10 56H60L52 28H2Z" stroke="#DAA520" strokeWidth="1.5" strokeLinejoin="round"/>
    
    {/* Folder content paper indicator (optional small white shapes) */}
    <rect x="14" y="22" width="24" height="6" fill="white" opacity="0.6"/>

    <defs>
      <linearGradient id="paint0_linear" x1="32" y1="10" x2="32" y2="56" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F5C04F"/>
        <stop offset="1" stopColor="#D99A29"/>
      </linearGradient>
      <linearGradient id="paint1_linear" x1="31" y1="28" x2="31" y2="56" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFDE7A"/>
        <stop offset="1" stopColor="#EAB341"/>
      </linearGradient>
    </defs>
  </svg>
);

export const XpUserIcon: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg width="100%" height="100%" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={{ filter: 'drop-shadow(2px 4px 4px rgba(0,0,0,0.4))' }}>
    {/* Frame */}
    <rect x="8" y="4" width="48" height="56" rx="4" fill="url(#frame_grad)" stroke="#1C4A8D" strokeWidth="2"/>
    <rect x="12" y="8" width="40" height="48" rx="2" fill="url(#bg_grad)" stroke="#5089C9" strokeWidth="1"/>
    
    {/* User Head */}
    <circle cx="32" cy="24" r="10" fill="url(#user_grad)"/>
    <circle cx="32" cy="24" r="10" fill="url(#user_highlight)" opacity="0.5"/>
    
    {/* User Body */}
    <path d="M16 52C16 43.1634 23.1634 36 32 36C40.8366 36 48 43.1634 48 52" stroke="url(#user_grad)" strokeWidth="12" strokeLinecap="round"/>
    <path d="M16 52C16 43.1634 23.1634 36 32 36C40.8366 36 48 43.1634 48 52" stroke="url(#user_highlight)" strokeWidth="12" strokeLinecap="round" opacity="0.3"/>

    <defs>
      <linearGradient id="frame_grad" x1="8" y1="4" x2="56" y2="60" gradientUnits="userSpaceOnUse">
        <stop stopColor="#5B9DE5"/>
        <stop offset="1" stopColor="#2262B5"/>
      </linearGradient>
      <linearGradient id="bg_grad" x1="12" y1="8" x2="12" y2="56" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFFFFF"/>
        <stop offset="1" stopColor="#D2E4F9"/>
      </linearGradient>
      <linearGradient id="user_grad" x1="22" y1="14" x2="42" y2="52" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FDB813"/>
        <stop offset="1" stopColor="#E36500"/>
      </linearGradient>
      <radialGradient id="user_highlight" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(28 20) scale(12)">
        <stop stopColor="white"/>
        <stop offset="1" stopColor="white" stopOpacity="0"/>
      </radialGradient>
    </defs>
  </svg>
);

export const XpMailIcon: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg width="100%" height="100%" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={{ filter: 'drop-shadow(2px 4px 4px rgba(0,0,0,0.4))' }}>
    {/* Letter Back */}
    <rect x="6" y="18" width="52" height="34" fill="url(#env_back)"/>
    
    {/* Envelope Flap top */}
    <path d="M6 18L32 38L58 18Z" fill="url(#env_flap)"/>
    <path d="M6 18L32 38L58 18" stroke="#A9B8C2" strokeWidth="1"/>
    
    {/* Letter Body (Paper sticking out) - actually to make it look like XP it's closed but stamped */}
    <path d="M6 52L26 36L6 18V52Z" fill="url(#env_left)"/>
    <path d="M58 52L38 36L58 18V52Z" fill="url(#env_right)"/>
    <path d="M6 52L32 38L58 52H6Z" fill="url(#env_bottom)"/>
    
    {/* Stamp */}
    <rect x="44" y="24" width="8" height="10" fill="#E8F1F5" stroke="#3FA9F5" strokeWidth="1" strokeDasharray="1 1"/>
    
    <defs>
      <linearGradient id="env_back" x1="32" y1="18" x2="32" y2="52" gradientUnits="userSpaceOnUse">
        <stop stopColor="#EBF4F8"/>
        <stop offset="1" stopColor="#C8D6DF"/>
      </linearGradient>
      <linearGradient id="env_flap" x1="32" y1="18" x2="32" y2="38" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFFFFF"/>
        <stop offset="1" stopColor="#E2ECEF"/>
      </linearGradient>
      <linearGradient id="env_left" x1="6" y1="35" x2="26" y2="35" gradientUnits="userSpaceOnUse">
        <stop stopColor="#D9E4EA"/>
        <stop offset="1" stopColor="#C4D1D8"/>
      </linearGradient>
      <linearGradient id="env_right" x1="58" y1="35" x2="38" y2="35" gradientUnits="userSpaceOnUse">
        <stop stopColor="#D9E4EA"/>
        <stop offset="1" stopColor="#C4D1D8"/>
      </linearGradient>
      <linearGradient id="env_bottom" x1="32" y1="38" x2="32" y2="52" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFFFFF"/>
        <stop offset="1" stopColor="#D9E4EA"/>
      </linearGradient>
    </defs>
  </svg>
);

export const XpBehanceIcon: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg width="100%" height="100%" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={{ filter: 'drop-shadow(2px 4px 4px rgba(0,0,0,0.4))' }}>
    <rect x="8" y="12" width="48" height="40" rx="6" fill="url(#be_grad)" stroke="#0044CC" strokeWidth="2"/>
    <text x="32" y="36" fill="white" fontSize="22" fontWeight="900" fontFamily="sans-serif" textAnchor="middle" dominantBaseline="middle" letterSpacing="-1">Bē</text>
    <defs>
      <linearGradient id="be_grad" x1="8" y1="12" x2="56" y2="52" gradientUnits="userSpaceOnUse">
        <stop stopColor="#1769FF"/>
        <stop offset="1" stopColor="#0055FF"/>
      </linearGradient>
    </defs>
  </svg>
);
