import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { SiJavascript, SiTypescript, SiReact, SiAngular, SiPython, SiSpring, SiDocker, SiKubernetes, SiJenkins, SiAmazonwebservices, SiMysql, SiPostgresql, SiRedis, SiMongodb, SiTensorflow, SiPytorch, SiOpencv, SiOracle, SiFramer, SiTailwindcss } from "react-icons/si";
import { Coffee, Code, Database, Cloud } from "lucide-react";
import { Card } from "../ui/card";
import { profile } from "../../content/profile";

// Default icon mapping for common skills
const getSkillIcon = (skillName: string) => {
  const iconMap: { [key: string]: any } = {
    'javascript': SiJavascript,
    'typescript': SiTypescript,
    'react': SiReact,
    'angular': SiAngular,
    'python': SiPython,
    'java': Coffee,
    'spring': SiSpring,
    'spring boot': SiSpring,
    'docker': SiDocker,
    'kubernetes': SiKubernetes,
    'jenkins': SiJenkins,
    'aws': SiAmazonwebservices,
    'mysql': SiMysql,
    'postgresql': SiPostgresql,
    'redis': SiRedis,
    'mongodb': SiMongodb,
    'tensorflow': SiTensorflow,
    'pytorch': SiPytorch,
    'opencv': SiOpencv,
    'oracle': SiOracle,
    'framer motion': SiFramer,
    'tailwind': SiTailwindcss,
    'tailwind css': SiTailwindcss,
  };
  
  const key = skillName.toLowerCase();
  return iconMap[key] || Code; // Default to Code icon
};

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Convert profile skills to the format expected by the component
  const skillCategories = Object.entries(profile.skills)
    .filter(([_, skills]) => skills.length > 0)
    .map(([category, skills]) => ({
      category,
      skills: skills.map(skill => ({
        name: skill,
        icon: getSkillIcon(skill)
      }))
    }));

  return (
    <section id="skills" className="py-24 px-6 lg:px-8 relative" ref={ref}>
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-16 text-center"
          data-testid="text-skills-heading"
        >
          Skills & Technologies
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.length > 0 ? skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-lg font-semibold mb-4 text-primary" data-testid={`text-category-${category.category.toLowerCase().replace(/\//g, '-')}`}>
                {category.category}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                  >
                    <Card className="p-3 border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:bg-card/70 transition-all duration-200" data-testid={`card-skill-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}>
                      <div className="flex items-center gap-3">
                        <skill.icon className="h-5 w-5 text-primary" />
                        <span className="text-sm font-medium">{skill.name}</span>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )) : (
            <div className="col-span-full text-center text-muted-foreground">
              <p>Please update the skills in profile.ts</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
