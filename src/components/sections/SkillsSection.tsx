import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiAngular,
  SiPython,
  SiSpring,
  SiDocker,
  SiKubernetes,
  SiJenkins,
  SiAmazonwebservices,
  SiMysql,
  SiPostgresql,
  SiRedis,
  SiMongodb,
  SiTensorflow,
  SiPytorch,
  SiOpencv,
  SiOracle,
  SiTailwindcss
} from "react-icons/si";
import { Activity, Boxes, Cloud, Coffee, Code, Database, Gauge, Network, ShieldCheck } from "lucide-react";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { profile } from "../../content/profile";

const getSkillIcon = (skillName: string) => {
  const iconMap: Record<string, any> = {
    javascript: SiJavascript,
    typescript: SiTypescript,
    react: SiReact,
    angular: SiAngular,
    python: SiPython,
    java: Coffee,
    spring: SiSpring,
    "spring boot": SiSpring,
    docker: SiDocker,
    kubernetes: SiKubernetes,
    jenkins: SiJenkins,
    aws: SiAmazonwebservices,
    mysql: SiMysql,
    postgresql: SiPostgresql,
    redis: SiRedis,
    mongodb: SiMongodb,
    tensorflow: SiTensorflow,
    pytorch: SiPytorch,
    opencv: SiOpencv,
    oracle: SiOracle,
    "tailwind css": SiTailwindcss,
    "distributed systems": Network,
    observability: Activity,
    concurrency: Boxes,
    "rest apis": Code,
    microservices: Boxes,
    "load testing": Gauge,
    "chaos engineering": ShieldCheck
  };

  const key = skillName.toLowerCase();
  return iconMap[key] || Code;
};

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = Object.entries(profile.skills)
    .filter(([category, skills]) => category !== "featured" && Array.isArray(skills) && skills.length > 0)
    .map(([category, skills]) => ({
      category,
      skills: skills.map((skill) => ({
        name: skill,
        icon: getSkillIcon(skill)
      }))
    }));

  return (
    <section id="skills" className="py-24 px-6 lg:px-8 relative" ref={ref}>
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center"
          data-testid="text-skills-heading"
        >
          Skills & Technologies
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          The strongest emphasis is on backend systems, distributed infrastructure, and production engineering, while preserving full-stack and AI/ML breadth.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-12"
        >
          <Card className="p-6 border-primary/10 bg-card/45 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-5">
              <Cloud className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-semibold text-primary">Priority Engineering Stack</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {profile.skills.featured.map((skill) => (
                <Badge
                  key={skill}
                  variant="outline"
                  className="px-4 py-2 text-sm bg-primary/8 border-primary/20 text-primary"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.08 }}
            >
              <Card className="h-full p-5 border-border/50 bg-card/45 backdrop-blur-sm">
                <h3
                  className="text-lg font-semibold mb-4 text-primary"
                  data-testid={`text-category-${category.category.toLowerCase().replace(/\//g, "-")}`}
                >
                  {category.category}
                </h3>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.35, delay: categoryIndex * 0.1 + skillIndex * 0.04 }}
                    >
                      <div
                        className="rounded-xl border border-border/50 bg-background/45 p-3 hover:border-primary/40 hover:bg-background/60 transition-all duration-200"
                        data-testid={`card-skill-${skill.name.toLowerCase().replace(/\s+/g, "-")}`}
                      >
                        <div className="flex items-center gap-3">
                          <skill.icon className="h-5 w-5 text-primary" />
                          <span className="text-sm font-medium">{skill.name}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
