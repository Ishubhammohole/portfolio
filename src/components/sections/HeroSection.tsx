import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "../ui/button";
import { profile } from "../../content/profile";
import profileImage from "/images/profile.jpg";

export function HeroSection() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 lg:px-8 pt-16 relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />
      
      <div className="max-w-5xl w-full relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-full bg-primary/10 blur-2xl" />
            <img
              src={profileImage}
              alt={profile.displayName}
              className="relative w-40 h-40 rounded-full object-cover ring-2 ring-primary/20"
              data-testid="img-profile"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight"
              data-testid="text-name"
            >
              {profile.displayName}
            </h1>

            <div className="flex flex-wrap justify-center gap-3 max-w-3xl">
              <span className="px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm font-medium">
                Full Stack + GenAI Developer
              </span>
              <span className="px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm font-medium">
                M.S. in Computer Science @ SUNY Buffalo
              </span>
              <span className="px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm font-medium">
                2+ YOE @ Infosys | OCI GenAI Certified
              </span>
            </div>

            <p
              className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
              data-testid="text-tagline"
            >
              Building high-impact, scalable solutions across FinTech, AI/ML, and Cloud Infrastructure
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button
              onClick={scrollToContact}
              data-testid="button-contact"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3"
            >
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>
            <Button asChild variant="outline" data-testid="button-resume" className="px-6 py-3">
              <a href={profile.resume.url} download target="_blank" rel="noreferrer">
                <Download className="mr-2 h-4 w-4" />
                {profile.resume.label}
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex gap-4"
          >
            {profile.contact.github && (
              <a href={profile.contact.github} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  data-testid="link-github"
                  className="rounded-full hover:text-primary hover:bg-primary/10"
                >
                  <Github className="h-5 w-5" />
                </Button>
              </a>
            )}
            {profile.contact.linkedin && (
              <a href={profile.contact.linkedin} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  data-testid="link-linkedin"
                  className="rounded-full hover:text-primary hover:bg-primary/10"
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
              </a>
            )}
            {profile.contact.email && (
              <a href={`mailto:${profile.contact.email}`}>
                <Button
                  variant="ghost"
                  size="icon"
                  data-testid="link-email"
                  className="rounded-full hover:text-primary hover:bg-primary/10"
                >
                  <Mail className="h-5 w-5" />
                </Button>
              </a>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
