import { Persona } from '../types/fde';

export const PERSONAS_DATA: Persona[] = [
  {
    id: "cto",
    name: "Dr. Aris Thorne",
    role: "Chief Technology Officer",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    quote: "I need an architecture that scales to 100k concurrent users, runs multi-region, and avoids vendor lock-in.",
    concerns: [
      "Multi-region scalability and high availability",
      "Avoiding single-cloud LLM vendor lock-in",
      "Maintainable codebase and zero architectural debt"
    ],
    dialogues: [
      {
        prompt: "Why should we adopt a Multi-Agent architecture connected via Model Context Protocol (MCP) instead of a monolithic LLM prompt?",
        options: [
          {
            response: "MCP decouples tool definitions into isolated microservices with clear security boundaries, state management, and fallback execution logic.",
            feedback: "Excellent! You articulated the architectural modularity, isolation, and maintenance benefits.",
            scoreDelta: 15,
            personaReaction: "Nods approvingly. 'That is the clean system design approach I expected. Let's draft the RFC.'"
          },
          {
            response: "Because agents are the latest trend and everyone is talking about them in tech newsletters.",
            feedback: "Fails to provide technical justification.",
            scoreDelta: -10,
            personaReaction: "Frowns. 'We don't spend millions adopting trends. Give me concrete technical reasons.'"
          }
        ]
      }
    ]
  },
  {
    id: "ciso",
    name: "Elena Rostova",
    role: "Chief Information Security Officer",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    quote: "If a single prompt injection leaks customer PII or employee compensation data, this project is cancelled.",
    concerns: [
      "Zero-trust authorization and RBAC enforcement",
      "Indirect prompt injection and data exfiltration threats",
      "SOC2 / GDPR compliance and data residency"
    ],
    dialogues: [
      {
        prompt: "How will you prevent an employee from using a prompt jailbreak to extract confidential executive salary data?",
        options: [
          {
            response: "We enforce RBAC at the database/API level using the user's JWT session token, so unprivileged queries return 0 rows regardless of prompt text.",
            feedback: "Perfect! You placed security controls in deterministic infrastructure rather than relying on LLM prompts.",
            scoreDelta: 20,
            personaReaction: "Smiles faintly. 'Correct. Never trust the model with authorization logic. Sign off granted.'"
          },
          {
            response: "We added a strict prompt instruction telling the AI to never reveal salary data.",
            feedback: "Unsafe. System prompts are easily bypassed.",
            scoreDelta: -15,
            personaReaction: "Shakes head firmly. 'System prompts are not security boundaries. Deployment blocked.'"
          }
        ]
      }
    ]
  },
  {
    id: "finance",
    name: "Marcus Sterling",
    role: "VP of Finance & Operations",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    quote: "Show me the return on investment. If we spend $150k on infrastructure, when do we recover that capital?",
    concerns: [
      "Unpredictable monthly API token billing spikes",
      "Net ROI percentage and payback period calculations",
      "Cost per automated transaction vs human labor cost"
    ],
    dialogues: [
      {
        prompt: "How can you guarantee our monthly OpenAI API bill won't suddenly double during peak usage months?",
        options: [
          {
            response: "We implement hard per-department token budget caps, semantic Redis caching to absorb 40% of queries, and automated fallback to smaller models.",
            feedback: "Clear financial controls backed by caching FinOps architecture.",
            scoreDelta: 15,
            personaReaction: "Leans back satisfied. 'Good FinOps controls. That protects our margin.'"
          },
          {
            response: "We will monitor the bill closely every month and ask people to use the tool less if it gets high.",
            feedback: "Passive monitoring is not cost control.",
            scoreDelta: -10,
            personaReaction: "Crosses arms. 'Hope is not a financial management strategy.'"
          }
        ]
      }
    ]
  },
  {
    id: "ops",
    name: "Sarah Jenkins",
    role: "Head of Support Operations",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
    quote: "My team of 120 agents handles 5,000 tickets daily. If the AI tool adds 2 extra clicks to their workflow, they won't use it.",
    concerns: [
      "Workflow friction and context switching between apps",
      "System reliability and fast response time (<1.5s)",
      "Ease of user onboarding without long training sessions"
    ],
    dialogues: [
      {
        prompt: "My team is already overwhelmed. How will this AI assistant fit into their existing shift routines without slowing them down?",
        options: [
          {
            response: "We embed the assistant directly inside Zendesk/Slack as a 1-click auto-complete widget, reducing average ticket handling time by 4 minutes.",
            feedback: "Understands operational context and minimizes workflow friction.",
            scoreDelta: 15,
            personaReaction: "Nods enthusiastically. '1-click inside Zendesk? My team will love that.'"
          },
          {
            response: "They will open a new browser tab, log in to our custom AI portal, and type out their questions.",
            feedback: "Context switching kills adoption.",
            scoreDelta: -12,
            personaReaction: "Sighs. 'Nobody will switch tabs 50 times a day. That won't work.'"
          }
        ]
      }
    ]
  }
];

