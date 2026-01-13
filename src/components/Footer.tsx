import { motion } from "framer-motion";
import { Instagram, Linkedin, Twitter, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-16 lg:py-24 bg-background border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#home" className="font-display text-2xl tracking-tight text-primary mb-4 block">
              Atelier<span className="text-accent">Luxe</span>
            </a>
            <p className="text-muted-foreground font-light max-w-sm mb-6">
              Premium 3D visualization and interior design studio. Transforming visions 
              into stunning realities.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center border border-border text-muted-foreground hover:border-accent hover:text-accent transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center border border-border text-muted-foreground hover:border-accent hover:text-accent transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center border border-border text-muted-foreground hover:border-accent hover:text-accent transition-all"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-6">
              Navigation
            </h4>
            <ul className="space-y-3">
              {["Home", "Projects", "Services", "About", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-primary hover:text-accent transition-colors font-light"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {[
                "3D Visualization",
                "Interior Design",
                "Space Planning",
                "Architectural Rendering",
              ].map((service) => (
                <li key={service}>
                  <span className="text-primary font-light">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border gap-4">
          <p className="text-muted-foreground text-sm font-light">
            © 2024 Atelier Luxe. All rights reserved.
          </p>
          
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -2 }}
            className="flex items-center gap-2 text-sm uppercase tracking-widest text-muted-foreground hover:text-accent transition-colors"
          >
            Back to Top
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
