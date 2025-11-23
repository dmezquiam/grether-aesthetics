import { Award, Heart, Shield, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const AboutSection = () => {
  const features = [
    {
      icon: Award,
      text: "Esteticista profesional certificada",
    },
    {
      icon: Shield,
      text: "Protocolos clínicos y seguros",
    },
    {
      icon: Sparkles,
      text: "Resultados visibles desde la primera sesión",
    },
    {
      icon: Heart,
      text: "Atención personalizada y cercana",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-gold rounded-3xl blur-2xl opacity-20"></div>
            <img
              src={heroImage}
              alt="Gretel Pérez - Esteticista Profesional"
              className="relative rounded-3xl shadow-medium w-full h-auto object-cover"
            />
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-sm font-semibold text-primary uppercase tracking-wider">
                Sobre Mí
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold text-foreground">
                Gretel Pérez
              </h3>
              <p className="text-xl text-muted-foreground">
                Esteticista Profesional & Auxiliar de Medicina Estética
              </p>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Con años de experiencia en el cuidado de la piel, me especializo en tratamientos 
                estéticos avanzados y medicina estética. Mi enfoque combina técnicas profesionales 
                con un trato humano y cercano.
              </p>
              <p>
                Cada piel es única y merece un tratamiento personalizado. Por eso, trabajo con 
                protocolos clínicos certificados, equipos de última generación y productos 
                dermatológicamente aprobados para garantizar tu seguridad y bienestar.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors"
                >
                  <feature.icon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
