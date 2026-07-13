export interface PricePackage {
  slug: string;
  name: string;
  price: string;
  audience: string;
  modules: string[];
  result: string;
  highlighted: boolean;
}

export const packages: PricePackage[] = [
  {
    slug: 'ki-start',
    name: 'KI-Start',
    price: '2.900 € netto',
    audience: 'Für Unternehmen, die erste Orientierung brauchen.',
    modules: [
      'Orientierungsgespräch (30 Min.)',
      'KI-Kompass Workshop (halbtägig, bis 12 Teilnehmende)',
    ],
    result: 'Erste Use-Case-Sammlung, Ergebnisprotokoll mit nächsten Schritten.',
    highlighted: false,
  },
  {
    slug: 'ki-potenzial-roadmap',
    name: 'KI-Potenzial & Roadmap',
    price: '7.900 € netto',
    audience: 'Für Unternehmen, die konkret starten wollen.',
    modules: [
      'KI-Potenzialanalyse (3–5 Interviews, priorisierte Use-Case-Landkarte)',
      'Roadmap für die nächsten 3 Monate',
    ],
    result: 'Abschlusspräsentation mit priorisierten Use Cases und Fahrplan.',
    highlighted: true,
  },
  {
    slug: 'ki-einfuehrung-akzeptanz',
    name: 'KI-Einführung mit Akzeptanz',
    price: '14.900 € netto',
    audience:
      'Für Unternehmen, die einen Piloten nicht nur testen, sondern zum Laufen bringen wollen.',
    modules: [
      'Potenzialanalyse light',
      'Pilotdesign & -begleitung',
      'Change- und Kommunikationsbegleitung',
      'Wirkungsmessung',
    ],
    result: 'Getesteter Use Case, eingebundenes Team, Entscheidungsvorlage zur Skalierung.',
    highlighted: false,
  },
];

export interface SingleModule {
  name: string;
  scope: string;
}

export const singleModules: SingleModule[] = [
  { name: 'Vortrag / Impuls', scope: '45–60 Minuten für Führungsrunden oder Fachveranstaltungen' },
  { name: 'AI Literacy kompakt', scope: '2 Stunden online, bis 20 Personen' },
  { name: 'KI-Kompass Workshop', scope: 'halbtägig, bis 12 Teilnehmende' },
  { name: 'KI-Schulung & Enablement', scope: '1 Tag, bis 15 Teilnehmende' },
  { name: 'Wirkungsmessung', scope: 'Erfolgskriterien, Befragung, Ergebnisbericht' },
  { name: 'Governance & KI-Leitlinien', scope: 'Nutzungsrichtlinie und Rollen' },
  { name: 'KI-Potenzialanalyse', scope: '2–3 Wochen, priorisierte Use-Case-Landkarte' },
  { name: 'Change-Begleitung', scope: '4–6 Wochen, Akzeptanz und Kommunikation' },
  { name: 'KI-Strategie & Roadmap', scope: '4–6 Wochen, vollständiger Fahrplan' },
  { name: 'Pilot- & Implementierungsbegleitung', scope: '6–8 Wochen, von Test zu Nutzung' },
];

export const pricingIntro =
  'Jeder Baustein ist auch für sich genommen buchbar — wenn Sie schon wissen, was Sie brauchen. Den Preis stimme ich auf den Zuschnitt ab.';

export const pricingFootnote =
  'Die Paketpreise verstehen sich netto und sind auf Vorbereitung, Durchführung und Nachbereitung kalkuliert — keine versteckten Zusatzkosten. Einzelne Bausteine und individuelle Zuschnitte kalkuliere ich nach Aufwand.';
