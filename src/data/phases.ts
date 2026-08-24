export interface Phase {
  number: string;
  title: string;
  summary: string;
  details: string[];
}

export const phases: Phase[] = [
  {
    number: '01',
    title: 'Diagnostik',
    summary: 'Wo Akzeptanz, Unsicherheit und Belastung im Team tatsächlich stehen.',
    details: [
      'Validierte psychologische Instrumente',
      'Datengestützte Entscheidungsgrundlagen',
      'Befragung von Team und Führung',
    ],
  },
  {
    number: '02',
    title: 'Governance',
    summary: 'Klare Regeln, Rollen und Leitlinien, orientiert an der KI-Verordnung.',
    details: [
      'Nutzungsrichtlinien',
      'Rollen & Verantwortlichkeiten',
      'Orientierung an EU AI Act und DSGVO',
    ],
  },
  {
    number: '03',
    title: 'Führung',
    summary: 'Führungskräfte im Umgang mit KI-bedingter Verunsicherung im Team stärken.',
    details: ['Coaching für Führungskräfte', 'Impulsvorträge', 'Kommunikation von Veränderung'],
  },
  {
    number: '04',
    title: 'Wirkung',
    summary: 'Was die Einführung tatsächlich bewirkt hat — sauber gemessen, nicht behauptet.',
    details: [
      'Wirkungsmessung & Evaluation',
      'Change-Begleitung',
      'Ergebnisberichte als Entscheidungsgrundlage',
    ],
  },
];
