import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, MapPin } from "lucide-react";
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

      <div className="max-w-6xl w-full relative z-10">
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
              fetchPriority="high"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              {profile.hero.eyebrow}
            </div>

            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight max-w-5xl"
              data-testid="text-name"
            >
              {profile.displayName}
            </h1>

            <div className="flex flex-wrap justify-center gap-3 max-w-3xl">
              {profile.hero.chips.map((chip) => (
                <span
                  key={chip}
                  className="px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm font-medium"
                >
                  {chip}
                </span>
              ))}
            </div>

            <p
              className="text-xl md:text-2xl text-foreground/95 max-w-4xl leading-relaxed font-medium"
              data-testid="text-tagline"
            >
              {profile.headline}
            </p>

            <p className="text-base md:text-lg text-muted-foreground max-w-3xl leading-relaxed">
              {profile.hero.subtitle}
            </p>

            <div className="flex flex-wrap justify-center gap-3 max-w-4xl pt-1">
              {profile.hero.quickTags.slice(0, 8).map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border/70 bg-card/55 px-3 py-1.5 text-sm text-foreground/90 backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-muted-foreground">
              <div className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                {profile.location}
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-3 py-1 text-primary">
                {profile.hero.recruiterCta}
              </div>
            </div>
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
              <a href={profile.resume.url} download="Shubham_Mohole_Resume.pdf" target="_blank" rel="noreferrer">
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
