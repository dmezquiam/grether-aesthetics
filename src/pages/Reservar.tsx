import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Reservar = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24 pb-12 bg-gradient-soft">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                Reserva tu Cita
              </h1>
              <p className="text-lg text-muted-foreground">
                Completa el formulario para agendar tu tratamiento. Te contactaremos para confirmar tu cita.
              </p>
            </div>

            <div className="bg-card rounded-2xl shadow-strong overflow-hidden border border-border">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSeZNMneZf246dV5HuOOP4ivVs2jlR8x5aOoSQcx8tB_datOzQ/viewform?embedded=true"
                width="100%"
                height="1200"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                className="w-full"
                title="Formulario de Reserva"
              >
                Cargando…
              </iframe>
            </div>

            <div className="mt-8 text-center space-y-2">
              <p className="text-sm text-muted-foreground">
                ¿Tienes dudas? También puedes contactarnos por:
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <a href="tel:+34603381502" className="text-primary hover:underline">
                  📞 +34 603 381 502
                </a>
                <a href="https://wa.me/34603381502" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  💬 WhatsApp
                </a>
                <a href="mailto:grether.aesthetics86@gmail.com" className="text-primary hover:underline">
                  ✉️ Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Reservar;
