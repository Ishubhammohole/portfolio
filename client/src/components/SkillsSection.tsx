import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { SiJavascript, SiTypescript, SiReact, SiAngular, SiNodedotjs, SiPython, SiSpring, SiDocker, SiKubernetes, SiJenkins, SiAmazonwebservices, SiMysql, SiPostgresql, SiRedis, SiMongodb, SiTensorflow, SiPytorch, SiOpencv, SiOracle } from "react-icons/si";
import { Coffee } from "lucide-react";
import { Card } from "@/components/ui/card";

const skillCategories = [
  {
    category: "Frontend",
    skills: [
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "React", icon: SiReact },
      { name: "Angular", icon: SiAngular },
    ],
  },
  {
    category: "Backend/DevOps",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Java", icon: Coffee },
      { name: "Spring Boot", icon: SiSpring },
      { name: "Docker", icon: SiDocker },
      { name: "Kubernetes", icon: SiKubernetes },
      { name: "Jenkins", icon: SiJenkins },
    ],
  },
  {
    category: "AI/ML/Cloud",
    skills: [
      { name: "Python", icon: SiPython },
      { name: "TensorFlow", icon: SiTensorflow },
      { name: "PyTorch", icon: SiPytorch },
      { name: "OpenCV", icon: SiOpencv },
      { name: "Oracle OCI", icon: SiOracle },
      { name: "AWS", icon: SiAmazonwebservices },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "MySQL", icon: SiMysql },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Redis", icon: SiRedis },
      { name: "MongoDB", icon: SiMongodb },
    ],
  },
];

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 px-6 lg:px-8" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-4xl lg:text-5xl font-bold mb-12 text-center"
          data-testid="text-skills-heading"
        >
          Skills & Technologies
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-xl font-bold mb-4 text-primary" data-testid={`text-category-${category.category.toLowerCase().replace(/\//g, '-')}`}>
                {category.category}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                  >
                    <Card className="p-4 hover-elevate active-elevate-2 cursor-pointer" data-testid={`card-skill-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}>
                      <div className="flex items-center gap-3">
                        <skill.icon className="h-6 w-6 text-primary" />
                        <span className="font-mono text-sm">{skill.name}</span>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
