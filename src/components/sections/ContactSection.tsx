import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Github, Linkedin, Mail, MapPin, Send, FileText, Clock3, CalendarDays } from "lucide-react";
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

    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:${profile.contact.email}?subject=${subject}&body=${body}`;

    toast({
      title: "Opening your email client...",
      description: "Your default email application should open with the message pre-filled."
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const contactCards = [
    { label: "Email", value: profile.contact.email, href: `mailto:${profile.contact.email}`, icon: Mail },
    { label: "GitHub", value: "github.com/Ishubhammohole", href: profile.contact.github, icon: Github },
    { label: "LinkedIn", value: "LinkedIn Profile", href: profile.contact.linkedin, icon: Linkedin },
    { label: "Resume", value: "Download Resume", href: profile.resume.url, icon: FileText },
    { label: "Location", value: profile.location, href: "", icon: MapPin },
    { label: "Availability", value: profile.contact.availability, href: "", icon: Clock3 }
  ];

  return (
    <section id="contact" className="py-24 px-6 lg:px-8 relative" ref={ref}>
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center"
          data-testid="text-contact-heading"
        >
          Get In Touch
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <p className="text-lg text-foreground leading-relaxed">
            {profile.hero.recruiterCta}
          </p>
          <p className="text-muted-foreground mt-3">
            Best fit: backend SWE, platform engineering, full-stack product engineering, and AI infrastructure teams building production systems.
          </p>
        </motion.div>

        <div className="grid xl:grid-cols-[0.95fr_1.05fr] gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <Card className="p-6 border-primary/10 bg-card/50 backdrop-blur-sm">
              <div className="space-y-3 mb-6">
                <div className="text-sm uppercase tracking-[0.24em] text-primary">Contact Overview</div>
                <h3 className="text-2xl font-semibold">Let&apos;s talk about production engineering work</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I&apos;m especially interested in teams working on scalable backend services, developer platforms, distributed infrastructure, and AI-enabled products with real operational complexity.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {contactCards.map((item) => {
                  const Icon = item.icon;
                  const content = (
                    <div className="rounded-xl border border-border/60 bg-background/55 p-4 h-full hover:border-primary/35 transition-colors">
                      <div className="flex items-start gap-3">
                        <Icon className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <div className="text-sm font-medium text-foreground">{item.label}</div>
                          <div className="text-sm text-muted-foreground leading-relaxed">{item.value}</div>
                        </div>
                      </div>
                    </div>
                  );

                  return item.href ? (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={item.label}>{content}</div>
                  );
                })}
              </div>

              <div className="mt-6 rounded-xl border border-dashed border-primary/25 bg-primary/5 p-4">
                <div className="flex items-center gap-2 mb-2 text-primary font-medium">
                  <CalendarDays className="h-4 w-4" />
                  Future Calendly Support
                </div>
                <p className="text-sm text-muted-foreground">
                  Placeholder ready for easy Calendly integration when needed.
                </p>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
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
                    placeholder="Backend role, platform team, project collaboration..."
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
                    placeholder="Tell me about the team, the role, or the backend/distributed systems problem you&apos;re hiring for..."
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
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
