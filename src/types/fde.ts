export interface Mission {
  id: number;
  week: string;
  title: string;
  phase: 'Phase 1: Technical Skills' | 'Phase 2: Product Management & Soft Skills';
  category: string;
  mission: string;
  customerStory: string;
  businessProblem: string;
  currentEnvironment: string[];
  fdeObjective: string;
  concepts: string[];
  technology: string[];
  architectureSummary: string;
  interactiveChallengeTitle: string;
  interactiveChallengeDescription: string;
  failureScenario: string;
  decisionPoint: {
    question: string;
    options: {
      text: string;
      isCorrect: boolean;
      consequence: string;
      reasoning: string;
    }[];
  };
  solution: string;
  miniProject: string;
  realWorldApplication: string;
  skillsUnlocked: string[];
}

export interface Scenario {
  id: number;
  title: string;
  category: string;
  customerMessage: string;
  currentSystem: string;
  constraints: string[];
  options: {
    id: string;
    label: string;
    description: string;
    isCorrect: boolean;
    consequence: string;
    explanation: string;
    engineeringLesson: string;
  }[];
}

export interface Persona {
  id: string;
  name: string;
  role: string;
  avatar: string;
  quote: string;
  concerns: string[];
  dialogues: {
    prompt: string;
    options: {
      response: string;
      feedback: string;
      scoreDelta: number;
      personaReaction: string;
    }[];
  }[];
}

export interface SkillCategory {
  category: string;
  skills: {
    name: string;
    level: number; // 0 - 100
    evidence: string[];
  }[];
}

export interface CommandMetric {
  name: string;
  value: string;
  trend: string;
  status: 'optimal' | 'warning' | 'critical';
  details: string;
  history: number[];
}

