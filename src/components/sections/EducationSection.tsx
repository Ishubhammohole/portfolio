import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, BookOpen } from "lucide-react";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
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
                transition={{ duration: 0.6, delay: index * 0.18 }}
                className="relative pl-20"
              >
                <div className="absolute left-5 top-6 w-6 h-6 rounded-full bg-primary border-4 border-background" />

                <Card className="p-6 border-border/50 bg-card/50 backdrop-blur-sm" data-testid={`card-education-${edu.institution.toLowerCase().replace(/\s+/g, "-")}`}>
                  <div className="flex flex-col md:flex-row md:items-start gap-4 mb-5">
                    <GraduationCap className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h3 className="text-xl font-bold" data-testid={`text-degree-${index}`}>
                        {edu.degree}
                      </h3>
                      <p className="text-primary font-semibold">{edu.institution}</p>
                      <p className="text-sm text-muted-foreground">{edu.location}</p>
                    </div>
                    <div className="space-y-2">
                      <Badge variant="outline" className="bg-primary/10 border-primary/30 text-primary w-fit">
                        {edu.duration}
                      </Badge>
                      <div className="text-sm text-muted-foreground">
                        GPA: <span className="text-primary font-semibold">{edu.gpa}</span>
                      </div>
                    </div>
                  </div>

                  {edu.coursework && (
                    <div className="mt-5 pt-5 border-t border-border/50">
                      <div className="flex items-center gap-2 mb-4">
                        <BookOpen className="h-4 w-4 text-primary" />
                        <h4 className="font-semibold text-primary">Relevant Coursework</h4>
                      </div>
                      <div className="grid md:grid-cols-3 gap-4">
                        {Object.entries(edu.coursework).map(([track, courses]) => (
                          <div key={track} className="rounded-xl border border-border/60 bg-background/50 p-4">
                            <h5 className="font-medium text-sm text-foreground mb-3">{track}</h5>
                            <div className="flex flex-wrap gap-2">
                              {courses.map((course) => (
                                <Badge key={course} variant="outline" className="text-xs bg-background/70 border-border/60 text-muted-foreground whitespace-normal">
                                  {course}
                                </Badge>
                              ))}
                            </div>
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
