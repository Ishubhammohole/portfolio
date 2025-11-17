import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap, DollarSign, Zap, Users, Award } from "lucide-react";

const experiences = [
  {
    type: "work",
    title: "Full Stack Developer",
    company: "Infosys",
    location: "Pune, Maharashtra, India",
    period: "2022 - 2024",
    achievements: [
      {
        text: "Built a multi-functional payment system employing a microservice architecture, yielding usage of 10k bank customers and reducing annual costs by $500k",
        icon: DollarSign,
        highlight: "$500k"
      },
      {
        text: "Optimized database performance by introducing MySQL read replicas and database indexes, resulting in a 90% reduction in query response time",
        icon: Zap,
        highlight: "90%"
      },
      {
        text: "Led development of instant payment deposit feature with Java, reducing processing time from 3-4 hours to 10-12 minutes",
        icon: Zap,
        highlight: "10-12 min"
      },
      {
        text: "Executed stability initiative by configuring liveness and readiness probes across 18 Java microservices",
        icon: Award,
        highlight: "18"
      },
      {
        text: "Developed comprehensive unit test cases achieving 98% code coverage using JUnit and Mockito",
        icon: Award,
        highlight: "98%"
      }
    ],
    skills: ["Java", "Spring Boot", "Angular", "React", "MySQL", "Redis", "Docker", "Kubernetes", "Jenkins"]
  },
  {
    type: "education",
    title: "Master's in Computer Science",
    company: "University at Buffalo",
    location: "Buffalo, New York, United States",
    period: "Aug 2024 - Present",
    achievements: [
      {
        text: "Relevant Coursework: Algorithms, Computer Security, Machine Learning, Deep Learning, Computer Vision, Operating Systems",
        icon: GraduationCap,
        highlight: ""
      },
      {
        text: "Working on diffusion models, anomaly detection using autoencoders, and contributing to open-source (DjangoCRM)",
        icon: Users,
        highlight: ""
      }
    ],
    skills: ["Python", "TensorFlow", "PyTorch", "OpenCV", "AI/ML", "Computer Vision"]
  }
];

export function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
            {experiences.map((exp, index) => (
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
