import { useState } from "react";
import { motion } from "motion/react";
import { Sparkles, Zap, Brain, Code } from "lucide-react";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import {
  InitiativeCard,
  Initiative,
} from "./components/InitiativeCard";
import { InitiativesCarousel } from "./components/InitiativesCarousel";
import { About } from "./components/About";
import { InitiativeDetail } from "./components/InitiativeDetail";

// Extended initiative interface for detail pages
interface ExtendedInitiative extends Initiative {
  fullDescription?: string;
  howItWorks?: string[];
  objectives?: string[];
  feedback?: string;
}

// Initiative data
const initiatives: ExtendedInitiative[] = [
  {
    id: "helios",
    title: "Proyecto Helios",
    description:
      "Exploración de interfaces basadas en gestos naturales para aplicaciones de escritorio.",
    fullDescription:
      "Una nueva forma de interactuar con el software de escritorio mediante gestos naturales e intuitivos. Helios redefine la experiencia de usuario eliminando la fricción entre la intención y la acción.",
    tags: ["UI", "Gestos", "Desktop"],
    bgColor: "#FFF8E7",
    textColor: "#1A1A1B",
    accentColor: "#F59E0B",
    icon: <Sparkles className="w-12 h-12" />,
    howItWorks: [
      "Captura de gestos mediante cámara y sensores de movimiento sin hardware adicional",
      "Motor de reconocimiento basado en IA que aprende patrones personalizados del usuario",
      "Integración transparente con aplicaciones de escritorio existentes mediante API universal",
      "Sistema de feedback háptico y visual para confirmación de acciones",
    ],
    objectives: [
      "Validar la precisión del reconocimiento de gestos en diferentes condiciones de iluminación y espacios",
      "Medir la curva de aprendizaje y adopción en usuarios con diferentes perfiles técnicos",
      "Evaluar el impacto en productividad comparado con métodos tradicionales (mouse/teclado)",
      "Identificar los casos de uso más relevantes y los gestos más intuitivos",
    ],
    feedback:
      "Buscamos organizaciones con equipos que trabajen intensivamente con software de diseño, CAD, edición de video o análisis de datos. Se requiere disponibilidad para sesiones de prueba semanales y feedback estructurado.",
  },
  {
    id: "nova",
    title: "Nova Core",
    description:
      "Motor de renderizado ligero para visualización de datos masivos en tiempo real.",
    fullDescription:
      "Tecnología de vanguardia que permite visualizar y manipular millones de puntos de datos en tiempo real con latencia sub-segundo, optimizado para análisis exploratorio y detección de patrones.",
    tags: ["Data Viz", "Performance", "Real-time"],
    bgColor: "#0A0E27",
    textColor: "#fff",
    accentColor: "#3B82F6",
    icon: <Zap className="w-12 h-12" />,
    howItWorks: [
      "Arquitectura de renderizado basada en WebGPU para máximo aprovechamiento del hardware",
      "Algoritmos de agregación inteligente que preservan patrones estadísticos relevantes",
      "Sistema de caching predictivo basado en patrones de navegación del usuario",
      "API declarativa para integración con frameworks de análisis populares",
    ],
    objectives: [
      "Validar rendimiento con datasets de 10M+ puntos en hardware estándar corporativo",
      "Probar integración con pipelines de datos existentes (Kafka, Spark, etc.)",
      "Evaluar usabilidad de controles de navegación en escenarios de análisis exploratorio",
      "Identificar trade-offs óptimos entre precisión visual y performance",
    ],
    feedback:
      "Ideal para organizaciones que manejan telemetría IoT, logs de sistemas, datos financieros de alta frecuencia o cualquier escenario de Big Data que requiera exploración visual interactiva.",
  },
  {
    id: "flux",
    title: "Flux Reader",
    description:
      "Rediseño de la experiencia de lectura técnica mediante IA de resumen adaptativo.",
    fullDescription:
      "Herramienta de lectura inteligente que se adapta al nivel de conocimiento del usuario, generando resúmenes contextuales, definiciones in-line y conexiones conceptuales en documentación técnica compleja.",
    tags: ["IA", "Documentación", "Aprendizaje"],
    bgColor: "#F8F9FA",
    textColor: "#1A1A1B",
    accentColor: "#6366F1",
    icon: <Code className="w-12 h-12" />,
    howItWorks: [
      "Análisis semántico profundo del contenido técnico usando modelos de lenguaje especializados",
      "Sistema de perfilado del usuario que aprende nivel de expertise y preferencias de lectura",
      "Generación dinámica de resúmenes, glosarios y diagramas conceptuales",
      "Modo de lectura adaptativa que ajusta densidad de información en tiempo real",
    ],
    objectives: [
      "Validar efectividad de resúmenes adaptativos en reducción de tiempo de comprensión",
      "Evaluar precisión del perfilado automático de nivel técnico del usuario",
      "Medir satisfacción en diferentes tipos de documentación (APIs, arquitectura, tutoriales)",
      "Identificar oportunidades de integración con sistemas de gestión documental existentes",
    ],
    feedback:
      "Buscamos organizaciones con documentación técnica extensa (APIs, bases de conocimiento, manuales técnicos) y equipos con rotación o procesos de onboarding frecuentes.",
  },
  {
    id: "behaviorcore",
    title: "BehaviorCore",
    description:
      "Models as a Service para Gemelos Digitales Industriales. Arquitectura fundacional que entiende el comportamiento de activos y procesos industriales.",
    fullDescription:
      "Plataforma de modelos como servicio que aprende el comportamiento de activos industriales y lo expone a través de APIs para habilitar Digital Twins más inteligentes con capacidades de detección temprana, análisis de riesgo y optimización predictiva.",
    tags: [
      "Digital Twins",
      "MaaS",
      "Industrial AI",
      "Behavior Mapping",
    ],
    bgColor: "#FFFFFF",
    textColor: "#1A1A1B",
    accentColor: "#10B981",
    icon: <Brain className="w-12 h-12" />,
    howItWorks: [
      "Ingesta y procesamiento de datos históricos y en tiempo real del activo/proceso industrial",
      "Construcción automática de mapas de comportamiento: modos de operación, zonas de riesgo y patrones",
      "Detección de desviaciones mediante algoritmos de aprendizaje no supervisado",
      "Exposición de servicios modulares: alertas, scores de riesgo/estabilidad, indicadores predictivos",
    ],
    objectives: [
      "Validar que el mapa de comportamiento genere señales realmente accionables en operación real",
      "Probar que el core sea reutilizable y calibrable por planta/caso de uso con esfuerzo razonable",
      "Evaluar precisión de detección temprana de anomalías vs métodos tradicionales",
      "Medir impacto en reducción de paradas no planificadas y optimización de mantenimiento",
    ],
    feedback:
      "Necesitamos organizaciones con datos ya centralizados del activo/proceso, disponibilidad para sesiones de descubrimiento con equipos de operación, sponsor de operación y referente técnico comprometidos.",
  },
];

export default function App() {
  const [activeSection, setActiveSection] =
    useState<string>("home");
  const [selectedInitiative, setSelectedInitiative] = useState<
    string | null
  >(null);

  const handleNavigate = (section: string) => {
    setActiveSection(section);
    setSelectedInitiative(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSelectInitiative = (id: string) => {
    setSelectedInitiative(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackToHome = () => {
    setSelectedInitiative(null);
    setActiveSection("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Featured initiative (BehaviorCore)
  const featuredInitiative = initiatives[3];

  // Render initiative detail
  if (selectedInitiative) {
    const initiative = initiatives.find(
      (i) => i.id === selectedInitiative,
    );
    if (initiative) {
      return (
        <>
          <Navigation
            onNavigate={handleNavigate}
            activeSection={activeSection}
          />
          <div className="pt-16">
            <InitiativeDetail
              initiative={initiative}
              onBack={handleBackToHome}
            />
          </div>
        </>
      );
    }
  }

  return (
    <div
      className="min-h-screen bg-white"
      style={{ fontFamily: "Inter, system-ui, sans-serif" }}
    >
      <Navigation
        onNavigate={handleNavigate}
        activeSection={activeSection}
      />

      <div className="pt-16">
        {/* Home Section */}
        {activeSection === "home" && (
          <>
            {/* Hero with featured initiative */}
            <Hero
              initiative={featuredInitiative}
              onExplore={() =>
                handleSelectInitiative(featuredInitiative.id)
              }
            />

            {/* Initiatives Grid */}
            <section className="py-24 bg-white">
              <div className="max-w-[1400px] mx-auto px-8 lg:px-24">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-16 text-center"
                >
                  <h2
                    className="tracking-tight"
                    style={{ fontSize: "2.5rem" }}
                  >
                    Iniciativas recientes
                  </h2>
                  <p className="text-muted-foreground text-lg mt-4">
                    Explora nuestras iniciativas experimentales
                    en etapa temprana
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <InitiativesCarousel
                    initiatives={initiatives}
                    onSelectInitiative={handleSelectInitiative}
                  />
                </motion.div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-[#F8F9FA]">
              <div className="max-w-[1400px] mx-auto px-8 lg:px-24 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2
                    className="mb-6 tracking-tight"
                    style={{ fontSize: "2.5rem" }}
                  >
                    ¿Listo para innovar con nosotros?
                  </h2>
                  <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                    Únete al Early Adopter Program y participa
                    en la co-creación de las próximas soluciones
                    innovadoras
                  </p>
                  <button className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium shadow-lg hover:shadow-xl transition-all hover:scale-105">
                    Aplicar ahora
                  </button>
                  <p className="text-sm text-muted-foreground mt-4">
                    Cupos limitados · Selección por encaje
                  </p>
                </motion.div>
              </div>
            </section>
          </>
        )}

        {/* About Section */}
        {activeSection === "about" && <About />}

        {/* FAQ Section */}
        {activeSection === "faq" && (
          <section className="py-24 bg-white min-h-[70vh]">
            <div className="max-w-[800px] mx-auto px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h1
                  className="mb-6 tracking-tight"
                  style={{ fontSize: "3rem" }}
                >
                  Preguntas Frecuentes
                </h1>

                <div className="space-y-6 mt-12">
                  <div className="p-6 rounded-[20px] bg-[#F8F9FA] border border-gray-100">
                    <h3 className="mb-3">
                      ¿Qué significa inscribirse al EAP?
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Inscribirse significa expresar interés en
                      participar. No garantiza cupo en una
                      iniciativa, pero habilita un proceso de
                      contacto y evaluación interna de encaje
                      entre tu organización y las iniciativas
                      disponibles.
                    </p>
                  </div>

                  <div className="p-6 rounded-[20px] bg-[#F8F9FA] border border-gray-100">
                    <h3 className="mb-3">
                      ¿Qué compromiso se requiere?
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Participación en sesiones de
                      descubrimiento, pruebas activas del
                      piloto, feedback continuo y honesto, y
                      apertura real para co-crear. El tiempo
                      específico varía según la iniciativa.
                    </p>
                  </div>

                  <div className="p-6 rounded-[20px] bg-[#F8F9FA] border border-gray-100">
                    <h3 className="mb-3">
                      ¿Las iniciativas pueden cambiar?
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Sí. Dado que son experimentales, las
                      iniciativas pueden evolucionar, pausarse o
                      incluso cancelarse. Existe un proceso de
                      comunicación continua y transparencia
                      sobre el estado de cada iniciativa.
                    </p>
                  </div>

                  <div className="p-6 rounded-[20px] bg-[#F8F9FA] border border-gray-100">
                    <h3 className="mb-3">
                      ¿Hay costos asociados?
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Depende de la iniciativa. Algunos
                      participantes acceden a condiciones
                      preferenciales (fee reducido, descuentos,
                      créditos). Los detalles específicos se
                      comunican durante el proceso de selección.
                    </p>
                  </div>

                  <div className="p-6 rounded-[20px] bg-[#F8F9FA] border border-gray-100">
                    <h3 className="mb-3">
                      ¿Qué industrias pueden participar?
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Aunque tenemos foco en manufactura,
                      servicios regulados y comercio, el EAP
                      está abierto a todas las industrias.
                      Evaluamos cada caso según el encaje con la
                      iniciativa específica.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* Join Section */}
        {activeSection === "join" && (
          <section className="py-24 bg-white min-h-[70vh]">
            <div className="max-w-[600px] mx-auto px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h1
                  className="mb-6 tracking-tight"
                  style={{ fontSize: "3rem" }}
                >
                  Únete al EAP
                </h1>
                <p className="text-muted-foreground text-lg mb-12">
                  Expresa tu interés en participar en nuestro
                  programa de early adopters
                </p>

                <div className="space-y-6">
                  <div>
                    <label className="block mb-2">
                      Nombre de la organización
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4285F4]"
                      placeholder="Tu empresa"
                    />
                  </div>

                  <div>
                    <label className="block mb-2">
                      Email de contacto
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4285F4]"
                      placeholder="contacto@empresa.com"
                    />
                  </div>

                  <div>
                    <label className="block mb-2">
                      Industria
                    </label>
                    <select className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4285F4]">
                      <option>Manufactura</option>
                      <option>
                        Servicios (Banca, Seguros, Telecom)
                      </option>
                      <option>Comercio y Retail</option>
                      <option>Tecnología</option>
                      <option>Otra</option>
                    </select>
                  </div>

                  <div>
                    <label className="block mb-2">
                      Iniciativa de interés
                    </label>
                    <select className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4285F4]">
                      <option>BehaviorCore</option>
                      <option>Proyecto Helios</option>
                      <option>Nova Core</option>
                      <option>Flux Reader</option>
                      <option>Todas las iniciativas</option>
                    </select>
                  </div>

                  <div>
                    <label className="block mb-2">
                      Cuéntanos sobre tu interés
                    </label>
                    <textarea
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4285F4] h-32"
                      placeholder="¿Qué problema buscas resolver? ¿Por qué te interesa participar?"
                    />
                  </div>

                  <button className="w-full bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium shadow-lg hover:shadow-xl transition-all hover:scale-105">
                    Enviar solicitud
                  </button>

                  <p className="text-sm text-muted-foreground text-center">
                    Nos pondremos en contacto contigo para
                    evaluar el encaje y próximos pasos
                  </p>
                </div>
              </motion.div>
            </div>
          </section>
        )}
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-12 bg-white">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-24">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="font-semibold text-xl">EAP</div>
            <div className="flex gap-8 text-sm text-muted-foreground">
              <button onClick={() => handleNavigate("about")}>
                Acerca de
              </button>
              <button onClick={() => handleNavigate("home")}>
                Iniciativas
              </button>
              <button onClick={() => handleNavigate("faq")}>
                FAQ
              </button>
              <button onClick={() => handleNavigate("join")}>
                Contacto
              </button>
            </div>
            <div className="text-sm text-muted-foreground">
              © 2025 Early Adopter Program
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}