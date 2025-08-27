import Hero from "@/components/Hero";
import AIConsultation from "@/components/AIConsultation";
import WhatYoullLearn from "@/components/WhatYoullLearn";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <AIConsultation />
      <WhatYoullLearn />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
