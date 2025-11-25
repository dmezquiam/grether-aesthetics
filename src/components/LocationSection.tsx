import { MapPin, Navigation, Clock } from "lucide-react";
import spaInterior from "@/assets/salon-interior.jpg";

const LocationSection = () => {
  return (
    <section id="ubicacion" className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Estamos Aquí
          </h2>
          <p className="text-lg text-muted-foreground">
            Un espacio cómodo, seguro e higiénico pensado para tu bienestar
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          <div className="space-y-6">
            <img
              src={spaInterior}
              alt="Interior del spa"
              className="w-full rounded-2xl shadow-medium"
            />

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Dirección</h3>
                  <p className="text-muted-foreground">
                    Carrer de Victòria Ramis d'Ayreflor, 10, A<br />
                    Poniente, 07011 Palma, Islas Baleares
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border">
                <Clock className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Horario</h3>
                  <p className="text-muted-foreground">
                    Lunes a Viernes: 9:00 AM - 7:00 PM<br />
                    Sábados: 10:00 AM - 5:00 PM<br />
                    Domingos: Cerrado
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border">
                <Navigation className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Cómo llegar</h3>
                  <p className="text-muted-foreground">
                    Estacionamiento disponible en la calle<br />
                    Cerca de transporte público
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[500px] rounded-2xl overflow-hidden shadow-medium">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3074.5285887543707!2d2.6435!3d39.5726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1297925c1b6b3b77%3A0x1234567890abcdef!2sCarrer%20de%20Vict%C3%B2ria%20Ramis%20d&#39;Ayreflor%2C%2010%2C%2007011%20Palma%2C%20Illes%20Balears!5e0!3m2!1ses!2ses!4v1234567890123"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Grether Aesthetics"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
