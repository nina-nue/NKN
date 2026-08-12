export interface FaqItem {
  question: string;
  answer: string;
}

export const faq: FaqItem[] = [
  {
    question: 'Lohnt sich KI für ein Unternehmen mit 30 oder weniger Mitarbeitenden?',
    answer:
      'Es kommt nicht auf die Größe des Unternehmens an, sondern auf die Prozesse. Ich habe mit kleinen Teams gearbeitet, bei denen sich ein einziger gut gewählter Use Case spürbar ausgezahlt hat, und mit größeren, bei denen die Analyse ergab: aktuell eher nicht. Ob KI für Ihr Unternehmen lohnenswert ist, klärt die Potenzialanalyse — bevor Ihr Geld in die falsche Richtung fließt.',
  },
  {
    question: 'Wir haben keine Datenbasis — geht das trotzdem?',
    answer:
      'Ja. Viele der Use Cases, die im Alltag den größten Unterschied machen, brauchen keine große Datenbasis — Texterstellung, Recherche, interne Wissensarbeit. Wo Daten tatsächlich gebraucht werden und was realistisch ist, erläutere ich Ihnen klar und offen.',
  },
  {
    question: 'Was ist mit Datenschutz und dem EU AI Act?',
    answer:
      'Beides gehört von Anfang an in die Beratung, nicht als Nachgedanke. Ich ersetze keine Rechtsberatung im Einzelfall, aber ich kenne die relevanten Anforderungen und arbeite die Leitlinien so aus, dass sie zu Ihrem Unternehmen passen und im Alltag umsetzbar sind. Bei rechtlich komplexen Fragen empfehle ich zusätzlich eine spezialisierte Kanzlei.',
  },
  {
    question: 'Wie viel Zeit müssen wir intern investieren?',
    answer:
      'Realistisch: mehr als eine Stunde, weniger als ein zweites Projekt nebenbei. Der genaue Umfang hängt vom gebuchten Paket ab und wird vorher klar benannt, nicht im Nachhinein nachverhandelt: bei KI-Start rund 5 Stunden für Orientierungsgespräch und Workshop, bei KI-Potenzial & Roadmap rund 8 bis 10 Stunden für Interviews und Abschlusspräsentation, bei KI-Einführung mit Akzeptanz rund 15 bis 20 Stunden über den gesamten Projektverlauf, verteilt auf mehrere Personen im Team.',
  },
  {
    question: 'Warum berät mich beim Thema KI eine Psychologin — welche Vorteile bringt das?',
    answer:
      'Weil die Technik oftmals nicht das Problem ist. Viele KI-Projekte scheitern nicht an der Software, sondern daran, dass Menschen sie aus guten Gründen nicht nutzen: Unsicherheit, fehlende Beteiligung, unklare Regeln. Das ist mein Fachgebiet. Die technische Seite berücksichtige ich, wo sie wichtig ist — mein Angebot liegt in dem Teil, den technische Berater oft auslassen.',
  },
  {
    question: 'Was passiert im Erstgespräch?',
    answer:
      'Sie schildern, wo Sie stehen, ich stelle Rückfragen, und am Ende steht eine ehrliche Einschätzung, ob und wo KI bei Ihnen aktuell überhaupt sinnvoll ist. Manchmal lautet das Ergebnis: noch nicht.',
  },
];
