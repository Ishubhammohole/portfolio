import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Briefcase, GraduationCap, DollarSign, Zap, Users, Award } from "lucide-react";
import { profile } from "../../content/profile";

export function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Only work experience, not education
  const workExperiences = profile.experience.map(exp => ({
    type: "work" as const,
    title: exp.title,
    company: exp.company,
    location: exp.location,
    period: exp.duration,
    achievements: exp.bullets.map(bullet => ({
      text: bullet,
      icon: Briefcase,
      highlight: ""
    })),
    skills: [] as string[] // Explicitly type as string array
  }));

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
            {workExperiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${index}`}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative pl-20"
              >
                <div className="absolute left-5 top-6 w-6 h-6 rounded-full bg-primary border-4 border-background" />

                <Card className="p-6 border-border/50 bg-card/50 backdrop-blur-sm" data-testid={`card-experience-${exp.company.toLowerCase().replace(/\s+/g, '-')}`}>
                  <div className="flex items-start gap-4 mb-4">
                    <Briefcase className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h3 className="text-xl font-bold" data-testid={`text-title-${exp.company.toLowerCase().replace(/\s+/g, '-')}`}>
                        {exp.title}
                      </h3>
                      <p className="text-primary font-semibold">{exp.company}</p>
                      <p className="text-sm text-muted-foreground">{exp.location}</p>
                      <Badge variant="outline" className="mt-2 bg-primary/10 border-primary/30 text-primary">
                        {exp.period}
                      </Badge>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-4">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex gap-3 text-sm" data-testid={`text-achievement-${achIndex}`}>
                        <achievement.icon className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">
                          {achievement.highlight && (
                            <>
                              {achievement.text.split(achievement.highlight)[0]}
                              <span className="text-primary font-semibold">{achievement.highlight}</span>
                              {achievement.text.split(achievement.highlight)[1]}
                            </>
                          )}
                          {!achievement.highlight && achievement.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {exp.skills.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="outline"
                          className="text-xs bg-muted/50"
                          data-testid={`badge-skill-${skill.toLowerCase().replace(/\//g, '-')}`}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
