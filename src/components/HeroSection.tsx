import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "./ui/button";
import heroImage from "@/assets/hero-interior.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury interior design"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 lg:px-12 pt-24">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-block text-xs font-body uppercase tracking-[0.3em] text-accent border border-accent/30 px-4 py-2">
              3D Visualization & Interior Design
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[1.1] tracking-tight text-primary mb-8"
          >
            Designing Spaces
            <br />
            <span className="text-accent">That Define Luxury</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg lg:text-xl text-muted-foreground max-w-2xl mb-12 font-light leading-relaxed"
          >
            We specialize in high-quality 3D visualization and interior design solutions 
            that bring concepts to life before execution. Realism, creativity, and precision 
            in every render.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button variant="luxury" size="lg" className="group">
              View Projects
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="luxuryOutline" size="lg" className="group">
              <Play className="w-4 h-4" />
              Watch Showreel
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-widest text-muted-foreground">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-px h-12 bg-gradient-to-b from-accent to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
