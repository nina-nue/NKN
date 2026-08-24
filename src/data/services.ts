export interface Service {
  slug: string;
  title: string;
  phase: 'Diagnostik' | 'Governance' | 'Führung' | 'Wirkung';
  summary: string;
  description: string;
}

export const services: Service[] = [
  {
    slug: 'ki-akzeptanz-belastungsdiagnostik',
    title: 'KI-Akzeptanz- und Belastungsdiagnostik',
    phase: 'Diagnostik',
    summary:
      'Wie Ihr Team auf KI reagiert — gemessen mit validierten psychologischen Instrumenten, nicht erraten.',
    description:
      'Ich erhebe systematisch, wie Akzeptanz, Unsicherheit und Belastung im Zusammenhang mit KI in Ihrem Unternehmen tatsächlich ausgeprägt sind — mit etablierten diagnostischen Instrumenten aus der Organisationspsychologie, nicht mit einer informellen Umfrage. Das Ergebnis ist ein belastbarer Ausgangsbefund mit Handlungsempfehlungen, auf dem weitere Schritte aufbauen können.',
  },
  {
    slug: 'datengestuetzte-entscheidungsberatung',
    title: 'Datengestützte Entscheidungsberatung',
    phase: 'Diagnostik',
    summary: 'Fundierte Entscheidungsgrundlagen statt Vermutungen.',
    description:
      'Für Entscheidungen, die über den Bauch hinausgehen sollen, werte ich vorhandene Daten aus und bereite sie verständlich auf. Das Ergebnis ist eine Grundlage, mit der Sie tatsächlich argumentieren können.',
  },
  {
    slug: 'ki-governance-leitlinien',
    title: 'KI-Governance & Leitlinien',
    phase: 'Governance',
    summary: 'Klare Regeln, Rollen und Leitlinien — mit Blick auf die Pflichten aus der KI-Verordnung.',
    description:
      'Wer darf welche KI-Tools mit welchen Daten nutzen? Wer entscheidet über neue Anwendungsfälle? Ich erarbeite mit Ihnen eine Nutzungsrichtlinie und Rollenverteilung, die zu den Pflichten aus der EU-KI-Verordnung und zur DSGVO passt und praxistauglich ist. Ich unterstütze Sie dabei, die Anforderungen zu verstehen und organisatorisch umzusetzen — eine Rechtsberatung im Einzelfall ersetzt das nicht, und ich stelle keine Konformitätsbescheinigungen aus.',
  },
  {
    slug: 'fuehrungskraefte-coaching',
    title: 'Führungskräfte-Coaching bei KI-bedingter Verunsicherung',
    phase: 'Führung',
    summary: 'Begleitung für Führungskräfte, deren Teams auf KI mit Unsicherheit reagieren.',
    description:
      'Führungskräfte stehen bei der KI-Einführung oft zwischen den Erwartungen der Geschäftsführung und der Verunsicherung im eigenen Team. Im Coaching arbeite ich mit einzelnen Führungskräften oder kleinen Führungsrunden daran, wie sie Veränderung glaubwürdig kommunizieren, mit Widerstand umgehen und die eigene Unsicherheit nicht ungefiltert an das Team weitergeben.',
  },
  {
    slug: 'vortrag-impuls',
    title: 'Vortrag / Impuls',
    phase: 'Führung',
    summary: '45 bis 60 Minuten für Führungsrunden oder Fachveranstaltungen.',
    description:
      'Ein Impulsvortrag zu KI aus organisationspsychologischer Perspektive: warum Technik allein selten reicht, was Akzeptanz tatsächlich herstellt, welche Fehler sich wiederholen. Für Führungskreise, Betriebsversammlungen oder Fachveranstaltungen.',
  },
  {
    slug: 'wirkungsmessung',
    title: 'Wirkungsmessung & Evaluation von KI-Einführungen',
    phase: 'Wirkung',
    summary: 'Was eine KI-Einführung tatsächlich gebracht hat — mit sauberer Methodik beantwortet.',
    description:
      'Vor oder nach der Einführung legen wir gemeinsam fest, woran Erfolg erkennbar sein soll. Ich erhebe diese Kriterien systematisch — durch Befragung und Auswertung — und fasse die Ergebnisse in einem verständlichen Bericht zusammen, der als Entscheidungsgrundlage für die nächsten Schritte dient.',
  },
  {
    slug: 'change-begleitung',
    title: 'Change-Begleitung bei KI-Einführung',
    phase: 'Wirkung',
    summary:
      'Ob ein neues KI-Tool im Alltag ankommt, entscheidet selten die Technik — sondern ob das Team die Veränderung akzeptiert und mitträgt.',
    description:
      'Ein neues Tool ist schnell lizenziert. Ob es benutzt wird, entscheidet sich an anderer Stelle — an Unsicherheit, unklaren Erwartungen, fehlender Beteiligung. Ich begleite die Einführung so, dass das Team versteht, warum sich etwas ändert, und die Gelegenheit hat, Bedenken zu äußern, bevor sie zu stillem Widerstand werden.',
  },
];
