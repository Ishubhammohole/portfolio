import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { ExternalLink, Award, ChevronLeft, ChevronRight, Calendar, Hash } from "lucide-react";
import { profile } from "../../content/profile";

export function CertificationsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [showAll, setShowAll] = useState(false);

  const displayedCertifications = showAll ? profile.certifications : profile.certifications.slice(0, 6);

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

        {/* Grid layout for better responsiveness */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {displayedCertifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:bg-card/70 transition-all duration-200" data-testid={`card-cert-${index}`}>
                <div className="flex items-start gap-3 mb-4">
                  <Award className="h-6 w-6 text-primary flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-1 leading-tight" data-testid={`text-cert-title-${index}`}>
                      {cert.name}
                    </h3>
                    <p className="text-sm text-primary font-semibold">{cert.authority || cert.issuer}</p>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  {cert.issuedOn && (
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      <span>Issued: {cert.issuedOn}</span>
                    </div>
                  )}
                  {cert.expiresOn && (
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      <span>Expires: {cert.expiresOn}</span>
                    </div>
                  )}
                  {cert.credentialId && (
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Hash className="h-3 w-3" />
                      <span className="truncate">ID: {cert.credentialId}</span>
                    </div>
                  )}
                </div>

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

        {/* Show More/Less Button */}
        {profile.certifications.length > 6 && (
          <div className="text-center">
            <Button
              variant="outline"
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-2"
            >
              {showAll ? "Show Less" : `Show All ${profile.certifications.length} Certifications`}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
