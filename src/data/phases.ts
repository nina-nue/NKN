export interface Phase {
  number: string;
  title: string;
  summary: string;
  details: string[];
}

export const phases: Phase[] = [
  {
    number: '01',
    title: 'Analyse',
    summary: 'Wo steht das Unternehmen, wo liegt echtes Potenzial?',
    details: ['Prozess-Mapping', 'Interviews mit Team und Führung', 'KI-Reife-Erhebung'],
  },
  {
    number: '02',
    title: 'Strategie',
    summary: 'Priorisierte Use Cases und ein Fahrplan, der zum Unternehmen passt.',
    details: ['Priorisierte Use Cases', 'Roadmap', 'Entscheidungsgrundlagen für die Führung'],
  },
  {
    number: '03',
    title: 'Befähigung',
    summary: 'Schulung und AI Literacy, zugeschnitten auf den Alltag im Unternehmen.',
    details: ['Schulungen', 'Workshops', 'AI Literacy — nicht generisch, sondern konkret'],
  },
  {
    number: '04',
    title: 'Verankerung',
    summary: 'Damit es nach der Schulung nicht wieder einschläft.',
    details: ['Change-Begleitung', 'Leitlinien', 'Wirkungsmessung'],
  },
];
