import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { profile } from "../../content/profile";

export function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 px-6 lg:px-8 relative" ref={ref}>
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-16 text-center"
          data-testid="text-experience-heading"
        >
          Experience
        </motion.h2>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30" />

          <div className="space-y-8">
            {profile.experience.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${index}`}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.18 }}
                className="relative pl-20"
              >
                <div className="absolute left-5 top-6 w-6 h-6 rounded-full bg-primary border-4 border-background" />

                <Card
                  className="p-6 border-border/50 bg-card/50 backdrop-blur-sm"
                  data-testid={`card-experience-${exp.company.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-4 mb-5">
                    <Briefcase className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h3 className="text-xl font-bold" data-testid={`text-title-${exp.company.toLowerCase().replace(/\s+/g, "-")}`}>
                        {exp.title}
                      </h3>
                      <p className="text-primary font-semibold">{exp.company}</p>
                      <p className="text-sm text-muted-foreground">{exp.location}</p>
                    </div>
                    <Badge variant="outline" className="bg-primary/10 border-primary/30 text-primary md:self-start w-fit">
                      {exp.duration}
                    </Badge>
                  </div>

                  <ul className="space-y-3 mb-5">
                    {exp.bullets.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex gap-3 text-sm" data-testid={`text-achievement-${achIndex}`}>
                        <Briefcase className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className="text-xs bg-background/60 border-border/60 text-foreground"
                        data-testid={`badge-skill-${skill.toLowerCase().replace(/\//g, "-")}`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
