import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import AIConsultation from "@/components/AIConsultation";
import AILiteracy from "@/components/AILiteracy";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Introduction />
      <AIConsultation />
      <AILiteracy />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
