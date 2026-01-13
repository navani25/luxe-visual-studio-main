import { motion } from "framer-motion";
import { Box, Palette, Maximize, Image } from "lucide-react";

const services = [
  {
    icon: Box,
    title: "3D Visualization",
    description:
      "Photorealistic 3D renders that bring your design concepts to life with stunning accuracy and detail.",
  },
  {
    icon: Palette,
    title: "Interior Design",
    description:
      "Comprehensive interior design services from concept to completion, creating spaces that inspire.",
  },
  {
    icon: Maximize,
    title: "Space Planning",
    description:
      "Strategic spatial layouts that optimize functionality, flow, and aesthetic harmony.",
  },
  {
    icon: Image,
    title: "Architectural Rendering",
    description:
      "High-end architectural visualizations that communicate vision with clarity and impact.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-20"
        >
          <span className="text-xs font-body uppercase tracking-[0.3em] text-accent mb-4 block">
            What We Do
          </span>
          <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl text-primary mb-6">
            Our Services
          </h2>
          <p className="text-muted-foreground text-lg font-light leading-relaxed">
            Our designs focus on realism, functionality, and luxury, helping clients 
            visualize their spaces with clarity and confidence.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group p-8 lg:p-10 border border-border bg-card hover:border-accent/50 transition-all duration-500"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center border border-accent/30 text-accent group-hover:bg-accent group-hover:text-background transition-all duration-500">
                  <service.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display text-2xl text-primary mb-3 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
