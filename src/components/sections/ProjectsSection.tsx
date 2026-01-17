import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Github, ExternalLink } from "lucide-react";
import { profile } from "../../content/profile";
import rippleImage from "/images/projects/ripple-policy-simulator.png";
import llmImage from "/images/projects/text-to-image-system.png";
import devSyncImage from "/images/projects/devsync-platform.png";
import microservicesImage from "/images/projects/microservices-platform.png";
import ratelimiterImage from "/images/projects/microservices-platform.png"; // Reuse existing image

// Map project titles to images
const getProjectImage = (title: string) => {
  const imageMap: { [key: string]: string } = {
    "Ripple Policy Simulator (UB Hacking 2025)": rippleImage,
    "LLM-Powered Text-to-Image System": llmImage,
    "DevSync AI — Autonomous Release Coordinator": devSyncImage,
    "Distributed Rate Limiter — Production-Grade Service": ratelimiterImage,
    "Open Source Contribution — DjangoCRM": microservicesImage, // Reuse existing image
  };
  return imageMap[title] || microservicesImage; // Default fallback
};

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 px-6 lg:px-8 bg-card relative" ref={ref}>
      <div className="absolute inset-0 cyber-grid opacity-50" />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-4xl lg:text-5xl font-bold mb-12 text-center"
          data-testid="text-projects-heading"
        >
          Featured Projects
        </motion.h2>

        <div className="space-y-16">
          {profile.projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card
                className="overflow-hidden hover-elevate border-primary/20"
                data-testid={`card-project-${project.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className={`grid md:grid-cols-2 gap-0 ${index % 2 === 1 ? "md:grid-flow-dense" : ""}`}>
                  <div className={`${index % 2 === 1 ? "md:col-start-2" : ""}`}>
                    <img
                      src={getProjectImage(project.title)}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      data-testid={`img-project-${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold mb-4" data-testid={`text-project-title-${project.title.toLowerCase().replace(/\s+/g, '-')}`}>
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="bg-primary/5 border-primary/30 text-primary"
                          data-testid={`badge-tech-${tech.toLowerCase().replace(/\s+/g, '-')}`}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" size="sm" data-testid={`button-github-${project.title.toLowerCase().replace(/\s+/g, '-')}`}>
                            <Github className="mr-2 h-4 w-4" />
                            Code
                          </Button>
                        </a>
                      )}
                      {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" size="sm" data-testid={`button-demo-${project.title.toLowerCase().replace(/\s+/g, '-')}`}>
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Live Demo
                          </Button>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
