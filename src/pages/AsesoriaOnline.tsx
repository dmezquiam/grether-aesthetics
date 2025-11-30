import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Video, 
  FileText, 
  CheckCircle, 
  Clock, 
  MessageCircle, 
  Sparkles,
  ShoppingBag,
  ClipboardList,
  Camera,
  Search,
  Package,
  HeartHandshake
} from "lucide-react";

const AsesoriaOnline = () => {
  const [selectedPack, setSelectedPack] = useState<string | null>(null);

  const benefits = [
    {
      icon: Search,
      title: "Análisis profesional de tu piel",
      description: "Evaluación detallada de tu tipo de piel y necesidades"
    },
    {
      icon: ShoppingBag,
      title: "Revisión de tus productos",
      description: "Analizamos los productos que ya usas"
    },
    {
      icon: Sparkles,
      title: "Rutina personalizada",
      description: "Plan completo para mañana y noche"
    },
    {
      icon: Package,
      title: "Productos recomendados",
      description: "Lista específica adaptada a tu piel"
    },
    {
      icon: HeartHandshake,
      title: "Consejos personalizados",
      description: "Hábitos y cuidados para tu día a día"
    },
    {
      icon: MessageCircle,
      title: "Seguimiento por WhatsApp",
      description: "15 días de acompañamiento continuo"
    },
    {
      icon: FileText,
      title: "Informe completo",
      description: "Entrega en PDF o video explicativo"
    },
  ];

  const packs = [
    {
      id: "basico",
      name: "Pack Básico",
      price: "25€",
      description: "Análisis y rutina básica personalizada",
      features: [
        "Análisis de tipo de piel",
        "Rutina básica (mañana y noche)",
        "Lista de productos esenciales",
        "Informe en PDF"
      ],
      badge: null
    },
    {
      id: "completo",
      name: "Pack Completo",
      price: "65€",
      description: "Análisis profundo y seguimiento",
      features: [
        "Todo lo del Pack Básico",
        "Análisis detallado de problemas",
        "Revisión de productos actuales",
        "Consejos de hábitos personalizados",
        "Seguimiento 15 días por WhatsApp",
        "Video explicativo personalizado"
      ],
      badge: "Más Popular",
      highlight: true
    },
    {
      id: "premium",
      name: "Pack Premium",
      price: "90€",
      description: "Experiencia completa con seguimiento extendido",
      features: [
        "Todo lo del Pack Completo",
        "Análisis profesional avanzado",
        "Plan de tratamiento a largo plazo",
        "Seguimiento 30 días por WhatsApp",
        "Revisión y ajuste de rutina",
        "Prioridad en respuestas"
      ],
      badge: "Premium"
    }
  ];

  const process = [
    {
      step: 1,
      icon: ShoppingBag,
      title: "Compra del servicio",
      description: "Elige tu pack y completa el pago"
    },
    {
      step: 2,
      icon: ClipboardList,
      title: "Formulario inicial",
      description: "Completa el cuestionario sobre tu piel"
    },
    {
      step: 3,
      icon: Camera,
      title: "Envío de fotos",
      description: "Envía fotos de tu piel para el análisis"
    },
    {
      step: 4,
      icon: Search,
      title: "Análisis profesional",
      description: "Evaluamos tu caso en detalle"
    },
    {
      step: 5,
      icon: FileText,
      title: "Entrega del informe",
      description: "Recibes tu plan personalizado"
    },
    {
      step: 6,
      icon: MessageCircle,
      title: "Seguimiento",
      description: "Acompañamiento durante el proceso"
    }
  ];

  const reportTemplate = [
    "Tipo de piel identificado",
    "Problemas principales detectados",
    "Rutina recomendada (mañana)",
    "Rutina recomendada (noche)",
    "Productos sugeridos con alternativas",
    "Consejos adicionales y hábitos",
    "Plan de seguimiento personalizado"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-soft">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="bg-accent text-accent-foreground mb-4">
              <Video className="w-4 h-4 mr-2" />
              Servicio 100% Online
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground">
              Asesoría de Piel Online
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Descubre exactamente qué necesita tu piel. Analizo tu tipo de piel, tus necesidades y tus objetivos 
              para crear una rutina 100% personalizada, sencilla y efectiva.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button 
                size="lg"
                onClick={() => document.getElementById('packs')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-primary hover:bg-primary-dark text-primary-foreground shadow-medium"
              >
                Ver Packs y Precios
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => window.open("https://wa.me/34603381502", "_blank")}
                className="border-2 border-primary text-primary hover:bg-secondary"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Consultar por WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Qué Incluye Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              ¿Qué Incluye?
            </h2>
            <p className="text-lg text-muted-foreground">
              Todo lo que necesitas para transformar tu rutina de cuidado facial
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-strong transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                    <benefit.icon className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Packs y Precios Section */}
      <section id="packs" className="py-20 bg-gradient-soft">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Elige Tu Pack
            </h2>
            <p className="text-lg text-muted-foreground">
              Selecciona el plan que mejor se adapte a tus necesidades
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packs.map((pack) => (
              <Card 
                key={pack.id}
                className={`relative overflow-hidden transition-all duration-300 hover:-translate-y-2 ${
                  pack.highlight 
                    ? 'border-2 border-accent shadow-strong ring-4 ring-accent/20' 
                    : 'hover:shadow-medium'
                } ${selectedPack === pack.id ? 'ring-2 ring-primary' : ''}`}
              >
                {pack.badge && (
                  <div className="absolute top-0 right-0 bg-accent text-accent-foreground px-4 py-1 text-sm font-semibold rounded-bl-lg">
                    {pack.badge}
                  </div>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl mb-2">{pack.name}</CardTitle>
                  <div className="text-4xl font-bold text-primary mb-2">{pack.price}</div>
                  <CardDescription>{pack.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {pack.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full bg-primary hover:bg-primary-dark text-primary-foreground"
                    onClick={() => {
                      setSelectedPack(pack.id);
                      window.open("https://wa.me/34603381502?text=" + encodeURIComponent(`Hola, me interesa el ${pack.name} de Asesoría Online`), "_blank");
                    }}
                  >
                    Seleccionar Plan
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* El Proceso Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              El Proceso
            </h2>
            <p className="text-lg text-muted-foreground">
              Simple, rápido y totalmente personalizado
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {process.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center">
                      <item.icon className="w-8 h-8 text-accent-foreground" />
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-primary font-semibold mb-1">Paso {item.step}</div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Qué Recibirás Section */}
      <section className="py-20 bg-gradient-soft">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Tu Informe Personalizado
              </h2>
              <p className="text-lg text-muted-foreground">
                Recibirás un análisis completo y detallado
              </p>
            </div>

            <Card className="bg-card shadow-strong">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <FileText className="w-8 h-8 text-primary" />
                  <CardTitle className="text-2xl">Contenido del Informe</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {reportTemplate.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Final Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 p-12 bg-gradient-gold rounded-2xl shadow-strong">
            <Sparkles className="w-16 h-16 text-accent-foreground mx-auto" />
            <h2 className="text-4xl font-bold text-foreground">
              ¿Lista para transformar tu piel?
            </h2>
            <p className="text-lg text-muted-foreground">
              Agenda tu asesoría online y descubre la rutina perfecta para tu piel
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button 
                size="lg"
                onClick={() => document.getElementById('packs')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-primary hover:bg-primary-dark text-primary-foreground shadow-medium"
              >
                Ver Packs
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => window.open("https://wa.me/34603381502", "_blank")}
                className="border-2 border-primary text-primary hover:bg-secondary bg-background"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Contactar Ahora
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default AsesoriaOnline;
