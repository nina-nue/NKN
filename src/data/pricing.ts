export interface PricePackage {
  slug: string;
  name: string;
  price: string;
  audience: string;
  modules: string[];
  result: string;
  highlighted: boolean;
}

/**
 * ⚠️ PREIS-VORSCHLAG, NOCH NICHT BESTÄTIGT (Stand: rechtliche Überarbeitung 2026-08-24).
 * Alle `price`-Felder in diesem Array sind Platzhalter-Vorschläge und müssen vor dem
 * nächsten Deploy gegen die Angabe im Formular für das Personaldezernat abgeglichen und
 * bestätigt werden. Siehe COMPLIANCE.md.
 */
export const packages: PricePackage[] = [
  {
    slug: 'ki-governance-paket',
    name: 'KI-Governance-Paket',
    price: '6.900 € netto (Preisvorschlag — noch zu bestätigen)',
    audience: 'Für Organisationen, die klare Regeln brauchen, bevor KI-Tools flächendeckend genutzt werden.',
    modules: [
      'Governance-Analyse & Rollen-Workshop',
      'KI-Nutzungsrichtlinie',
      'Umsetzungs-Fahrplan für die Pflichten aus der KI-Verordnung',
    ],
    result: 'Verabschiedete Nutzungsrichtlinie, klare Rollen, dokumentierte Grundlage für die Pflichten aus der KI-Verordnung.',
    highlighted: false,
  },
  {
    slug: 'ki-akzeptanzdiagnostik-fuehrungscoaching',
    name: 'KI-Akzeptanzdiagnostik & Führungscoaching',
    price: '9.800 € netto (Preisvorschlag — noch zu bestätigen)',
    audience: 'Für Organisationen, die spüren, dass der Widerstand gegen KI nicht an der Technik liegt.',
    modules: [
      'Diagnostik zu Akzeptanz, Unsicherheit und Belastung (validierte Instrumente)',
      'Ergebnisbericht mit Handlungsempfehlungen',
      'Coaching-Reihe für Führungskräfte (3 Sitzungen)',
    ],
    result: 'Belastbares Bild der psychologischen Ausgangslage im Team plus begleitetes Coaching für die Führungsebene.',
    highlighted: true,
  },
  {
    slug: 'ki-wirkungsanalyse',
    name: 'KI-Wirkungsanalyse',
    price: '5.400 € netto (Preisvorschlag — noch zu bestätigen)',
    audience: 'Für Organisationen, die eine KI-Einführung bereits hinter sich haben und wissen wollen, was sie gebracht hat.',
    modules: [
      'Festlegung von Erfolgskriterien',
      'Befragung von Team und Führung',
      'Ergebnisbericht als Entscheidungsgrundlage',
    ],
    result: 'Ein verständlicher Bericht, der zeigt, was die KI-Einführung tatsächlich bewirkt hat — als Grundlage für die nächsten Schritte.',
    highlighted: false,
  },
];

export interface SingleModule {
  name: string;
  scope: string;
}

export const singleModules: SingleModule[] = [
  { name: 'Vortrag / Impuls', scope: '45–60 Minuten für Führungsrunden oder Fachveranstaltungen' },
  {
    name: 'KI-Akzeptanz- und Belastungsdiagnostik',
    scope: '2–3 Wochen, validierte Instrumente, Ergebnisbericht',
  },
  {
    name: 'Führungskräfte-Coaching bei KI-bedingter Verunsicherung',
    scope: 'ab 3 Sitzungen à 60 Minuten',
  },
  { name: 'Governance & KI-Leitlinien', scope: 'Nutzungsrichtlinie und Rollen' },
  { name: 'Wirkungsmessung & Evaluation', scope: 'Erfolgskriterien, Befragung, Ergebnisbericht' },
  { name: 'Change-Begleitung', scope: '4–6 Wochen, Akzeptanz und Kommunikation' },
  { name: 'Datengestützte Entscheidungsberatung', scope: 'Umfang richtet sich nach der Datenlage' },
];

export const pricingIntro =
  'Jeder Baustein ist auch für sich genommen buchbar — wenn Sie schon wissen, was Sie brauchen. Den Preis stimme ich auf den Zuschnitt ab.';

/**
 * ⚠️ PRÜFEN: Sobald geklärt ist, ob die Kleinunternehmerregelung nach § 19 UStG genutzt wird
 * (siehe RECHTLICHES.md und impressum.astro, Abschnitt „Umsatzsteuer"), hier den passenden
 * Zusatz ergänzen: entweder "…, zzgl. der gesetzlichen Umsatzsteuer." oder "Gemäß § 19 UStG
 * wird keine Umsatzsteuer berechnet." Bisher bewusst nicht vorweggenommen.
 */
export const pricingFootnote =
  'Die Paketpreise verstehen sich netto und sind auf Vorbereitung, Durchführung und Nachbereitung kalkuliert — keine versteckten Zusatzkosten. Einzelne Bausteine und individuelle Zuschnitte kalkuliere ich nach Aufwand.';
