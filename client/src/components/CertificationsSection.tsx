import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Award, ChevronLeft, ChevronRight } from "lucide-react";

const certifications = [
  {
    title: "Oracle Cloud Infrastructure 2025 Foundations Associate",
    issuer: "Oracle",
    date: "Issued Jul 2025",
    credentialId: "ce89fea4-5ec2-4a5a-85c3-e88c1a78e3c3",
    skills: ["Cloud Computing", "OCI", "IAM", "Cloud Governance"],
    credentialUrl: "#"
  },
  {
    title: "Oracle Cloud Infrastructure 2025 AI Foundations Associate",
    issuer: "Oracle",
    date: "Issued Jul 2025",
    credentialId: "4a508fec-a387-448e-bdbb-8e29697263f9",
    skills: ["AI Fundamentals", "OCI AI Services", "Model Evaluation"],
    credentialUrl: "#"
  },
  {
    title: "Oracle Cloud Infrastructure 2025 Generative AI Professional",
    issuer: "Oracle",
    date: "Issued Jul 2025",
    credentialId: "451c849f-0554-47fe-aa8c-6a1c71ac14c6",
    skills: ["RAG Pipelines", "LangChain", "Vector Search", "OCI Gen AI"],
    credentialUrl: "#"
  },
  {
    title: "Certificate of Appreciation: Event Manager (CSE Workshop)",
    issuer: "University at Buffalo",
    date: "Issued May 2025",
    credentialId: "",
    skills: ["Event Management", "Project Coordination", "Docker"],
    credentialUrl: "#"
  }
];

export function CertificationsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
      setTimeout(checkScroll, 100);
    }
  };

  return (
    <section id="certifications" className="py-24 px-6 lg:px-8 bg-card" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-4xl lg:text-5xl font-bold mb-12 text-center"
          data-testid="text-certifications-heading"
        >
          Certifications & Awards
        </motion.h2>

        <div className="relative">
          {canScrollLeft && (
            <Button
              variant="outline"
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm"
              onClick={() => scroll("left")}
              data-testid="button-scroll-left"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
          )}

          {canScrollRight && (
            <Button
              variant="outline"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm"
              onClick={() => scroll("right")}
              data-testid="button-scroll-right"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          )}

          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.credentialId || cert.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-none w-80 snap-start"
              >
                <Card className="p-6 h-full hover-elevate" data-testid={`card-cert-${index}`}>
                  <div className="flex items-start gap-3 mb-4">
                    <Award className="h-6 w-6 text-primary flex-shrink-0" />
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-1 leading-tight" data-testid={`text-cert-title-${index}`}>
                        {cert.title}
                      </h3>
                      <p className="text-sm text-primary font-semibold">{cert.issuer}</p>
                      <p className="text-xs text-muted-foreground">{cert.date}</p>
                    </div>
                  </div>

                  {cert.credentialId && (
                    <p className="text-xs text-muted-foreground font-mono mb-4 truncate" data-testid={`text-credential-${index}`}>
                      ID: {cert.credentialId}
                    </p>
                  )}

                  <div className="flex flex-wrap gap-2 mb-4">
                    {cert.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className="text-xs bg-primary/5 border-primary/30 text-primary"
                        data-testid={`badge-cert-skill-${skill.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    data-testid={`button-credential-${index}`}
                  >
                    <ExternalLink className="mr-2 h-3 w-3" />
                    View Credential
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
