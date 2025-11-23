import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import logoFull from "@/assets/logo-full.jpeg";
import { openCalendlyPopup } from "@/lib/calendly";

const Footer = () => {

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <img src={logoFull} alt="Grether Aesthetics" className="h-12 w-auto brightness-0 invert" />
            <p className="text-primary-foreground/80 text-sm">
              Tu piel es única — dale el cuidado que merece.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contacto</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4" />
                <span>+34 603 381 502</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4" />
                <span>grether.aesthetics86@gmail.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1" />
                <span>Carrer de Victòria Ramis d'Ayreflor, 10, A<br />07011 Palma, Islas Baleares</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Horario</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 mt-1" />
                <div>
                  <p>Lun - Vie: 9:00 AM - 7:00 PM</p>
                  <p>Sábados: 10:00 AM - 5:00 PM</p>
                  <p>Domingos: Cerrado</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Agenda tu cita</h3>
            <p className="text-sm text-primary-foreground/80">
              Reserva tu tratamiento y comienza a transformar tu piel hoy
            </p>
            <Button
              onClick={openCalendlyPopup}
              variant="secondary"
              className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              Agendar Cita
            </Button>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/20">
          <div className="text-center text-sm text-primary-foreground/60">
            <p>© 2024 Grether Aesthetics. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
