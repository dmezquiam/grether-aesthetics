import { MapPin, Navigation, Clock } from "lucide-react";
import spaInterior from "@/assets/spa-interior.jpg";

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
                    Calle Principal #123, Colonia Centro<br />
                    Ciudad, Estado, C.P. 12345
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.1234567890!2d-99.1234567890!3d19.4326077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDI1JzU3LjQiTiA5OcKwMDcnMjQuNCJX!5e0!3m2!1ses!2smx!4v1234567890"
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
