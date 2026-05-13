import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Award, Calendar, Hash } from "lucide-react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { profile } from "../../content/profile";

export function CertificationsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showAll, setShowAll] = useState(false);
  const displayedCertifications = showAll ? profile.certifications : profile.certifications.slice(0, 6);

  return (
    <section id="certifications" className="py-20 px-6 lg:px-8 relative" ref={ref}>
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center"
          data-testid="text-certifications-heading"
        >
          Certifications & Awards
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-muted-foreground max-w-3xl mx-auto mb-12"
        >
          Supporting credentials and recognition that complement the stronger experience and systems-project narrative above.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {displayedCertifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.45, delay: index * 0.06 }}
            >
              <Card className="p-4 h-full border-border/50 bg-card/45 backdrop-blur-sm hover:border-primary/35 transition-all duration-200" data-testid={`card-cert-${index}`}>
                <div className="flex items-start gap-3 mb-3">
                  <Award className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="font-semibold text-base leading-snug" data-testid={`text-cert-title-${index}`}>
                      {cert.name}
                    </h3>
                    <p className="text-xs text-primary font-semibold mt-1">{cert.authority || cert.issuer}</p>
                  </div>
                </div>

                <div className="space-y-2 mb-4 text-xs text-muted-foreground">
                  {cert.issuedOn && (
                    <div className="flex items-center gap-2">
                      <Calendar className="h-3 w-3" />
                      <span>Issued: {cert.issuedOn}</span>
                    </div>
                  )}
                  {cert.expiresOn && (
                    <div className="flex items-center gap-2">
                      <Calendar className="h-3 w-3" />
                      <span>Expires: {cert.expiresOn}</span>
                    </div>
                  )}
                  {cert.credentialId && (
                    <div className="flex items-center gap-2">
                      <Hash className="h-3 w-3" />
                      <span className="truncate">ID: {cert.credentialId}</span>
                    </div>
                  )}
                </div>

                {cert.url && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-primary/20 hover:bg-primary/10 hover:border-primary/40"
                    data-testid={`button-credential-${index}`}
                    onClick={() => window.open(cert.url, "_blank")}
                  >
                    <ExternalLink className="mr-2 h-3 w-3" />
                    View Credential
                  </Button>
                )}
              </Card>
            </motion.div>
          ))}
        </div>

        {profile.certifications.length > 6 && (
          <div className="text-center">
            <Button variant="outline" onClick={() => setShowAll(!showAll)} className="px-6 py-2">
              {showAll ? "Show Less" : `Show All ${profile.certifications.length} Certifications`}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
