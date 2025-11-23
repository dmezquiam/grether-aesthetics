import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { openCalendlyPopup } from "@/lib/calendly";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Carolina M.",
      text: "Gracias a Grether mi piel cambió por completo. Después de mi primera limpieza facial ya se veía un brillo diferente. Totalmente recomendada.",
      rating: 5,
    },
    {
      name: "Mariana R.",
      text: "Profesional, amable y con resultados garantizados. El dermapen fue increíble, mi piel se ve mucho más firme y luminosa.",
      rating: 5,
    },
    {
      name: "Verónica T.",
      text: "El mejor trato y cero dolor. Me explicó todo el proceso y me sentí muy cómoda. Volveré sin duda para más tratamientos.",
      rating: 5,
    },
    {
      name: "Isabel G.",
      text: "Me encantó el tratamiento de radiofrecuencia. Noté resultados desde la primera sesión. Grether es muy profesional y el ambiente es muy agradable.",
      rating: 5,
    },
    {
      name: "Andrea L.",
      text: "Las manchas en mi cara han disminuido notablemente después del tratamiento de pigmentación. Estoy fascinada con los resultados y la atención recibida.",
      rating: 5,
    },
    {
      name: "Patricia S.",
      text: "El peeling que me hizo Grether fue excelente. Mi piel se ve renovada y más joven. Sin duda seguiré viniendo para más tratamientos.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonios" className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Lo Que Dicen Mis Clientas
          </h2>
          <p className="text-lg text-muted-foreground">
            Experiencias reales de personas que confiaron en mi trabajo
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-card hover:shadow-strong transition-all duration-300 border-border"
            >
              <CardContent className="pt-6 space-y-4">
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground leading-relaxed">"{testimonial.text}"</p>
                <p className="text-sm font-semibold text-primary">— {testimonial.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            onClick={openCalendlyPopup}
            className="bg-primary hover:bg-primary-dark text-primary-foreground shadow-medium"
          >
            Reservar Ahora
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => window.open("https://wa.me/1234567890", "_blank")}
            className="border-2 border-primary text-primary hover:bg-secondary"
          >
            Escribir por WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
