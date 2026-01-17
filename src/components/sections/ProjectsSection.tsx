import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Github, ExternalLink, GitPullRequest } from "lucide-react";
import { profile } from "../../content/profile";

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const renderProjectCard = (project: any, index: number, sectionDelay: number = 0) => (
    <motion.div
      key={project.title}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: sectionDelay + index * 0.1 }}
    >
      <Card className="p-8 hover-elevate border-primary/20 bg-card/50 backdrop-blur-sm">
        <div className="space-y-6">
          {/* Header */}
          <div>
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-2xl font-bold text-foreground">
                {project.title}
              </h3>
              <Badge variant="outline" className="bg-primary/5 border-primary/30 text-primary font-mono text-sm">
                {project.timeframe}
              </Badge>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Highlights */}
          <div className="space-y-3">
            {project.highlights.map((highlight: string, idx: number) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <p className="text-muted-foreground leading-relaxed">{highlight}</p>
              </div>
            ))}
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech: string) => (
              <Badge
                key={tech}
                variant="outline"
                className="bg-primary/5 border-primary/30 text-primary"
              >
                {tech}
              </Badge>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-3 pt-2">
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm" className="hover:border-primary hover:text-primary">
                  {project.githubUrl.includes('/pull/') ? (
                    <>
                      <GitPullRequest className="mr-2 h-4 w-4" />
                      View PR
                    </>
                  ) : (
                    <>
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </>
                  )}
                </Button>
              </a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm" className="hover:border-primary hover:text-primary">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </Button>
              </a>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );

  return (
    <section id="projects" className="py-24 px-6 lg:px-8 bg-card relative" ref={ref}>
      <div className="absolute inset-0 cyber-grid opacity-50" />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-4xl lg:text-5xl font-bold mb-16 text-center"
        >
          Featured Projects
        </motion.h2>

        {/* Featured Projects */}
        <div className="space-y-12 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-2xl font-bold text-primary">Featured Projects</h3>
              <div className="flex-1 h-px bg-gradient-to-r from-primary/50 to-transparent" />
            </div>
            <div className="grid gap-8">
              {profile.projects.featured.map((project, index) => 
                renderProjectCard(project, index, 0.3)
              )}
            </div>
          </motion.div>
        </div>

        {/* Open Source */}
        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-2xl font-bold text-primary">Open Source</h3>
              <div className="flex-1 h-px bg-gradient-to-r from-primary/50 to-transparent" />
            </div>
            <div className="grid gap-8">
              {profile.projects.openSource.map((project, index) => 
                renderProjectCard(project, index, 0.8)
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
