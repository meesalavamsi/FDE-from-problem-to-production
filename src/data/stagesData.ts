import { Search, FileText, Layout, Code2, CheckCircle, ShieldCheck, Rocket, Users, TrendingUp, BookOpen, Repeat } from 'lucide-react';

export interface StageDetail {
  id: string;
  name: string;
  icon: any;
  objective: string;
  keyQuestions: string[];
  artifacts: string[];
  technologies: string[];
  commonMistakes: string[];
  fdeMindset: string;
}

export const STAGES: StageDetail[] = [
  {
    id: 'discover',
    name: 'DISCOVER',
    icon: Search,
    objective: "Uncover the true operational root cause, user pain points, and existing system constraints through structured stakeholder interviews.",
    keyQuestions: [
      "What manual steps consume the most employee hours daily?",
      "Why did previous automation attempts fail?",
      "Where are the actual operational data bottlenecks?"
    ],
    artifacts: ["5-Whys Root Cause Matrix", "Stakeholder Pain Point Registry", "Qualitative Discovery Map"],
    technologies: ["Miro", "Interview Frameworks", "Process Analytics"],
    commonMistakes: ["Accepting vague executive requests ('Make us AI-driven') without digging into workflows."],
    fdeMindset: "Be an operational detective before writing code."
  },
  {
    id: 'define',
    name: 'DEFINE',
    icon: FileText,
    objective: "Formulate quantifiable business requirements, non-functional SLAs, and formal Business Requirement Documents (BRDs).",
    keyQuestions: [
      "What is the target accuracy %, latency SLA, and token budget limit?",
      "What regulatory compliance standards (SOC2, GDPR) apply?",
      "What are the hard Go/No-Go acceptance criteria?"
    ],
    artifacts: ["Enterprise Business Requirement Document (BRD)", "KPI & SLA Specification", "Acceptance Matrix"],
    technologies: ["Confluence", "BRD Templates", "MoSCoW Prioritization"],
    commonMistakes: ["Using vague adjectives like 'accurate' or 'fast' instead of quantitative SLAs."],
    fdeMindset: "Define exact quantitative metrics that resolve ambiguity before building."
  },
  {
    id: 'design',
    name: 'DESIGN',
    icon: Layout,
    objective: "Architect High-Level (HLD) and Low-Level (LLD) system designs, API contracts, data models, and security boundaries.",
    keyQuestions: [
      "How will data isolation be enforced across tenants?",
      "What is the fallback path if the primary LLM endpoint degrades?",
      "Where do human-in-the-loop approval gates reside?"
    ],
    artifacts: ["Technical Design Document (TDD)", "OpenAPI 3.0 Specs", "HLD/LLD Diagrams"],
    technologies: ["Mermaid.js", "OpenAPI", "Redis Architecture", "Qdrant HNSW Specs"],
    commonMistakes: ["Designing isolated prototypes that ignore legacy enterprise API rate limits."],
    fdeMindset: "Design for production resilience, zero-trust security, and system integration."
  },
  {
    id: 'build',
    name: 'BUILD',
    icon: Code2,
    objective: "Rapidly prototype and engineer robust backend microservices, RAG search layers, agent workflows, and MCP server tools.",
    keyQuestions: [
      "Are API contracts strictly enforced via Pydantic schemas?",
      "Is async concurrency throttling implemented to prevent socket exhaustion?",
      "Are secrets injected safely via Vault?"
    ],
    artifacts: ["FastAPI Microservice", "LangGraph State Machines", "MCP Server Adapters"],
    technologies: ["Python 3.12", "FastAPI", "Pydantic", "LangChain/LangGraph", "MCP SDK"],
    commonMistakes: ["Writing un-gated agent tool loops that trigger infinite execution recursion."],
    fdeMindset: "Move fast with AI vibe coding, but enforce strict type safety and unit testing."
  },
  {
    id: 'evaluate',
    name: 'EVALUATE',
    icon: CheckCircle,
    objective: "Systematically benchmark model groundedness, context precision, answer relevance, and prompt regression in automated CI pipelines.",
    keyQuestions: [
      "Does the output adhere 100% to verified context documents?",
      "What is the Ragas Faithfulness score on gold-standard datasets?",
      "Are edge-case prompt jailbreaks blocked?"
    ],
    artifacts: ["Ragas Evaluation Benchmark Report", "CI Prompt Regression Test Suite", "Gold Standard Test Set"],
    technologies: ["Ragas", "LangSmith", "Arize Phoenix", "Pytest"],
    commonMistakes: ["Relying on manual ad-hoc inspection of 5 queries instead of quantitative benchmark sets."],
    fdeMindset: "Measure output quality deterministically before exposing systems to real users."
  },
  {
    id: 'secure',
    name: 'SECURE',
    icon: ShieldCheck,
    objective: "Perform adversarial threat modeling, PII redaction, prompt injection filtering, and RBAC security audits.",
    keyQuestions: [
      "Can an unprivileged employee access executive data via prompt injection?",
      "Are log telemetry files scrubbed of PII (SSNs, credit cards)?",
      "Is data encrypted at rest with KMS keys?"
    ],
    artifacts: ["Adversarial Penetration Audit Report", "PII Redaction Policy", "CISO Sign-Off Certificate"],
    technologies: ["Microsoft Presidio", "NeMo Guardrails", "Llama-Guard", "AWS KMS"],
    commonMistakes: ["Putting security logic inside the LLM prompt rather than API/DB infrastructure."],
    fdeMindset: "Treat security as a hard engineering boundary. Zero-trust by design."
  },
  {
    id: 'deploy',
    name: 'DEPLOY',
    icon: Rocket,
    objective: "Deploy containerized services to production Kubernetes clusters using zero-downtime Canary rollouts and automated health probes.",
    keyQuestions: [
      "Are startup and readiness probes properly configured for slow model cold-boots?",
      "Is the automated rollback runbook tested?",
      "Are telemetry traces active?"
    ],
    artifacts: ["Helm Production Deployment Charts", "Go-Live Runbook", "Canary Deployment Pipeline"],
    technologies: ["Docker", "Kubernetes", "Helm", "GitLab CI/CD", "Nginx Ingress"],
    commonMistakes: ["Manual SSH deployments with hardcoded keys in container manifests."],
    fdeMindset: "Deploy with automated infrastructure-as-code pipelines and zero downtime."
  },
  {
    id: 'adopt',
    name: 'ADOPT',
    icon: Users,
    objective: "Drive high employee adoption by embedding UI workflows directly into existing daily tools and leading change management programs.",
    keyQuestions: [
      "Does the tool require context switching away from daily applications?",
      "Have internal champions been trained in every department?",
      "Is SSO single-click authentication active?"
    ],
    artifacts: ["ADKAR Change Management Plan", "Internal Champion Playbook", "SSO Integration Guide"],
    technologies: ["Slack/Teams SDK", "LaunchDarkly", "Pendo Adoption Telemetry"],
    commonMistakes: ["Building an isolated standalone web portal that users ignore."],
    fdeMindset: "Meet users where they work to eliminate workflow friction."
  },
  {
    id: 'measure',
    name: 'MEASURE',
    icon: TrendingUp,
    objective: "Track real-time operational telemetry on time saved, token costs, latency, error rates, and net financial ROI.",
    keyQuestions: [
      "What is the empirical annual cost savings ($) generated?",
      "What is the average task completion speedup factor?",
      "How much did token consumption cost per user transaction?"
    ],
    artifacts: ["Executive Financial ROI Dashboard", "Token Expenditure Audit", "Operational Telemetry Report"],
    technologies: ["Prometheus", "Grafana", "OpenTelemetry", "Recharts"],
    commonMistakes: ["Failing to instrument quantitative telemetry to prove financial return to CFO."],
    fdeMindset: "Verify engineering success through clear financial and operational metrics."
  },
  {
    id: 'learn',
    name: 'LEARN',
    icon: BookOpen,
    objective: "Gather operational feedback, analyze edge-case failure modes, and continuously optimize model prompts and indexes.",
    keyQuestions: [
      "Which user queries resulted in negative feedback or fallback responses?",
      "Where can semantic cache hit rates be improved?",
      "What new edge cases belong in the evaluation dataset?"
    ],
    artifacts: ["Post-Mortem Incident Logs", "Query Failure Taxonomy", "Optimization Backlog"],
    technologies: ["Grafana Traces", "User Feedback Collectors", "LangSmith Tracing"],
    commonMistakes: ["Treating deployment as the end of the project rather than the start of continuous learning."],
    fdeMindset: "Treat every production failure as valuable telemetry for systemic refinement."
  },
  {
    id: 'codify',
    name: 'CODIFY',
    icon: Repeat,
    objective: "Extract reusable architectural patterns, custom MCP servers, and boilerplate libraries to accelerate future customer engagements.",
    keyQuestions: [
      "What components of this deployment can be packaged into reusable platform SDKs?",
      "How can future FDE engagements deploy this 5x faster?"
    ],
    artifacts: ["Reusable Enterprise SDK", "Internal MCP Server Registry", "Architectural Blueprint"],
    technologies: ["Internal Package Manager", "Template Scaffolder", "Antigravity CLI"],
    commonMistakes: ["Re-inventing custom integration adapters from scratch on every engagement."],
    fdeMindset: "Turn custom customer solutions into repeatable platform assets for the entire team."
  }
];

