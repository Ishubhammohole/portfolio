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
      <div className="absolute inset-0 cyber-grid opacity-30" />
      <div className="max-w-7xl mx-auto relative z-10">
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
          {skillCategories.length > 0 ? skillCategories.map((category, categoryIndex) => (
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
                    <Card className="p-4 hover-elevate active-elevate-2 cursor-pointer border-primary/20" data-testid={`card-skill-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}>
                      <div className="flex items-center gap-3">
                        <skill.icon className="h-6 w-6 text-primary" />
                        <span className="font-mono text-sm">{skill.name}</span>
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
