import beforeAfter1 from "@/assets/before-after-1.jpg";
import beforeAfter2 from "@/assets/before-after-2.jpg";

const BeforeAfterSection = () => {
  const comparisons = [
    {
      image: beforeAfter1,
      treatment: "Tratamiento de pigmentación",
    },
    {
      image: beforeAfter2,
      treatment: "Tratamiento de acné y textura",
    },
  ];

  return (
    <section id="antes-despues" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Antes y Después
          </h2>
          <p className="text-lg text-muted-foreground">
            Resultados reales, sin filtros. Cada piel tiene una historia — aquí verás lo que un tratamiento profesional puede lograr.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {comparisons.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden shadow-medium hover:shadow-strong transition-all duration-300"
            >
              <img
                src={item.image}
                alt={`Antes y después - ${item.treatment}`}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                  <p className="font-semibold text-lg">{item.treatment}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground italic">
            Los resultados pueden variar según el tipo de piel y el tratamiento aplicado
          </p>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
