import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, PlayCircle } from 'lucide-react';
import fondoBg from '../../assets/riopan/riopan.svg';
import video1 from '../../assets/riopan/campana-1.mp4';
import video2 from '../../assets/riopan/campana-2.mp4';

const campaigns = [
  { id: 1, title: "Campaña 1", videoSrc: video1, link: "https://www.instagram.com/p/DaEI0YqxiaG/" },
  { id: 2, title: "Campaña 2", videoSrc: video2, link: "https://www.instagram.com/p/DZsQs1TR0ui/" }
];

const PhoneMockup: React.FC<{ camp: typeof campaigns[0]; index: number }> = ({ camp, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "50px" }}
      transition={{ delay: 0.2 * index, type: "spring", stiffness: 100 }}
      className="flex flex-col items-center gap-4 w-full"
    >
      <div className="relative w-full max-w-[280px] aspect-[9/16] bg-black rounded-[40px] p-2 md:p-3 border-4 border-[#111] shadow-[12px_12px_0px_0px_rgba(17,17,17,1)] group overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-6 flex justify-center z-20">
          <div className="w-1/3 h-full bg-black rounded-b-xl"></div>
        </div>
        <div className="w-full h-full bg-[#222] rounded-[32px] overflow-hidden relative">
          <video 
            src={camp.videoSrc}
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all pointer-events-none"></div>
        </div>
      </div>

      <motion.a
        whileHover={{ y: -4, x: -4, boxShadow: '8px 8px 0px 0px rgba(17,17,17,1)' }}
        whileTap={{ y: 0, x: 0, boxShadow: '0px 0px 0px 0px rgba(17,17,17,1)' }}
        href={camp.link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 flex items-center justify-center gap-2 w-full max-w-[280px] border-4 border-[#111] bg-white text-[#111] px-4 py-3 font-black shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] transition-all uppercase tracking-widest text-sm hover:bg-[#FF8730]"
      >
        <PlayCircle size={20} /> Ver Reel
      </motion.a>
    </motion.div>
  );
};

const Riopan: React.FC = () => {
  return (
    <div 
      className="h-full w-full overflow-y-auto selection:bg-[#111] selection:text-white font-sans relative"
      style={{
        backgroundImage: `url(${fondoBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Background protector overlay if needed, currently set to very light to preserve the image */}
      <div className="absolute inset-0 bg-white/5 pointer-events-none"></div>

      <div className="relative z-10 w-full mx-auto p-6 md:p-12 min-h-full flex flex-col">
        
        {/* === CAMPANAS SECTION TITLE === */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center w-full mt-4"
        >
          <div className="inline-block bg-[#FF8730] border-4 border-[#111] px-6 py-2 shadow-[6px_6px_0px_0px_rgba(17,17,17,1)] -rotate-2">
            <h1 className="text-4xl md:text-6xl font-black uppercase text-[#111] tracking-tighter">
              Campaña
            </h1>
          </div>
        </motion.div>

        {/* === 3-COLUMN LAYOUT === */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 flex-1">
          
          {/* Column 1: Video Stack (Left side) */}
          <div className="flex flex-col gap-12 items-center md:items-start md:pl-12 pb-16">
            {campaigns.map((camp, idx) => (
              <PhoneMockup key={camp.id} camp={camp} index={idx} />
            ))}
          </div>

          {/* Columns 2 & 3: Empty to avoid covering the figure on the right */}
          <div className="hidden md:block md:col-span-2">
            {/* The figure in the background SVG will show perfectly here */}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Riopan;
