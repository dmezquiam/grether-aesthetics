import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { CalendarIcon, User, Phone, Sparkles, Clock, Loader2, Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

const SERVICIOS = [
  "Limpieza Facial Profunda",
  "Dermapen (Microneedling)",
  "Peeling Químico",
  "Tratamiento Antiacné",
  "Radiofrecuencia Corporal",
  "Depilación Láser",
  "Rejuvenecimiento Facial",
  "Tratamiento de Pigmentación",
];

const HORAS = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00",
  "18:30",
  "19:00",
  "19:30",
  "20:00",
];

const reservaSchema = z.object({
  fecha: z
    .date({
      required_error: "Por favor selecciona una fecha",
    })
    .refine((date) => date > new Date(), {
      message: "La fecha debe ser futura",
    }),
  hora: z.string().min(1, "Selecciona una hora"),
  nombre: z.string().min(2, "El nombre debe tener al menos 2 caracteres").max(100, "El nombre es demasiado largo"),
  telefono: z.string().regex(/^(\+34|0034|34)?[6789]\d{8}$/, "Formato de teléfono inválido (ej: +34 603 381 502)"),
  email: z.string().email("Correo electrónico inválido").min(1, "El correo electrónico es requerido"),
  servicio: z.string().min(1, "Selecciona un servicio"),
});

type ReservaForm = z.infer<typeof reservaSchema>;

const Reservar = () => {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<ReservaForm>({
    resolver: zodResolver(reservaSchema),
    defaultValues: {
      nombre: "",
      telefono: "",
      email: "",
      hora: "",
      servicio: "",
    },
  });

  const onSubmit = async (data: ReservaForm) => {
    setIsLoading(true);

    try {
      const payload = {
        fecha: format(data.fecha, "dd/MM/yyyy", { locale: es }),
        hora: data.hora,
        nombre: data.nombre,
        telefono: data.telefono,
        email: data.email,
        servicio: data.servicio,
        timestamp: new Date().toISOString(),
      };

      console.log("📤 Enviando reserva...", payload);

      // Asegurarnos de que TODOS los valores sean strings
      const params = new URLSearchParams(Object.entries(payload).map(([k, v]) => [k, String(v)]));

      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbw90hj5w_kq3WSqioOz1mXmlrgymBNTRTKVspUVHzuoZNEVu8ua1mjnfOQYLrT4daujqg/exec",
        {
          method: "POST",
          headers: {
            // explícito y correcto para URLSearchParams
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
            // opcional: evitar credenciales si no son necesarias
            // "Accept": "application/json"
          },
          body: params.toString(),
        },
      );

      console.log("📥 Respuesta recibida:", response.status, response.statusText);
      const contentType = response.headers.get("content-type");
      console.log("headers content-type:", contentType);

      const responseText = await response.text();
      console.log("🔍 Respuesta en texto:", responseText);

      // Intentar parsear como JSON
      let result: any = null;
      if (contentType && contentType.includes("application/json")) {
        try {
          result = JSON.parse(responseText);
        } catch (err) {
          console.warn("content-type JSON pero fallo parseo:", err);
        }
      } else {
        // Si no viene content-type JSON, intentar parsear fallback url-encoded (ej: "fecha=28%2F...")
        if (responseText && responseText.includes("=") && responseText.indexOf("{") !== 0) {
          try {
            const fallback = Object.fromEntries(new URLSearchParams(responseText));
            console.log("↪️ Parsed fallback URLSearchParams:", fallback);
            // normalizar a un objeto con status/message si el servidor lo envió así
            if (fallback.status || fallback.message) {
              result = fallback;
            }
          } catch (err) {
            console.warn("No pudo parsearse como URLSearchParams:", err);
          }
        }
      }

      // Si todavía no tenemos result y responseText parece JSON, intentar parsear genérico
      if (!result) {
        try {
          result = JSON.parse(responseText);
        } catch (err) {
          // seguir adelante con result = null
        }
      }

      // Lógica final según lo que obtuvimos
      if (result && result.status === "success") {
        toast.success("¡Reserva enviada con éxito!", {
          description: "Te contactaremos pronto para confirmar tu cita.",
        });
        form.reset();
        return;
      }

      // Si respuesta ok (200-299) pero sin JSON legible -> asumimos éxito (opcional)
      if (response.ok && !result) {
        // Puedes cambiar esto para ser más estricto si prefieres
        toast.success("¡Reserva enviada con éxito!", {
          description: "Te contactaremos pronto para confirmar tu cita.",
        });
        form.reset();
        return;
      }

      // Si hay un mensaje de error en result, usarlo
      const serverMsg = result?.message || responseText || "Respuesta no válida del servidor";
      throw new Error(serverMsg);
    } catch (error) {
      console.error("❌ Error al enviar la reserva:", error);
      const errorMessage = error instanceof Error ? error.message : "Error de conexión";
      toast.error("Error al enviar la reserva", {
        description: errorMessage + ". Intenta de nuevo o contáctanos por WhatsApp.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-24 pb-12 bg-gradient-soft">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8 space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">Reserva tu Cita</h1>
              <p className="text-lg text-muted-foreground">
                Completa el formulario y te contactaremos para confirmar tu tratamiento
              </p>
            </div>

            <div className="bg-card rounded-2xl shadow-strong p-6 md:p-8 border border-border">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  {/* Nombre */}
                  <FormField
                    control={form.control}
                    name="nombre"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2">
                          <User className="h-4 w-4 text-primary" />
                          Nombre Completo
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="María García" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Teléfono */}
                  <FormField
                    control={form.control}
                    name="telefono"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2">
                          <Phone className="h-4 w-4 text-primary" />
                          Teléfono
                        </FormLabel>
                        <FormControl>
                          <Input type="tel" placeholder="+34 603 381 502" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Email */}
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2">
                          <Mail className="h-4 w-4 text-primary" />
                          Correo Electrónico
                        </FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="ejemplo@correo.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Fecha y Hora agrupados */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Fecha */}
                    <FormField
                      control={form.control}
                      name="fecha"
                      render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <FormLabel className="flex items-center gap-2">
                            <CalendarIcon className="h-4 w-4 text-primary" />
                            Fecha Preferida
                          </FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant="outline"
                                  className={cn(
                                    "w-full pl-3 text-left font-normal",
                                    !field.value && "text-muted-foreground",
                                  )}
                                >
                                  {field.value ? (
                                    format(field.value, "PPP", { locale: es })
                                  ) : (
                                    <span>Selecciona una fecha</span>
                                  )}
                                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                              <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={(date) => date < new Date()}
                                initialFocus
                                className="pointer-events-auto"
                              />
                            </PopoverContent>
                          </Popover>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Hora */}
                    <FormField
                      control={form.control}
                      name="hora"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-primary" />
                            Hora Preferida
                          </FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Selecciona una hora" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {HORAS.map((hora) => (
                                <SelectItem key={hora} value={hora}>
                                  {hora}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Servicio */}
                  <FormField
                    control={form.control}
                    name="servicio"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2">
                          <Sparkles className="h-4 w-4 text-primary" />
                          Servicio
                        </FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecciona un servicio" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {SERVICIOS.map((servicio) => (
                              <SelectItem key={servicio} value={servicio}>
                                {servicio}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full" size="lg" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      "Enviar Reserva"
                    )}
                  </Button>
                </form>
              </Form>
            </div>

            <div className="mt-8 text-center space-y-2">
              <p className="text-sm text-muted-foreground">¿Tienes dudas? También puedes contactarnos por:</p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <a href="tel:+34603381502" className="text-primary hover:underline">
                  📞 +34 603 381 502
                </a>
                <a
                  href="https://wa.me/34603381502"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
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
