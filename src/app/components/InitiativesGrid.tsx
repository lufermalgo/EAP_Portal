import { motion } from 'motion/react';
import { InitiativeCard, Initiative } from './InitiativeCard';

interface InitiativesGridProps {
  initiatives: Initiative[];
  onSelectInitiative: (id: string) => void;
}

export function InitiativesGrid({ initiatives, onSelectInitiative }: InitiativesGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {initiatives.map((initiative, index) => (
        <motion.div
          key={initiative.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: index * 0.1,
            ease: [0.22, 1, 0.36, 1]
          }}
        >
          <InitiativeCard
            initiative={initiative}
            onClick={() => onSelectInitiative(initiative.id)}
          />
        </motion.div>
      ))}
    </div>
  );
}
