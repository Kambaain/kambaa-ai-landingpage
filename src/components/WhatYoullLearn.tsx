import { Brain, Wrench, TrendingUp, Zap } from "lucide-react";

const WhatYoullLearn = () => {
  const learningPoints = [
    {
      icon: Brain,
      title: "AI Mastery Unveiled",
      description: "Dive into advanced AI concepts, moving beyond basics to understand its real-world power."
    },
    {
      icon: Wrench,
      title: "Build with Confidence",
      description: "Create AI products, agents, and workflows through hands-on exercises, sparking your innovation."
    },
    {
      icon: TrendingUp,
      title: "Career Edge",
      description: "Gain insights into leveraging AI for internships, jobs, and industry relevance."
    },
    {
      icon: Zap,
      title: "Empowered Transformation",
      description: "Leave equipped with knowledge to build multiple AI solutions, ready to lead your AI journey."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              What You'll Master & Achieve
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {learningPoints.map((point, index) => (
              <div 
                key={index} 
                className="flex items-start gap-4 animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex-shrink-0 p-3 bg-gradient-to-r from-primary to-accent rounded-full shadow-lg shadow-primary/30">
                  <point.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    {point.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center animate-fade-in">
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-xl p-8">
              <p className="text-lg md:text-xl text-foreground leading-relaxed font-medium">
                Walk in with little AI knowledge, walk out transformed armed with skills to build agents, 
                workflows, and products. In just 3-4 hours, you'll shift from novice to a confident creator, 
                ready to shape your future!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYoullLearn;