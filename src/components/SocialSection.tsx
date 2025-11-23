import { Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

const SocialSection = () => {
  const socials = [
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com",
      handle: "@gretheraesthetics",
      color: "bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500",
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://facebook.com",
      handle: "Grether Aesthetics",
      color: "bg-[#1877F2]",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Sígueme en Redes Sociales
          </h2>
          <p className="text-lg text-muted-foreground">
            Descubre más resultados, tips de estética y promociones exclusivas
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 max-w-2xl mx-auto">
          {socials.map((social) => (
            <Button
              key={social.name}
              size="lg"
              onClick={() => window.open(social.url, "_blank")}
              className={`${social.color} hover:opacity-90 text-white text-lg px-8 py-6 shadow-medium`}
            >
              <social.icon className="mr-3 h-6 w-6" />
              <div className="text-left">
                <div className="text-sm opacity-90">{social.name}</div>
                <div className="font-semibold">{social.handle}</div>
              </div>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialSection;
