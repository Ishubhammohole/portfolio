import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Github, ExternalLink, GitPullRequest, ArrowRight, Sparkles } from "lucide-react";
import { profile, type FeaturedProject } from "../../content/profile";
import { ProjectDetailDialog } from "./ProjectDetailDialog";

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const renderFeaturedProjectCard = (project: FeaturedProject, index: number) => {
    const isFlagship = index === 0;

    return (
      <motion.div
        key={project.title}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.25 + index * 0.1 }}
      >
        <Card
          className={`overflow-hidden border-primary/10 bg-card/50 backdrop-blur-sm transition-all duration-300 ${
            isFlagship ? "shadow-[0_0_0_1px_rgba(16,185,129,0.18),0_24px_60px_rgba(0,0,0,0.24)]" : "hover-elevate"
          }`}
        >
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-0">
            <div className="p-8 md:p-10 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <Badge className="bg-primary/12 border border-primary/20 text-primary">
                  {project.highlight}
                </Badge>
                <Badge variant="outline" className="bg-background/40 border-primary/15 text-primary font-mono text-sm">
                  {project.timeframe}
                </Badge>
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">
                  {project.title}
                </h3>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">{project.summary}</p>
              </div>

              <div className="grid sm:grid-cols-3 gap-3">
                {project.detail.benchmarks.map((metric) => (
                  <div key={metric.label} className="rounded-xl border border-border/60 bg-background/65 p-4">
                    <div className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground mb-2">{metric.label}</div>
                    <div className="text-xl font-mono font-semibold text-primary">{metric.value}</div>
                    <div className="text-xs text-muted-foreground mt-2 leading-relaxed">{metric.hint}</div>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                {project.highlights.map((highlight) => (
                  <div key={highlight} className="flex items-start gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                    <p className="text-muted-foreground leading-relaxed">{highlight}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="outline" className="bg-primary/5 border-primary/20 text-primary text-sm">
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <ProjectDetailDialog project={project} />
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="hover:border-primary hover:text-primary transition-colors">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                  </a>
                )}
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="hover:border-primary hover:text-primary transition-colors">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                  </a>
                )}
              </div>
            </div>

            <div className="border-t lg:border-t-0 lg:border-l border-border/60 bg-background/45 p-8 md:p-10 flex flex-col justify-between gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-sm font-medium text-primary">
                  <Sparkles className="h-4 w-4" />
                  Why it matters
                </div>
                <p className="text-muted-foreground leading-relaxed">{project.detail.architectureOverview}</p>
              </div>

              <div className="space-y-4">
                <div className="text-sm font-medium text-primary">System highlights</div>
                <div className="space-y-3">
                  {project.detail.callouts.map((callout) => (
                    <div key={callout.label} className="flex items-center justify-between gap-4 rounded-xl border border-border/60 bg-card/45 px-4 py-3">
                      <span className="text-sm text-muted-foreground">{callout.label}</span>
                      <span className="text-sm font-semibold text-foreground">{callout.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-primary/10 bg-gradient-to-br from-primary/10 via-background/30 to-background/10 p-5">
                <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-primary mb-3">System Flow</div>
                <div className="space-y-3">
                  {project.detail.systemFlow.slice(0, 3).map((step) => (
                    <div key={step} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                      <ArrowRight className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>
    );
  };

  const renderOpenSourceCard = (project: (typeof profile.projects.openSource)[number], index: number) => (
    <motion.div
      key={project.title}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
    >
      <Card className="p-8 hover-elevate border-primary/10 bg-card/50 backdrop-blur-sm transition-all duration-300">
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            {project.merged && (
              <Badge className="bg-primary/12 border border-primary/20 text-primary">
                Merged Open Source Contribution
              </Badge>
            )}
            <Badge variant="outline" className="bg-background/40 border-primary/20 text-primary font-mono text-sm">
              {project.timeframe}
            </Badge>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-foreground leading-tight mb-3">{project.title}</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">{project.summary}</p>
          </div>

          <div className="space-y-4">
            {project.highlights.map((highlight) => (
              <div key={highlight} className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                <p className="text-muted-foreground leading-relaxed">{highlight}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="outline" className="bg-primary/5 border-primary/20 text-primary text-sm">
                {tech}
              </Badge>
            ))}
          </div>

          <div className="flex gap-3 pt-2">
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm" className="hover:border-primary hover:text-primary transition-colors">
                  <GitPullRequest className="mr-2 h-4 w-4" />
                  View Merged PR
                </Button>
              </a>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );

  return (
    <section id="projects" className="py-24 px-6 lg:px-8 bg-card/30 relative" ref={ref}>
      <div className="absolute inset-0 cyber-grid opacity-20" />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center"
        >
          Featured Projects
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-muted-foreground max-w-3xl mx-auto mb-16 leading-relaxed"
        >
          The portfolio now leads with backend and distributed systems case studies first, while still preserving AI/ML and full-stack depth across the broader project set.
        </motion.p>

        <div className="space-y-10 mb-24">
          {profile.projects.featured.map((project, index) => renderFeaturedProjectCard(project, index))}
        </div>

        <div className="space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center gap-6 mb-12"
          >
            <h3 className="text-2xl font-bold text-primary">Open Source</h3>
            <div className="flex-1 h-px bg-gradient-to-r from-primary/30 to-transparent" />
          </motion.div>
          <div className="grid gap-10">
            {profile.projects.openSource.map((project, index) => renderOpenSourceCard(project, index))}
          </div>
        </div>
      </div>
    </section>
  );
}
