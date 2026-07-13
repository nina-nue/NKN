export interface Service {
  slug: string;
  title: string;
  phase: 'Analyse' | 'Strategie' | 'Befähigung' | 'Verankerung';
  summary: string;
  description: string;
}

export const services: Service[] = [
  {
    slug: 'ki-potenzialanalyse',
    title: 'KI-Potenzialanalyse',
    phase: 'Analyse',
    summary:
      'Wo im Unternehmen KI tatsächlich einen Unterschied macht — entlang der realen Prozesse, nicht entlang von Trendlisten.',
    description:
      'Ich schaue mir gemeinsam mit Ihnen die Prozesse an, die im Alltag tatsächlich Zeit oder Nerven kosten, und interviewe die Menschen, die darin arbeiten. Daraus entsteht eine priorisierte Landkarte möglicher Use Cases — mit realistischer Einschätzung von Aufwand und Wirkung, nicht mit der längsten Liste.',
  },
  {
    slug: 'ki-strategie-roadmap',
    title: 'KI-Strategie & Roadmap',
    phase: 'Strategie',
    summary: 'Ein Fahrplan mit klaren Prioritäten, Verantwortlichkeiten und Zeithorizont.',
    description:
      'Aus den priorisierten Use Cases wird ein Fahrplan: was zuerst angegangen wird, wer dafür zuständig ist, welche Ressourcen es braucht und woran der Erfolg gemessen wird. Die Roadmap ist eine Entscheidungsgrundlage für die Geschäftsführung, kein Strategiepapier für die Schublade.',
  },
  {
    slug: 'change-begleitung',
    title: 'Change-Begleitung bei KI-Einführung',
    phase: 'Verankerung',
    summary:
      'Der Teil, an dem die meisten KI-Projekte scheitern: Akzeptanz im Team, nicht die Technik.',
    description:
      'Ein neues Tool ist schnell lizenziert. Ob es benutzt wird, entscheidet sich an anderer Stelle — an Unsicherheit, unklaren Erwartungen, fehlender Beteiligung. Ich begleite die Einführung so, dass das Team versteht, warum sich etwas ändert, und die Gelegenheit hat, Bedenken zu äußern, bevor sie zu stillem Widerstand werden.',
  },
  {
    slug: 'ki-schulung-enablement',
    title: 'KI-Schulung & Enablement / AI Literacy',
    phase: 'Befähigung',
    summary: 'Schulungen, die auf Ihr Unternehmen zugeschnitten sind, nicht von der Stange.',
    description:
      'Statt einer generischen Tool-Einführung arbeite ich mit den tatsächlichen Anwendungsfällen Ihres Teams: welche Aufgaben, welche Daten, welche Grenzen. Ziel ist ein sicherer, kompetenter Umgang mit KI im Arbeitsalltag — inklusive der Frage, wo man ihr besser nicht vertraut.',
  },
  {
    slug: 'governance-ki-leitlinien',
    title: 'Governance & KI-Leitlinien',
    phase: 'Verankerung',
    summary: 'Klare Regeln, Rollen und Leitlinien, orientiert an EU AI Act und DSGVO.',
    description:
      'Wer darf welche KI-Tools mit welchen Daten nutzen? Wer entscheidet über neue Anwendungsfälle? Ich erarbeite mit Ihnen eine Nutzungsrichtlinie und Rollenverteilung, die zur Unternehmensgröße passt und praxistauglich ist — kein Regelwerk, das niemand liest.',
  },
  {
    slug: 'pilot-implementierungsbegleitung',
    title: 'Pilot- & Implementierungsbegleitung',
    phase: 'Verankerung',
    summary: 'Von der Testphase zur tatsächlichen Nutzung im Arbeitsalltag.',
    description:
      'Ein Pilotprojekt ist mehr als ein technischer Test. Ich begleite Auswahl, Durchführung und Auswertung eines Piloten so, dass am Ende eine belastbare Entscheidung steht: skalieren, anpassen oder lassen — mit einem Team, das den Prozess mitgetragen hat.',
  },
  {
    slug: 'wirkungsmessung',
    title: 'Wirkungsmessung',
    phase: 'Verankerung',
    summary: 'Was hat es gebracht? Mit sauberer Methodik beantwortet, nicht mit Bauchgefühl.',
    description:
      'Vor der Einführung legen wir gemeinsam fest, woran Erfolg erkennbar sein soll. Nach der Einführung erhebe ich diese Kriterien systematisch — durch Befragung und Auswertung — und fasse die Ergebnisse in einem verständlichen Bericht zusammen, der als Entscheidungsgrundlage für die nächsten Schritte dient.',
  },
  {
    slug: 'datengestuetzte-entscheidungsberatung',
    title: 'Datengestützte Entscheidungsberatung',
    phase: 'Analyse',
    summary: 'Fundierte Entscheidungsgrundlagen statt Vermutungen — mit R und Power BI.',
    description:
      'Für Entscheidungen, die über den Bauch hinausgehen sollen, werte ich vorhandene Daten aus und bereite sie verständlich auf — mit R und Power BI. Das Ergebnis ist eine Grundlage, mit der Sie tatsächlich argumentieren können.',
  },
  {
    slug: 'vortrag-impuls',
    title: 'Vortrag / Impuls',
    phase: 'Befähigung',
    summary: '45 bis 60 Minuten für Führungsrunden oder Fachveranstaltungen.',
    description:
      'Ein Impulsvortrag zu KI-Einführung aus organisationspsychologischer Perspektive: warum Technik allein selten reicht, was Akzeptanz tatsächlich herstellt, welche Fehler sich wiederholen. Für Führungskreise, Betriebsversammlungen oder Fachveranstaltungen.',
  },
];
