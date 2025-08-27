import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/ai-business-hero.jpg";

const Hero = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById('contact-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      {/* Logo in top left */}
      <img 
        src="/lovable-uploads/0b341369-00ee-45df-958c-4e9274953060.png" 
        alt="Kambaa Logo" 
        className="absolute top-8 left-8 h-16 w-auto z-20"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 text-white animate-fade-in">
            <span className="text-purple-400">
              Unlock Your AI Future with <span className="drop-shadow-[0_0_15px_rgba(255,165,0,0.8)] shadow-orange-500 animate-pulse text-orange-400">Kambaa's AI IGNITE</span> Masterclass
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-200 mb-12 leading-relaxed animate-fade-in">
            A 4 Hour Journey to Ignite Your AI Potential – Worth ?1999, but absolutely Free! Hurry up limited seats
          </p>
          
          <Button 
            onClick={scrollToForm}
            size="lg"
            className="text-lg md:text-xl px-8 md:px-12 py-4 md:py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-2xl shadow-blue-500/50 transition-all duration-300 transform hover:scale-105 animate-pulse"
          >
            Claim Your Free 1-on-1 Consulting Session
          </Button>
        </div>
      </div>
      
      {/* Floating elements animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-4 h-4 bg-blue-400/30 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-purple-400/30 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-cyan-400/30 rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-20 right-1/3 w-5 h-5 bg-blue-400/30 rounded-full animate-pulse delay-1500"></div>
      </div>
    </section>
  );
};

export default Hero;