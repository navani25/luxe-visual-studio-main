import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import projectResidential1 from "@/assets/project-residential-1.jpg";
import projectResidential2 from "@/assets/project-residential-2.jpg";
import projectCommercial1 from "@/assets/project-commercial-1.jpg";
import projectCommercial2 from "@/assets/project-commercial-2.jpg";
import projectOffice1 from "@/assets/project-office-1.jpg";

const categories = ["All", "Residential", "Commercial", "Office"];

const projects = [
  {
    id: 1,
    title: "Modern Living Suite",
    category: "Residential",
    image: projectResidential1,
    description: "Minimalist bedroom design with warm natural tones",
  },
  {
    id: 2,
    title: "The Bronze Restaurant",
    category: "Commercial",
    image: projectCommercial1,
    description: "Fine dining interior with dramatic lighting",
  },
  {
    id: 3,
    title: "Executive Office",
    category: "Office",
    image: projectOffice1,
    description: "Premium workspace with panoramic views",
  },
  {
    id: 4,
    title: "Marble Sanctuary",
    category: "Residential",
    image: projectResidential2,
    description: "Spa-inspired bathroom with sculptural elements",
  },
  {
    id: 5,
    title: "Grand Hotel Lobby",
    category: "Commercial",
    image: projectCommercial2,
    description: "Luxury hospitality with timeless elegance",
  },
];

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-body uppercase tracking-[0.3em] text-accent mb-4 block">
            Portfolio
          </span>
          <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl text-primary mb-6">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg font-light">
            From residential to commercial interiors, we deliver designs that elevate 
            spaces and inspire living.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-2 lg:gap-4 mb-12 flex-wrap"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 text-xs uppercase tracking-widest transition-all duration-300 border ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-transparent text-muted-foreground border-border hover:border-primary/50 hover:text-primary"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden aspect-[4/5] mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-background/0 group-hover:bg-background/60 transition-all duration-500 flex items-center justify-center">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-center px-6"
                    >
                      <p className="text-primary/80 text-sm mb-4 font-light">
                        {project.description}
                      </p>
                      <span className="inline-flex items-center gap-2 text-accent text-xs uppercase tracking-widest">
                        View Project <ArrowUpRight className="w-4 h-4" />
                      </span>
                    </motion.div>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-[10px] uppercase tracking-widest bg-background/90 text-primary">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <h3 className="font-display text-xl text-primary group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
