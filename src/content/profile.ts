// Canonical profile data - source of truth for all content
export const profile = {
  // Identity
  displayName: "Shubham Mohole",
  fullLegalName: "Shubham Mahesh Mohole",
  pronouns: "He/Him",
  headline: "M.S. in Computer Science @ SUNY Buffalo | Full Stack + GenAI Developer | 2+ YOE @ Infosys | OCI GenAI Certified",
  location: "San Francisco, California, United States",

  // Contact
  contact: {
    email: "shumoh2000@gmail.com",
    phone: "+1 (716) 398 9180",
    linkedin: "https://www.linkedin.com/in/shubham-mohole-245a501b2/",
    github: "https://github.com/Ishubhammohole",
  },

  // Education
  education: [
    {
      institution: "University at Buffalo (SUNY Buffalo)",
      degree: "M.S. in Computer Science",
      duration: "Aug 2024 – Dec 2025",
      gpa: "3.7/4",
      location: "Buffalo, NY",
    },
    {
      institution: "University of Pune / Savitribai Phule Pune University",
      degree: "Bachelor of Engineering",
      duration: "Aug 2018 – May 2022",
      gpa: "8.7/10",
      location: "Pune, India",
    },
  ],

  // Experience
  experience: [
    {
      title: "Research Assistant (Robotics & AI)",
      company: "University at Buffalo",
      duration: "Aug 2025 – Present",
      location: "Buffalo, NY",
      bullets: [
        "Analyzed navigation failures in quadruped robots caused by sensor noise, environmental uncertainty, and sim-to-real gaps",
        "Built data processing and feature extraction pipelines fusing chemical, state, and motion signals to improve generalization in unseen environments",
        "Designed controlled experiments and robustness evaluations to benchmark learned policies across simulated and real-world deployments",
        "Collaborated with research and engineering teams to translate experimental insights into deployable system improvements",
      ],
    },
    {
      title: "Software Developer / Full Stack Developer",
      company: "Infosys Ltd",
      duration: "Nov 2022 – Jun 2024",
      location: "Pune, India",
      bullets: [
        "Built/optimized Java/Spring Boot microservices supporting automated loan approval workflows; improved onboarding time by 25% across 5M+ daily transactions",
        "Integrated external credit APIs; reduced approval time from 14 days to under 1 hour",
        "Optimized MySQL + Redis caching; achieved 90% performance gains and P99 latency of ~40ms on large datasets",
        "Added monitoring/structured logging and shipped changes safely via CI/CD",
      ],
    },
    {
      title: "Software Engineer Intern (Robotics AI Lab)",
      company: "PMS Robotics Lab",
      duration: "May 2022 – Nov 2022",
      location: "Pune, India",
      bullets: [
        "Developed ML-based control algorithms and simulation frameworks for robotic navigation across varied terrain",
      ],
    },
  ],

  // Projects
  projects: [
    {
      title: "Distributed Rate Limiter — Production-Grade Service",
      duration: "Jan 2026",
      description: "Redis + Lua for atomic enforcement across instances. Algorithms: token bucket, fixed window, sliding window log, sliding window counter (Strategy pattern). Observability: Prometheus metrics + structured logging. Resilience: fail-open behavior for safe degradation.",
      technologies: ["Redis", "Lua", "Prometheus", "Docker"],
      githubUrl: "",
      liveUrl: "",
    },
    {
      title: "DevSync AI — Autonomous Release Coordinator",
      duration: "Aug – Sep 2025",
      description: "Integrates GitHub + JIRA + Slack. Automates sprint updates, release notes, changelog generation. Deployed with Docker + CI/CD.",
      technologies: ["TypeScript", "GitHub API", "JIRA API", "Slack API", "Docker"],
      githubUrl: "https://github.com/DevSync-AI/kiro-devsync-ai",
      liveUrl: "",
    },
    {
      title: "LLM-Powered Text-to-Image System",
      duration: "Jan 2025 – Apr 2025",
      description: "Built Stable Diffusion pipeline + LoRA fine-tuning; improved output quality by ~25%. Human-in-the-loop prompt iteration and evaluation workflow.",
      technologies: ["Python", "PyTorch", "Stable Diffusion", "LoRA"],
      githubUrl: "https://github.com/Ishubhammohole/Text-to-Image-Generation",
      liveUrl: "",
    },
    {
      title: "Open Source Contribution — DjangoCRM",
      duration: "May – Jun 2025",
      description: "Refactored email constants into admin-managed singleton settings with permission checks.",
      technologies: ["Python", "Django"],
      githubUrl: "https://github.com/DjangoCRM/django-crm/pull/229",
      liveUrl: "",
    },
    {
      title: "Ripple Policy Simulator (UB Hacking 2025)",
      duration: "Oct 2025",
      description: "Monte Carlo simulation for policy tradeoffs. Adjustable policy levers + real-time Monte Carlo simulations with confidence intervals. AI-powered insights (Gemini) for equity/sustainability analysis.",
      technologies: ["React", "Monte Carlo", "Gemini AI"],
      githubUrl: "https://lnkd.in/dskJ7AQf",
      liveUrl: "https://lnkd.in/dXeWAJQM",
    },
  ],

  // Skills
  skills: {
    "Programming Languages": ["Java", "Python", "TypeScript", "JavaScript", "C++"],
    "Frontend Technologies": ["React", "Angular", "HTML/CSS", "Tailwind CSS"],
    "Backend Technologies": ["Spring Boot", "Node.js", "Express.js", "FastAPI"],
    "Databases": ["MySQL", "PostgreSQL", "Redis", "MongoDB"],
    "Cloud & DevOps": ["Docker", "Kubernetes", "Jenkins", "CI/CD", "AWS", "Oracle OCI"],
    "AI/ML": ["PyTorch", "TensorFlow", "Stable Diffusion", "OpenCV", "Scikit-learn"],
    "Tools & Frameworks": ["Git", "JIRA", "Prometheus", "JUnit", "Mockito"],
  },

  // Certifications
  certifications: [
    {
      name: "Oracle OCI 2025 Foundations Associate",
      issuer: "Oracle",
      date: "2025",
    },
    {
      name: "OCI 2025 AI Foundations Associate",
      issuer: "Oracle",
      date: "2025",
    },
    {
      name: "OCI 2025 Generative AI Professional",
      issuer: "Oracle",
      date: "2025",
    },
    {
      name: "McKinsey.org Forward Program",
      issuer: "McKinsey & Company",
      date: "Dec 2025",
    },
  ],

  // About
  about: {
    summary: `I'm a Master's student in Computer Science at the University at Buffalo with 2+ years of professional experience as a Full-Stack Developer at Infosys. Currently working as a Research Assistant in Robotics & AI, focusing on quadruped robot navigation and sim-to-real transfer learning.

At Infosys, I built and optimized Java/Spring Boot microservices supporting automated loan approval workflows, handling 5M+ daily transactions. I integrated external credit APIs, reducing approval time from 14 days to under 1 hour, and achieved 90% performance gains through MySQL + Redis optimization.

My current research involves analyzing navigation failures in quadruped robots, building data processing pipelines, and designing robustness evaluations for learned policies across simulated and real-world deployments.`,
  },
};

export type Profile = typeof profile;