import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import BookingSection from "@/components/BookingSection";
import WhatsAppSection from "@/components/WhatsAppSection";
import FAQSection from "@/components/FAQSection";
import LocationSection from "@/components/LocationSection";
import SocialSection from "@/components/SocialSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <ServicesSection />
        <BeforeAfterSection />
        <TestimonialsSection />
        <WhyChooseSection />
        <BookingSection />
        <WhatsAppSection />
        <FAQSection />
        <LocationSection />
        <SocialSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
