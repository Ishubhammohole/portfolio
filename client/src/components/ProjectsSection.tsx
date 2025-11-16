import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";
import rippleImage from "@assets/generated_images/Ripple_Policy_Simulator_dashboard_1810abab.png";
import llmImage from "@assets/generated_images/LLM_Text-to-Image_system_interface_d00506e4.png";
import devSyncImage from "@assets/generated_images/DevSync_AI_platform_interface_11d6b569.png";
import microservicesImage from "@assets/generated_images/Microservices_architecture_diagram_visualization_f22f0478.png";

const projects = [
  {
    title: "Ripple Policy Simulator",
    description: "Built a financial policy simulation platform enabling banks to model and analyze transaction scenarios. Implemented real-time data visualization and risk assessment algorithms, processing 10k+ simulations daily.",
    image: rippleImage,
    tags: ["React", "Spring Boot", "PostgreSQL", "Docker"],
    github: "#",
    demo: "#",
  },
  {
    title: "LLM-Powered Text-to-Image System",
    description: "Developed an AI system leveraging diffusion models for high-quality image generation from text prompts. Integrated fine-tuned Stable Diffusion models with custom prompt engineering pipeline.",
    image: llmImage,
    tags: ["Python", "PyTorch", "Stable Diffusion", "FastAPI"],
    github: "#",
    demo: "#",
  },
  {
    title: "DevSync AI",
    description: "Created an AI-powered development collaboration tool with intelligent code suggestions and automated code review. Integrated GPT-4 for context-aware recommendations and bug detection.",
    image: devSyncImage,
    tags: ["TypeScript", "React", "OpenAI API", "Node.js"],
    github: "#",
    demo: "#",
  },
  {
    title: "Infosys Microservices Platform",
    description: "Architected and deployed 12+ microservices handling 5M+ daily transactions for GT Bank. Reduced annual costs by $500k through optimization and achieved 99.9% uptime with Kubernetes orchestration.",
    image: microservicesImage,
    tags: ["Java", "Spring Boot", "Kubernetes", "Redis", "MySQL"],
    github: "#",
    demo: "#",
  },
];

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 px-6 lg:px-8 bg-card" ref={ref}>
      <div className="max-w-7xl mx-auto">
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
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card
                className={`overflow-hidden hover-elevate ${
                  index % 2 === 0 ? "" : ""
                }`}
                data-testid={`card-project-${project.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className={`grid md:grid-cols-2 gap-0 ${index % 2 === 1 ? "md:grid-flow-dense" : ""}`}>
                  <div className={`${index % 2 === 1 ? "md:col-start-2" : ""}`}>
                    <img
                      src={project.image}
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
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="bg-primary/5 border-primary/30 text-primary"
                          data-testid={`badge-tech-${tag.toLowerCase().replace(/\s+/g, '-')}`}
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <Button variant="outline" size="sm" data-testid={`button-github-${project.title.toLowerCase().replace(/\s+/g, '-')}`}>
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Button>
                      <Button variant="outline" size="sm" data-testid={`button-demo-${project.title.toLowerCase().replace(/\s+/g, '-')}`}>
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Button>
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
