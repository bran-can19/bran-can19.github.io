import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Escritura de código limpio, escalable y estructurado bajo buenas prácticas.",
  },
  {
    icon: Rocket,
    title: "Multiplataforma",
    description:
      "Desarrollo orientado tanto a aplicaciones web modernas como a soluciones móviles.",
  },
  {
    icon: Users,
    title: "Colaboración",
    description: "Trabajo en equipo compartiendo ideas para transformar requerimientos en código.",
  },
  {
    icon: Lightbulb,
    title: "Innovación",
    description:
      "Evolución constante aprendiendo nuevas tecnologías y arquitecturas eficientes.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building the future,
              <br />
              <span className="font-serif italic font-normal text-white">
                one component at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                Soy Brandon, un apasionado del desarrollo de software multiplataforma. Mi 
                camino formal inició como Técnico Superior Universitario y continúa expandiéndose 
                mientras curso la ingeniería en Tecnologías de la Información, combinando bases 
                sólidas académicas con la creación de soluciones reales.
              </p>
              <p>
                Me especializo en tecnologías del ecosistema JavaScript/TypeScript como React y 
                Node.js, complementado con experiencia sólida en entornos como Python y desarrollo 
                móvil con Flutter. Disfruto diseñar la lógica del backend con bases de datos como 
                PostgreSQL o MongoDB, asegurándome de entregar productos robustos.
              </p>
              <p>
                Cuando no estoy frente a la pantalla escribiendo código o afinando interfaces, 
                suelo desconectarme disfrutando de la naturaleza, capturando momentos a través del 
                lente de la fotografía, escuchando música o jugando fútbol.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "Mi meta es diseñar y estructurar software eficiente que resuelva problemas 
                reales de manera ágil, construyendo código duradero que sea fácil de mantener y 
                escalar."
              </p>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl border border-primary/10 hover:border-primary/30 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};