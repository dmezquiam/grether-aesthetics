import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const WhatsAppSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-8 p-12 rounded-3xl bg-gradient-to-br from-secondary/40 to-secondary/10 border border-border shadow-medium">
          <div className="inline-block p-4 rounded-full bg-primary/10">
            <MessageCircle className="w-12 h-12 text-primary" />
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              ¿Tienes Dudas?
            </h2>
            <p className="text-lg text-muted-foreground">
              Escríbeme y te ayudo a elegir el mejor tratamiento para tu piel. Respuesta rápida garantizada.
            </p>
          </div>

          <Button
            size="lg"
            onClick={() => window.open("https://wa.me/1234567890", "_blank")}
            className="bg-[#25D366] hover:bg-[#20BA59] text-white text-lg px-12 py-6 shadow-medium"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Hablar por WhatsApp
          </Button>

          <p className="text-sm text-muted-foreground">
            Horario de atención: Lunes a Sábado de 9:00 AM a 7:00 PM
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppSection;
