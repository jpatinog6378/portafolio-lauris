import React from 'react';
import { motion } from 'framer-motion';
import { PlayCircle } from 'lucide-react';
import fondoBg from '../../assets/nestle/fondo-nestle.svg';
import video1 from '../../assets/nestle/parrilla-1.mp4';
import video2 from '../../assets/nestle/parrilla-2.mp4';
import video3 from '../../assets/nestle/parrilla-3.mp4';

const posts = [
  { id: 1, title: "Parrilla 1", videoSrc: video1, link: "https://www.instagram.com/reel/C4f8fT2v1Lw/?igsh=NXJhdTJva2YxdTdw" },
  { id: 2, title: "Parrilla 2", videoSrc: video2, link: "https://www.instagram.com/p/CzxCEk7LI6Z/" },
  { id: 3, title: "Parrilla 3", videoSrc: video3, link: "https://www.instagram.com/p/C1htSwNJj5T/" }
];

const PhoneMockup: React.FC<{ post: typeof posts[0]; index: number }> = ({ post, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "50px" }}
      transition={{ delay: 0.1 * index, type: "spring", stiffness: 100 }}
      className="flex flex-col items-center gap-4 w-full"
    >
      <div className="relative w-full max-w-[280px] aspect-[9/16] bg-black rounded-[40px] p-2 md:p-3 border-4 border-[#111] shadow-[12px_12px_0px_0px_rgba(17,17,17,1)] group overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-6 flex justify-center z-20">
          <div className="w-1/3 h-full bg-black rounded-b-xl"></div>
        </div>
        <div className="w-full h-full bg-[#222] rounded-[32px] overflow-hidden relative">
          <video 
            src={post.videoSrc}
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
        href={post.link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 flex items-center justify-center gap-2 w-full max-w-[280px] border-4 border-[#111] bg-white text-[#111] px-4 py-3 font-black shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] transition-all uppercase tracking-widest text-sm hover:bg-[#0074C8] hover:text-white"
      >
        <PlayCircle size={20} /> Ver Post
      </motion.a>
    </motion.div>
  );
};

const Nestle: React.FC = () => {
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
      {/* Overlay to ensure background doesn't overwhelm the content if needed */}
      <div className="absolute inset-0 bg-white/5 pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-6xl mx-auto p-6 md:p-12 min-h-full flex flex-col">
        
        {/* === TITLE SECTION === */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center w-full mt-4"
        >
          <div className="inline-block bg-[#0074C8] border-4 border-[#111] px-6 py-2 shadow-[6px_6px_0px_0px_rgba(17,17,17,1)] -rotate-2">
            <h1 className="text-4xl md:text-6xl font-black uppercase text-white tracking-tighter">
              Parrilla
            </h1>
          </div>
          <p className="mt-6 text-xl md:text-2xl font-bold max-w-2xl mx-auto bg-white border-4 border-[#111] p-4 shadow-[4px_4px_0px_0px_rgba(17,17,17,1)]">
            Estrategias digitales que construyen historias sólidas y de confianza alrededor de la marca. 🍫
          </p>
        </motion.div>

        {/* === GRID LAYOUT === */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center justify-items-center flex-1 pb-16">
          {posts.map((post, idx) => (
            <PhoneMockup key={post.id} post={post} index={idx} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default Nestle;
