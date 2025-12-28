import { motion, useScroll, useTransform } from 'motion/react';
import { Beaker } from 'lucide-react';
import { useState, useEffect } from 'react';

interface NavigationProps {
  onNavigate: (section: string) => void;
  activeSection: string;
}

export function Navigation({ onNavigate, activeSection }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'linear-gradient(90deg, rgba(66,133,244,0.12) 0%, rgba(219,68,55,0.12) 25%, rgba(244,180,0,0.12) 50%, rgba(15,157,88,0.12) 75%, rgba(66,133,244,0.12) 100%)',
              'linear-gradient(90deg, rgba(15,157,88,0.12) 0%, rgba(66,133,244,0.12) 25%, rgba(219,68,55,0.12) 50%, rgba(244,180,0,0.12) 75%, rgba(15,157,88,0.12) 100%)',
              'linear-gradient(90deg, rgba(244,180,0,0.12) 0%, rgba(15,157,88,0.12) 25%, rgba(66,133,244,0.12) 50%, rgba(219,68,55,0.12) 75%, rgba(244,180,0,0.12) 100%)',
              'linear-gradient(90deg, rgba(219,68,55,0.12) 0%, rgba(244,180,0,0.12) 25%, rgba(15,157,88,0.12) 50%, rgba(66,133,244,0.12) 75%, rgba(219,68,55,0.12) 100%)',
              'linear-gradient(90deg, rgba(66,133,244,0.12) 0%, rgba(219,68,55,0.12) 25%, rgba(244,180,0,0.12) 50%, rgba(15,157,88,0.12) 75%, rgba(66,133,244,0.12) 100%)',
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            opacity: scrolled ? 0.5 : 1
          }}
        />
        
        {/* Animated orbs */}
        <motion.div
          className="absolute w-32 h-32 rounded-full blur-2xl"
          style={{ 
            background: 'rgba(66,133,244,0.3)',
            opacity: scrolled ? 0.3 : 0.5
          }}
          animate={{
            x: ['-10%', '110%'],
            y: ['-20%', '50%', '-20%'],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div
          className="absolute w-24 h-24 rounded-full blur-2xl"
          style={{ 
            background: 'rgba(219,68,55,0.3)',
            opacity: scrolled ? 0.3 : 0.5
          }}
          animate={{
            x: ['110%', '-10%'],
            y: ['50%', '-20%', '50%'],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        <motion.div
          className="absolute w-28 h-28 rounded-full blur-2xl"
          style={{ 
            background: 'rgba(244,180,0,0.3)',
            opacity: scrolled ? 0.3 : 0.5
          }}
          animate={{
            x: ['50%', '-10%', '50%'],
            y: ['-20%', '100%'],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Glassmorphism overlay - adapts on scroll */}
        <motion.div 
          className="absolute inset-0 transition-all duration-500"
          animate={{
            backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.7)' : 'rgba(255, 255, 255, 0)',
            backdropFilter: scrolled ? 'blur(20px)' : 'blur(0px)'
          }}
        />
      </div>

      {/* Content */}
      <motion.div 
        className="relative max-w-[1400px] mx-auto px-8 lg:px-12 h-16 flex items-center justify-between"
        animate={{
          borderBottom: scrolled ? '1px solid #EEEEEE' : '1px solid transparent'
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Left: Navigation Links */}
        <div className="flex items-center gap-8">
          <NavLink 
            onClick={() => onNavigate('about')}
            active={activeSection === 'about'}
          >
            Acerca de
          </NavLink>
          <NavLink 
            onClick={() => onNavigate('home')}
            active={activeSection === 'home'}
          >
            Iniciativas
          </NavLink>
          <NavLink 
            onClick={() => onNavigate('faq')}
            active={activeSection === 'faq'}
          >
            FAQ
          </NavLink>
        </div>
        
        {/* Center: Logo + Brand */}
        <motion.button 
          onClick={() => onNavigate('home')}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2 transition-opacity"
        >
          <motion.div
            whileHover={{ rotate: [0, -10, 10, -10, 0] }}
            transition={{ duration: 0.5 }}
          >
            <Beaker className="w-5 h-5 text-foreground" />
          </motion.div>
          <span className="font-medium tracking-tight">Early Adopter Program</span>
        </motion.button>
        
        {/* Right: CTA Button */}
        <div className="flex items-center">
          <motion.button
            whileHover={{ scale: 1.04, boxShadow: "0 10px 30px rgba(66, 133, 244, 0.3)" }}
            whileTap={{ scale: 0.96 }}
            onClick={() => onNavigate('join')}
            className="bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm transition-all duration-300 shadow-sm hover:shadow-md"
          >
            Unirse al programa
          </motion.button>
        </div>
      </motion.div>
    </motion.nav>
  );
}

// NavLink component with animated underline
function NavLink({ children, onClick, active }: { children: React.ReactNode; onClick: () => void; active: boolean }) {
  return (
    <button
      onClick={onClick}
      className="relative text-sm transition-colors group"
    >
      <span className={`${
        active 
          ? 'text-foreground' 
          : 'text-muted-foreground'
      }`}>
        {children}
      </span>
      
      {/* Animated underline */}
      <motion.div
        className="absolute -bottom-1 left-0 right-0 h-[2px] bg-primary origin-left"
        initial={{ scaleX: active ? 1 : 0 }}
        animate={{ scaleX: active ? 1 : 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      />
    </button>
  );
}