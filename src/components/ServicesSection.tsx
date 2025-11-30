import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { Video } from "lucide-react";
import facialCleaning from "@/assets/service-facial-cleaning.jpg";
import dermapen from "@/assets/service-dermapen.jpg";
import peeling from "@/assets/service-peeling.jpg";
import radiofrequency from "@/assets/service-radiofrequency.jpg";
import acne from "@/assets/service-acne.jpg";
import pigmentation from "@/assets/service-pigmentation.jpg";
import antiaging from "@/assets/service-antiaging.jpg";
import onlineConsultation from "@/assets/service-online-consultation.jpg";


const ServicesSection = () => {
  const navigate = useNavigate();
  
  const services = [
    {
      title: "Asesoría de Piel Online",
      description: "Análisis profesional de tu piel y rutina 100% personalizada desde casa.",
      image: onlineConsultation,
      duration: "Online",
      price: "Desde 25€",
      isOnline: true,
      link: "/asesoria-online",
    },
    {
      title: "Limpieza Facial Profunda",
      description: "Elimina impurezas, destapa poros y revela una piel luminosa y fresca.",
      image: facialCleaning,
      duration: "60 min",
      price: "Precio a consultar",
    },
    {
      title: "Dermapen / Microagujas",
      description: "Estimula la producción de colágeno para una piel más firme y rejuvenecida.",
      image: dermapen,
      duration: "45 min",
      price: "Precio a consultar",
    },
    {
      title: "Peeling Químico",
      description: "Renovación celular profunda para mejorar textura, tono y luminosidad.",
      image: peeling,
      duration: "50 min",
      price: "Precio a consultar",
    },
    {
      title: "Tratamientos Antiacné",
      description: "Controla brotes, reduce manchas y equilibra tu piel con tratamientos especializados.",
      image: acne,
      duration: "55 min",
      price: "Precio a consultar",
    },
    {
      title: "Eliminación de Manchas",
      description: "Trata hiperpigmentación y unifica el tono de tu piel de manera segura.",
      image: pigmentation,
      duration: "45 min",
      price: "Precio a consultar",
    },
    {
      title: "Rejuvenecimiento Facial",
      description: "Tratamientos antiedad sin cirugía para recuperar firmeza y juventud.",
      image: antiaging,
      duration: "60 min",
      price: "Precio a consultar",
    },
    {
      title: "Radiofrecuencia Facial",
      description: "Tecnología avanzada para tensar la piel y reducir arrugas sin dolor.",
      image: radiofrequency,
      duration: "50 min",
      price: "Precio a consultar",
    },
  ];

  return (
    <section id="servicios" className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Servicios Profesionales
          </h2>
          <p className="text-lg text-muted-foreground">
            Tratamientos personalizados con resultados visibles y garantizados
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`overflow-hidden hover:shadow-strong transition-all duration-300 hover:-translate-y-1 bg-card cursor-pointer ${
                service.isOnline ? 'border-2 border-accent ring-2 ring-accent/20' : 'border-border'
              }`}
              onClick={() => navigate(service.link || '/reservar')}
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                {service.isOnline && (
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-accent text-accent-foreground shadow-medium">
                      <Video className="w-3 h-3 mr-1" />
                      Online
                    </Badge>
                  </div>
                )}
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  Duración: {service.duration}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-2">{service.description}</p>
                <p className="text-primary font-semibold text-sm">{service.price}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            onClick={() => navigate('/reservar')}
            className="bg-primary hover:bg-primary-dark text-primary-foreground shadow-medium"
          >
            Ver Todos los Servicios
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => navigate('/reservar')}
            className="border-2 border-primary text-primary hover:bg-secondary"
          >
            Reservar Cita
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
