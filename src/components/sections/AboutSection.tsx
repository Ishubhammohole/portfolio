import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Badge } from "../ui/badge";
import { profile } from "../../content/profile";

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Get all skills from profile and flatten them
  const allSkills = Object.values(profile.skills).flat().filter(skill => skill.length > 0);

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
            className="space-y-6"
          >
            <p className="text-lg text-foreground leading-relaxed" data-testid="text-about-bio">
              {profile.about.summary}
            </p>
            
            <div className="space-y-4">
              {profile.about.bullets.map((bullet, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground leading-relaxed">{bullet}</p>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-border">
              <p className="text-primary font-medium">{profile.about.lookingFor}</p>
            </div>
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
              {allSkills.length > 0 ? allSkills.slice(0, 12).map((skill, index) => (
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
              )) : (
                <p className="text-muted-foreground">Please update the skills in profile.ts</p>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
