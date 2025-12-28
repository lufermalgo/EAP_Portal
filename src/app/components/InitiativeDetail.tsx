import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { Initiative } from './InitiativeCard';

interface InitiativeDetailProps {
  initiative: Initiative & {
    fullDescription?: string;
    howItWorks?: string[];
    objectives?: string[];
    feedback?: string;
  };
  onBack: () => void;
}

export function InitiativeDetail({ initiative, onBack }: InitiativeDetailProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section 
        className="relative py-24 overflow-hidden"
        style={{ backgroundColor: initiative.bgColor }}
      >
        <div className="max-w-[1000px] mx-auto px-8 relative z-10">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={onBack}
            className="flex items-center gap-2 mb-8 group"
            style={{ color: initiative.textColor || '#1A1A1B' }}
          >
            <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            <span>Volver a iniciativas</span>
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            {/* Status Badge */}
            <div className="mb-6">
              <span
                className="inline-block px-4 py-2 rounded-full text-sm border"
                style={{
                  borderColor: initiative.textColor || '#1A1A1B',
                  color: initiative.textColor || '#1A1A1B',
                  opacity: 0.7
                }}
              >
                Experimental · Beta · Cupos limitados
              </span>
            </div>

            {/* Title */}
            <h1 
              className="mb-6 tracking-tight"
              style={{ 
                color: initiative.textColor || '#1A1A1B',
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                lineHeight: '1.1'
              }}
            >
              {initiative.title}
            </h1>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {initiative.tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-sm px-4 py-1 rounded-full border"
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

            {/* Description */}
            <p 
              className="text-xl leading-relaxed max-w-3xl"
              style={{ 
                color: initiative.textColor || '#1A1A1B',
                opacity: 0.9
              }}
            >
              {initiative.fullDescription || initiative.description}
            </p>
          </motion.div>
        </div>

        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl"
            style={{ backgroundColor: initiative.accentColor || '#000' }}
          />
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16 bg-white">
        <div className="max-w-[1000px] mx-auto px-8">
          {/* How it works */}
          {initiative.howItWorks && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-16"
            >
              <h2 className="mb-6">¿Cómo funciona?</h2>
              <div className="space-y-4">
                {initiative.howItWorks.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#4285F4] text-white flex items-center justify-center flex-shrink-0 font-medium">
                      {index + 1}
                    </div>
                    <p className="text-muted-foreground leading-relaxed pt-1">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Objectives */}
          {initiative.objectives && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-16"
            >
              <h2 className="mb-6">Objetivos del experimento</h2>
              <div className="grid gap-4">
                {initiative.objectives.map((objective, index) => (
                  <div 
                    key={index}
                    className="p-6 rounded-[20px] bg-[#F8F9FA] border border-gray-100"
                  >
                    <p className="leading-relaxed">{objective}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Feedback Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="p-8 rounded-[24px] bg-gradient-to-br from-[#4285F4]/5 to-[#4285F4]/10 border border-[#4285F4]/20"
          >
            <h2 className="mb-4">¿Interesado en participar?</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {initiative.feedback || 
                'Buscamos organizaciones que quieran co-crear y validar esta iniciativa en contextos reales. El compromiso incluye sesiones de descubrimiento, pruebas activas y feedback continuo.'}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium shadow-lg hover:shadow-xl transition-all hover:scale-105">
                Aplicar al EAP
              </button>
              <button className="border border-gray-300 px-8 py-4 rounded-full font-medium hover:bg-gray-50 transition-colors">
                Descargar información
              </button>
            </div>
            
            <p className="text-sm text-muted-foreground mt-4">
              Aplicar = expresar interés. Seleccionamos por encaje. Cupos limitados.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
