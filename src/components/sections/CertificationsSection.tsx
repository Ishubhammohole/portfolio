import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { ExternalLink, Award, ChevronLeft, ChevronRight } from "lucide-react";
import { profile } from "../../content/profile";

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
    <section id="certifications" className="py-24 px-6 lg:px-8 relative" ref={ref}>
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-16 text-center"
          data-testid="text-certifications-heading"
        >
          Certifications & Awards
        </motion.h2>

        <div className="relative">
          {canScrollLeft && (
            <Button
              variant="outline"
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/90 backdrop-blur-sm border-border/50"
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
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/90 backdrop-blur-sm border-border/50"
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
            {profile.certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex-none w-80 snap-start"
              >
                <Card className="p-6 h-full border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:bg-card/70 transition-all duration-200" data-testid={`card-cert-${index}`}>
                  <div className="flex items-start gap-3 mb-4">
                    <Award className="h-6 w-6 text-primary flex-shrink-0" />
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-1 leading-tight" data-testid={`text-cert-title-${index}`}>
                        {cert.name}
                      </h3>
                      <p className="text-sm text-primary font-semibold">{cert.issuer}</p>
                      <p className="text-xs text-muted-foreground">Issued {cert.date}</p>
                    </div>
                  </div>

                  {cert.credentialId && (
                    <p className="text-xs text-muted-foreground font-mono mb-4 truncate" data-testid={`text-credential-${index}`}>
                      ID: {cert.credentialId}
                    </p>
                  )}

                  {cert.url && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-primary/30 hover:bg-primary/10 hover:border-primary/50"
                      data-testid={`button-credential-${index}`}
                      onClick={() => window.open(cert.url, '_blank')}
                    >
                      <ExternalLink className="mr-2 h-3 w-3" />
                      View Credential
                    </Button>
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
