import { Clock, Handshake, Trophy } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AIConsultation = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Why Act Now",
      description: "Picture the pain of competitors racing ahead while you're stuck—we share that urgency. The AI surge is here; delay risks lost chances. Let's transform regret into victory together."
    },
    {
      icon: Handshake,
      title: "How We Help",
      description: "Tailored AI integration for measurable transformation, aligned with your goals."
    },
    {
      icon: Trophy,
      title: "Benefits for You",
      description: "Imagine the joy of heading a dynamic innovator—faster growth to inspire your team, efficiency for meaningful work, and products that boost revenue, loyalty, and a proud legacy."
    }
  ];

  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              AI Consultation
            </h2>
            <p className="text-lg md:text-xl text-foreground leading-relaxed max-w-4xl mx-auto">
              We feel the thrill and overwhelm of industry shifts, and we're dedicated to lightening that load 
              for premier enterprises like yours. As AI experts, we guide you with custom strategies, intelligent 
              automation, AI agents, and managed services—lifting operations to excellence, making you a leader, 
              and sparking innovative products that win markets.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card 
                key={index} 
                className="bg-gradient-to-br from-card to-secondary border-border hover:shadow-lg hover:shadow-primary/20 transition-all duration-500 transform hover:scale-105 group"
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