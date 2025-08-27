import Hero from "@/components/Hero";
import AIConsultation from "@/components/AIConsultation";
import WhatYoullLearn from "@/components/WhatYoullLearn";
import AILiteracy from "@/components/AILiteracy";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <AIConsultation />
      <WhatYoullLearn />
      <AILiteracy />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
