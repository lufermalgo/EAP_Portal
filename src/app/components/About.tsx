import { motion } from 'motion/react';

export function About() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-[800px] mx-auto px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="mb-6 tracking-tight" style={{ fontSize: '3rem' }}>
            Early Adopter Program
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Un laboratorio continuo de innovación aplicada con clientes reales
          </p>
        </motion.div>

        {/* Definición */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <h2 className="mb-4">¿Qué es el Early Adopter Program?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            El <strong>Early Adopter Program (EAP)</strong> es un programa corporativo de innovación aplicada donde invitamos a organizaciones a <strong>probar primero</strong> y <strong>co-crear</strong> iniciativas <strong>innovadoras y diferenciadas</strong> en <strong>etapas tempranas</strong> (prototipo/beta/piloto), con el fin de <strong>validarlas en contextos reales</strong> antes de escalarlas al mercado.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            En el EAP, las organizaciones seleccionadas no solo "usan" una solución: <strong>participan activamente en la validación y construcción</strong> del producto/capacidad mediante sesiones de descubrimiento, pruebas y feedback continuo.
          </p>
        </motion.div>

        {/* Aspiraciones */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="mb-6">Nuestra Visión</h2>
          <div className="space-y-6">
            <div className="p-6 rounded-[20px] bg-[#F8F9FA] border border-gray-100">
              <h3 className="mb-2">Un laboratorio continuo con clientes reales</h3>
              <p className="text-muted-foreground leading-relaxed">
                Un espacio recurrente (no un piloto aislado) para experimentar, aprender y madurar innovación con evidencia.
              </p>
            </div>

            <div className="p-6 rounded-[20px] bg-[#F8F9FA] border border-gray-100">
              <h3 className="mb-2">Un motor para acelerar innovación con menor riesgo</h3>
              <p className="text-muted-foreground leading-relaxed">
                Un mecanismo que reduzca incertidumbre técnica y de negocio, y acelere decisiones de <strong>iterar / pausar / escalar</strong>.
              </p>
            </div>

            <div className="p-6 rounded-[20px] bg-[#F8F9FA] border border-gray-100">
              <h3 className="mb-2">Una fuente de ofertas listas para mercado</h3>
              <p className="text-muted-foreground leading-relaxed">
                Un camino claro para convertir iniciativas emergentes en propuestas más repetibles y escalables.
              </p>
            </div>

            <div className="p-6 rounded-[20px] bg-[#F8F9FA] border border-gray-100">
              <h3 className="mb-2">Un puente entre innovación y crecimiento comercial</h3>
              <p className="text-muted-foreground leading-relaxed">
                Un generador de activos comerciales que habilite nuevas oportunidades de negocio.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Principios */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="mb-6">Principios del Programa</h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="w-2 h-2 rounded-full bg-[#4285F4] mt-2 flex-shrink-0" />
              <p className="text-muted-foreground leading-relaxed">
                <strong>Exclusivo en participación, abierto en inscripción:</strong> cualquier organización puede inscribirse para expresar interés; seleccionamos según el encaje.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="w-2 h-2 rounded-full bg-[#4285F4] mt-2 flex-shrink-0" />
              <p className="text-muted-foreground leading-relaxed">
                <strong>Experimental:</strong> las iniciativas pueden cambiar o pausarse; hay cupos limitados.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="w-2 h-2 rounded-full bg-[#4285F4] mt-2 flex-shrink-0" />
              <p className="text-muted-foreground leading-relaxed">
                <strong>Co-creación real:</strong> se espera participación activa en descubrimiento, pruebas y feedback.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="w-2 h-2 rounded-full bg-[#4285F4] mt-2 flex-shrink-0" />
              <p className="text-muted-foreground leading-relaxed">
                <strong>Diferencial como regla:</strong> solo entran iniciativas con componente innovador y diferencial real frente al mercado.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Beneficios */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="mb-6">Beneficios para Participantes</h2>
          <div className="grid gap-4">
            <div className="p-6 rounded-[20px] bg-gradient-to-br from-[#4285F4]/5 to-[#4285F4]/10 border border-[#4285F4]/20">
              <h4 className="mb-2">🚀 Acceso anticipado</h4>
              <p className="text-muted-foreground leading-relaxed">
                Ser de los primeros en usar nuevas soluciones antes del mercado.
              </p>
            </div>

            <div className="p-6 rounded-[20px] bg-gradient-to-br from-[#4285F4]/5 to-[#4285F4]/10 border border-[#4285F4]/20">
              <h4 className="mb-2">🤝 Co-creación real del roadmap</h4>
              <p className="text-muted-foreground leading-relaxed">
                Influir en funcionalidades, integraciones, prioridades y modelo de servicio.
              </p>
            </div>

            <div className="p-6 rounded-[20px] bg-gradient-to-br from-[#4285F4]/5 to-[#4285F4]/10 border border-[#4285F4]/20">
              <h4 className="mb-2">💡 Capacidad extendida de expertos</h4>
              <p className="text-muted-foreground leading-relaxed">
                Equipo multidisciplinario enfocado en resultados del piloto.
              </p>
            </div>

            <div className="p-6 rounded-[20px] bg-gradient-to-br from-[#4285F4]/5 to-[#4285F4]/10 border border-[#4285F4]/20">
              <h4 className="mb-2">⭐ Condiciones preferenciales</h4>
              <p className="text-muted-foreground leading-relaxed">
                Fee reducido, descuentos, créditos o tarifas especiales cuando aplique.
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center pt-8"
        >
          <button className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium shadow-lg hover:shadow-xl transition-all hover:scale-105">
            Aplicar al EAP
          </button>
          <p className="text-sm text-muted-foreground mt-4">
            Aplicar = expresar interés. Seleccionamos por encaje. Cupos limitados.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
