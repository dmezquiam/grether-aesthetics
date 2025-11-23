import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-grether.jpg";
import { openCalendlyPopup } from "@/lib/calendly";

const Hero = () => {

  return (
    <section className="relative min-h-screen flex items-center pt-20 bg-gradient-soft overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-slide-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              Tu piel en manos{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                expertas
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Estética avanzada y medicina estética con resultados visibles, seguros y personalizados para cada tipo de piel.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={openCalendlyPopup}
                className="bg-primary hover:bg-primary-dark text-primary-foreground shadow-medium hover:shadow-strong transition-all duration-300 text-lg px-8 py-6"
              >
                Agendar Cita Online
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => window.open("https://wa.me/34603381502", "_blank")}
                className="border-2 border-primary text-primary hover:bg-secondary text-lg px-8 py-6"
              >
                Escribir por WhatsApp
              </Button>
            </div>

            <div className="pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Tratamientos con protocolos clínicos, equipos modernos y productos dermatológicamente aprobados.
              </p>
            </div>
          </div>

          <div className="relative animate-fade-in flex justify-center">
            <div className="relative w-full max-w-sm mx-auto">
              <div className="absolute -inset-4 bg-gradient-primary rounded-3xl blur-2xl opacity-20"></div>
              <div className="relative aspect-[9/16] rounded-3xl overflow-hidden shadow-strong">
                <img
                  src={heroImage}
                  alt="Esteticista profesional Grether Gavilan Anias"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
