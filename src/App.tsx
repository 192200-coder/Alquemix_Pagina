import { Button } from "./components/ui/button";
import { Card } from "./components/ui/card";
import { Badge } from "./components/ui/badge";
import {
  Download,
  Star,
  Trophy,
  Brain,
  Clock,
  Target,
  ChevronRight,
  Users,
  Award,
  Zap,
} from "lucide-react";
import appIcon from "figma:asset/d4aaed47bf8dac71490b60ca595ba6ae96dfefd8.png";

export default function App() {
  const categories = [
    "Ciencia",
    "Historia",
    "Geografía",
    "Deportes",
    "Arte",
    "Entretenimiento",
    "Tecnología",
    "Naturaleza",
    "Literatura",
    "Música",
  ];

  const features = [
    {
      icon: Brain,
      title: "Múltiples Categorías",
      description:
        "Más de 10 categorías diferentes para poner a prueba tus conocimientos",
    },
    {
      icon: Clock,
      title: "Sesiones Rápidas",
      description:
        "Cuestionarios de 5 preguntas perfectos para jugar en cualquier momento",
    },
    {
      icon: Target,
      title: "Desafío Personalizado",
      description:
        "Elige un tema específico o prueba con todas las categorías al azar",
    },
    {
      icon: Trophy,
      title: "Seguimiento de Progreso",
      description:
        "Guarda tu progreso y compite por mejores puntuaciones",
    },
  ];

  const stats = [
    { value: "50K+", label: "Descargas" },
    { value: "1000+", label: "Preguntas" },
    { value: "4.8★", label: "Valoración" },
    { value: "10+", label: "Categorías" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 relative overflow-hidden">
      {/* CSS Animations - Moved to top */}
      <style>{`
        @keyframes floatUp {
          0% {
            transform: translateY(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(calc(-100vh - 200px));
            opacity: 0;
          }
        }
      `}</style>

      {/* Animated Chemistry Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Floating Chemistry Elements */}
        {[...Array(15)].map((_, i) => {
          const elements = [
            // Hexágono (Benceno)
            <svg key="hexagon" viewBox="0 0 100 100" className="w-16 h-16">
              <polygon
                points="50,5 93,27.5 93,72.5 50,95 7,72.5 7,27.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
              />
              <circle cx="50" cy="5" r="4" fill="currentColor" />
              <circle cx="93" cy="27.5" r="4" fill="currentColor" />
              <circle cx="93" cy="72.5" r="4" fill="currentColor" />
              <circle cx="50" cy="95" r="4" fill="currentColor" />
              <circle cx="7" cy="72.5" r="4" fill="currentColor" />
              <circle cx="7" cy="27.5" r="4" fill="currentColor" />
            </svg>,
            // Molécula de agua
            <svg key="water" viewBox="0 0 100 100" className="w-12 h-12">
              <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="3" />
              <circle cx="25" cy="35" r="8" fill="none" stroke="currentColor" strokeWidth="2" />
              <circle cx="75" cy="35" r="8" fill="none" stroke="currentColor" strokeWidth="2" />
              <line x1="50" y1="50" x2="25" y2="35" stroke="currentColor" strokeWidth="2" />
              <line x1="50" y1="50" x2="75" y2="35" stroke="currentColor" strokeWidth="2" />
            </svg>,
            // Átomo
            <svg key="atom" viewBox="0 0 100 100" className="w-14 h-14">
              <circle cx="50" cy="50" r="8" fill="currentColor" />
              <ellipse cx="50" cy="50" rx="40" ry="15" fill="none" stroke="currentColor" strokeWidth="2" />
              <ellipse cx="50" cy="50" rx="15" ry="40" fill="none" stroke="currentColor" strokeWidth="2" />
              <ellipse
                cx="50"
                cy="50"
                rx="35"
                ry="25"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                transform="rotate(45 50 50)"
              />
            </svg>,
            // Matraz
            <svg key="flask" viewBox="0 0 100 100" className="w-14 h-14">
              <path
                d="M35,10 L35,35 L20,70 Q20,85 50,85 Q80,85 80,70 L65,35 L65,10 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
              />
              <line x1="30" y1="10" x2="70" y2="10" stroke="currentColor" strokeWidth="3" />
            </svg>,
            // Cadena de carbono
            <svg key="carbon" viewBox="0 0 100 100" className="w-16 h-16">
              <circle cx="20" cy="50" r="6" fill="currentColor" />
              <circle cx="40" cy="30" r="6" fill="currentColor" />
              <circle cx="60" cy="50" r="6" fill="currentColor" />
              <circle cx="80" cy="30" r="6" fill="currentColor" />
              <line x1="20" y1="50" x2="40" y2="30" stroke="currentColor" strokeWidth="2" />
              <line x1="40" y1="30" x2="60" y2="50" stroke="currentColor" strokeWidth="2" />
              <line x1="60" y1="50" x2="80" y2="30" stroke="currentColor" strokeWidth="2" />
            </svg>,
          ];

          const element = elements[i % elements.length];
          const speed = 20 + (i % 3) * 10; // 20s, 30s, 40s
          const delay = (i * -2); // Delay negativo para que algunos ya estén visibles

          return (
            <div
              key={i}
              className="absolute text-cyan-400 opacity-10"
              style={{
                left: `${(i * 7) % 100}%`,
                bottom: "0",
                animation: `floatUp ${speed}s linear infinite`,
                animationDelay: `${delay}s`,
              }}
            >
              {element}
            </div>
          );
        })}
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <div className="p-8 md:p-16 pb-12">
          <div className="max-w-6xl mx-auto">
            {/* Header Section with Icon and Title */}
            <div className="flex flex-col md:flex-row items-start gap-6 mb-8">
              <img
                src={appIcon}
                alt="Alquemix Icon"
                className="w-24 h-24 md:w-28 md:h-28 rounded-2xl shadow-2xl flex-shrink-0"
              />

              <div className="flex-1">
                <div className="mb-4">
                  <h1 className="text-white mb-0">Alquemix</h1>
                </div>
                <p className="text-cyan-400 mb-1">
                  Corporation TechMobile
                </p>
                <p className="text-cyan-300">
                  Trivia y Conocimiento
                </p>

                {/* Badges */}
                <div className="flex gap-2 mt-4 flex-wrap">
                  <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30">
                    <Star className="w-3 h-3 mr-1" />
                    Destacado
                  </Badge>
                  <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                    Gratis
                  </Badge>
                  <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                    <Users className="w-3 h-3 mr-1" />
                    50K+ usuarios
                  </Badge>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-white/90 mb-8 max-w-3xl text-lg">
              Resuelve cuestionarios rápidos de 5 preguntas para
              demostrar tu conocimiento. Elige preguntas de un
              tema específico o de todos los temas disponibles.
              ¡Desafía tu mente y aprende algo nuevo cada día!
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <Button
                className="bg-cyan-400 hover:bg-cyan-500 text-slate-900 px-16 py-6 shadow-lg shadow-cyan-500/30 transition-all hover:shadow-xl hover:shadow-cyan-500/50"
                onClick={() => {
                  // URL directa de descarga (usa el enlace "raw" de GitHub)
                  const downloadUrl = "https://github.com/delmercuri/app/raw/main/app-debug.apk";

                  // Crear un enlace temporal
                  const link = document.createElement("a");
                  link.href = downloadUrl;
                  link.download = "Alquemix-app.apk"; // Nombre del archivo descargado
                  link.target = "_blank"; // Abrir en nueva pestaña si hay problemas

                  // Simular clic para iniciar descarga
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);

                  // Opcional: Mostrar mensaje de confirmación
                  alert("Descarga iniciada. La APK se guardará como 'ALquemix.apk'");
                }}
              >
                <Download className="w-5 h-5 mr-2" />
                Descargar
              </Button>

              <Button
                className="border-2 border-white/40 bg-transparent text-white hover:bg-white/10 hover:border-white/60 px-8 py-6 gap-2 transition-all"
                onClick={() =>
                  window.open(
                    "https://www.microsoft.com/store",
                    "_blank",
                  )
                }
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M11.4 24H0V12.6H11.4V24ZM24 24H12.6V12.6H24V24ZM11.4 11.4H0V0H11.4V11.4ZM24 11.4H12.6V0H24V11.4Z" />
                </svg>
                Ver en Microsoft Store
              </Button>
            </div>

            {/* PEGI Rating */}
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-3 w-fit border border-white/20">
              <div className="bg-yellow-400 rounded px-3 py-2 flex flex-col items-center justify-center min-w-[60px]">
                <span className="text-black text-2xl">3</span>
                <span className="text-black text-xs">PEGI</span>
              </div>
              <span className="text-white">
                PEGI 3 - Apto para todas las edades
              </span>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-slate-900/50 py-12 border-y border-white/10">
          <div className="max-w-6xl mx-auto px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl text-cyan-400 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-white/70">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-16 px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-white text-center mb-12">
              Características Principales
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border-white/10 p-6 hover:bg-white/10 transition-all hover:scale-105"
                >
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-white/70 text-sm">
                    {feature.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Categories Section */}
        <div className="py-16 px-8 bg-slate-900/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-white text-center mb-4">
              Explora Nuestras Categorías
            </h2>
            <p className="text-white/70 text-center mb-8 max-w-2xl mx-auto">
              Desde ciencia hasta entretenimiento, tenemos
              preguntas para cada interés
            </p>

            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-full px-6 py-3 text-white hover:from-cyan-500/30 hover:to-blue-500/30 transition-all cursor-pointer"
                >
                  {category}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* How it Works Section */}
        <div className="py-16 px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-white text-center mb-12">
              ¿Cómo Funciona?
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-cyan-500/20 flex items-center justify-center mx-auto mb-4 text-2xl text-cyan-400">
                  1
                </div>
                <h3 className="text-white mb-3">
                  Elige una Categoría
                </h3>
                <p className="text-white/70">
                  Selecciona tu tema favorito o elige
                  "Aleatorio" para un desafío completo
                </p>
              </Card>

              <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-cyan-500/20 flex items-center justify-center mx-auto mb-4 text-2xl text-cyan-400">
                  2
                </div>
                <h3 className="text-white mb-3">
                  Responde 5 Preguntas
                </h3>
                <p className="text-white/70">
                  Cada cuestionario tiene 5 preguntas diseñadas
                  para ponerte a prueba
                </p>
              </Card>

              <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-cyan-500/20 flex items-center justify-center mx-auto mb-4 text-2xl text-cyan-400">
                  3
                </div>
                <h3 className="text-white mb-3">
                  Obtén tu Puntuación
                </h3>
                <p className="text-white/70">
                  Ve tus resultados inmediatamente y aprende de
                  tus respuestas
                </p>
              </Card>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 px-8 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 border-y border-cyan-400/20">
          <div className="max-w-4xl mx-auto text-center">
            <Trophy className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
            <h2 className="text-white mb-4">
              ¿Listo para el Desafío?
            </h2>
            <p className="text-white/80 mb-8 text-lg">
              Únete a miles de jugadores y demuestra tu
              conocimiento en Alquemix
            </p>
            <Button
              size="lg"
              className="bg-cyan-400 hover:bg-cyan-500 text-slate-900 px-12 py-6 text-lg shadow-xl shadow-cyan-500/30"
              onClick={() => alert("Iniciando descarga...")}
            >
              <Download className="w-5 h-5 mr-2" />
              Descargar Ahora - Gratis
            </Button>
          </div>
        </div>

        {/* Footer */}
        <footer className="py-12 px-8 bg-slate-900/50">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="text-white mb-4">Alquemix</h3>
                <p className="text-white/60 text-sm">
                  La aplicación de trivia más completa y
                  divertida para poner a prueba tus
                  conocimientos.
                </p>
              </div>

              <div>
                <h4 className="text-white mb-4">
                  Disponible en
                </h4>
                <div className="space-y-2">
                  <a
                    href="#"
                    className="flex items-center text-white/70 hover:text-cyan-400 transition-colors"
                  >
                    <ChevronRight className="w-4 h-4 mr-1" />
                    Microsoft Store
                  </a>
                  <a
                    href="#"
                    className="flex items-center text-white/70 hover:text-cyan-400 transition-colors"
                  >
                    <ChevronRight className="w-4 h-4 mr-1" />
                    Google Play (Próximamente)
                  </a>
                  <a
                    href="#"
                    className="flex items-center text-white/70 hover:text-cyan-400 transition-colors"
                  >
                    <ChevronRight className="w-4 h-4 mr-1" />
                    App Store (Próximamente)
                  </a>
                </div>
              </div>

              <div>
                <h4 className="text-white mb-4">
                  Desarrollador
                </h4>
                <p className="text-white/70 text-sm">
                  Corporation TechMobile
                </p>
                <p className="text-white/60 text-sm mt-2">
                  © 2025 Alquemix
                </p>
              </div>
            </div>

            <div className="border-t border-white/10 pt-8 text-center text-white/50 text-sm">
              Hecho con pasión para amantes del conocimiento y
              la trivia
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}