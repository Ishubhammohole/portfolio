import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";

const topSkills = [
  "JavaScript",
  "React.js",
  "Python",
  "Java",
  "Spring Boot",
  "AI/ML",
  "Docker",
  "Kubernetes",
  "AWS",
  "PostgreSQL"
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 px-6 lg:px-8 bg-card relative" ref={ref}>
      <div className="absolute inset-0 cyber-grid opacity-50" />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-4xl lg:text-5xl font-bold mb-12 text-center"
          data-testid="text-about-heading"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <p className="text-lg text-foreground leading-relaxed" data-testid="text-about-bio">
              I'm Shubham Mohole, a Master's student in Computer Science at the University at Buffalo, with 2+ years of professional experience as a Full-Stack Developer at Infosys.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At UB, I'm diving deeper into AI/ML, Computer Vision, Security, and Systems — with hands-on work in diffusion models, anomaly detection using autoencoders, and open-source development (contributions to DjangoCRM).
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Infosys, I built and deployed over 12 scalable Java/Spring Boot microservices powering 5M+ daily financial transactions. I also led frontend development using Angular and React, collaborated across global Agile teams, and optimized database performance using MySQL and Redis.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I've worked extensively with Docker, Kubernetes, Jenkins, and CI/CD pipelines to ensure high-availability production deployments.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-primary" data-testid="text-top-skills-heading">
              Top Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {topSkills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                >
                  <Badge
                    variant="outline"
                    className="text-base px-4 py-2 bg-primary/5 border-primary/30 text-primary hover:bg-primary/10 hover:neon-glow transition-all"
                    data-testid={`badge-skill-${skill.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                  >
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
