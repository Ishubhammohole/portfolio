import { ExternalLink, Github, GitPullRequest, BarChart3, Activity, Layers3 } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "../ui/dialog";
import { type FeaturedProject } from "../../content/profile";

interface ProjectDetailDialogProps {
  project: FeaturedProject;
}

function ProjectArchitectureDiagram({ slug }: { slug: string }) {
  const diagrams: Record<string, JSX.Element> = {
    "task-queue-engine": (
      <svg viewBox="0 0 860 320" className="w-full h-auto" role="img" aria-label="Task queue architecture diagram">
        <defs>
          <linearGradient id="panel" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="rgba(16,185,129,0.18)" />
            <stop offset="100%" stopColor="rgba(16,185,129,0.06)" />
          </linearGradient>
        </defs>
        <rect x="20" y="118" width="120" height="72" rx="14" fill="url(#panel)" stroke="rgba(16,185,129,0.5)" />
        <rect x="170" y="118" width="120" height="72" rx="14" fill="url(#panel)" stroke="rgba(16,185,129,0.5)" />
        <rect x="320" y="70" width="120" height="72" rx="14" fill="url(#panel)" stroke="rgba(16,185,129,0.5)" />
        <rect x="320" y="166" width="120" height="72" rx="14" fill="url(#panel)" stroke="rgba(148,163,184,0.5)" />
        <rect x="470" y="118" width="120" height="72" rx="14" fill="url(#panel)" stroke="rgba(16,185,129,0.5)" />
        <rect x="620" y="70" width="120" height="72" rx="14" fill="url(#panel)" stroke="rgba(16,185,129,0.5)" />
        <rect x="620" y="166" width="120" height="72" rx="14" fill="rgba(239,68,68,0.12)" stroke="rgba(239,68,68,0.5)" />
        <rect x="710" y="250" width="120" height="50" rx="14" fill="rgba(148,163,184,0.1)" stroke="rgba(148,163,184,0.45)" />
        <path d="M140 154 H170 M290 154 H320 M440 106 H470 M440 202 H470 M590 154 H620 M680 142 V154" stroke="rgba(16,185,129,0.7)" strokeWidth="3" fill="none" />
        <path d="M530 190 C560 240, 640 255, 710 275" stroke="rgba(148,163,184,0.55)" strokeWidth="3" fill="none" strokeDasharray="8 8" />
        <path d="M590 154 C620 154, 620 202, 620 202" stroke="rgba(239,68,68,0.7)" strokeWidth="3" fill="none" strokeDasharray="7 7" />
        <text x="80" y="160" textAnchor="middle" fill="currentColor" fontSize="20" fontWeight="600">Client</text>
        <text x="230" y="160" textAnchor="middle" fill="currentColor" fontSize="20" fontWeight="600">API</text>
        <text x="380" y="112" textAnchor="middle" fill="currentColor" fontSize="18" fontWeight="600">Redis Queue</text>
        <text x="380" y="132" textAnchor="middle" fill="rgba(148,163,184,0.9)" fontSize="14">Primary jobs</text>
        <text x="380" y="208" textAnchor="middle" fill="currentColor" fontSize="18" fontWeight="600">Scheduler</text>
        <text x="380" y="228" textAnchor="middle" fill="rgba(148,163,184,0.9)" fontSize="14">Adaptive + FIFO</text>
        <text x="530" y="160" textAnchor="middle" fill="currentColor" fontSize="20" fontWeight="600">Workers</text>
        <text x="680" y="112" textAnchor="middle" fill="currentColor" fontSize="18" fontWeight="600">Retry Queue</text>
        <text x="680" y="132" textAnchor="middle" fill="rgba(148,163,184,0.9)" fontSize="14">Backoff path</text>
        <text x="680" y="208" textAnchor="middle" fill="currentColor" fontSize="18" fontWeight="600">DLQ</text>
        <text x="680" y="228" textAnchor="middle" fill="rgba(248,113,113,0.9)" fontSize="14">Poison jobs</text>
        <text x="770" y="280" textAnchor="middle" fill="currentColor" fontSize="18" fontWeight="600">Metrics Stack</text>
        <text x="770" y="298" textAnchor="middle" fill="rgba(148,163,184,0.9)" fontSize="13">Prometheus / Grafana</text>
      </svg>
    ),
    "distributed-rate-limiter": (
      <svg viewBox="0 0 860 250" className="w-full h-auto" role="img" aria-label="Rate limiter architecture diagram">
        <rect x="30" y="90" width="130" height="70" rx="14" fill="rgba(16,185,129,0.14)" stroke="rgba(16,185,129,0.5)" />
        <rect x="210" y="90" width="130" height="70" rx="14" fill="rgba(16,185,129,0.14)" stroke="rgba(16,185,129,0.5)" />
        <rect x="390" y="45" width="160" height="70" rx="14" fill="rgba(16,185,129,0.14)" stroke="rgba(16,185,129,0.5)" />
        <rect x="390" y="135" width="160" height="70" rx="14" fill="rgba(148,163,184,0.12)" stroke="rgba(148,163,184,0.45)" />
        <rect x="610" y="90" width="180" height="70" rx="14" fill="rgba(16,185,129,0.14)" stroke="rgba(16,185,129,0.5)" />
        <path d="M160 125 H210 M340 125 H390 M550 125 H610" stroke="rgba(16,185,129,0.75)" strokeWidth="3" fill="none" />
        <path d="M470 115 V135" stroke="rgba(148,163,184,0.65)" strokeWidth="3" fill="none" strokeDasharray="7 7" />
        <text x="95" y="132" textAnchor="middle" fill="currentColor" fontSize="20" fontWeight="600">API</text>
        <text x="275" y="132" textAnchor="middle" fill="currentColor" fontSize="20" fontWeight="600">Redis</text>
        <text x="470" y="88" textAnchor="middle" fill="currentColor" fontSize="18" fontWeight="600">Lua Atomic Scripts</text>
        <text x="470" y="106" textAnchor="middle" fill="rgba(148,163,184,0.9)" fontSize="13">Script cache + hot path</text>
        <text x="470" y="176" textAnchor="middle" fill="currentColor" fontSize="18" fontWeight="600">Algorithms</text>
        <text x="470" y="194" textAnchor="middle" fill="rgba(148,163,184,0.9)" fontSize="13">Token / fixed / sliding</text>
        <text x="700" y="122" textAnchor="middle" fill="currentColor" fontSize="18" fontWeight="600">Rate Limit Decisions</text>
        <text x="700" y="142" textAnchor="middle" fill="rgba(148,163,184,0.9)" fontSize="13">Allow, deny, retry headers</text>
      </svg>
    ),
    "devsync-ai": (
      <svg viewBox="0 0 860 280" className="w-full h-auto" role="img" aria-label="DevSync AI workflow diagram">
        <rect x="30" y="40" width="140" height="62" rx="14" fill="rgba(16,185,129,0.12)" stroke="rgba(16,185,129,0.5)" />
        <rect x="30" y="110" width="140" height="62" rx="14" fill="rgba(16,185,129,0.12)" stroke="rgba(16,185,129,0.5)" />
        <rect x="30" y="180" width="140" height="62" rx="14" fill="rgba(16,185,129,0.12)" stroke="rgba(16,185,129,0.5)" />
        <rect x="250" y="110" width="180" height="72" rx="14" fill="rgba(16,185,129,0.14)" stroke="rgba(16,185,129,0.5)" />
        <rect x="510" y="60" width="140" height="62" rx="14" fill="rgba(148,163,184,0.12)" stroke="rgba(148,163,184,0.5)" />
        <rect x="510" y="140" width="140" height="62" rx="14" fill="rgba(148,163,184,0.12)" stroke="rgba(148,163,184,0.5)" />
        <rect x="710" y="110" width="120" height="72" rx="14" fill="rgba(16,185,129,0.14)" stroke="rgba(16,185,129,0.5)" />
        <path d="M170 71 H250 M170 141 H250 M170 211 H250" stroke="rgba(16,185,129,0.55)" strokeWidth="3" fill="none" />
        <path d="M430 146 H510 M650 91 H710 M650 171 H710" stroke="rgba(16,185,129,0.7)" strokeWidth="3" fill="none" />
        <text x="100" y="78" textAnchor="middle" fill="currentColor" fontSize="18" fontWeight="600">GitHub</text>
        <text x="100" y="148" textAnchor="middle" fill="currentColor" fontSize="18" fontWeight="600">JIRA</text>
        <text x="100" y="218" textAnchor="middle" fill="currentColor" fontSize="18" fontWeight="600">Slack</text>
        <text x="340" y="137" textAnchor="middle" fill="currentColor" fontSize="18" fontWeight="600">Webhook Orchestrator</text>
        <text x="340" y="157" textAnchor="middle" fill="rgba(148,163,184,0.9)" fontSize="13">Dedupe + idempotent retries</text>
        <text x="580" y="96" textAnchor="middle" fill="currentColor" fontSize="17" fontWeight="600">AI Summaries</text>
        <text x="580" y="176" textAnchor="middle" fill="currentColor" fontSize="17" fontWeight="600">Release Workflows</text>
        <text x="770" y="138" textAnchor="middle" fill="currentColor" fontSize="18" fontWeight="600">Team Output</text>
        <text x="770" y="158" textAnchor="middle" fill="rgba(148,163,184,0.9)" fontSize="13">Notes, updates, alerts</text>
      </svg>
    ),
    "ai-health-screening": (
      <svg viewBox="0 0 860 280" className="w-full h-auto" role="img" aria-label="AI health platform architecture diagram">
        <rect x="20" y="108" width="140" height="70" rx="14" fill="rgba(16,185,129,0.14)" stroke="rgba(16,185,129,0.5)" />
        <rect x="200" y="108" width="150" height="70" rx="14" fill="rgba(16,185,129,0.14)" stroke="rgba(16,185,129,0.5)" />
        <rect x="390" y="50" width="150" height="70" rx="14" fill="rgba(148,163,184,0.12)" stroke="rgba(148,163,184,0.5)" />
        <rect x="390" y="166" width="150" height="70" rx="14" fill="rgba(148,163,184,0.12)" stroke="rgba(148,163,184,0.5)" />
        <rect x="590" y="108" width="120" height="70" rx="14" fill="rgba(16,185,129,0.14)" stroke="rgba(16,185,129,0.5)" />
        <rect x="740" y="108" width="100" height="70" rx="14" fill="rgba(16,185,129,0.14)" stroke="rgba(16,185,129,0.5)" />
        <path d="M160 143 H200 M350 143 H390 M540 143 H590 M710 143 H740" stroke="rgba(16,185,129,0.7)" strokeWidth="3" fill="none" />
        <path d="M465 120 V166" stroke="rgba(148,163,184,0.65)" strokeWidth="3" fill="none" strokeDasharray="7 7" />
        <text x="90" y="150" textAnchor="middle" fill="currentColor" fontSize="18" fontWeight="600">Frontend</text>
        <text x="275" y="150" textAnchor="middle" fill="currentColor" fontSize="18" fontWeight="600">REST API</text>
        <text x="465" y="83" textAnchor="middle" fill="currentColor" fontSize="18" fontWeight="600">JWT Auth</text>
        <text x="465" y="199" textAnchor="middle" fill="currentColor" fontSize="18" fontWeight="600">PostgreSQL</text>
        <text x="650" y="150" textAnchor="middle" fill="currentColor" fontSize="18" fontWeight="600">Inference</text>
        <text x="790" y="150" textAnchor="middle" fill="currentColor" fontSize="18" fontWeight="600">Results</text>
      </svg>
    )
  };

  return (
    <Card className="p-4 border-primary/10 bg-background/60 backdrop-blur-sm">
      <div className="flex items-center gap-2 mb-4 text-sm font-medium text-primary">
        <Layers3 className="h-4 w-4" />
        Architecture Overview
      </div>
      <div className="text-foreground">{diagrams[slug] ?? null}</div>
    </Card>
  );
}

function MetricCard({ label, value, hint, tone }: FeaturedProject["detail"]["benchmarks"][number]) {
  const toneClass =
    tone === "success"
      ? "border-emerald-500/30 text-emerald-300"
      : tone === "primary"
        ? "border-primary/30 text-primary"
        : "border-border/60 text-foreground";

  return (
    <Card className={`p-4 bg-background/70 backdrop-blur-sm ${toneClass}`}>
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">{label}</p>
        <p className="text-2xl font-mono font-semibold">{value}</p>
        <p className="text-sm text-muted-foreground leading-relaxed">{hint}</p>
      </div>
    </Card>
  );
}

function DetailList({
  title,
  items,
  icon
}: {
  title: string;
  items: string[];
  icon: JSX.Element;
}) {
  return (
    <Card className="p-5 border-border/60 bg-card/40 backdrop-blur-sm">
      <div className="flex items-center gap-2 mb-4 text-sm font-medium text-primary">
        {icon}
        {title}
      </div>
      <div className="space-y-3">
        {items.map((item) => (
          <div key={item} className="flex items-start gap-3">
            <div className="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
            <p className="text-sm leading-relaxed text-muted-foreground">{item}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}

export function ProjectDetailDialog({ project }: ProjectDetailDialogProps) {
  const githubLabel = project.githubUrl.includes("/pull/") ? "View PR" : "Code";

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="hover:border-primary hover:text-primary transition-colors">
          View System Design
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-6xl h-[88vh] p-0 border-primary/10 bg-[#0b1117] overflow-hidden">
        <div className="h-full overflow-y-auto scrollbar-hide">
          <div className="p-6 md:p-8 space-y-8">
            <DialogHeader className="text-left space-y-4 pr-10">
              <div className="flex flex-wrap items-center gap-3">
                <Badge className="bg-primary/12 text-primary border border-primary/20">
                  {project.role}
                </Badge>
                <Badge variant="outline" className="bg-background/50 border-primary/20 text-primary">
                  {project.timeframe}
                </Badge>
              </div>
              <div className="space-y-3">
                <DialogTitle className="text-3xl md:text-4xl leading-tight">{project.title}</DialogTitle>
                <DialogDescription className="text-base md:text-lg leading-relaxed max-w-4xl">
                  {project.detail.architectureOverview}
                </DialogDescription>
              </div>
            </DialogHeader>

            <div className="flex flex-wrap gap-2">
              {project.detail.stack.map((item) => (
                <Badge key={item} variant="outline" className="bg-primary/5 border-primary/20 text-primary px-3 py-1">
                  {item}
                </Badge>
              ))}
            </div>

            {project.image && (
              <Card className="overflow-hidden border-primary/10 bg-card/40">
                <img
                  src={project.image}
                  alt={`${project.title} visual`}
                  className="w-full h-auto max-h-[360px] object-cover"
                  loading="lazy"
                />
              </Card>
            )}

            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
              {project.detail.callouts.map((callout) => (
                <Card key={callout.label} className="p-4 bg-card/45 border-primary/10">
                  <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground mb-2">{callout.label}</p>
                  <p className="text-lg font-semibold text-foreground">{callout.value}</p>
                </Card>
              ))}
            </div>

            <ProjectArchitectureDiagram slug={project.slug} />

            <div className="grid md:grid-cols-3 gap-4">
              {project.detail.benchmarks.map((metric) => (
                <MetricCard key={metric.label} {...metric} />
              ))}
            </div>

            <div className="grid xl:grid-cols-2 gap-5">
              <DetailList title="System Flow" items={project.detail.systemFlow} icon={<Activity className="h-4 w-4" />} />
              <DetailList title="Technical Challenges" items={project.detail.technicalChallenges} icon={<BarChart3 className="h-4 w-4" />} />
              <DetailList title="Scaling & Performance Decisions" items={project.detail.scalingDecisions} icon={<Activity className="h-4 w-4" />} />
              <DetailList title="Tradeoffs" items={project.detail.tradeoffs} icon={<Layers3 className="h-4 w-4" />} />
              <DetailList title="Reliability Features" items={project.detail.reliabilityFeatures} icon={<Activity className="h-4 w-4" />} />
              <DetailList title="Observability" items={project.detail.observability} icon={<BarChart3 className="h-4 w-4" />} />
            </div>

            <Card className="p-5 border-primary/10 bg-card/40">
              <div className="flex items-center gap-2 mb-4 text-sm font-medium text-primary">
                <BarChart3 className="h-4 w-4" />
                Visual Storytelling Assets
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                {project.detail.screenshots.map((item) => (
                  <div key={item} className="rounded-xl border border-border/60 bg-background/70 p-4 min-h-28">
                    <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-primary mb-3">Visual</div>
                    <p className="text-sm leading-relaxed text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </Card>

            <div className="flex flex-wrap gap-3">
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="hover:border-primary hover:text-primary transition-colors">
                    {project.githubUrl.includes("/pull/") ? (
                      <GitPullRequest className="mr-2 h-4 w-4" />
                    ) : (
                      <Github className="mr-2 h-4 w-4" />
                    )}
                    {githubLabel}
                  </Button>
                </a>
              )}
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="hover:border-primary hover:text-primary transition-colors">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                </a>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
