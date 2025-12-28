import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { ReactNode } from 'react';

export interface Initiative {
  id: string;
  title: string;
  description: string;
  tags: string[];
  bgColor: string;
  textColor?: string;
  icon?: ReactNode;
  accentColor?: string;
}

interface InitiativeCardProps {
  initiative: Initiative;
  onClick: () => void;
}

export function InitiativeCard({ initiative, onClick }: InitiativeCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      onClick={onClick}
      className="cursor-pointer rounded-[24px] p-8 relative overflow-hidden group"
      style={{ backgroundColor: initiative.bgColor }}
    >
      <div className="relative z-10">
        {/* Icon/Visual Element */}
        {initiative.icon && (
          <div className="mb-6" style={{ color: initiative.accentColor || initiative.textColor || '#1A1A1B' }}>
            {initiative.icon}
          </div>
        )}
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {initiative.tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs px-3 py-1 rounded-full border"
              style={{
                borderColor: initiative.textColor || '#1A1A1B',
                color: initiative.textColor || '#1A1A1B',
                opacity: 0.7
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 
          className="mb-3"
          style={{ color: initiative.textColor || '#1A1A1B' }}
        >
          {initiative.title}
        </h3>

        {/* Description */}
        <p 
          className="mb-6 opacity-80 leading-relaxed"
          style={{ color: initiative.textColor || '#1A1A1B' }}
        >
          {initiative.description}
        </p>

        {/* CTA Link */}
        <div className="flex items-center gap-2 group-hover:gap-3 transition-all">
          <span 
            className="font-medium"
            style={{ color: initiative.accentColor || initiative.textColor || '#1A1A1B' }}
          >
            Aprender más
          </span>
          <ArrowRight 
            className="w-5 h-5 transition-transform group-hover:translate-x-1"
            style={{ color: initiative.accentColor || initiative.textColor || '#1A1A1B' }}
          />
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl"
          style={{ backgroundColor: initiative.accentColor || '#000' }}
        />
      </div>
    </motion.div>
  );
}
