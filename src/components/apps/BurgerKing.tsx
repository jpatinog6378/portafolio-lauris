import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, PlayCircle } from 'lucide-react';
import fondoBg from '../../assets/burgerking/fondo-burger-king.svg';
import video1 from '../../assets/burgerking/campana-1.mp4';
import video2 from '../../assets/burgerking/campana-2.mp4';
import video3 from '../../assets/burgerking/campana-3.mp4';
import video4 from '../../assets/burgerking/campana-4.mp4';
import video5 from '../../assets/burgerking/campana-5.mp4';
import video6 from '../../assets/burgerking/campana-6.mp4';
import video7 from '../../assets/burgerking/campana-7.mp4';
import video8 from '../../assets/burgerking/campana-8.mp4';
import video9 from '../../assets/burgerking/campana-9.mp4';
import video10 from '../../assets/burgerking/campana-10.mp4';
import video11 from '../../assets/burgerking/campana-11.mp4';
import video12 from '../../assets/burgerking/campana-12.mp4';
import video13 from '../../assets/burgerking/campana-13.mp4';
import video14 from '../../assets/burgerking/campana-14.mp4';
import video15 from '../../assets/burgerking/campana-15.mp4';
import img1 from '../../assets/burgerking/real-time-1.png';
import img2 from '../../assets/burgerking/real-time-2.png';
import img3 from '../../assets/burgerking/real-time-3.png';
import img4 from '../../assets/burgerking/real-time-4.png';
import img5 from '../../assets/burgerking/real-time-5.png';

const campaigns = [
  { id: 1, title: "Campaña 1", videoSrc: video1, link: "https://www.instagram.com/reels/DFgRZhPPOkq" },
  { id: 2, title: "Campaña 2", videoSrc: video2, link: "https://www.instagram.com/reel/DB1lhtVvSqF/?igsh=MTlicWptM2V6OHgwbA==" },
  { id: 3, title: "Campaña 3", videoSrc: video3, link: "https://www.instagram.com/reels/DCVD-g1sCkv/" },
  { id: 4, title: "Campaña 4", videoSrc: video4, link: "https://www.instagram.com/reels/DMs09gPRCd1/" },
  { id: 5, title: "Campaña 5", videoSrc: video5, link: "https://www.instagram.com/reels/DTiVGiGDeQT/" },
  { id: 6, title: "Campaña 6", videoSrc: video6, link: "https://www.instagram.com/reels/DG8i_RiR7Xc/" },
  { id: 7, title: "Campaña 7", videoSrc: video7, link: "https://www.instagram.com/reels/DXQB7_9jxLe/" },
  { id: 8, title: "Campaña 8", videoSrc: video8, link: "https://www.instagram.com/reels/DTwSp9uDLQe/" },
  { id: 9, title: "Campaña 9", videoSrc: video9, link: "https://www.instagram.com/reels/DWh6Y0tDKQ7/" },
  { id: 10, title: "Campaña 10", videoSrc: video10, link: "https://www.instagram.com/reels/DadTRp7AIfV/" },
  { id: 11, title: "Campaña 11", videoSrc: video11, link: "https://www.instagram.com/reels/DYQfVuHzVDz/" }
];

const realTimeCampaigns = [
  { id: 12, title: "Campaña 12", videoSrc: video12, link: "https://www.instagram.com/reels/DHb-q8rh8uU/" },
  { id: 13, title: "Campaña 13", videoSrc: video13, link: "https://www.instagram.com/p/DKBNmftsm9v/" },
  { id: 14, title: "Campaña 14", videoSrc: video14, link: "https://www.instagram.com/reel/DOzMNlcFLBN/" },
  { id: 15, title: "Campaña 15", videoSrc: video15, link: null }
];

const realTimeImages = [
  { id: 1, src: img1, link: "https://www.instagram.com/p/DV9ak5KkiN6/" },
  { id: 2, src: img2, link: "https://www.instagram.com/p/DY2YUM_u4Wm/" },
  { id: 3, src: img3, link: "https://www.instagram.com/p/DEpjiYgTbtu/?img_index=1" },
  { id: 4, src: img4, link: "https://www.instagram.com/p/DJmR69rx-IL/?img_index=1" },
  { id: 5, src: img5, link: "https://www.instagram.com/p/DUbI9JtE-r5/" }
];

const ImageCard: React.FC<{ item: typeof realTimeImages[0]; index: number }> = ({ item, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "50px" }}
      transition={{ delay: 0.1 * (index % 2), type: "spring", stiffness: 100 }}
      className="flex flex-col items-center gap-4 w-full"
    >
      <div className="w-full bg-white rounded-[24px] md:rounded-[40px] border-4 border-[#111] shadow-[8px_8px_0px_0px_rgba(17,17,17,1)] overflow-hidden hover:shadow-[12px_12px_0px_0px_rgba(17,17,17,1)] transition-shadow">
        <img src={item.src} alt={`Real Time ${item.id}`} className="w-full h-auto object-cover" />
      </div>
      <motion.a
        whileHover={{ y: -4, x: -4, boxShadow: '8px 8px 0px 0px rgba(17,17,17,1)' }}
        whileTap={{ y: 0, x: 0, boxShadow: '0px 0px 0px 0px rgba(17,17,17,1)' }}
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 flex items-center justify-center gap-2 w-full max-w-[280px] border-4 border-[#111] bg-white text-[#111] px-4 py-3 font-black shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] transition-all uppercase tracking-widest text-sm hover:bg-[#00D084]"
      >
        <ExternalLink size={20} /> Ver Post
      </motion.a>
    </motion.div>
  );
};

const PhoneMockup: React.FC<{ camp: { id: number; title: string; videoSrc: string; link: string | null }; index: number }> = ({ camp, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "50px" }}
      transition={{ delay: 0.1 * (index % 3), type: "spring", stiffness: 100 }}
      className="flex flex-col items-center gap-4"
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

      {camp.link ? (
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
      ) : (
        <div className="mt-2 flex items-center justify-center gap-2 w-full max-w-[280px] border-4 border-[#111] bg-[#ddd] text-gray-500 px-4 py-3 font-black shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] uppercase tracking-widest text-sm opacity-60 cursor-not-allowed">
          Material Interno
        </div>
      )}
    </motion.div>
  );
};

const BurgerKing: React.FC = () => {
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
      <div className="absolute inset-0 bg-white/10 pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl mx-auto p-6 md:p-12 min-h-full flex flex-col">
        
        {/* === CAMPANAS SECTION === */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center mt-4"
        >
          <div className="inline-block bg-[#FF8730] border-4 border-[#111] px-6 py-2 shadow-[6px_6px_0px_0px_rgba(17,17,17,1)] -rotate-2">
            <h1 className="text-4xl md:text-6xl font-black uppercase text-[#111] tracking-tighter">
              Campañas
            </h1>
          </div>
          <p className="mt-6 text-xl md:text-2xl font-bold max-w-2xl mx-auto bg-white border-4 border-[#111] p-4 shadow-[4px_4px_0px_0px_rgba(17,17,17,1)]">
            Estrategias de contenido nativo y conceptualización creativa para la parrilla. 🔥
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center justify-items-center mb-24">
          {campaigns.map((camp, idx) => (
            <PhoneMockup key={camp.id} camp={camp} index={idx} />
          ))}
        </div>

        {/* === REAL TIME SECTION === */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <div className="inline-block bg-[#30A0FF] border-4 border-[#111] px-6 py-2 shadow-[6px_6px_0px_0px_rgba(17,17,17,1)] rotate-2">
            <h1 className="text-4xl md:text-6xl font-black uppercase text-white tracking-tighter">
              Real Time
            </h1>
          </div>
          <p className="mt-6 text-xl md:text-2xl font-bold max-w-2xl mx-auto bg-white border-4 border-[#111] p-4 shadow-[4px_4px_0px_0px_rgba(17,17,17,1)]">
            Reacciones instantáneas a tendencias. Agilidad pura para mantener la marca relevante en la conversación diaria. ⚡
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center justify-items-center mb-16">
          {realTimeCampaigns.map((camp, idx) => (
            <PhoneMockup key={camp.id} camp={camp} index={idx} />
          ))}
        </div>

        {/* === IMAGES SECTION (2 Columns) === */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start justify-items-center flex-1 max-w-4xl mx-auto w-full">
          {realTimeImages.map((img, idx) => (
            <ImageCard key={img.id} item={img} index={idx} />
          ))}
        </div>

        {/* Footer info */}
        <div className="mt-20 text-center pb-8">
          <motion.a 
            whileHover={{ scale: 1.05 }}
            href="https://www.instagram.com/burgerkingcol"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#111] text-white px-6 py-3 font-bold uppercase tracking-wider border-2 border-transparent hover:border-white transition-colors"
          >
            Burger King Colombia <ExternalLink size={18} />
          </motion.a>
        </div>

      </div>
    </div>
  );
};

export default BurgerKing;
