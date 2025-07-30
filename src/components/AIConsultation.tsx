import { Zap, Settings, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AIConsultation = () => {
  const benefits = [
    {
      icon: Zap,
      title: "Why Act Now",
      description: "Envision the sting of competitors leaping ahead while you're held back we share your drive to avoid that. The AI boom is exploding; hesitating means missing game-changing wins. Together, let's convert uncertainty into bold triumph."
    },
    {
      icon: Settings,
      title: "How We Help",
      description: "Precision AI integration for quantifiable leaps forward, perfectly tailored to your unique vision and goals."
    },
    {
      icon: Star,
      title: "Benefits for You",
      description: "Feel the exhilaration of leading a visionary enterprise surging growth that motivates your team, unmatched efficiency for focused innovation, and revolutionary products that skyrocket revenue, build unbreakable loyalty, and craft a legacy of pride."
    }
  ];

  return (
    <section className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              AI Consultation: Strategic Guidance for Breakthrough Results
            </h2>
            <p className="text-lg md:text-xl text-foreground leading-relaxed max-w-5xl mx-auto">
              Navigating AI's rapid rise can feel thrilling yet daunting we've been there, and we're here to 
              shoulder the load with genuine partnership. As leading AI experts, we deliver customized strategies, 
              intelligent automation, AI agent development, and managed services that propel premier enterprises 
              like yours from everyday operations to industry dominance, fostering innovative products that 
              captivate and conquer markets.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card 
                key={index} 
                className="bg-gradient-to-br from-card to-secondary border-border hover:shadow-lg hover:shadow-primary/20 transition-all duration-500 transform hover:scale-105 group animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="p-4 bg-gradient-to-r from-primary to-accent rounded-full shadow-lg shadow-primary/50 group-hover:animate-pulse">
                      <benefit.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default AIConsultation;