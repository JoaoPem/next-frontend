export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: 'Personalized Registration',
    description: 'Detailed profiles while respecting each story\'s privacy'
  },
  {
    step: 2,
    title: 'Values-Based Matching',
    description: 'Connections based on emotional compatibility and expectations'
  },
  {
    step: 3,
    title: 'Ongoing Support',
    description: 'Guidance from pregnancy through the child\'s early years'
  }
];