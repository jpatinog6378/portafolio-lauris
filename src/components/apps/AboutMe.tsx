import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Heart, Star, Zap, Coffee, ArrowRight } from 'lucide-react';
import lauraImg from '../../assets/imagen-laura.jpg';
import { useWindows } from '../../contexts/WindowContext';
import Contact from './Contact';
import { XpMailIcon } from '../XpIcons';

const experiences = [
  {
    company: "Proximity Colombia",
    role: "CM & Content Creator",
    period: "Julio 2024 — Presente",
    bg: "bg-[#FF8730]",
    bullets: [
      "Manejo integral de redes sociales para Burger King Colombia.",
      "Creación de parrillas de contenido y acciones de Real Time Marketing.",
      "Análisis de métricas para optimizar estrategias y coberturas de eventos."
    ]
  },
  {
    company: "Ogilvy Colombia",
    role: "Community Manager",
    period: "Dic 2022 — Jun 2024",
    bg: "bg-[#FF307A]",
    bullets: [
      "Gestión de redes para Nestlé Ecuador y sus 15 marcas.",
      "Elaboración de parrillas estratégicas e informes de campaña.",
      "Manejo avanzado de plataformas corporativas como Sprinklr."
    ]
  },
  {
    company: "Dayvo Sistemas",
    role: "Web & Marketing",
    period: "Julio 2022 — Sept 2022",
    bg: "bg-[#30A0FF]",
    bullets: [
      "Planeación de contenidos multiplataforma para más de 20 clientes.",
      "Gestión de pauta digital y optimización en Facebook Ads.",
      "Análisis de resultados y reportería de estrategias digitales."
    ]
  },
  {
    company: "Insualimentos",
    role: "Community Manager",
    period: "Marzo 2022 — Julio 2022",
    bg: "bg-[#B530FF]",
    bullets: [
      "Producción y planeación de contenidos para redes sociales.",
      "Estrategias de comunicación organizacional interna.",
      "Creación de contenido nativo y tendencias para TikTok."
    ]
  },
  {
    company: "Canal Capital",
    role: "Periodista Digital",
    period: "Marzo 2021 — Sept 2021",
    bg: "bg-[#00D084]",
    bullets: [
      "Reportería móvil, gráfica y audiovisual en cubrimientos periodísticos.",
      "Pre y postproducción de noticias de ámbito local y nacional.",
      "Gestión, programación y publicación en múltiples redes sociales."
    ]
  }
];

const skills = ['Sprinklr', 'WordPress', 'Google Ads', 'Excel', 'Facebook Ads', 'PrestaShop', 'TikTok', 'IA & Prompting'];

const AboutMe: React.FC = () => {
  const { openWindow } = useWindows();
  return (
    <div className="h-full bg-[#fceba7] text-[#111] overflow-y-auto selection:bg-[#111] selection:text-[#fceba7] relative font-sans">
      
      {/* Background Dots Pattern */}
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#111 1px, transparent 1px)', backgroundSize: '24px 24px', opacity: 0.1 }}></div>

      <div className="max-w-4xl mx-auto p-6 md:p-10 relative z-10 flex flex-col gap-10">
        
        {/* HEADER / HERO (Neo-Brutalist) */}
        <section className="flex flex-col md:flex-row gap-8 items-center md:items-start mt-4">
          
          {/* Photo Sticker */}
          <motion.div 
            initial={{ scale: 0, rotate: -20 }}
            animate={{ scale: 1, rotate: -4 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            whileHover={{ scale: 1.05, rotate: 2 }}
            className="w-56 h-56 md:w-64 md:h-64 rounded-full border-4 border-[#111] overflow-hidden shadow-[8px_8px_0px_0px_rgba(17,17,17,1)] shrink-0 bg-white"
          >
            <img src={lauraImg} alt="Laura" className="w-full h-full object-cover" />
          </motion.div>

          {/* Title and Intro */}
          <div className="flex-1 text-center md:text-left mt-4 md:mt-0">
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 150, damping: 12 }}
              className="inline-block px-4 py-1 border-4 border-[#111] bg-[#FF8730] text-[#111] font-black uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] mb-4"
            >
              Community Manager
            </motion.div>

            <motion.h1 
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
              className="text-6xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-4"
              style={{ textShadow: '4px 4px 0px #111' }}
            >
              <span className="text-white">Laura</span> <br /> Lizarazo
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-md md:text-lg font-bold bg-white border-4 border-[#111] p-4 shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] leading-relaxed text-justify"
            >
              Proactiva, organizada y con gran facilidad para conectar con las personas. Llevo más de 3 años fusionando periodismo, publicidad y marketing digital para crear estrategias de contenido con impacto real. Domino herramientas clave como Sprinklr, Google Ads y WordPress, combinando el análisis de datos y la redacción para llevar la comunicación de cualquier marca al siguiente nivel.
            </motion.p>

            <div className="flex flex-wrap gap-4 mt-6 justify-center md:justify-start">
              <motion.button 
                whileHover={{ y: -4, x: -4, boxShadow: '8px 8px 0px 0px rgba(17,17,17,1)' }}
                whileTap={{ y: 0, x: 0, boxShadow: '0px 0px 0px 0px rgba(17,17,17,1)' }}
                onClick={() => openWindow('contact', 'Contacto', <Contact />, <XpMailIcon />)}
                className="flex items-center gap-2 border-4 border-[#111] bg-[#111] text-white px-6 py-3 font-black shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] transition-all"
              >
                CONTACTO <ArrowRight size={20} />
              </motion.button>
            </div>
          </div>
        </section>

        {/* TWO COLUMN GRID FOR CONTENT */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-6">
          
          {/* LEFT: EXPERIENCES */}
          <div className="md:col-span-7 flex flex-col gap-6">
            <h2 className="text-4xl font-black uppercase mb-2 flex items-center gap-3">
              Experiencia <Zap className="text-[#FF8730] fill-[#FF8730]" size={36} />
            </h2>
            
            {experiences.map((exp, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ type: "spring", stiffness: 100, delay: idx * 0.1 }}
                whileHover={{ scale: 1.02, rotate: idx % 2 === 0 ? 1 : -1 }}
                className={`border-4 border-[#111] p-6 shadow-[8px_8px_0px_0px_rgba(17,17,17,1)] text-[#111] relative overflow-hidden ${exp.bg}`}
              >
                <div className="relative z-10">
                  <h3 className="text-3xl font-black uppercase bg-white inline-block px-2 border-2 border-[#111] mb-2">{exp.company}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="font-bold bg-[#111] text-white px-3 py-1 uppercase text-sm border-2 border-[#111]">{exp.role}</span>
                    <span className="font-bold bg-white text-[#111] px-3 py-1 uppercase text-sm border-2 border-[#111]">{exp.period}</span>
                  </div>
                  <ul className="space-y-2 mt-4 bg-white/90 p-4 border-2 border-[#111]">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-2 font-bold text-sm">
                        <Star className="shrink-0 mt-0.5" size={16} fill="#111" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* RIGHT: SKILLS & EDU */}
          <div className="md:col-span-5 flex flex-col gap-8">
            
            {/* SKILLS STICKERS */}
            <div>
              <h2 className="text-4xl font-black uppercase mb-6 flex items-center gap-3">
                Skills <Coffee className="text-[#30A0FF] fill-[#30A0FF]" size={36} />
              </h2>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    drag
                    dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                    dragElastic={0.4}
                    whileHover={{ scale: 1.1, rotate: Math.random() * 20 - 10 }}
                    whileTap={{ scale: 0.9 }}
                    className="border-4 border-[#111] bg-white px-4 py-2 font-black uppercase shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] cursor-grab active:cursor-grabbing text-center"
                    style={{ rotate: Math.random() * 6 - 3 }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* EDUCATION */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="border-4 border-[#111] bg-[#00D084] p-6 shadow-[8px_8px_0px_0px_rgba(17,17,17,1)] mt-4"
            >
              <h2 className="text-3xl font-black uppercase mb-6 flex items-center gap-2 bg-white inline-block px-3 py-1 border-4 border-[#111] shadow-[4px_4px_0px_0px_rgba(17,17,17,1)]">
                Educación
              </h2>
              
              <div className="space-y-6">
                <div className="bg-white border-2 border-[#111] p-3 shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] relative">
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-[#FF307A] border-2 border-[#111] rounded-full flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(17,17,17,1)]">
                    <Heart size={14} className="text-white fill-white" />
                  </div>
                  <h3 className="font-black uppercase text-lg leading-tight">Comunicación Social</h3>
                  <p className="font-bold text-sm">Universidad Central (2021)</p>
                </div>

                <div className="bg-white border-2 border-[#111] p-3 shadow-[4px_4px_0px_0px_rgba(17,17,17,1)]">
                  <h3 className="font-black uppercase text-lg leading-tight">Diplomado DDHH</h3>
                  <p className="font-bold text-sm">Univ. Central (2019)</p>
                </div>
                
                <div className="bg-[#111] text-white border-2 border-[#111] p-3 shadow-[4px_4px_0px_0px_rgba(17,17,17,1)]">
                  <h3 className="font-black uppercase text-lg leading-tight text-[#fceba7]">Inglés B1</h3>
                  <p className="font-bold text-sm">Universidad Pedagógica</p>
                </div>

                <div className="bg-[#111] text-white border-2 border-[#111] p-3 shadow-[4px_4px_0px_0px_rgba(17,17,17,1)]">
                  <h3 className="font-black uppercase text-lg leading-tight text-[#fceba7]">Fundamentos de Marketing Digital</h3>
                  <p className="font-bold text-sm">Google Activate (2021)</p>
                </div>
              </div>
            </motion.div>

          </div>
        </section>

      </div>
    </div>
  );
};

export default AboutMe;
