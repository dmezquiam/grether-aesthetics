import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "¿Cuánto tiempo dura cada tratamiento?",
      answer: "La duración varía según el tratamiento. Las limpiezas faciales duran aproximadamente 60 minutos, mientras que tratamientos como dermapen o peeling químico toman entre 45-55 minutos. Durante tu consulta, te informaremos del tiempo exacto según el tratamiento que elijas.",
    },
    {
      question: "¿Los tratamientos son seguros para todo tipo de piel?",
      answer: "Sí, todos nuestros tratamientos están diseñados para adaptarse a diferentes tipos de piel. Realizamos una evaluación personalizada antes de cada tratamiento para determinar el protocolo más adecuado para tu tipo de piel y condición específica.",
    },
    {
      question: "¿Cuántas sesiones necesito para ver resultados?",
      answer: "Depende del tratamiento y de tu objetivo. Algunos tratamientos como la limpieza facial profunda muestran resultados inmediatos, mientras que otros como dermapen o tratamientos antiacné pueden requerir de 4-6 sesiones para resultados óptimos. Te proporcionaremos un plan personalizado en tu primera consulta.",
    },
    {
      question: "¿Hay algún cuidado especial después del tratamiento?",
      answer: "Cada tratamiento tiene sus propias recomendaciones post-cuidado. Generalmente incluyen evitar la exposición solar directa, usar protector solar, mantener la piel hidratada y no usar ciertos productos durante las primeras 24-48 horas. Te daremos instrucciones detalladas después de cada sesión.",
    },
    {
      question: "¿Los tratamientos son dolorosos?",
      answer: "La mayoría de nuestros tratamientos son indoloros o causan molestias mínimas. Utilizamos técnicas y productos que minimizan cualquier incomodidad. En tratamientos como dermapen, aplicamos anestesia tópica para garantizar tu confort durante todo el procedimiento.",
    },
    {
      question: "¿Puedo combinar varios tratamientos?",
      answer: "Sí, muchos tratamientos se pueden combinar para obtener mejores resultados. Sin embargo, esto debe ser evaluado caso por caso. Durante tu consulta, crearemos un plan de tratamiento personalizado que puede incluir la combinación de diferentes procedimientos de forma segura y efectiva.",
    },
    {
      question: "¿Cuál es la política de cancelación de citas?",
      answer: "Te pedimos que nos notifiques con al menos 24 horas de anticipación si necesitas cancelar o reprogramar tu cita. Esto nos permite ofrecer ese espacio a otros clientes. Las cancelaciones con menos de 24 horas pueden estar sujetas a un cargo.",
    },
    {
      question: "¿Ofrecen consultas gratuitas?",
      answer: "Sí, ofrecemos una consulta inicial gratuita donde evaluamos tu piel, discutimos tus objetivos y te recomendamos el tratamiento más adecuado para ti. Puedes agendar tu consulta a través de nuestra plataforma de reservas online o por WhatsApp.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Preguntas Frecuentes
          </h2>
          <p className="text-lg text-muted-foreground">
            Resolvemos tus dudas sobre tratamientos, cuidados y procedimientos
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 shadow-soft hover:shadow-medium transition-shadow"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-primary font-semibold py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center p-8 rounded-2xl bg-gradient-to-br from-secondary/40 to-secondary/10 border border-border">
            <p className="text-foreground text-lg mb-4">
              ¿No encuentras la respuesta a tu pregunta?
            </p>
            <p className="text-muted-foreground">
              Contáctanos por WhatsApp o agenda una consulta gratuita y con gusto te ayudaremos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
