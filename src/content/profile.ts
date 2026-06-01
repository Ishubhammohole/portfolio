export type MetricTone = "success" | "primary" | "neutral";

export interface ProjectMetric {
  label: string;
  value: string;
  hint: string;
  tone?: MetricTone;
}

export interface ProjectDetailSection {
  title: string;
  items: string[];
}

export interface ProjectCallout {
  label: string;
  value: string;
}

export interface FeaturedProject {
  title: string;
  slug: string;
  timeframe: string;
  summary: string;
  role: string;
  highlight: string;
  highlights: string[];
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  image?: string;
  detail: {
    architectureOverview: string;
    systemFlow: string[];
    technicalChallenges: string[];
    scalingDecisions: string[];
    tradeoffs: string[];
    reliabilityFeatures: string[];
    observability: string[];
    benchmarks: ProjectMetric[];
    screenshots: string[];
    stack: string[];
    callouts: ProjectCallout[];
  };
}

export const profile = {
  displayName: "Shubham Mohole",
  fullLegalName: "Shubham Mahesh Mohole",
  pronouns: "He/Him",
  headline: "Software Engineer focused on scalable backend systems, distributed infrastructure, and AI-powered applications",
  location: "San Francisco, California, United States",

  hero: {
    eyebrow: "Backend & Distributed Systems Engineer",
    chips: [
      "M.S. in Computer Science @ SUNY Buffalo",
      "2+ YOE @ Infosys",
      "OCI GenAI Certified"
    ],
    quickTags: [
      "Distributed Systems",
      "Microservices",
      "Redis",
      "Spring Boot",
      "Kubernetes",
      "REST APIs",
      "Observability",
      "Concurrency",
      "AWS",
      "AI Infrastructure"
    ],
    subtitle:
      "Building scalable distributed systems, AI-powered applications, and cloud-native backend infrastructure with a strong focus on reliability, observability, and production performance.",
    recruiterCta:
      "Open to Backend SWE, Platform Engineering, Full Stack, and AI Infrastructure opportunities."
  },

  resume: {
    label: "Download Resume",
    url: "/Shubham_Mohole_Resume.pdf"
  },

  contact: {
    email: "shumoh2000@gmail.com",
    phone: "+1 (716) 398 9180",
    linkedin: "https://www.linkedin.com/in/shubham-mohole-245a501b2/",
    github: "https://github.com/Ishubhammohole",
    availability: "Open to full-time and internship opportunities",
    timezone: "Pacific Time / Eastern Time overlap",
    calendly: ""
  },

  engineeringFocus: [
    {
      title: "Distributed Systems",
      description: "Queueing, rate limiting, retries, worker orchestration, and fault-tolerant async execution."
    },
    {
      title: "Backend Infrastructure",
      description: "Java/Spring Boot and Node services designed for scale, low latency, and safe rollout patterns."
    },
    {
      title: "AI-Powered Applications",
      description: "Practical AI systems with reliable APIs, pipelines, and production-minded integration points."
    },
    {
      title: "Cloud-Native Systems",
      description: "Docker, Kubernetes, CI/CD, and managed cloud services for resilient deployment workflows."
    },
    {
      title: "Scalability & Reliability",
      description: "Caching, concurrency, idempotency, chaos-aware testing, and operational tradeoff decisions."
    },
    {
      title: "Production Observability",
      description: "Metrics, latency tracking, structured logging, alert-friendly instrumentation, and dashboards."
    }
  ],

  education: [
    {
      institution: "University at Buffalo (SUNY Buffalo)",
      degree: "M.S. in Computer Science",
      duration: "Aug 2024 – Dec 2025",
      gpa: "3.7/4",
      location: "Buffalo, NY",
      coursework: {
        Systems: [
          "CSE 521: Operating Systems",
          "CSE 587: Data Intensive Computing",
          "CSE 560: Data Models and Query Languages"
        ],
        AI: [
          "CSE 574: Introduction to Machine Learning",
          "CSE 676: Deep Learning",
          "CSE 573: Computer Vision & Image Processing"
        ],
        Foundations: [
          "CSE 531: Algorithms Analysis and Design I",
          "CSE 565: Computer Security",
          "EAS 507: Statistical Data Mining II"
        ]
      }
    },
    {
      institution: "University of Pune / Savitribai Phule Pune University",
      degree: "Bachelor of Engineering",
      duration: "Aug 2018 – May 2022",
      gpa: "8.7/10",
      location: "Pune, India"
    }
  ],

  experience: [
    {
      title: "Research Assistant (Robotics & AI)",
      company: "University at Buffalo",
      duration: "Aug 2025 – Present",
      location: "Buffalo, NY",
      skills: ["Python", "Experiment Design", "Reliability Evaluation", "Data Pipelines"],
      bullets: [
        "Analyzed navigation failures in quadruped robots caused by sensor noise, environmental uncertainty, and sim-to-real gaps to improve system resilience.",
        "Built data processing and feature extraction pipelines fusing chemical, state, and motion signals to improve generalization in unseen environments.",
        "Designed controlled experiments, robustness evaluations, and repeatable validation workflows to benchmark learned policies across simulated and real-world deployments.",
        "Collaborated with research and engineering teams to translate experimental findings into deployable system improvements and more reliable runtime behavior."
      ]
    },
    {
      title: "Software Developer / Systems Engineer",
      company: "Infosys Ltd",
      duration: "Nov 2022 – Jun 2024",
      location: "Pune, India",
      skills: ["Java", "Spring Boot", "Redis", "MySQL", "Kubernetes", "CI/CD"],
      bullets: [
        "Built and optimized 12+ Java/Spring Boot microservices supporting automated loan approval workflows, improving onboarding time by 25% across 5M+ daily financial transactions.",
        "Integrated external credit and verification APIs, shrinking approval turnaround from 14 days to under 1 hour through resilient backend orchestration.",
        "Optimized MySQL queries, Redis caching, and hot-path request handling to achieve ~90% performance gains and P99 latency near 40ms on large financial datasets.",
        "Added structured logging, observability hooks, safe rolling deployments, and CI/CD guardrails to improve release confidence and production reliability.",
        "Contributed to load testing, concurrency tuning, GC-aware performance improvements, and operational debugging for distributed transaction-heavy services."
      ]
    },
    {
      title: "Software Engineer Intern (Robotics AI Lab)",
      company: "PMS Robotics Lab",
      duration: "May 2022 – Nov 2022",
      location: "Pune, India",
      skills: ["Python", "Simulation", "Controls", "Autonomy"],
      bullets: [
        "Developed ML-based control algorithms and simulation frameworks for robotic navigation across varied terrain.",
        "Improved testing repeatability for robotics workflows by strengthening simulation instrumentation and evaluation loops."
      ]
    }
  ],

  projects: {
    featured: [
      {
        title: "Intelligent Distributed Task Queue Engine",
        slug: "task-queue-engine",
        timeframe: "Jan 2026",
        summary: "A production-style async processing platform for reliable distributed job execution under load.",
        role: "Flagship backend/distributed systems project",
        highlight: "Primary Flagship Project",
        highlights: [
          "Designed Redis-backed distributed queues with at-least-once delivery, idempotent submissions, retry handling, and dead-letter queues.",
          "Added adaptive scheduling with FIFO fallback, worker orchestration, and latency-aware execution paths for mixed workloads.",
          "Instrumented Prometheus and Grafana dashboards for queue depth, worker health, retry rates, and end-to-end latency tracking."
        ],
        technologies: ["Java", "Spring Boot", "Redis", "Docker", "Prometheus", "Grafana"],
        githubUrl: "",
        liveUrl: "",
        image: "/images/projects/microservices-platform.png",
        detail: {
          architectureOverview:
            "The system accepts asynchronous work through a stateless API layer, stores jobs in Redis-backed queues, and uses a scheduler plus worker pool to balance latency-sensitive and throughput-oriented execution paths. Reliability centers on idempotent submission keys, retries with backoff, DLQ isolation, and observable worker behavior.",
          systemFlow: [
            "Client submits a job with an idempotency key to the API layer.",
            "API validates payloads, persists metadata, and enqueues work in Redis.",
            "Scheduler prioritizes ready jobs using adaptive scheduling with FIFO fallback.",
            "Worker pool claims tasks concurrently and emits execution, latency, and health metrics.",
            "Failures are retried through a dedicated retry queue before DLQ escalation.",
            "Prometheus and Grafana surface queue depth, processing latency, retry volume, and worker health."
          ],
          technicalChallenges: [
            "Preventing duplicate execution while preserving at-least-once delivery semantics.",
            "Handling worker failures and transient downstream errors without silently dropping jobs.",
            "Balancing fairness, latency, and throughput across mixed queue workloads.",
            "Making queue behavior visible enough to debug hotspots, backlog growth, and retry storms."
          ],
          scalingDecisions: [
            "Used Redis-backed queues for fast enqueue/dequeue operations and lightweight horizontal scaling.",
            "Separated retry and DLQ paths to keep hot queues clean and prevent poison-job amplification.",
            "Added adaptive scheduling to reduce tail latency while preserving FIFO fallback for deterministic behavior.",
            "Kept workers stateless so concurrency can scale out independently from the API tier."
          ],
          tradeoffs: [
            "At-least-once delivery improves durability but requires idempotent consumers and duplicate-safe job handling.",
            "Redis offers excellent hot-path performance, but long-term durability and multi-region guarantees would require additional infrastructure.",
            "Adaptive scheduling improves responsiveness but adds complexity compared with a single FIFO queue."
          ],
          reliabilityFeatures: [
            "At-least-once delivery with duplicate-safe submission semantics.",
            "Idempotent submission keys to protect against client retries.",
            "Retry handling with isolated retry queues and bounded backoff.",
            "Dead-letter queues for poison jobs and postmortem inspection.",
            "Worker health checks and queue-depth monitoring for operational awareness."
          ],
          observability: [
            "Prometheus metrics for enqueue latency, completion latency, queue depth, worker throughput, and retry counts.",
            "Grafana dashboards showing live queue backlog, P95 processing latency, and worker health trends.",
            "Structured logs around submission lifecycle, claim attempts, retries, and DLQ promotion."
          ],
          benchmarks: [
            { label: "P95 submission latency", value: "11ms", hint: "Fast API enqueue path under concurrent load", tone: "success" },
            { label: "P95 completion latency", value: "~2.0s", hint: "Measured end-to-end job completion", tone: "primary" },
            { label: "Success rate", value: "100%", hint: "Across benchmarked workload suite", tone: "success" }
          ],
          screenshots: [
            "Architecture diagram of API, Redis queues, worker pool, retries, DLQ, and metrics stack.",
            "Observability-inspired benchmark cards for latency, throughput, and success rate.",
            "Request lifecycle breakdown showing submission, scheduling, execution, retry, and DLQ promotion."
          ],
          stack: ["Java", "Spring Boot", "Redis", "Docker", "Prometheus", "Grafana", "REST APIs", "Concurrency"],
          callouts: [
            { label: "Delivery Guarantee", value: "At-least-once" },
            { label: "Fallback Strategy", value: "Adaptive + FIFO" },
            { label: "Observability", value: "Prometheus/Grafana" },
            { label: "Failure Isolation", value: "Retry Queue + DLQ" }
          ]
        }
      },
      {
        title: "Distributed Rate Limiter",
        slug: "distributed-rate-limiter",
        timeframe: "Jan 2026",
        summary: "Production-grade rate limiting service with multiple algorithms and atomic distributed enforcement.",
        role: "Backend infrastructure project",
        highlight: "High-throughput infrastructure service",
        highlights: [
          "Implemented Redis + Lua atomic enforcement for token bucket, fixed window, sliding window log, and sliding window counter algorithms.",
          "Optimized hot-path performance with connection-pool tuning, script caching, concurrency testing, and safe fail-open or fail-closed behaviors.",
          "Exposed Prometheus metrics and latency instrumentation to validate throughput, error rate, and tail performance under load."
        ],
        technologies: ["Java", "Redis", "Lua", "Docker", "Prometheus"],
        githubUrl: "",
        liveUrl: "",
        detail: {
          architectureOverview:
            "The service centralizes rate-limit decisions in Redis and uses cached Lua scripts for atomic multi-key operations. A pluggable algorithm layer makes it possible to compare different enforcement strategies while keeping the API surface stable.",
          systemFlow: [
            "API receives a request and derives a scoped rate-limit key.",
            "A strategy layer selects the active algorithm for the route or tenant.",
            "Cached Lua scripts execute atomically in Redis to update counters or token state.",
            "The service returns allow/deny decisions with retry headers and emits metrics.",
            "Fallback logic chooses fail-open or fail-closed behavior based on route criticality."
          ],
          technicalChallenges: [
            "Ensuring atomic enforcement across concurrent application instances.",
            "Keeping the hot path low-latency while supporting multiple algorithms.",
            "Avoiding connection bottlenecks and script reloading overhead under high concurrency."
          ],
          scalingDecisions: [
            "Used Redis for centralized shared state across service instances.",
            "Cached Lua scripts to avoid repeated script transfer and reduce request overhead.",
            "Tuned connection pools and minimized round trips on the decision path."
          ],
          tradeoffs: [
            "Sliding window log offers better accuracy but higher memory cost than counter-based approaches.",
            "Fail-open protects availability, while fail-closed protects downstream systems; the right default depends on endpoint criticality.",
            "Centralized Redis simplifies distributed enforcement but becomes a performance dependency that must be monitored closely."
          ],
          reliabilityFeatures: [
            "Atomic Lua enforcement for race-free decisions.",
            "Algorithm fallback options across token bucket, fixed window, and sliding windows.",
            "Configurable fail-open/fail-closed behavior for degraded Redis scenarios.",
            "Concurrency testing to validate correctness under parallel load."
          ],
          observability: [
            "Metrics for allowed vs blocked requests, algorithm usage, Redis latency, and service saturation.",
            "Latency breakdowns to isolate decision-path bottlenecks and script execution cost.",
            "Structured logging for rate-limit breaches and degraded-mode fallbacks."
          ],
          benchmarks: [
            { label: "Throughput", value: "2.9K req/s", hint: "Sustained under benchmark load", tone: "success" },
            { label: "P95 latency", value: "~372ms", hint: "Measured with algorithmic enforcement enabled", tone: "primary" },
            { label: "Error rate", value: "0%", hint: "Across the benchmark suite", tone: "success" }
          ],
          screenshots: [
            "Architecture diagram of API, Redis, and Lua atomic enforcement path.",
            "Benchmark cards showing req/s, p95 latency, and error rate.",
            "Algorithm comparison panel describing token bucket vs sliding windows."
          ],
          stack: ["Java", "Redis", "Lua", "Prometheus", "Docker", "REST APIs", "Concurrency"],
          callouts: [
            { label: "Atomicity", value: "Redis + Lua" },
            { label: "Algorithms", value: "4 strategies" },
            { label: "Degradation", value: "Fail-open / fail-closed" },
            { label: "Optimization", value: "Script cache + pool tuning" }
          ]
        }
      },
      {
        title: "DevSync AI",
        slug: "devsync-ai",
        timeframe: "Aug – Sep 2025",
        summary: "AI-powered release coordination platform for GitHub, JIRA, and Slack workflow automation.",
        role: "Workflow orchestration project",
        highlight: "Event-driven release automation",
        highlights: [
          "Integrated GitHub, JIRA, and Slack workflows with event-driven webhooks and orchestrated release automation.",
          "Implemented idempotent retry logic, resilient workflow steps, and exactly-once style processing guarantees for repeated events.",
          "Automated sprint updates, release notes, and changelog generation through a reliable automation pipeline."
        ],
        technologies: ["TypeScript", "Node.js", "GitHub API", "JIRA API", "Slack API", "Docker"],
        githubUrl: "https://github.com/DevSync-AI/kiro-devsync-ai",
        liveUrl: "",
        image: "/images/projects/devsync-platform.png",
        detail: {
          architectureOverview:
            "DevSync AI coordinates events from source control, project tracking, and team communication systems into a resilient automation workflow. The system emphasizes deduplication, replay safety, and step orchestration so release workflows remain dependable even when third-party APIs are noisy.",
          systemFlow: [
            "GitHub, JIRA, and Slack emit webhook events into an orchestration layer.",
            "Events are validated, deduplicated, and mapped into workflow actions.",
            "AI-assisted processors generate release notes, sprint summaries, and status updates.",
            "Retries handle transient downstream failures without duplicating user-visible actions.",
            "Notifications and artifacts are pushed back into collaboration tools."
          ],
          technicalChallenges: [
            "Coordinating multiple external APIs with different failure modes and retry semantics.",
            "Preserving exactly-once style outcomes for user-visible automation actions.",
            "Keeping workflow state understandable and debuggable across retries."
          ],
          scalingDecisions: [
            "Used webhook-driven orchestration to avoid inefficient polling.",
            "Made retry paths idempotent so repeated events do not create duplicate automation artifacts.",
            "Structured workflows as composable stages to simplify operational debugging."
          ],
          tradeoffs: [
            "External API integration introduces reliability risk that has to be absorbed with retries and visibility.",
            "Exactly-once semantics in distributed workflows are approximated through idempotency and dedupe state rather than guaranteed globally."
          ],
          reliabilityFeatures: [
            "Event-driven webhooks with deduplication safeguards.",
            "Idempotent retry logic across automation steps.",
            "Resilient orchestration flows for release coordination."
          ],
          observability: [
            "Workflow status tracking by event source and orchestration stage.",
            "Logging around retries, dedupe decisions, and downstream integration failures.",
            "Operational visibility into stuck or replayed workflows."
          ],
          benchmarks: [
            { label: "Workflow pattern", value: "Event-driven", hint: "Webhook-based orchestration", tone: "primary" },
            { label: "Retry model", value: "Idempotent", hint: "Replay-safe automation steps", tone: "success" },
            { label: "Integrations", value: "GitHub · JIRA · Slack", hint: "Cross-tool coordination", tone: "neutral" }
          ],
          screenshots: [
            "Workflow diagram showing GitHub, JIRA, and Slack integrations.",
            "Automation state board summarizing orchestration stages and retries.",
            "Release note generation pipeline snapshot."
          ],
          stack: ["TypeScript", "Node.js", "GitHub API", "JIRA API", "Slack API", "Docker", "Webhooks"],
          callouts: [
            { label: "Integration Model", value: "Event-driven webhooks" },
            { label: "Reliability", value: "Idempotent retries" },
            { label: "Semantics", value: "Exactly-once style outcomes" },
            { label: "Automation", value: "Release orchestration" }
          ]
        }
      },
      {
        title: "AI Health Screening Platform",
        slug: "ai-health-screening",
        timeframe: "Apr – Jun 2025",
        summary: "Full-stack AI-powered healthcare screening application with secure backend APIs, ML-based prediction workflows, and production deployment.",
        role: "Full-stack AI platform project",
        highlight: "Production-minded AI healthcare application",
        highlights: [
          "Built secure REST APIs with JWT authentication, PostgreSQL persistence, and structured screening workflows.",
          "Integrated ML prediction pipelines using Random Forest and ResNet18-based analysis with confidence scoring.",
          "Deployed the frontend on Vercel and backend on Render with Docker-based environment setup.",
          "Designed the project as an end-to-end applied AI system rather than a standalone model demo."
        ],
        technologies: ["Java", "Spring Boot", "PostgreSQL", "JWT", "Random Forest", "ResNet18", "Docker", "Vercel", "Render", "REST APIs"],
        githubUrl: "",
        liveUrl: "https://healthscreen-ai.vercel.app/",
        detail: {
          architectureOverview:
            "The platform combines a patient-style screening frontend with secure backend APIs, PostgreSQL persistence, and ML-assisted prediction workflows to behave like a deployable healthcare application instead of a standalone notebook demo. The architecture separates user interaction, API processing, stored screening records, and model inference so results can be delivered with traceable confidence scoring and production-minded deployment boundaries.",
          systemFlow: [
            "Users authenticate through JWT-backed screening flows and submit health input data through the frontend.",
            "The frontend sends structured screening requests to secure Spring Boot REST APIs.",
            "The backend validates inputs, persists screening records in PostgreSQL, and routes requests into prediction workflows.",
            "Random Forest and ResNet18-based analysis generate prediction outputs with confidence scoring.",
            "Results are stored and returned to the frontend for user-facing presentation and follow-up review.",
            "The frontend is deployed on Vercel while Dockerized backend services run on Render."
          ],
          technicalChallenges: [
            "Designing healthcare-style screening flows that feel product-ready instead of a basic model wrapper.",
            "Integrating multiple ML prediction paths while keeping outputs understandable through confidence scoring.",
            "Maintaining secure authenticated APIs, durable persistence, and smooth cross-platform deployment."
          ],
          scalingDecisions: [
            "Separated frontend and backend deployment surfaces so the UI and API stack can scale independently.",
            "Used PostgreSQL for durable screening record persistence and future audit-friendly access patterns.",
            "Containerized backend services with Docker for predictable environment setup and deployment."
          ],
          tradeoffs: [
            "Splitting services across Vercel and Render improves deployment flexibility but adds operational coordination overhead.",
            "Combining classical ML and deep-learning-based analysis increases capability but adds complexity around model integration and latency."
          ],
          reliabilityFeatures: [
            "JWT-based authentication protecting screening and results flows.",
            "Structured REST APIs with persisted screening state in PostgreSQL.",
            "Confidence-scored prediction outputs for clearer downstream interpretation.",
            "Dockerized backend runtime for consistent deployment behavior."
          ],
          observability: [
            "Clear separation between frontend, API, database, and inference layers makes failures easier to isolate.",
            "Structured backend workflows support debugging across authenticated screening, persistence, and prediction handoffs."
          ],
          benchmarks: [
            { label: "Auth model", value: "JWT", hint: "Protected patient-style screening flows", tone: "primary" },
            { label: "Prediction stack", value: "RF + ResNet18", hint: "Hybrid ML-assisted analysis", tone: "success" },
            { label: "Deployment", value: "Vercel + Render", hint: "Frontend and backend split deployment", tone: "neutral" }
          ],
          screenshots: [
            "Architecture diagram of screening frontend, Spring Boot APIs, PostgreSQL, and ML prediction workflows.",
            "Secure screening flow from user submission through confidence-scored prediction output.",
            "Deployment topology showing Vercel frontend and Dockerized Render backend."
          ],
          stack: ["Java", "Spring Boot", "PostgreSQL", "JWT", "Random Forest", "ResNet18", "Docker", "REST APIs", "Render", "Vercel"],
          callouts: [
            { label: "API Layer", value: "Spring Boot REST" },
            { label: "Persistence", value: "PostgreSQL" },
            { label: "ML Stack", value: "RF + ResNet18" },
            { label: "Deployment", value: "Vercel + Render" }
          ]
        }
      },
      {
        title: "Ripple Policy Simulator (UB Hacking 2025)",
        slug: "ripple-policy-simulator",
        timeframe: "Oct 2025",
        summary: "Monte Carlo simulation platform for analyzing policy tradeoffs with interactive modeling and AI-assisted insights.",
        role: "Simulation and product engineering project",
        highlight: "Data-driven decision support tool",
        highlights: [
          "Built adjustable policy levers with real-time Monte Carlo simulation loops.",
          "Added confidence intervals and scenario controls for statistically grounded decision support.",
          "Integrated AI-powered insights for equity and sustainability analysis."
        ],
        technologies: ["React", "TypeScript", "Monte Carlo", "Gemini AI"],
        githubUrl: "https://lnkd.in/dskJ7AQf",
        liveUrl: "https://lnkd.in/dXeWAJQM",
        image: "/images/projects/ripple-policy-simulator.png",
        detail: {
          architectureOverview:
            "Ripple combines an interactive simulation UI with a scenario engine and AI-assisted analysis layer. It emphasizes modeling clarity and fast iteration over heavy infrastructure complexity.",
          systemFlow: [
            "Users configure policy levers and simulation parameters.",
            "Simulation engine runs Monte Carlo iterations and computes confidence intervals.",
            "Results are visualized in real time and summarized with AI-assisted insights."
          ],
          technicalChallenges: [
            "Keeping simulation feedback fast enough for interactive exploration.",
            "Explaining uncertainty clearly through confidence interval visualization."
          ],
          scalingDecisions: [
            "Focused on fast client-facing iteration rather than deep distributed infrastructure.",
            "Balanced compute cost and responsiveness for real-time what-if analysis."
          ],
          tradeoffs: [
            "Prioritized usability and interpretability over large-scale backend complexity."
          ],
          reliabilityFeatures: [
            "Scenario controls and statistical confidence bounds for more trustworthy outputs."
          ],
          observability: [
            "Lightweight runtime tracking around simulation speed and scenario recomputation."
          ],
          benchmarks: [
            { label: "Simulation mode", value: "Monte Carlo", hint: "Scenario-driven policy analysis", tone: "primary" },
            { label: "UX", value: "Interactive", hint: "Real-time lever adjustments", tone: "success" },
            { label: "Insight layer", value: "AI-assisted", hint: "Narrative analysis support", tone: "neutral" }
          ],
          screenshots: [
            "Scenario and confidence-interval visualization.",
            "Interactive control panel for policy levers."
          ],
          stack: ["React", "TypeScript", "Monte Carlo", "Gemini AI"],
          callouts: [
            { label: "Modeling", value: "Monte Carlo" },
            { label: "Analysis", value: "Confidence intervals" },
            { label: "Interface", value: "Interactive controls" },
            { label: "Insights", value: "AI-assisted" }
          ]
        }
      },
      {
        title: "LLM-Powered Text-to-Image System",
        slug: "text-to-image-system",
        timeframe: "Jan – Apr 2025",
        summary: "Advanced image generation workflow with fine-tuned Stable Diffusion models and human-in-the-loop evaluation.",
        role: "AI systems project",
        highlight: "Model training and evaluation pipeline",
        highlights: [
          "Built Stable Diffusion and LoRA fine-tuning workflows for targeted image generation tasks.",
          "Improved output quality by roughly 25% through custom training and prompt iteration techniques.",
          "Added human-in-the-loop review and evaluation workflows for output refinement."
        ],
        technologies: ["Python", "PyTorch", "Stable Diffusion", "LoRA"],
        githubUrl: "https://github.com/Ishubhammohole/Text-to-Image-Generation",
        liveUrl: "",
        image: "/images/projects/text-to-image-system.png",
        detail: {
          architectureOverview:
            "This project centers on model fine-tuning, prompt iteration, and output evaluation rather than backend infrastructure. It remains an important signal for AI application depth and experimentation discipline.",
          systemFlow: [
            "Training data is prepared and used for Stable Diffusion fine-tuning.",
            "LoRA adapters support efficient specialization of the base model.",
            "Generated outputs are reviewed through a human-in-the-loop evaluation cycle."
          ],
          technicalChallenges: [
            "Improving generation quality without overfitting or losing prompt fidelity.",
            "Balancing experimentation speed against training cost."
          ],
          scalingDecisions: [
            "Used efficient fine-tuning techniques to reduce compute requirements.",
            "Structured evaluations to shorten experimentation cycles."
          ],
          tradeoffs: [
            "Optimization targets model quality rather than service-scale infrastructure."
          ],
          reliabilityFeatures: [
            "Repeatable evaluation loops and measurable output-quality improvements."
          ],
          observability: [
            "Training/evaluation checkpoints for tracking iteration quality."
          ],
          benchmarks: [
            { label: "Quality lift", value: "~25%", hint: "Measured output improvement", tone: "success" },
            { label: "Fine-tuning", value: "LoRA", hint: "Efficient adaptation strategy", tone: "primary" },
            { label: "Review loop", value: "Human-in-the-loop", hint: "Iterative evaluation", tone: "neutral" }
          ],
          screenshots: [
            "Prompt iteration workflow and sample output comparisons.",
            "Fine-tuning pipeline overview."
          ],
          stack: ["Python", "PyTorch", "Stable Diffusion", "LoRA"],
          callouts: [
            { label: "Model", value: "Stable Diffusion" },
            { label: "Adaptation", value: "LoRA" },
            { label: "Improvement", value: "~25% quality lift" },
            { label: "Evaluation", value: "Human-in-the-loop" }
          ]
        }
      }
    ] as FeaturedProject[],
    openSource: [
      {
        title: "Open Source — DjangoCRM",
        timeframe: "May – Jun 2025",
        summary: "Merged open source contribution improving admin-managed email configuration in DjangoCRM.",
        highlights: [
          "Refactored email constants into admin-managed singleton settings for safer runtime configuration.",
          "Added permission checks for secure configuration management.",
          "Improved maintainability and operational control in a real-world OSS CRM codebase."
        ],
        technologies: ["Python", "Django"],
        githubUrl: "https://github.com/DjangoCRM/django-crm/pull/229",
        liveUrl: "",
        merged: true
      }
    ]
  },

  skills: {
    featured: [
      "Java",
      "Spring Boot",
      "Redis",
      "Distributed Systems",
      "PostgreSQL",
      "MySQL",
      "Docker",
      "Kubernetes",
      "AWS",
      "REST APIs",
      "Concurrency",
      "Observability"
    ],
    "Programming Languages": ["Java", "Python", "TypeScript", "JavaScript", "C++"],
    "Frontend Technologies": ["React", "Angular", "HTML/CSS", "Tailwind CSS"],
    "Backend Technologies": ["Spring Boot", "Node.js", "Express.js", "FastAPI", "REST APIs", "Microservices"],
    Databases: ["PostgreSQL", "MySQL", "Redis", "MongoDB"],
    "Cloud & DevOps": ["Docker", "Kubernetes", "AWS", "CI/CD", "Jenkins", "Oracle OCI"],
    "Systems & Reliability": ["Distributed Systems", "Concurrency", "Observability", "Load Testing", "Chaos Engineering"],
    "AI/ML": ["PyTorch", "TensorFlow", "Stable Diffusion", "OpenCV", "Scikit-learn"],
    "Tools & Frameworks": ["Git", "JIRA", "Prometheus", "JUnit", "Mockito"]
  },

  certifications: [
    {
      name: "Infosys Certified MySQL Associate",
      issuer: "Infosys",
      authority: "Infosys",
      url: undefined,
      credentialId: undefined,
      issuedOn: undefined,
      expiresOn: undefined
    },
    {
      name: "Infosys Global Agile Developer Certification",
      issuer: "Infosys",
      authority: "Infosys",
      url: undefined,
      credentialId: undefined,
      issuedOn: undefined,
      expiresOn: undefined
    },
    {
      name: "Infosys Certified Java SE8 Developer",
      issuer: "Infosys",
      authority: "Infosys",
      url: undefined,
      credentialId: undefined,
      issuedOn: undefined,
      expiresOn: undefined
    },
    {
      name: "1Z0-1127-25 - Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
      issuer: "Oracle",
      authority: "Oracle",
      url: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=9D49F135F5D96561D49BA70B7C1517EC7E354E0012823B76FCF3F6C4DB2E77CB",
      credentialId: "451c849f-0554-47fe-aa8c-6a1c71ac14c6",
      issuedOn: "Jul 2025",
      expiresOn: "Jul 2027"
    },
    {
      name: "1Z0-1122-25 - Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
      issuer: "Oracle",
      authority: "Oracle",
      url: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=9CF66227B7D1D15099FA3F21161DC53B0F8A30D242ADC3D43090D453DB140600",
      credentialId: "4a508fec-a387-448e-bdbb-8e29697263f9",
      issuedOn: "Jul 2025",
      expiresOn: "Jul 2027"
    },
    {
      name: "1Z0-1085-25 - Oracle Cloud Infrastructure 2025 Foundations Associate",
      issuer: "Oracle",
      authority: "Oracle",
      url: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=A12D02CB850BA92E7056AFA5F28D099ED8FE453E45CD70BB82D30A76CE022093",
      credentialId: "ce89fea4-5ec2-4a5a-85c3-e88c1a78e3c3",
      issuedOn: "Jul 2025",
      expiresOn: "Jul 2027"
    },
    {
      name: "Certificate of Appreciation: Speaker (Data structures & Algorithms)",
      issuer: "University at Buffalo",
      authority: "University at Buffalo",
      url: undefined,
      credentialId: undefined,
      issuedOn: "May 2025",
      expiresOn: undefined
    },
    {
      name: "Certificate of Appreciation: Speaker (Hands-on MySQL)",
      issuer: "University at Buffalo",
      authority: "University at Buffalo",
      url: undefined,
      credentialId: undefined,
      issuedOn: "May 2025",
      expiresOn: undefined
    },
    {
      name: "Certificate of Appreciation: Event Manager (CSE Workshop)",
      issuer: "University at Buffalo",
      authority: "University at Buffalo",
      url: undefined,
      credentialId: undefined,
      issuedOn: "May 2025",
      expiresOn: undefined
    },
    {
      name: "McKinsey.org Forward Program",
      issuer: "McKinsey & Company",
      authority: "McKinsey & Company",
      url: "https://www.credly.com/badges/bf26abe3-c7c2-4276-8789-7773ca3995b9/linked_in_profile",
      credentialId: undefined,
      issuedOn: "Dec 2025",
      expiresOn: undefined
    }
  ],

  about: {
    summary:
      "Software engineer with 2+ years of experience building production systems across fintech, internal platforms, and AI-enabled products. My strongest work sits at the intersection of scalable backend engineering, distributed systems reliability, and practical AI application delivery.",
    bullets: [
      "At Infosys, built and scaled Java/Spring Boot microservices powering 5M+ daily financial transactions with strong attention to latency, resilience, and safe deployments.",
      "I enjoy backend problems that involve retries, queueing, caching, distributed coordination, observability, and performance tuning under real workload constraints.",
      "My project work spans distributed task execution, rate limiting, release orchestration, and AI application infrastructure rather than only UI-layer demos.",
      "I still bring full-stack and AI/ML depth, which helps me design systems end-to-end without losing focus on the backend architecture that keeps them reliable."
    ],
    lookingFor:
      "Open to backend engineering, platform, distributed systems, full-stack, and AI infrastructure roles where production quality and system design matter."
  },

  seo: {
    title: "Shubham Mohole | Backend & Distributed Systems Engineer",
    description:
      "Portfolio of Shubham Mohole, a software engineer focused on scalable backend systems, distributed infrastructure, and AI-powered applications. Features Spring Boot, Redis, Kubernetes, observability, and production-minded case studies.",
    url: "https://github.com/Ishubhammohole/portfolio",
    keywords: [
      "Shubham Mohole",
      "Backend Engineer",
      "Distributed Systems Engineer",
      "Software Engineer",
      "Spring Boot",
      "Redis",
      "Kubernetes",
      "AI Infrastructure",
      "Platform Engineering",
      "Portfolio"
    ]
  }
};

export type Profile = typeof profile;
