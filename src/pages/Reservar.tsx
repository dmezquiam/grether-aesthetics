import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { CalendarIcon, User, Phone, Sparkles, Clock, Loader2 } from "lucide-react";
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
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
  "15:00", "15:30", "16:00", "16:30", "17:00", "17:30",
  "18:00", "18:30", "19:00", "19:30", "20:00"
];

const reservaSchema = z.object({
  fecha: z.date({
    required_error: "Por favor selecciona una fecha",
  }).refine((date) => date > new Date(), {
    message: "La fecha debe ser futura",
  }),
  hora: z.string().min(1, "Selecciona una hora"),
  nombre: z.string()
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(100, "El nombre es demasiado largo"),
  telefono: z.string()
    .regex(/^(\+34|0034|34)?[6789]\d{8}$/, "Formato de teléfono inválido (ej: +34 603 381 502)"),
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
      hora: "",
      servicio: "",
    },
  });

  const onSubmit = async (data: ReservaForm) => {
    setIsLoading(true);

    try {
      const formData = new URLSearchParams();
      formData.append('fecha', format(data.fecha, 'dd/MM/yyyy', { locale: es }));
      formData.append('hora', data.hora);
      formData.append('nombre', data.nombre);
      formData.append('telefono', data.telefono);
      formData.append('servicio', data.servicio);
      formData.append('timestamp', new Date().toISOString());

      const response = await fetch('https://script.google.com/macros/s/AKfycby1yLXKOQ-GPAMvsbZD9iJlgNaq89F_ufpFMBRDdI8ifu2zQfJC4S-4EMcKnuW54QrC3g/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData.toString(),
        mode: 'no-cors',
      });

      toast.success('¡Reserva enviada con éxito!', {
        description: 'Te contactaremos pronto para confirmar tu cita.',
      });
      
      form.reset();
    } catch (error) {
      console.error('Error al enviar la reserva:', error);
      toast.error('Error al enviar la reserva', {
        description: 'Por favor, inténtalo de nuevo o contáctanos por WhatsApp.',
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
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                Reserva tu Cita
              </h1>
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
                                  !field.value && "text-muted-foreground"
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

                  <Button 
                    type="submit" 
                    className="w-full" 
                    size="lg"
                    disabled={isLoading}
                  >
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
