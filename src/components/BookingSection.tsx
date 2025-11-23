import { Button } from "@/components/ui/button";
import { Calendar, Clock, Sparkles } from "lucide-react";
import { openCalendlyPopup } from "@/lib/calendly";

const BookingSection = () => {
  return (
    <section id="reservar" className="py-20 bg-gradient-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground">
              Agenda Tu Cita
            </h2>
            <p className="text-xl text-primary-foreground/90">
              Reserva fácilmente desde tu móvil o computadora. Selecciona el servicio, elige fecha y horario, y listo.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 py-8">
            <div className="flex flex-col items-center gap-3 p-6 rounded-xl bg-primary-foreground/10 backdrop-blur-sm">
              <Calendar className="w-12 h-12 text-accent" />
              <h3 className="font-semibold text-primary-foreground">Elige tu fecha</h3>
              <p className="text-sm text-primary-foreground/80 text-center">
                Selecciona el día que mejor te convenga
              </p>
            </div>
            <div className="flex flex-col items-center gap-3 p-6 rounded-xl bg-primary-foreground/10 backdrop-blur-sm">
              <Clock className="w-12 h-12 text-accent" />
              <h3 className="font-semibold text-primary-foreground">Selecciona horario</h3>
              <p className="text-sm text-primary-foreground/80 text-center">
                Disponibilidad flexible para tu comodidad
              </p>
            </div>
            <div className="flex flex-col items-center gap-3 p-6 rounded-xl bg-primary-foreground/10 backdrop-blur-sm">
              <Sparkles className="w-12 h-12 text-accent" />
              <h3 className="font-semibold text-primary-foreground">Confirma y listo</h3>
              <p className="text-sm text-primary-foreground/80 text-center">
                Recibe confirmación inmediata
              </p>
            </div>
          </div>

          <Button
            size="lg"
            onClick={openCalendlyPopup}
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-lg px-12 py-6 shadow-strong"
          >
            Reservar Cita Ahora
          </Button>

          <p className="text-sm text-primary-foreground/80 pt-4">
            * También puedes agendar llamando o escribiendo por WhatsApp
          </p>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
