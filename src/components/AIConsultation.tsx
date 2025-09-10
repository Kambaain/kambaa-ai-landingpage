import { Clock, Users, Gift } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import classroomBg from "@/assets/classroom-background.jpg";
const AIConsultation = () => {
  const features = [{
    icon: Clock,
    title: "4 Hours",
    description: "Comprehensive session"
  }, {
    icon: Users,
    title: "Expert Led",
    description: "AI Industry Professionals"
  }, {
    icon: Gift,
    title: "Completely Free",
    description: "Worth ₹1999"
  }];
  return <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${classroomBg})`
    }} />
      <div className="absolute inset-0 bg-background/95" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">What is the AI Ignite Workshop?</h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              This free masterclass, brought to you by <span className="text-blue-600 font-semibold">Kambaa AI</span>, is designed for students like you who are new to AI. 
              Whether you've never heard of artificial intelligence or only know the basics, this 4 hour session will open your 
              eyes to a world of opportunity. Hosted by industry experts, it's your first step toward becoming an AI innovator, 
              <span className="font-semibold"> no experience required!</span>
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {features.map((feature, index) => <Card key={index} className="bg-background border-border hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group animate-fade-in" style={{
            animationDelay: `${index * 200}ms`
          }}>
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="p-4 bg-blue-100 rounded-full">
                      <feature.icon className="w-8 h-8 text-blue-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </div>
    </section>;
};
export default AIConsultation;