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

  // Combine experience and education from profile
  const allExperiences = [
    ...profile.experience.map(exp => ({
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
      skills: [] // Skills are handled separately in skills section
    })),
    ...profile.education.map(edu => ({
      type: "education" as const,
      title: edu.degree,
      company: edu.institution,
      location: edu.location,
      period: edu.duration,
      achievements: [
        {
          text: `GPA: ${edu.gpa}`,
          icon: GraduationCap,
          highlight: edu.gpa
        }
      ],
      skills: []
    }))
  ];

  return (
    <section id="experience" className="py-24 px-6 lg:px-8 relative" ref={ref}>
      <div className="absolute inset-0 cyber-grid opacity-30" />
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-4xl lg:text-5xl font-bold mb-12 text-center"
          data-testid="text-experience-heading"
        >
          Experience & Education
        </motion.h2>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20" />

          <div className="space-y-12">
            {allExperiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${index}`}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative pl-20"
              >
                <div className="absolute left-5 top-6 w-6 h-6 rounded-full bg-primary border-4 border-background" />

                <Card className="p-6" data-testid={`card-experience-${exp.company.toLowerCase().replace(/\s+/g, '-')}`}>
                  <div className="flex items-start gap-4 mb-4">
                    {exp.type === "work" ? (
                      <Briefcase className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    ) : (
                      <GraduationCap className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    )}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold" data-testid={`text-title-${exp.company.toLowerCase().replace(/\s+/g, '-')}`}>
                        {exp.title}
                      </h3>
                      <p className="text-primary font-semibold">{exp.company}</p>
                      <p className="text-sm text-muted-foreground">{exp.location}</p>
                      <Badge variant="outline" className="mt-2 bg-primary/5 border-primary/30 text-primary">
                        {exp.period}
                      </Badge>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-4">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex gap-3 text-sm" data-testid={`text-achievement-${achIndex}`}>
                        <achievement.icon className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 neon-glow" />
                        <span className="text-muted-foreground">
                          {achievement.highlight && (
                            <>
                              {achievement.text.split(achievement.highlight)[0]}
                              <span className="text-primary font-bold">{achievement.highlight}</span>
                              {achievement.text.split(achievement.highlight)[1]}
                            </>
                          )}
                          {!achievement.highlight && achievement.text}
                        </span>
                      </li>
                    ))}
                  </ul>

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
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
