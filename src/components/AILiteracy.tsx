import { Clock, Users, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AILiteracy = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Why Act Now",
      description: "It hurts seeing great teams hesitate—don't miss this boost. Start now for instant innovation, higher morale, and a resilient edge that sparks passion and drive."
    },
    {
      icon: Users,
      title: "How We Help",
      description: "Engaging, expert sessions demystifying AI with hands-on skills for quick wins."
    },
    {
      icon: Zap,
      title: "Benefits for You",
      description: "See your team alive with confidence—they'll cut routine time, ignite creative joy, and position your firm as an AI pioneer, building a loyal, growth-driven culture."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-primary bg-clip-text text-transparent">
              AI Literacy Program
            </h2>
            <div className="text-lg md:text-xl text-foreground leading-relaxed max-w-5xl mx-auto space-y-6">
              <p>
                We understand teams feeling unprepared in AI adoption—starting eager but stalling—and we're 
                here to close that gap with empathy and skill. Reports show{" "}
                <span className="font-semibold text-primary">78% of enterprises use AI</span>, but only{" "}
                <span className="font-semibold text-primary">2% tap its full power</span>, wasting huge potential.
              </p>
              <p>
                Our 16-hour program elevates your team's literacy to the top{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent font-bold">95th percentile</span>, 
                empowering them with real AI mastery. For example, voice-to-text speeds work sixfold, finishing 
                an 8-hour typing day in 1.5 hours; others draft emails, auto-respond, follow up sales, or schedule 
                meetings remotely—revolutionizing workflows.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card 
                key={index} 
                className="bg-gradient-card border-border hover:shadow-neural transition-all duration-500 transform hover:scale-105 group"
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="p-4 bg-gradient-primary rounded-full shadow-glow group-hover:animate-pulse">
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