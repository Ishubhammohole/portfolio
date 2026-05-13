import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Badge } from "../ui/badge";
import { Card } from "../ui/card";
import { profile } from "../../content/profile";

export function EngineeringFocusSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="focus" className="py-14 px-6 lg:px-8 relative" ref={ref}>
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center space-y-4"
        >
          <Badge className="bg-primary/10 text-primary border border-primary/20 px-3 py-1">
            Engineering Focus
          </Badge>
          <h2 className="text-2xl md:text-3xl font-bold">
            Production-minded backend systems with strong AI application depth
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The portfolio still reflects full-stack and AI/ML breadth, but the clearest signal is
            backend engineering for scalable systems, reliable workflows, and observable services.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
          {profile.engineeringFocus.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.1 + index * 0.06 }}
            >
              <Card className="h-full p-5 border-primary/10 bg-card/40 backdrop-blur-sm hover:border-primary/40 transition-all duration-300">
                <div className="space-y-3">
                  <h3 className="font-semibold text-lg text-foreground">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
