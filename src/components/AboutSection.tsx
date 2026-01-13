import { motion } from "framer-motion";
import heroImage from "@/assets/hero-interior.jpg";

const stats = [
  { value: "150+", label: "Projects Completed" },
  { value: "8+", label: "Years Experience" },
  { value: "50+", label: "Happy Clients" },
  { value: "15+", label: "Design Awards" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden aspect-[4/5]">
              <img
                src={heroImage}
                alt="Our studio"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
            </div>
            
            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-8 -right-8 lg:-right-12 bg-card border border-border p-8 max-w-xs"
            >
              <div className="grid grid-cols-2 gap-6">
                {stats.slice(0, 2).map((stat) => (
                  <div key={stat.label}>
                    <span className="font-display text-3xl text-accent block">
                      {stat.value}
                    </span>
                    <span className="text-xs uppercase tracking-widest text-muted-foreground">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-body uppercase tracking-[0.3em] text-accent mb-4 block">
              About Us
            </span>
            <h2 className="font-display text-4xl lg:text-5xl text-primary mb-8">
              Crafting Visions Into Reality
            </h2>
            
            <div className="space-y-6 text-muted-foreground font-light leading-relaxed">
              <p>
                We specialize in high-quality 3D visualization and interior design 
                solutions that bring concepts to life before execution.
              </p>
              <p>
                Our designs focus on realism, functionality, and luxury, helping 
                clients visualize their spaces with clarity and confidence. From 
                residential to commercial interiors, we deliver designs that elevate 
                spaces and inspire living.
              </p>
              <p>
                Founded by a team of passionate architects and designers, Atelier Luxe 
                has grown to become a trusted partner for discerning clients seeking 
                excellence in spatial design and visualization.
              </p>
            </div>

            {/* Additional Stats */}
            <div className="grid grid-cols-2 gap-8 mt-12 pt-12 border-t border-border">
              {stats.slice(2).map((stat) => (
                <div key={stat.label}>
                  <span className="font-display text-4xl text-accent block mb-2">
                    {stat.value}
                  </span>
                  <span className="text-sm uppercase tracking-widest text-muted-foreground">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
