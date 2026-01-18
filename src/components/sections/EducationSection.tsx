import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { GraduationCap, BookOpen } from "lucide-react";
import { profile } from "../../content/profile";

export function EducationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-24 px-6 lg:px-8 relative" ref={ref}>
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-16 text-center"
          data-testid="text-education-heading"
        >
          Education
        </motion.h2>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30" />

          <div className="space-y-8">
            {profile.education.map((edu, index) => (
              <motion.div
                key={`${edu.institution}-${index}`}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative pl-20"
              >
                <div className="absolute left-5 top-6 w-6 h-6 rounded-full bg-primary border-4 border-background" />

                <Card className="p-6 border-border/50 bg-card/50 backdrop-blur-sm" data-testid={`card-education-${edu.institution.toLowerCase().replace(/\s+/g, '-')}`}>
                  <div className="flex items-start gap-4 mb-4">
                    <GraduationCap className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h3 className="text-xl font-bold" data-testid={`text-degree-${index}`}>
                        {edu.degree}
                      </h3>
                      <p className="text-primary font-semibold">{edu.institution}</p>
                      <p className="text-sm text-muted-foreground">{edu.location}</p>
                      <Badge variant="outline" className="mt-2 bg-primary/10 border-primary/30 text-primary">
                        {edu.duration}
                      </Badge>
                    </div>
                  </div>

                  <div className="flex gap-3 text-sm mb-4">
                    <GraduationCap className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      GPA: <span className="text-primary font-semibold">{edu.gpa}</span>
                    </span>
                  </div>

                  {/* Coursework section for MS degree */}
                  {edu.coursework && (
                    <div className="mt-6 pt-4 border-t border-border/50">
                      <div className="flex items-center gap-2 mb-4">
                        <BookOpen className="h-4 w-4 text-primary" />
                        <h4 className="font-semibold text-primary">Relevant Coursework</h4>
                      </div>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {Object.entries(edu.coursework).map(([semester, courses]) => (
                          <div key={semester} className="space-y-2">
                            <h5 className="font-medium text-sm text-foreground">{semester}</h5>
                            <ul className="space-y-1">
                              {courses.map((course, courseIndex) => (
                                <li key={courseIndex} className="text-xs text-muted-foreground">
                                  • {course}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
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