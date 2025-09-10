import { Mail, MapPin, Globe } from "lucide-react";

const SiteFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      role="contentinfo" 
      aria-labelledby="site-footer-heading"
      className="bg-secondary border-t border-border"
    >
      <h2 id="site-footer-heading" className="sr-only">Website footer</h2>
      
      <div className="max-w-[1280px] mx-auto px-[clamp(16px,4vw,40px)] py-10">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-6 md:gap-8 lg:gap-8">
          
          {/* Brand Column */}
          <div className="md:col-span-2 lg:col-span-1">
            <div className="mb-4">
              <h3 className="text-lg font-bold text-foreground mb-2">Kambaa AI</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                AI-First Solutions for Tomorrow's Enterprises
              </p>
              <img 
                src="/lovable-uploads/b18b4b03-0879-43dc-9052-0f7d7e1b568d.png" 
                alt="Kambaa AI-First Implementation Partner" 
                className="w-64 h-32 object-cover object-center rounded-lg"
              />
            </div>
          </div>

          {/* Contact Column */}
          <div className="space-y-2">
            <h4 className="text-base font-semibold text-foreground mb-4">Contact</h4>
            <ul className="flex flex-col gap-2 list-none p-0 m-0">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground leading-relaxed">
                  10th Floor, North Wing, Pricol<br />
                  Caledon Square, Avinashi Road,<br />
                  Coimbatore
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a 
                  href="mailto:contact@kambaa.ai"
                  className="text-muted-foreground hover:text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-secondary transition-colors"
                >
                  contact@kambaa.ai
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Globe className="w-4 h-4 text-primary flex-shrink-0" />
                <a 
                  href="https://www.kambaa.ai"
                  className="text-muted-foreground hover:text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-secondary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.kambaa.ai
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-2">
            <h4 className="text-base font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="flex flex-col gap-2 list-none p-0 m-0">
              <li>
                <a 
                  href="#about"
                  className="text-sm text-muted-foreground hover:text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-secondary transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#contact"
                  className="text-sm text-muted-foreground hover:text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-secondary transition-colors"
                >
                  Register
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div className="space-y-2">
            <h4 className="text-base font-semibold text-foreground mb-4">Legal</h4>
            <ul className="flex flex-col gap-2 list-none p-0 m-0">
              <li>
                <a 
                  href="/privacy-policy"
                  className="text-sm text-muted-foreground hover:text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-secondary transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a 
                  href="/terms-of-service"
                  className="text-sm text-muted-foreground hover:text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-secondary transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a 
                  href="/accessibility"
                  className="text-sm text-muted-foreground hover:text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-secondary transition-colors"
                >
                  Accessibility
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-border opacity-50 mt-6 mb-4"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 min-h-[56px]">
          <p className="text-sm text-muted-foreground text-center sm:text-left">
            © {currentYear} Kambaa Inc. All rights reserved.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <a 
              href="/privacy-policy"
              className="text-sm text-muted-foreground hover:text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-secondary transition-colors"
            >
              Privacy Policy
            </a>
            <a 
              href="/terms-of-service"
              className="text-sm text-muted-foreground hover:text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-secondary transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;