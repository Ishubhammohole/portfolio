// Canonical profile data - source of truth for all content
export const profile = {
  // Identity
  displayName: "Shubham Mohole",
  fullLegalName: "Shubham Mahesh Mohole",
  pronouns: "He/Him",
  headline: "M.S. in Computer Science @ SUNY Buffalo | Full Stack + GenAI Developer | 2+ YOE @ Infosys | OCI GenAI Certified",
  location: "San Francisco, California, United States",

  // Resume
  resume: {
    label: "Download Resume",
    url: "/shubham_mohole_resume.pdf"
  },

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
      coursework: {
        "Fall 2024": [
          "CSE 531: Algorithms Analysis and Design I",
          "CSE 565: Computer Security",
          "CSE 574: Introduction to Machine Learning",
          "CSE 587: Data Intensive Computing"
        ],
        "Spring 2025": [
          "CSE 521: Operating Systems",
          "CSE 560: Data Models and Query Languages",
          "CSE 676: Deep Learning",
          "MGO 665: Technological Entrepreneurship"
        ],
        "Fall 2025": [
          "CSE 573: Computer Vision & Image Processing",
          "EAS 507: Statistical Data Mining II"
        ]
      }
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
  projects: {
    featured: [
      {
        title: "Distributed Rate Limiter — Production-Grade Service",
        timeframe: "Jan 2026",
        summary: "Production-ready distributed rate limiting service with multiple algorithm support",
        highlights: [
          "Built Redis + Lua for atomic enforcement across instances",
          "Implemented token bucket, fixed window, sliding window log, sliding window counter using Strategy pattern",
          "Added Prometheus metrics + structured logging with fail-open behavior for safe degradation"
        ],
        technologies: ["Redis", "Lua", "Prometheus", "Docker"],
        githubUrl: "",
        liveUrl: "",
      },
      {
        title: "DevSync AI — Autonomous Release Coordinator",
        timeframe: "Aug – Sep 2025",
        summary: "AI-powered development workflow automation integrating GitHub, JIRA, and Slack",
        highlights: [
          "Integrates GitHub + JIRA + Slack APIs for seamless workflow automation",
          "Automates sprint updates, release notes, and changelog generation",
          "Deployed with Docker + CI/CD for reliable production deployment"
        ],
        technologies: ["TypeScript", "GitHub API", "JIRA API", "Slack API", "Docker"],
        githubUrl: "https://github.com/DevSync-AI/kiro-devsync-ai",
        liveUrl: "",
      },
      {
        title: "LLM-Powered Text-to-Image System",
        timeframe: "Jan – Apr 2025",
        summary: "Advanced AI image generation system with fine-tuned Stable Diffusion models",
        highlights: [
          "Built Stable Diffusion pipeline + LoRA fine-tuning infrastructure",
          "Improved output quality by ~25% through custom training techniques",
          "Implemented human-in-the-loop prompt iteration and evaluation workflow"
        ],
        technologies: ["Python", "PyTorch", "Stable Diffusion", "LoRA"],
        githubUrl: "https://github.com/Ishubhammohole/Text-to-Image-Generation",
        liveUrl: "",
      },
      {
        title: "Ripple Policy Simulator (UB Hacking 2025)",
        timeframe: "Oct 2025",
        summary: "Monte Carlo simulation platform for analyzing policy tradeoffs and impacts",
        highlights: [
          "Built adjustable policy levers with real-time Monte Carlo simulations",
          "Implemented confidence intervals for statistical accuracy",
          "Integrated AI-powered insights (Gemini) for equity/sustainability analysis"
        ],
        technologies: ["React", "Monte Carlo", "Gemini AI"],
        githubUrl: "https://lnkd.in/dskJ7AQf",
        liveUrl: "https://lnkd.in/dXeWAJQM",
      },
    ],
    openSource: [
      {
        title: "Open Source — DjangoCRM",
        timeframe: "May – Jun 2025",
        summary: "Enhanced email configuration management for Django CRM system",
        highlights: [
          "Refactored email constants into admin-managed singleton settings",
          "Added permission checks for secure configuration management",
          "Improved system maintainability and administrative control"
        ],
        technologies: ["Python", "Django"],
        githubUrl: "https://github.com/DjangoCRM/django-crm/pull/229",
        liveUrl: "",
      },
    ],
  },

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
      name: "Infosys Certified MySQL Associate",
      issuer: "Infosys",
      authority: "Infosys",
      url: undefined,
      credentialId: undefined,
      issuedOn: undefined,
      expiresOn: undefined,
    },
    {
      name: "Infosys Global Agile Developer Certification",
      issuer: "Infosys",
      authority: "Infosys",
      url: undefined,
      credentialId: undefined,
      issuedOn: undefined,
      expiresOn: undefined,
    },
    {
      name: "Infosys Certified Java SE8 Developer",
      issuer: "Infosys",
      authority: "Infosys",
      url: undefined,
      credentialId: undefined,
      issuedOn: undefined,
      expiresOn: undefined,
    },
    {
      name: "1Z0-1127-25 - Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
      issuer: "Oracle",
      authority: "Oracle",
      url: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=9D49F135F5D96561D49BA70B7C1517EC7E354E0012823B76FCF3F6C4DB2E77CB",
      credentialId: "451c849f-0554-47fe-aa8c-6a1c71ac14c6",
      issuedOn: "Jul 2025",
      expiresOn: "Jul 2027",
    },
    {
      name: "1Z0-1122-25 - Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
      issuer: "Oracle",
      authority: "Oracle",
      url: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=9CF66227B7D1D15099FA3F21161DC53B0F8A30D242ADC3D43090D453DB140600",
      credentialId: "4a508fec-a387-448e-bdbb-8e29697263f9",
      issuedOn: "Jul 2025",
      expiresOn: "Jul 2027",
    },
    {
      name: "1Z0-1085-25 - Oracle Cloud Infrastructure 2025 Foundations Associate",
      issuer: "Oracle",
      authority: "Oracle",
      url: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=A12D02CB850BA92E7056AFA5F28D099ED8FE453E45CD70BB82D30A76CE022093",
      credentialId: "ce89fea4-5ec2-4a5a-85c3-e88c1a78e3c3",
      issuedOn: "Jul 2025",
      expiresOn: "Jul 2027",
    },
    {
      name: "Certificate of Appreciation: Speaker (Data structures & Algorithms)",
      issuer: "University at Buffalo",
      authority: "University at Buffalo",
      url: undefined,
      credentialId: undefined,
      issuedOn: "May 2025",
      expiresOn: undefined,
    },
    {
      name: "Certificate of Appreciation: Speaker (Hands-on MySQL)",
      issuer: "University at Buffalo",
      authority: "University at Buffalo",
      url: undefined,
      credentialId: undefined,
      issuedOn: "May 2025",
      expiresOn: undefined,
    },
    {
      name: "Certificate of Appreciation: Event Manager (CSE Workshop)",
      issuer: "University at Buffalo",
      authority: "University at Buffalo",
      url: undefined,
      credentialId: undefined,
      issuedOn: "May 2025",
      expiresOn: undefined,
    },
    {
      name: "McKinsey.org Forward Program",
      issuer: "McKinsey & Company",
      authority: "McKinsey & Company",
      url: "https://www.credly.com/badges/bf26abe3-c7c2-4276-8789-7773ca3995b9/linked_in_profile",
      credentialId: undefined,
      issuedOn: "Dec 2025",
      expiresOn: undefined,
    },
  ],

  // About
  about: {
    summary: "MS Computer Science student at University at Buffalo with 2+ years as Full-Stack Developer at Infosys. Experienced in building scalable microservices, AI/ML systems, and cloud infrastructure.",
    bullets: [
      "At UB: Exploring AI/ML, Computer Vision, Security, and Systems with hands-on work in diffusion models and anomaly detection using autoencoders",
      "At Infosys: Built and deployed 12+ Java/Spring Boot microservices powering 5M+ daily financial transactions with Angular/React frontends",
      "Infrastructure: Optimized MySQL/Redis performance and deployed high-availability systems using Docker, Kubernetes, Jenkins, and CI/CD",
      "Open Source: Active contributor to projects like DjangoCRM, focusing on system improvements and maintainability"
    ],
    lookingFor: "Open to full-time roles and internships in backend development, cloud engineering, or AI systems."
  },
};

export type Profile = typeof profile;