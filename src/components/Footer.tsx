import { Mail, Globe, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 bg-secondary border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
              Kambaa Inc.
            </h3>
            <p className="text-muted-foreground text-lg">
              AI-First Solutions for Tomorrow's Enterprises
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 mb-12 items-center">
            {/* Contact Information - Left Side */}
            <div className="lg:col-span-1 grid md:grid-cols-3 lg:grid-cols-1 gap-8 lg:pl-8">
              <div className="text-center">
                <div className="flex justify-center mb-3">
                  <div className="p-3 bg-gradient-to-r from-primary to-accent rounded-full shadow-lg shadow-primary/50">
                    <Globe className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>
                <h4 className="font-semibold text-foreground mb-2">Website</h4>
                <a 
                  href="#" 
                  className="text-primary hover:text-accent transition-colors"
                >
                  www.kambaa.com
                </a>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-3">
                  <div className="p-3 bg-gradient-to-r from-primary to-accent rounded-full shadow-lg shadow-primary/50">
                    <Mail className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>
                <h4 className="font-semibold text-foreground mb-2">Contact</h4>
                <a 
                  href="mailto:sowmya@kambaa.in" 
                  className="text-primary hover:text-accent transition-colors"
                >
                  sowmya@kambaa.in
                </a>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-3">
                  <div className="p-3 bg-gradient-to-r from-primary to-accent rounded-full shadow-lg shadow-primary/50">
                    <Phone className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>
                <h4 className="font-semibold text-foreground mb-2">Phone</h4>
                <a 
                  href="tel:+919342902895" 
                  className="text-primary hover:text-accent transition-colors"
                >
                  +9193429 02895
                </a>
              </div>
            </div>

            {/* Kambaa AI-First Partner Image - Right Side */}
            <div className="lg:col-span-2 flex justify-center lg:justify-end">
              <img 
                src="/lovable-uploads/b18b4b03-0879-43dc-9052-0f7d7e1b568d.png" 
                alt="Kambaa AI-First Implementation Partner" 
                className="w-80 h-40 object-cover object-center rounded-lg"
              />
            </div>
          </div>

          <div className="border-t border-border pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-muted-foreground text-sm">
                © 2024 Kambaa Inc. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a 
                  href="#" 
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Privacy Policy
                </a>
                <a 
                  href="#" 
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;