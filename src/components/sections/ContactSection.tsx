import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { useToast } from "../../hooks/use-toast";
import { profile } from "../../content/profile";

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-24 px-6 lg:px-8 relative" ref={ref}>
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-16 text-center"
          data-testid="text-contact-heading"
        >
          Get In Touch
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="p-8 border-primary/10 bg-card/50 backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-foreground">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    data-testid="input-name"
                    className="bg-background/50 border-border/50 focus:border-primary focus:ring-primary/20"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-foreground">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    data-testid="input-email"
                    className="bg-background/50 border-border/50 focus:border-primary focus:ring-primary/20"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="block text-sm font-medium text-foreground">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  required
                  data-testid="input-subject"
                  className="bg-background/50 border-border/50 focus:border-primary focus:ring-primary/20"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-foreground">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or opportunity..."
                  rows={6}
                  required
                  data-testid="input-message"
                  className="bg-background/50 border-border/50 focus:border-primary focus:ring-primary/20 resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-3"
                data-testid="button-submit"
              >
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>

            <div className="mt-8 pt-8 border-t border-border/50">
              <p className="text-center text-muted-foreground mb-6">
                Or connect with me on
              </p>
              <div className="flex justify-center gap-4">
                {profile.contact.github && (
                  <a href={profile.contact.github} target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full hover:border-primary hover:text-primary hover:bg-primary/10 transition-colors"
                      data-testid="button-github"
                    >
                      <Github className="h-5 w-5" />
                    </Button>
                  </a>
                )}
                {profile.contact.linkedin && (
                  <a href={profile.contact.linkedin} target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full hover:border-primary hover:text-primary hover:bg-primary/10 transition-colors"
                      data-testid="button-linkedin"
                    >
                      <Linkedin className="h-5 w-5" />
                    </Button>
                  </a>
                )}
                {profile.contact.email && (
                  <a href={`mailto:${profile.contact.email}`}>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full hover:border-primary hover:text-primary hover:bg-primary/10 transition-colors"
                      data-testid="button-email"
                    >
                      <Mail className="h-5 w-5" />
                    </Button>
                  </a>
                )}
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
