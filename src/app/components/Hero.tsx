import { motion, useMotionValue, useTransform } from 'motion/react';
import { Initiative } from './InitiativeCard';
import { useEffect, useState } from 'react';

interface HeroProps {
  initiative: Initiative;
  onExplore: () => void;
}

export function Hero({ initiative, onExplore }: HeroProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Generate floating particles
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 2
  }));

  return (
    <section 
      className="min-h-screen relative flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: initiative.bgColor }}
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(${initiative.textColor || '#1A1A1B'} 1px, transparent 1px), linear-gradient(90deg, ${initiative.textColor || '#1A1A1B'} 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
          animate={{
            backgroundPosition: ['0px 0px', '50px 50px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              width: particle.size,
              height: particle.size,
              backgroundColor: initiative.accentColor || '#000',
              opacity: 0.3,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.sin(particle.id) * 50, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: 'easeInOut'
            }}
          />
        ))}
      </div>

      {/* Background decorative elements with mouse parallax */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          style={{
            x: mousePosition.x * 0.5 - 25,
            y: mousePosition.y * 0.5 - 25,
            backgroundColor: initiative.accentColor || '#000'
          }}
          transition={{
            scale: {
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            },
            rotate: {
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }
          }}
          className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full opacity-10 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          style={{
            x: mousePosition.x * -0.3 + 15,
            y: mousePosition.y * -0.3 + 15,
            backgroundColor: initiative.accentColor || '#000'
          }}
          transition={{
            scale: {
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            },
            rotate: {
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }
          }}
          className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] rounded-full opacity-10 blur-3xl"
        />

        {/* Additional animated shapes */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 right-1/3 w-[400px] h-[400px] rounded-full opacity-5 blur-3xl"
          style={{ backgroundColor: initiative.accentColor || '#000' }}
        />
      </div>

      {/* Animated light rays */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 left-1/4 w-1 h-full origin-top"
          style={{
            background: `linear-gradient(to bottom, transparent, ${initiative.accentColor || '#000'}20, transparent)`,
          }}
          animate={{
            opacity: [0.2, 0.5, 0.2],
            scaleY: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        <motion.div
          className="absolute top-0 right-1/3 w-1 h-full origin-top"
          style={{
            background: `linear-gradient(to bottom, transparent, ${initiative.accentColor || '#000'}20, transparent)`,
          }}
          animate={{
            opacity: [0.5, 0.2, 0.5],
            scaleY: [1, 0.8, 1],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.5
          }}
        />
      </div>

      {/* Content */}
      <div className="max-w-[1400px] mx-auto px-8 lg:px-24 w-full relative z-10 flex justify-center">
        <div className="max-w-3xl text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6 flex justify-center"
          >
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="inline-block px-4 py-2 rounded-full text-sm border backdrop-blur-sm"
              style={{
                borderColor: initiative.textColor || '#1A1A1B',
                color: initiative.textColor || '#1A1A1B',
                opacity: 0.8
              }}
            >
              PRESENTAMOS
            </motion.span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6 tracking-tight"
            style={{ 
              color: initiative.textColor || '#1A1A1B',
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              lineHeight: '1.1'
            }}
          >
            {initiative.title.split(' ').map((word, wordIndex) => (
              <motion.span
                key={wordIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.1 + wordIndex * 0.15,
                  ease: [0.22, 1, 0.36, 1]
                }}
                style={{ display: 'inline-block', marginRight: '0.3em' }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8 text-xl leading-relaxed max-w-2xl mx-auto"
            style={{ 
              color: initiative.textColor || '#1A1A1B',
              opacity: 0.9
            }}
          >
            {initiative.description}
          </motion.p>

          {/* CTA */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: `0 20px 40px ${initiative.accentColor}40`
            }}
            whileTap={{ scale: 0.95 }}
            onClick={onExplore}
            className="px-8 py-4 rounded-full font-medium shadow-lg transition-shadow hover:shadow-xl relative overflow-hidden"
            style={{
              backgroundColor: initiative.accentColor || (initiative.textColor === '#fff' ? '#fff' : '#1A1A1B'),
              color: initiative.accentColor ? '#fff' : (initiative.textColor === '#fff' ? '#1A1A1B' : '#fff'),
            }}
          >
            <motion.div
              className="absolute inset-0 opacity-30"
              animate={{
                background: [
                  'radial-gradient(circle at 0% 0%, rgba(255,255,255,0.8) 0%, transparent 50%)',
                  'radial-gradient(circle at 100% 100%, rgba(255,255,255,0.8) 0%, transparent 50%)',
                  'radial-gradient(circle at 0% 0%, rgba(255,255,255,0.8) 0%, transparent 50%)',
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'linear'
              }}
            />
            <span className="relative z-10">Pruébalo ahora</span>
          </motion.button>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap gap-3 mt-8 justify-center"
          >
            {initiative.tags.map((tag, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 0.15, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.9 + index * 0.1,
                  ease: [0.22, 1, 0.36, 1]
                }}
                whileHover={{ opacity: 0.3, scale: 1.05 }}
                className="text-sm px-4 py-1 rounded-full"
                style={{
                  backgroundColor: initiative.textColor || '#1A1A1B',
                  color: initiative.bgColor,
                }}
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}