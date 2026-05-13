import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Badge } from "../ui/badge";
import { Card } from "../ui/card";
import { profile } from "../../content/profile";

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const topSkills = profile.skills.featured;

  return (
    <section id="about" className="py-24 px-6 lg:px-8 bg-card/30 relative" ref={ref}>
      <div className="absolute inset-0 cyber-grid opacity-20" />
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-16 text-center"
          data-testid="text-about-heading"
        >
          About Me
        </motion.h2>

        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 xl:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <p className="text-lg text-foreground leading-relaxed" data-testid="text-about-bio">
              {profile.about.summary}
            </p>

            <div className="space-y-5">
              {profile.about.bullets.map((bullet, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-3 flex-shrink-0" />
                  <p className="text-muted-foreground leading-relaxed">{bullet}</p>
                </div>
              ))}
            </div>

            <Card className="p-6 border-primary/10 bg-background/55 backdrop-blur-sm">
              <div className="space-y-3">
                <div className="text-sm uppercase tracking-[0.24em] text-primary">Recruiter Signal</div>
                <p className="text-lg leading-relaxed text-foreground">{profile.about.lookingFor}</p>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary" data-testid="text-top-skills-heading">
                High-Signal Engineering Tags
              </h3>
              <div className="flex flex-wrap gap-3">
                {topSkills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.55 + index * 0.04 }}
                  >
                    <Badge
                      variant="outline"
                      className="text-sm px-4 py-2 bg-primary/5 border-primary/20 text-primary hover:bg-primary/10 transition-colors"
                      data-testid={`badge-skill-${skill.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>

            <Card className="p-6 border-border/60 bg-card/45 backdrop-blur-sm">
              <div className="space-y-5">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-primary mb-3">Current Positioning</p>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    Software engineer focused on backend architecture, distributed execution, API-driven systems, and production observability, with the ability to ship AI-powered products end to end.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-primary/10 bg-background/60 p-4">
                    <div className="text-2xl font-semibold text-primary">5M+</div>
                    <div className="text-sm text-muted-foreground">Daily fintech transactions supported</div>
                  </div>
                  <div className="rounded-xl border border-primary/10 bg-background/60 p-4">
                    <div className="text-2xl font-semibold text-primary">12+</div>
                    <div className="text-sm text-muted-foreground">Spring Boot microservices delivered</div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
