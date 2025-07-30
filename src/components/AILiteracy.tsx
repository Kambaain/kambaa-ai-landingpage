import { Lightbulb, Book, Rocket } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AILiteracy = () => {
  const benefits = [
    {
      icon: Lightbulb,
      title: "Why Act Now",
      description: "It pains us to see talented teams sidelined by doubt seize this moment to spark innovation, elevate spirits, and forge an unshakeable advantage that infuses your organization with energy and forward momentum."
    },
    {
      icon: Book,
      title: "How We Help",
      description: "Interactive, expert-facilitated sessions that simplify AI, delivering hands-on skills for instant, transformative impact."
    },
    {
      icon: Rocket,
      title: "Benefits for You",
      description: "Picture your team radiating assurance and ingenuity they'll optimize AI to eliminate drudgery, unleash joyful breakthroughs, and crown your company as an AI trailblazer, cultivating a vibrant culture of loyalty and endless growth."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              AI Literacy Program: Empower Your Team to Master AI
            </h2>
            <div className="text-lg md:text-xl text-foreground leading-relaxed max-w-5xl mx-auto space-y-6">
              <p>
                We empathize with teams eager to embrace AI but feeling overwhelmed by the learning curve it's 
                why we're passionate about equipping yours with confidence and expertise. While{" "}
                <span className="font-semibold text-primary">78% of enterprises dip into AI</span>, just{" "}
                <span className="font-semibold text-primary">2% unlock its true power</span>, squandering immense value.
              </p>
              <p>
                Our intensive 16-hour program catapults your team's literacy to the elite{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-bold">95th percentile</span>, 
                arming them with practical mastery. Imagine voice-to-text accelerating tasks six times faster, 
                turning an 8-hour typing grind into 1.5 hours of productivity; or AI seamlessly drafting emails, 
                auto-responding, sales follow-ups, and scheduling meetings on autopilot revolutionizing efficiency 
                and freeing creativity.
              </p>
            </div>
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

export default AILiteracy;