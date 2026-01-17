import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "../ui/button";
import profileImage from "/images/profile.jpg";

export function HeroSection() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 lg:px-8 pt-16 cyber-grid relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />
      <div className="max-w-6xl w-full relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl animate-pulse" />
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary via-primary/50 to-primary opacity-75 blur animate-pulse" />
              <img
                src={profileImage}
                alt="Shubham Mohole"
                className="relative w-48 h-48 rounded-full object-cover ring-4 ring-primary neon-glow"
                data-testid="img-profile"
              />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl lg:text-7xl font-bold mb-4 neon-text"
            data-testid="text-name"
          >
            Shubham Mahesh Mohale
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3 mb-6"
          >
            <span className="px-4 py-2 bg-primary/10 text-primary border border-primary/30 rounded-full font-mono text-sm neon-glow">
              Full-Stack Developer
            </span>
            <span className="px-4 py-2 bg-primary/10 text-primary border border-primary/30 rounded-full font-mono text-sm neon-glow">
              Master's in CS (UB)
            </span>
            <span className="px-4 py-2 bg-primary/10 text-primary border border-primary/30 rounded-full font-mono text-sm neon-glow">
              AI & Cloud Specialist
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mb-8"
            data-testid="text-tagline"
          >
            Building high-impact, scalable solutions across FinTech, AI/ML, and Cloud Infrastructure
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            <Button
              onClick={scrollToContact}
              data-testid="button-contact"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>
            <Button variant="outline" data-testid="button-resume">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex gap-4"
          >
            <a href="https://github.com/shubham-mohole" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                data-testid="link-github"
                className="rounded-full hover:text-primary hover:border-primary border border-transparent"
              >
                <Github className="h-5 w-5" />
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/shubham-mohole-245a501b2/" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                data-testid="link-linkedin"
                className="rounded-full hover:text-primary hover:border-primary border border-transparent"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
            </a>
            <a href="mailto:shubhammohole@example.com">
              <Button
                variant="ghost"
                size="icon"
                data-testid="link-email"
                className="rounded-full hover:text-primary hover:border-primary border border-transparent"
              >
                <Mail className="h-5 w-5" />
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
