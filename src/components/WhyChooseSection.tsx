import { Award, Shield, Sparkles, Heart, CheckCircle, Clock } from "lucide-react";

const WhyChooseSection = () => {
  const reasons = [
    {
      icon: Award,
      title: "Certificación Profesional",
      description: "Esteticista profesional y auxiliar de medicina estética con formación certificada",
    },
    {
      icon: Shield,
      title: "Protocolos Clínicos",
      description: "Tratamientos con protocolos médicos seguros y comprobados",
    },
    {
      icon: Sparkles,
      title: "Productos Premium",
      description: "Productos de alta gama aprobados dermatológicamente",
    },
    {
      icon: CheckCircle,
      title: "Resultados Visibles",
      description: "Mejoras notables desde la primera sesión de tratamiento",
    },
    {
      icon: Heart,
      title: "Atención Personalizada",
      description: "Trato cercano, humano y sin prisas para cada clienta",
    },
    {
      icon: Clock,
      title: "Seguimiento Continuo",
      description: "Acompañamiento posterior para garantizar tu bienestar",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            ¿Por Qué Elegirme?
          </h2>
          <p className="text-lg text-muted-foreground">
            Compromiso con la excelencia y tu bienestar
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-gradient-to-br from-secondary/40 to-secondary/10 hover:from-secondary/60 hover:to-secondary/20 transition-all duration-300 hover:shadow-medium border border-border"
            >
              <div className="mb-4 inline-block p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <reason.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {reason.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-2xl md:text-3xl font-bold text-foreground">
            Tu piel merece lo mejor.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
