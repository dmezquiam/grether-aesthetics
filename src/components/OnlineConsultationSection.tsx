import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { Video, CheckCircle, Clock, Sparkles } from "lucide-react";
import onlineConsultation from "@/assets/service-online-consultation.jpg";

const OnlineConsultationSection = () => {
  const navigate = useNavigate();

  const highlights = [
    {
      icon: Video,
      text: "100% online desde casa"
    },
    {
      icon: Sparkles,
      text: "Rutina personalizada para tu piel"
    },
    {
      icon: CheckCircle,
      text: "Seguimiento incluido"
    },
    {
      icon: Clock,
      text: "Resultados en 48-72h"
    }
  ];

  return (
    <section className="py-20 bg-gradient-gold relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(40_85%_85%/0.3),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(40_70%_75%/0.2),transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <Card className="overflow-hidden border-2 border-accent/30 shadow-strong bg-background/95 backdrop-blur-sm">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image Side */}
              <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden">
                <img 
                  src={onlineConsultation} 
                  alt="Asesoría de Piel Online" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-accent text-accent-foreground shadow-medium">
                    <Video className="w-4 h-4 mr-2" />
                    Nuevo Servicio Online
                  </Badge>
                </div>
              </div>

              {/* Content Side */}
              <CardContent className="p-8 md:p-12 flex flex-col justify-center">
                <div className="space-y-6">
                  <div className="space-y-3">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                      Asesoría de Piel Online
                    </h2>
                    <p className="text-lg text-muted-foreground">
                      Descubre exactamente qué necesita tu piel con un análisis profesional 
                      y recibe tu rutina 100% personalizada desde casa.
                    </p>
                  </div>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-2 gap-4 py-4">
                    {highlights.map((item, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <div className="mt-1">
                          <item.icon className="w-5 h-5 text-primary" />
                        </div>
                        <span className="text-sm text-foreground font-medium">{item.text}</span>
                      </div>
                    ))}
                  </div>

                  {/* Price Range */}
                  <div className="bg-muted/50 rounded-lg p-4">
                    <div className="flex items-baseline gap-2">
                      <span className="text-sm text-muted-foreground">Desde</span>
                      <span className="text-3xl font-bold text-primary">25€</span>
                      <span className="text-sm text-muted-foreground">hasta 90€</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Elige el pack que mejor se adapte a tus necesidades
                    </p>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <Button
                      size="lg"
                      onClick={() => navigate('/asesoria-online')}
                      className="bg-primary hover:bg-primary-dark text-primary-foreground shadow-medium flex-1"
                    >
                      Conocer Más
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      onClick={() => window.open("https://wa.me/34603381502", "_blank")}
                      className="border-2 border-primary text-primary hover:bg-secondary flex-1"
                    >
                      Consultar
                    </Button>
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default OnlineConsultationSection;
