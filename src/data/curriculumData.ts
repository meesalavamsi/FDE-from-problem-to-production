import { Mission } from '../types/fde';

export const CURRICULUM_DATA: Mission[] = [
  {
    id: 1,
    week: "Week 1",
    month: "Month 1: Systems & Core AI",
    title: "Enterprise Async Python & High-Throughput Microservices",
    category: "Backend & Systems",
    mission: "Architect high-throughput, async REST APIs with strict Pydantic schema validation for Nexora's document ingestion portal.",
    customerStory: "Nexora's HR department receives 4,000 PDF resumes daily. Their legacy Flask script crashes under concurrent requests and returns unstructured 500 errors to internal clients.",
    businessProblem: "Document parsing bottlenecks slow down hiring pipelines by 3.5 days per candidate, causing high drop-off rates.",
    currentEnvironment: [
      "Legacy Python monolithic Flask server",
      "Synchronous blocking HTTP requests",
      "No schema validation or request throttling",
      "Basic file-system storage without security scanning"
    ],
    fdeObjective: "Build a production-grade FastAPI microservice with async file ingestion, Pydantic type safety, structured JSON logging, and OAuth2 JWT authentication.",
    concepts: [
      "FastAPI Async/Await event loop concurrency",
      "Pydantic V2 schema validation & serialization",
      "Custom exception handlers and standardized RFC-7807 error responses",
      "Structured JSON logging with trace IDs",
      "OAuth2 Bearer token authentication"
    ],
    technology: ["Python 3.12", "FastAPI", "Pydantic V2", "Uvicorn", "HTTPX", "PyJWT"],
    architectureSummary: "Client -> FastAPI Gateway (Async Handler) -> Pydantic Validator -> Token Verifier -> Microservice Bus",
    interactiveChallengeTitle: "Async Concurrency Throttling",
    interactiveChallengeDescription: "Under heavy payload spikes (500 requests/sec), memory usage spikes to 98%. Select the optimal concurrency control pattern.",
    failureScenario: "Unvalidated candidate JSON payloads cause SQL injection attempt via raw dictionary key extraction.",
    decisionPoint: {
      question: "How should you enforce rigid request schemas while preventing payload injection attacks?",
      options: [
        {
          text: "Use strict Pydantic models with Field regex validation and custom validators.",
          isCorrect: true,
          consequence: "Requests with illegal characters are rejected at the edge with HTTP 422 before reaching business logic.",
          reasoning: "Pydantic validates types and sanitizes inputs before payload reaches internal database layers."
        },
        {
          text: "Wrap incoming request body in raw dict and rely on try/except blocks.",
          isCorrect: false,
          consequence: "Malformed requests bypass validation, leading to runtime KeyError exceptions in production.",
          reasoning: "Raw dict access loses all type safety, automatic OpenAPI docs, and automated sanitization."
        }
      ]
    },
    solution: "Implemented FastAPI with Pydantic schemas, asyncio.Semaphore rate limiting, and standard RFC-7807 error responses.",
    miniProject: "Build an async resume parser microservice that handles 1,000 concurrent file uploads with <50ms endpoint overhead.",
    realWorldApplication: "Enterprise AI backends require bulletproof API contracts. AI components fail unpredictably if fed non-deterministic raw payload structures.",
    skillsUnlocked: ["FastAPI", "Async Concurrency", "Pydantic Schema Design", "Enterprise Logging"]
  },

  {
    id: 2,
    week: "Week 2",
    month: "Month 1: Systems & Core AI",
    title: "AI-Assisted Prototyping & Security AST Auditing",
    category: "AI-Assisted Engineering",
    mission: "Leverage AI coding tools for rapid 48-hour MVP development while maintaining strict enterprise code review and security standards.",
    customerStory: "Nexora's VP of Product demands a working prototype of an automated invoice parser by Friday morning for the C-suite demo.",
    businessProblem: "Traditional 3-week sprint cycles are too slow to prove viability of new enterprise AI concepts to internal budget holders.",
    currentEnvironment: [
      "Zero existing code for invoice OCR/parsing",
      "Strict internal security guidelines prohibiting public SaaS tool keys",
      "Requirement to run unit tests on generated code before commit"
    ],
    fdeObjective: "Use AI code generators to scaffold data pipelines in hours, perform thorough security audits, add unit test coverage, and deploy a demo.",
    concepts: [
      "AI-driven scaffold generation & refactoring",
      "AI code debugging & hallucination detection in syntax",
      "Automated unit test generation with pytest",
      "AST code auditing for hardcoded secrets or vulnerability patterns",
      "Responsible use of coding assistants in enterprise repos"
    ],
    technology: ["Python", "Pytest", "Git Hooks", "Bandit AST Security Scanner", "Antigravity CLI"],
    architectureSummary: "Prompt Specification -> AI Code Scaffold -> Automated Security AST Scanner -> Pytest Suite -> Verified Git Commit",
    interactiveChallengeTitle: "Spot the AI Code Flaw",
    interactiveChallengeDescription: "AI generated an async HTTP client but forgot to reuse connection pools, creating socket exhaustion under load.",
    failureScenario: "Copied AI code contained a hardcoded AWS key in a comment block, triggering automated Git leak detection.",
    decisionPoint: {
      question: "An AI coding assistant generated a complex regex for document parsing. What is the FDE's required next step?",
      options: [
        {
          text: "Write comprehensive unit tests with edge-case test vectors and run a ReDoS (Regular Expression Denial of Service) check.",
          isCorrect: true,
          consequence: "Identified exponential catastrophic backtracking vulnerability on strings over 100KB.",
          reasoning: "Never trust AI-generated regex or parser logic without adversarial automated test cases."
        },
        {
          text: "Ship the code immediately since the initial manual test string passed.",
          isCorrect: false,
          consequence: "Production server freezes when processing a malformed 2MB PDF invoice.",
          reasoning: "Manual single-vector testing fails to catch ReDoS and edge-case memory leaks."
        }
      ]
    },
    solution: "Established a 4-step Vibe Coding Workflow: Prompt -> Scaffold -> AST Security Scan -> Test Coverage Enforcement.",
    miniProject: "Scaffold a full-stack document viewer prototype in 4 hours using AI tools, then achieve 95% test coverage and zero security flags.",
    realWorldApplication: "FDEs must move 5x faster than traditional developers using AI tools without sacrificing enterprise quality or security.",
    skillsUnlocked: ["Vibe Coding", "Rapid Prototyping", "AST Security Auditing", "Automated Testing"]
  },

  {
    id: 3,
    week: "Week 3",
    month: "Month 1: Systems & Core AI",
    title: "Foundation Model Principles & Grounded RAG",
    category: "AI & Vector Search",
    mission: "Design a high-precision Retrieval-Augmented Generation (RAG) architecture over Nexora's 50,000 internal PDF policy documents.",
    customerStory: "Nexora's 80,000 employees spend 45 minutes daily searching internal portals. A naïve LLM chatbot hallucinated outdated benefits policies.",
    businessProblem: "Employee dissatisfaction and HR compliance risks stemming from inaccurate corporate advice.",
    currentEnvironment: [
      "50,000 legacy PDFs across SharePoint and AWS S3",
      "Unstructured tables, multi-column layouts, images",
      "Naïve search returning random page matches without semantic context"
    ],
    fdeObjective: "Architect an end-to-end RAG pipeline using semantic chunking, hybrid vector/keyword search, Cohere reranking, and citation grounding.",
    concepts: [
      "Tokenization & context window math",
      "Document parsing: Markdown vs PDF layout tree parsing",
      "Semantic chunking with overlapping windows",
      "Vector Embeddings & Cosine/Dot Product similarity",
      "Hybrid Search (BM25 + Dense Vector Search with Reciprocal Rank Fusion)",
      "Cross-Encoder Reranking for top-k precision",
      "Citation attribution & groundedness evaluation"
    ],
    technology: ["Qdrant", "Pinecone", "LangChain / LlamaIndex", "SentenceTransformers", "Cohere Rerank", "Tiktoken"],
    architectureSummary: "PDF Document -> Unstructured Parser -> Parent-Child Chunking -> Embeddings -> Qdrant Hybrid Search -> Cohere Reranker -> LLM Grounded Prompt -> Answer + Citations",
    interactiveChallengeTitle: "Chunk Size vs Retrieval Precision",
    interactiveChallengeDescription: "Chunk size of 2000 tokens retrieves too much noise; chunk size of 100 misses paragraph-level context. Choose the optimal chunk strategy.",
    failureScenario: "The LLM answered a policy question using chunks from a 2019 draft document because vector search ignored document metadata timestamps.",
    decisionPoint: {
      question: "The customer asks: 'Can we just feed all 50,000 documents into a 2M token context window for every user query?'",
      options: [
        {
          text: "Explain the latency cost ($0.50/query, 18s response time) and 'Lost in the Middle' attention degradation; implement RAG hybrid search.",
          isCorrect: true,
          consequence: "Query cost drops by 99%, response time drops to 1.2 seconds, accuracy increases.",
          reasoning: "Context windows are expensive and suffer performance decay when saturated with irrelevant tokens."
        },
        {
          text: "Agree to dump all documents into the prompt since the model supports context windows up to 2M tokens.",
          isCorrect: false,
          consequence: "Monthly API bill exceeds $120,000 and response latency degrades past 20 seconds.",
          reasoning: "Massive context prompts cause extreme latency, massive costs, and severe context retrieval loss."
        }
      ]
    },
    solution: "Deployed hybrid search (BM25 + Dense vector) with Cohere reranking and metadata temporal filters (status: active, year: >=2024).",
    miniProject: "Build a production RAG pipeline with parent-child chunking, hybrid retrieval, reranking, and verbatim citation verification.",
    realWorldApplication: "Grounding is non-negotiable in enterprise. If AI cannot cite exact document source paragraphs, enterprise security will reject deployment.",
    skillsUnlocked: ["Vector Databases", "Hybrid Search", "Semantic Chunking", "Cohere Reranking", "Groundedness Evaluation"]
  },

  {
    id: 4,
    week: "Week 4",
    month: "Month 1: Systems & Core AI",
    title: "Enterprise Integration Adapters & System Interoperability",
    category: "Enterprise Systems",
    mission: "Integrate AI workflows directly into Nexora's legacy SAP ERP and Salesforce CRM via OAuth2 and event-driven webhooks.",
    customerStory: "Nexora's sales reps enter client notes in Salesforce, but inventory allocation relies on SAP R/3. Data syncing requires manual double-entry.",
    businessProblem: "Data latency between CRM and ERP leads to wrong inventory promises and $1.2M in annual order cancellations.",
    currentEnvironment: [
      "SAP R/3 legacy system with SOAP XML endpoints",
      "Salesforce Enterprise Edition with REST API rate limits",
      "OAuth 2.0 / SAML Single Sign-On",
      "Message queue: RabbitMQ"
    ],
    fdeObjective: "Build an event-driven integration layer connecting Salesforce Webhooks -> Kafka/RabbitMQ -> AI Extraction Agent -> SAP SOAP Connector.",
    concepts: [
      "Enterprise Integration Patterns (EIP)",
      "REST, GraphQL, SOAP, and gRPC protocol adapters",
      "OAuth 2.0 Client Credentials Grant & JWT assertions",
      "Webhook signature validation & idempotency keys",
      "Event-driven architecture with message queues & retry logic"
    ],
    technology: ["Python", "RabbitMQ", "Celery", "Salesforce API", "SAP Connector", "OAuth2 / SSO"],
    architectureSummary: "Salesforce Webhook -> HMAC Signature Verifier -> RabbitMQ Event Queue -> Async Worker -> AI Entity Extraction -> SAP SOAP Adapter",
    interactiveChallengeTitle: "API Rate Limit Exhaustion",
    interactiveChallengeDescription: "Salesforce returns HTTP 429 Rate Limit Exceeded during peak morning sync. Select the resilient retry strategy.",
    failureScenario: "An unauthenticated webhook endpoint allowed external actors to inject fake sales orders directly into SAP queue.",
    decisionPoint: {
      question: "How should the AI integration layer handle transient network drops when posting data into legacy SAP ERP endpoints?",
      options: [
        {
          text: "Use exponential backoff retries with jitter, idempotency keys, and a Dead Letter Queue (DLQ) for failed messages.",
          isCorrect: true,
          consequence: "System auto-recovers from transient network drops without duplicate order entries.",
          reasoning: "Idempotency prevents duplicate state mutations while DLQ guarantees zero message loss."
        },
        {
          text: "Catch exception and ignore failed requests to keep the processing loop running fast.",
          isCorrect: false,
          consequence: "300 client orders drop silently without notification to sales or fulfillment teams.",
          reasoning: "Ignoring exceptions leads to data corruption, missing financial transactions, and lost revenue."
        }
      ]
    },
    solution: "Engineered an idempotent event consumer with HMAC-SHA256 signature verification and automated Dead Letter Queue alerting.",
    miniProject: "Build an integration bridge that parses Salesforce webhooks with an LLM and updates a mock ERP database with full audit logging.",
    realWorldApplication: "AI is useless if disconnected from real-world enterprise databases, CRMs, and ERP systems of record.",
    skillsUnlocked: ["Enterprise System Integration", "OAuth2 / SSO", "Webhooks & Idempotency", "Message Queues", "Legacy Protocols"]
  },

  {
    id: 5,
    week: "Week 5",
    month: "Month 2: Agents, MCP & Infrastructure",
    title: "Autonomous Multi-Agent Systems & MCP Orchestration",
    category: "Agents & MCP",
    mission: "Build an autonomous multi-agent orchestration framework using Model Context Protocol (MCP) to automate IT support ticket resolution.",
    customerStory: "Nexora's IT helpdesk receives 12,000 password resets, software access requests, and VPN troubleshooting tickets per month.",
    businessProblem: "Average ticket resolution time is 14 hours, costing $35 per ticket in human agent labor.",
    currentEnvironment: [
      "ServiceNow ITSM system",
      "Active Directory LDAP identity server",
      "Slack enterprise workspace",
      "Strict authorization boundaries between L1 and L3 IT admins"
    ],
    fdeObjective: "Construct a multi-agent system (Router Agent, ServiceNow Agent, ActiveDirectory Agent) connected via MCP servers with human-in-the-loop approvals.",
    concepts: [
      "Tool Calling & Function Calling schemas",
      "ReAct (Reason + Act) & Plan-and-Execute agent loops",
      "State machines & Agent Memory persistence",
      "Human-in-the-Loop (HITL) approval breakpoints for high-risk tools",
      "Model Context Protocol (MCP) Architecture: Host, Client, Server, Tools, Resources, Prompts",
      "Guardrails: Input validation, output schema validation, rate limiting, permissions"
    ],
    technology: ["LangGraph", "Model Context Protocol (MCP) SDK", "FastAPI", "Redis", "Pydantic", "ServiceNow API"],
    architectureSummary: "Slack User -> Router Agent -> MCP Client -> [ServiceNow MCP Server | ActiveDirectory MCP Server] -> Human Approval Gate -> Production Execution",
    interactiveChallengeTitle: "Tool Loop Infinite Recursion",
    interactiveChallengeDescription: "An agent called check_ticket_status repeatedly 50 times in a loop because tool response format didn't match system prompt expectations.",
    failureScenario: "An un-gated Agent executed delete_user_account when asked to 'clean up user record' because tool scope was over-privileged.",
    decisionPoint: {
      question: "How do you protect production infrastructure when giving an AI agent access to write-level enterprise tools?",
      options: [
        {
          text: "Implement Least-Privilege MCP Server tool permissions and require explicit Human-in-the-Loop approval for write/delete actions.",
          isCorrect: true,
          consequence: "Agent requests approval in Slack with detailed diff before executing sensitive changes.",
          reasoning: "Autonomous write actions on core infrastructure must always have safety boundaries and approval workflows."
        },
        {
          text: "Rely on system prompt instructions telling the agent: 'Never delete records without asking.'",
          isCorrect: false,
          consequence: "Prompt injection attack bypasses system prompt, resulting in accidental account deletion.",
          reasoning: "Prompt instructions are soft suggestions, not deterministic security boundaries."
        }
      ]
    },
    solution: "Engineered a LangGraph stateful multi-agent system with MCP server isolation and Slack-integrated human approval gates.",
    miniProject: "Create an IT Support Agent suite with custom MCP servers for GitHub, Database, and ServiceNow API integrations.",
    realWorldApplication: "Agents without deterministic boundaries, MCP standards, and state management are dangerous toys in enterprise environments.",
    skillsUnlocked: ["LangGraph", "Model Context Protocol (MCP)", "Multi-Agent Orchestration", "Tool Permissions", "Human-in-the-Loop Systems"]
  },

  {
    id: 6,
    week: "Week 6",
    month: "Month 2: Agents, MCP & Infrastructure",
    title: "AI Containerization & Cloud Infrastructure",
    category: "Infrastructure & Cloud",
    mission: "Containerize multi-container AI services into Kubernetes pods with GPU node affinity, health probes, and zero-downtime CI/CD deployment.",
    customerStory: "The data science team developed a model service on a local workstation, but it fails to run on Nexora's internal Red Hat OpenShift cluster.",
    businessProblem: "'It works on my machine' syndrome delaying production releases by 6 weeks per model iteration.",
    currentEnvironment: [
      "Kubernetes / OpenShift production clusters",
      "NVIDIA GPU node pools for local inference models",
      "HashiCorp Vault secret management",
      "GitLab CI/CD pipelines"
    ],
    fdeObjective: "Write optimized multi-stage Dockerfiles, Helm charts, Kubernetes Liveness/Readiness probes, and automated deployment pipelines.",
    concepts: [
      "Multi-stage Docker builds & minimal image size optimization",
      "Kubernetes primitives: Deployments, Services, Ingress, ConfigMaps, Secrets",
      "GPU passthrough & node selectors/tolerations",
      "Container health checks: Startup, Liveness, and Readiness probes",
      "Secret management integration (HashiCorp Vault / K8s Secrets)",
      "Blue/Green and Canary zero-downtime rollout strategies"
    ],
    technology: ["Docker", "Kubernetes", "Helm", "GitLab CI", "HashiCorp Vault", "Nginx Ingress"],
    architectureSummary: "Git Push -> GitLab CI Pipeline -> Security Scan -> Docker Build -> Container Registry -> Helm Upgrade -> K8s Rolling Deploy -> Vault Secret Sync",
    interactiveChallengeTitle: "Pod OOMKilled Loop",
    interactiveChallengeDescription: "PyTorch worker pod gets terminated with status OOMKilled during large batch embeddings processing. Fix the container config.",
    failureScenario: "Kubernetes readiness probe checked /health before vector model loaded into RAM, triggering continuous restart loop.",
    decisionPoint: {
      question: "Your AI service container takes 45 seconds to download model weights into GPU RAM on boot. How do you configure Kubernetes health checks?",
      options: [
        {
          text: "Configure a startupProbe with sufficient failureThreshold to defer livenessProbe execution until initial model load completes.",
          isCorrect: true,
          consequence: "Pod initializes smoothly without Kubernetes killing it during cold boot weight loading.",
          reasoning: "Startup probes prevent Kubernetes from killing slow-booting containers before initialization."
        },
        {
          text: "Set livenessProbe initialDelaySeconds to 2 seconds and timeoutSeconds to 1 second.",
          isCorrect: false,
          consequence: "Kubernetes perpetually kills and restarts the pod before model finishes loading into memory.",
          reasoning: "Aggressive liveness probes cause crash loops on services with slow initialization phases."
        }
      ]
    },
    solution: "Created production Helm charts with startup probes, non-root user execution, and HashiCorp Vault secrets injection.",
    miniProject: "Package an LLM orchestration API into Docker, deploy to local Kubernetes with Minikube, and perform zero-downtime rolling update.",
    realWorldApplication: "An AI system that cannot be containerized, auto-scaled, and reliably deployed on Kubernetes will never pass enterprise IT standards.",
    skillsUnlocked: ["Docker & Multi-Stage Builds", "Kubernetes & Helm", "CI/CD Deployment Pipelines", "Container Health Probes", "Secret Management"]
  },

  {
    id: 7,
    week: "Week 7",
    month: "Month 2: Agents, MCP & Infrastructure",
    title: "Telemetry, LLMOps & Automated Quality Benchmarking",
    category: "LLMOps & Monitoring",
    mission: "Establish end-to-end tracing, cost telemetry, token optimization, and automated RAG evaluation metrics for Nexora's AI platform.",
    customerStory: "Nexora's CFO received an unexpected $45,000 monthly OpenAI invoice. Simultaneously, users reported silent response quality drops.",
    businessProblem: "Zero visibility into per-department AI token expenditure, model latency bottlenecks, or hallucination rates in production.",
    currentEnvironment: [
      "OpenAI GPT-4o & Azure OpenAI endpoints",
      "Prometheus & Grafana monitoring stack",
      "OpenTelemetry tracing collectors",
      "No automated test suites for prompt regression testing"
    ],
    fdeObjective: "Deploy OpenTelemetry tracing, LangSmith/Phoenix evaluation metrics (Faithfulness, Answer Relevance, Context Recall), and cost attribution dashboards.",
    concepts: [
      "LLM Observability: Traces, Spans, Call Graphs",
      "RAG Triad Metrics: Groundedness, Context Precision, Answer Relevance",
      "Token usage & cost attribution tagging by department",
      "Prompt regression testing & automated CI test suites",
      "Guardrail monitoring: PII detection, toxicity, prompt injection alerts",
      "Latency analysis: Time-to-First-Token (TTFT) vs Tokens-per-Second (TPS)"
    ],
    technology: ["LangSmith", "Arize Phoenix", "OpenTelemetry", "Prometheus", "Grafana", "Ragas"],
    architectureSummary: "User Query -> API Gateway (OTel Trace ID) -> LLM/RAG Pipeline -> Telemetry Collector -> [Grafana Cost Dashboard | Ragas Auto-Eval Pipeline]",
    interactiveChallengeTitle: "Latency Bottleneck Identification",
    interactiveChallengeDescription: "User response latency jumped from 1.5s to 8.2s. Use trace call graphs to isolate the culprit component.",
    failureScenario: "A prompt edit increased system prompt token count by 400%, quietly doubling per-query cost across 500,000 user requests.",
    decisionPoint: {
      question: "How do you systematically detect if a new LLM model release degrades response quality across 1,000 corporate knowledge use cases?",
      options: [
        {
          text: "Run automated offline eval benchmarks using Ragas metrics (Faithfulness, Context Precision) against a curated gold standard test set.",
          isCorrect: true,
          consequence: "Identified 14% drop in context recall before deploying model update to production.",
          reasoning: "Automated quantitative evaluation suites catch silent prompt/model regressions prior to release."
        },
        {
          text: "Ask 3 team members to manually try 5 queries and give a thumbs-up approval.",
          isCorrect: false,
          consequence: "Production users encounter hallucinations in specialized legal compliance workflows.",
          reasoning: "Manual ad-hoc testing cannot cover edge cases or provide statistically significant quality guarantees."
        }
      ]
    },
    solution: "Configured OpenTelemetry span tracing with automated Ragas evaluation gates in CI/CD pipeline and Grafana token cost dashboards.",
    miniProject: "Build an LLMOps observability dashboard tracking TTFT, total tokens, cost per request, groundedness score, and real-time PII alerts.",
    realWorldApplication: "You cannot manage what you do not measure. Enterprise AI requires real-time telemetry on cost, latency, and quality.",
    skillsUnlocked: ["LLMOps", "OpenTelemetry Tracing", "Ragas Evaluation", "Token Cost Attribution", "Grafana Observability"]
  },

  {
    id: 8,
    week: "Week 8",
    month: "Month 2: Agents, MCP & Infrastructure",
    title: "Fault-Tolerant Enterprise System Architecture",
    category: "System Design",
    mission: "Design a fault-tolerant, scalable High-Level Architecture (HLD) and Low-Level Architecture (LLD) for Nexora's 80,000-user Enterprise AI Platform.",
    customerStory: "Nexora wants a unified Enterprise AI Platform serving HR, Legal, Sales, and IT departments simultaneously with isolated data security.",
    businessProblem: "Current siloed AI pilots duplicate infrastructure costs, violate cross-department data compliance, and suffer from single points of failure.",
    currentEnvironment: [
      "Multi-region cloud infrastructure (AWS + Azure)",
      "Strict data residency laws (GDPR in Europe, HIPAA in US)",
      "Peak throughput requirement: 2,500 concurrent active requests",
      "SLA requirement: 99.9% uptime, <2.5s end-to-end latency"
    ],
    fdeObjective: "Draft complete High-Level (HLD) & Low-Level (LLD) architectural documents detailing caching layers, fallback models, queues, and security zones.",
    concepts: [
      "High-Level Design (HLD) vs Low-Level Design (LLD)",
      "Multi-tenant data isolation & Role-Based Access Control (RBAC)",
      "Semantic Caching (Redis + Vector similarity cache for LLM queries)",
      "Fallback strategies: Primary LLM -> Secondary Regional LLM -> Local SLM",
      "Rate limiting, circuit breakers, and graceful degradation",
      "Disaster recovery, backup vector indexes, and zero-trust security architecture"
    ],
    technology: ["Redis Enterprise", "AWS Route53", "Nginx", "Kong API Gateway", "Qdrant Cluster", "Kafka"],
    architectureSummary: "User Request -> Regional DNS -> API Gateway (Auth & Rate Limit) -> Semantic Redis Cache -> Queue -> LLM Router -> Primary/Fallback Model -> Response",
    interactiveChallengeTitle: "Primary Model Region Outage",
    interactiveChallengeDescription: "Primary Azure OpenAI region goes offline. Circuit breaker triggers. Architect the seamless fallback path.",
    failureScenario: "A spike in HR query volume starved Legal team requests because tenant queues lacked rate-limiting isolation.",
    decisionPoint: {
      question: "How do you prevent identical user queries from hitting expensive LLM APIs repeatedly while respecting security permissions?",
      options: [
        {
          text: "Implement a multi-tenant Semantic Cache using Redis Vector Search, keyed by hash of (User Role + Tenant ID + Query Embedding).",
          isCorrect: true,
          consequence: "Cache hits return instant answers in <30ms, saving $12,000 monthly while respecting data boundaries.",
          reasoning: "Semantic caching reduces cost and latency, but must incorporate RBAC tenant keys to prevent unauthorized data leaks."
        },
        {
          text: "Implement a global unauthenticated Redis string cache based solely on query text.",
          isCorrect: false,
          consequence: "An unprivileged employee receives cached confidential executive compensation data.",
          reasoning: "Global caching without user security context leads to severe cross-tenant data leaks."
        }
      ]
    },
    solution: "Engineered a fault-tolerant multi-region architecture with semantic caching, tenant queue isolation, and automated model fallback.",
    miniProject: "Produce full HLD and LLD diagrams and implementation specs for a multi-tenant enterprise RAG & Agent system.",
    realWorldApplication: "System design separates simple prototypes from resilient enterprise software that withstands production scale.",
    skillsUnlocked: ["Enterprise System Design", "HLD / LLD Documentation", "Semantic Caching", "Circuit Breakers & Fallbacks", "Multi-Tenant Security"]
  },

  {
    id: 9,
    week: "Week 9",
    month: "Month 3: Product, Security & Business ROI",
    title: "Strategic Customer Discovery & Workflow Mapping",
    category: "Product & Discovery",
    mission: "Conduct structured stakeholder interviews across 5 Nexora divisions to transform vague user complaints into quantified engineering problem statements.",
    customerStory: "Nexora executives asked for an 'AI transformation strategy', but individual department heads gave completely conflicting priorities.",
    businessProblem: "High risk of building expensive AI features that address secondary symptoms rather than root-cause operational bottlenecks.",
    currentEnvironment: [
      "Fragmented user feedback across email, Slack, and survey forms",
      "Vague requests: 'Make our search faster', 'Automate report writing'",
      "Multiple conflicting internal budget holders"
    ],
    fdeObjective: "Execute the FDE Discovery Framework: Stakeholder Mapping -> Pain-Point Quantification -> Root-Cause Analysis (5 Whys) -> Swim-lane Process Diagrams.",
    concepts: [
      "FDE Discovery Framework & Stakeholder Mapping",
      "The '5 Whys' root-cause analysis methodology",
      "Process Mapping (BPMN 2.0 Swim-lane Diagrams)",
      "Quantifying qualitative feedback (hours lost, financial cost, error frequency)",
      "Feasibility vs Impact prioritization matrix"
    ],
    technology: ["Mermaid.js", "BPMN 2.0", "Miro", "Discovery Interview Framework"],
    architectureSummary: "Qualitative Interviews -> 5-Whys Analysis -> BPMN Swim-lane Process Mapping -> Operational Metric Extraction -> Prioritized Roadmap",
    interactiveChallengeTitle: "Isolating the Hidden Bottleneck",
    interactiveChallengeDescription: "Contract approvals take 18 days, but active work time is only 3 hours. Identify where the 17.8 days of idle wait time occur.",
    failureScenario: "Built a complex automated report generator only to discover end-users preferred a simple 1-click summary button inside Outlook.",
    decisionPoint: {
      question: "Where should an FDE insert AI into a multi-step human review process?",
      options: [
        {
          text: "At high-latency manual verification nodes (e.g., cross-referencing compliance tables), providing AI pre-analysis to human reviewers.",
          isCorrect: true,
          consequence: "Human review time per contract drops from 4 hours to 15 minutes.",
          reasoning: "AI yields maximum leverage when augmenting human bottleneck decision nodes rather than isolated steps."
        },
        {
          text: "Replace the entire 5-stage human workflow with an autonomous script overnight without human review gates.",
          isCorrect: false,
          consequence: "Legal team rejects system outright due to unvetted risk and lack of audit capability.",
          reasoning: "Attempting to bypass human stakeholders completely leads to total operational rejection and compliance failure."
        }
      ]
    },
    solution: "Mapped full AS-IS process using Swim-lane diagrams, highlighted 3 key friction nodes, and proposed TO-BE workflow reducing cycle time from 18 days to 2 days.",
    miniProject: "Conduct simulated stakeholder interviews with Nexora personas, extract core requirements, and generate an interactive Swim-lane diagram.",
    realWorldApplication: "An FDE must be a detective before being a builder. Building the wrong system cleanly is still a catastrophic engineering failure.",
    skillsUnlocked: ["Problem Discovery", "Stakeholder Interviews", "Root Cause Analysis (5 Whys)", "Process Mapping (BPMN)", "AI Insertion Node Design"]
  },

  {
    id: 10,
    week: "Week 10",
    month: "Month 3: Product, Security & Business ROI",
    title: "Technical Specification & Contract Governance (BRD/TDD)",
    category: "Documentation & Specs",
    mission: "Author an airtight enterprise Business Requirement Document (BRD) and Technical Design Document (TDD) for Nexora's Executive AI Copilot.",
    customerStory: "Previous AI initiative failed because the engineering team built features according to verbal agreements that business leaders later repudiated.",
    businessProblem: "Scope creep, moving goalposts, and ambiguous acceptance criteria causing budget overruns.",
    currentEnvironment: [
      "Vague business mandates from executive sponsors",
      "Strict legal compliance guidelines regarding data retention",
      "Conflicting functional expectations between business units"
    ],
    fdeObjective: "Draft a formal BRD and TDD covering Objectives, Functional/Non-Functional SLAs, Data Schemas, OpenAPI Specs, and Acceptance Criteria.",
    concepts: [
      "Anatomy of Enterprise BRD & TDD Specifications",
      "Functional Requirements vs Non-Functional SLAs (Uptime, Latency, Accuracy %)",
      "OpenAPI 3.0 Contract Governance & Data Schemas",
      "Security, Compliance & Regulatory Constraints (SOC2, ISO27001, GDPR)",
      "Acceptance Criteria & Sign-off Governance frameworks"
    ],
    technology: ["OpenAPI / Swagger", "Mermaid.js Architecture Diagrams", "BRD/TDD Enterprise Templates"],
    architectureSummary: "Business Problem -> BRD Functional Spec -> NFR SLAs -> OpenAPI Contract -> Data Model -> Security Matrix -> Acceptance Criteria",
    interactiveChallengeTitle: "NFR SLA Negotiation",
    interactiveChallengeDescription: "Operations wants 99.99% availability and <500ms latency. Negotiate realistic NFRs within the allocated $50k budget.",
    failureScenario: "Project rejected at launch because the spec forgot to specify that data must reside strictly within European Union cloud regions.",
    decisionPoint: {
      question: "How should an FDE state an AI system's accuracy requirement in a formal enterprise specification?",
      options: [
        {
          text: "Specify measurable quantitative metrics: '95% Groundedness score on gold-standard dataset, zero PII leaks, <2.0s latency @ 95th percentile.'",
          isCorrect: true,
          consequence: "Both engineering and executive teams have unambiguous, verifiable criteria for project acceptance.",
          reasoning: "AI requirements must be mathematically testable to prevent post-launch contract disputes."
        },
        {
          text: "Write: 'The AI must give smart, accurate, human-like answers to all user questions.'",
          isCorrect: false,
          consequence: "Endless debate post-launch because 'smart' and 'accurate' are subjective and impossible to test objectively.",
          reasoning: "Vague qualitative adjectives lead to scope creep and project failure."
        }
      ]
    },
    solution: "Authored a complete 12-page BRD/TDD specification with explicit non-functional SLAs, securing written sign-off from CTO, CISO, and VP of Operations.",
    miniProject: "Convert raw customer interview notes into a formal enterprise BRD and TDD with OpenAPI schemas and quantitative acceptance criteria.",
    realWorldApplication: "The specification is the binding contract between business problems and technical solutions. Precision here prevents failure later.",
    skillsUnlocked: ["Enterprise BRD/TDD Specs", "OpenAPI Contract Design", "Non-Functional SLAs", "Data Model Schemas", "Acceptance Criteria"]
  },

  {
    id: 11,
    week: "Week 11",
    month: "Month 3: Product, Security & Business ROI",
    title: "Production UAT, Canary Launch & Rollback Engineering",
    category: "Deployment & Quality",
    mission: "Execute a structured 100-user User Acceptance Testing (UAT) program at Nexora and lead a zero-downtime production Go-Live launch.",
    customerStory: "In previous launches, unvetted bugs caused end-users to abandon new tools on Day 1, labeling them 'broken AI'.",
    businessProblem: "High user churn and loss of trust during initial product exposure due to unmanaged UAT execution.",
    currentEnvironment: [
      "Staging environment matching production architecture",
      "100 pilot users selected across HR, Sales, and Support",
      "Strict Go/No-Go readiness checklist requirements"
    ],
    fdeObjective: "Structure UAT Test Protocols -> Monitor Defect Density -> Conduct Security Gate Review -> Execute Production Go-Live Runbook -> Monitor Ramp-Up.",
    concepts: [
      "UAT Test Plan Architecture & Test Scenario Scripting",
      "Defect Severity Classification (P1 Blocker to P4 Cosmetic)",
      "Production Go-Live Runbook & Step-by-Step Execution Timelines",
      "Rollback Plan & Automated Incident Triggers",
      "Canary Deployment & Staged Traffic Shifting (5% -> 25% -> 100%)"
    ],
    technology: ["Jira Test Management", "Runbook Automation", "LaunchDarkly Feature Flags", "DataDog / Grafana"],
    architectureSummary: "Staging UAT -> Defect Triage (Zero P1/P2) -> Security Audit Gate -> Go/No-Go Decision -> 5% Canary Traffic -> 100% Prod Release",
    interactiveChallengeTitle: "Mid-UAT P1 Failure",
    interactiveChallengeDescription: "During UAT Day 2, a memory leak crashes the staging API server. Execute the Go/No-Go emergency decision protocol.",
    failureScenario: "Launched to 100% of 80,000 employees simultaneously; unexpected DB connection pool exhaustion crashed the cluster on Monday morning.",
    decisionPoint: {
      question: "During UAT, 3 non-critical cosmetic bugs (P4) remain open, but all security and accuracy tests (P1/P2) pass 100%. What is the Go/No-Go decision?",
      options: [
        {
          text: "Proceed with Go-Live via staged Canary deployment while scheduling P4 cosmetic fixes for the next patch release.",
          isCorrect: true,
          consequence: "Successful production rollout on schedule without sacrificing stability or user trust.",
          reasoning: "Pragmatic go-live decisions weigh critical blocker criteria against business timeline commitments."
        },
        {
          text: "Delay global launch by 3 weeks to fix minor padding and font color alignment bugs.",
          isCorrect: false,
          consequence: "Missed strategic quarterly deadline, causing executive frustration and loss of momentum.",
          reasoning: "Delaying launches for minor non-blockers damages business trust and momentum."
        }
      ]
    },
    solution: "Executed a flawless 4-stage Canary Go-Live rollout across 80,000 employees with active incident monitoring and zero downtime.",
    miniProject: "Build a Production Go-Live Runbook with automated rollback triggers and conduct a simulated UAT execution session.",
    realWorldApplication: "Go-Live is not a single button push; it is a disciplined, step-by-step operational runbook that manages risk.",
    skillsUnlocked: ["UAT Test Planning", "Defect Triage", "Production Runbooks", "Canary Deployments", "Rollback Execution"]
  },

  {
    id: 12,
    week: "Week 12",
    month: "Month 3: Product, Security & Business ROI",
    title: "Change Management, Operational Handover & Financial ROI Verification",
    category: "Operations & ROI",
    mission: "Drive 85%+ employee adoption for Nexora's AI platform, transition operational ownership to internal IT, and prove $1.4M annual ROI to the board.",
    customerStory: "Nexora built an expensive AI tool 6 months ago, but only 12% of staff used it because nobody trained them or updated internal SOPs.",
    businessProblem: "Capital expenditure write-offs and zero realized business value from shelfware software deployments.",
    currentEnvironment: [
      "Deployed production AI platform",
      "Internal IT operations team needing system ownership",
      "Executive board expecting quarterly financial impact reporting"
    ],
    fdeObjective: "Execute ADKAR Change Management -> Conduct Champion Training -> Deliver Handover Documentation -> Track Adoption Telemetry -> Prove Financial ROI.",
    concepts: [
      "ADKAR Change Management Model (Awareness, Desire, Knowledge, Ability, Reinforcement)",
      "Operational Handover Package (Runbooks, Architecture Specs, On-Call Playbooks)",
      "Telemetry-Driven Adoption Tracking (DAU/MAU, Task Completion Rates)",
      "Financial ROI Calculation: (Time Saved * Hourly Cost) - (Infra + Impl Costs)",
      "Codifying reusable enterprise AI patterns into platform libraries"
    ],
    technology: ["Pendo / Amplitude Adoption Analytics", "ROI Dashboard Matrix", "Confluence Runbooks"],
    architectureSummary: "Deploy System -> Champion Training -> Operations Handover -> Track Usage Telemetry -> Quantify Time Saved -> Present Financial ROI to Board",
    interactiveChallengeTitle: "Low Adoption Pushback",
    interactiveChallengeDescription: "Department manager reports: 'My team prefers manual spreadsheet entries over the AI tool.' Implement the adoption turnaround strategy.",
    failureScenario: "Handed over system to IT without operational runbooks; IT turned off system after first minor outage due to lack of diagnostic knowledge.",
    decisionPoint: {
      question: "How does a Forward Deployed Engineer prove the financial value of an enterprise AI deployment to the board of directors?",
      options: [
        {
          text: "Present hard telemetry data: '82% adoption rate, 14,000 hours saved annually, $1.2M net cost reduction after accounting for $180k AI infra spend.'",
          isCorrect: true,
          consequence: "Board authorizes multi-million dollar expansion of FDE platform initiatives across all business units.",
          reasoning: "Concrete financial ROI backed by verified usage telemetry proves real enterprise business value."
        },
        {
          text: "Show user survey quotes saying 'The AI is really cool and saves me some time.'",
          isCorrect: false,
          consequence: "Board views project as a vanity experiment and slashes ongoing infrastructure budget.",
          reasoning: "Qualitative praise without financial metrics is insufficient to justify enterprise capital expenditure."
        }
      ]
    },
    solution: "Achieved 88% active employee adoption, successfully transferred on-call support to internal IT, and verified $1.42M net annual ROI.",
    miniProject: "Build an interactive ROI Calculator dashboard and author a formal Operational Handover Package for enterprise IT.",
    realWorldApplication: "An FDE's ultimate goal is to make themselves redundant on a project by codifying repeatable success, handing over ownership, and proving business ROI.",
    skillsUnlocked: ["Change Management (ADKAR)", "Operational Handover", "Telemetry Adoption Tracking", "Financial ROI Verification", "Pattern Codification"]
  }
];
