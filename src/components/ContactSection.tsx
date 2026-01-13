import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const whatsappNumber = "+1234567890";
  const whatsappMessage = encodeURIComponent("Hi, I'm interested in your 3D visualization services.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section id="contact" className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-body uppercase tracking-[0.3em] text-accent mb-4 block">
              Get In Touch
            </span>
            <h2 className="font-display text-4xl lg:text-5xl text-primary mb-6">
              Let's Create Something Beautiful
            </h2>
            <p className="text-muted-foreground text-lg font-light leading-relaxed mb-12">
              Ready to transform your space? Contact us to discuss your project 
              and discover how we can bring your vision to life.
            </p>

            {/* Contact Details */}
            <div className="space-y-6 mb-12">
              <a
                href="mailto:hello@atelierluxe.com"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 flex items-center justify-center border border-accent/30 text-accent group-hover:bg-accent group-hover:text-background transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-muted-foreground block">
                    Email
                  </span>
                  <span className="text-primary group-hover:text-accent transition-colors">
                    hello@atelierluxe.com
                  </span>
                </div>
              </a>

              <a href="tel:+1234567890" className="flex items-center gap-4 group">
                <div className="w-12 h-12 flex items-center justify-center border border-accent/30 text-accent group-hover:bg-accent group-hover:text-background transition-all">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-muted-foreground block">
                    Phone
                  </span>
                  <span className="text-primary group-hover:text-accent transition-colors">
                    +1 (234) 567-890
                  </span>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center border border-accent/30 text-accent">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-muted-foreground block">
                    Studio
                  </span>
                  <span className="text-primary">
                    123 Design District, Creative City
                  </span>
                </div>
              </div>
            </div>

            {/* WhatsApp Button */}
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button variant="luxury" size="lg" className="w-full sm:w-auto group">
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="text-xs uppercase tracking-widest text-muted-foreground mb-2 block"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border border-border px-4 py-4 text-primary placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="text-xs uppercase tracking-widest text-muted-foreground mb-2 block"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border border-border px-4 py-4 text-primary placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="projectType"
                  className="text-xs uppercase tracking-widest text-muted-foreground mb-2 block"
                >
                  Project Type
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                  className="w-full bg-background border border-border px-4 py-4 text-primary focus:outline-none focus:border-accent transition-colors appearance-none cursor-pointer"
                >
                  <option value="">Select project type</option>
                  <option value="residential">Residential</option>
                  <option value="commercial">Commercial</option>
                  <option value="office">Office</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="text-xs uppercase tracking-widest text-muted-foreground mb-2 block"
                >
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="w-full bg-transparent border border-border px-4 py-4 text-primary placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <Button type="submit" variant="luxury" size="lg" className="w-full group">
                Send Inquiry
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
