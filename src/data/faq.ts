export interface FaqItem {
  question: string;
  answer: string;
}

export const faq: FaqItem[] = [
  {
    question: 'Lohnt sich KI für ein Unternehmen mit 30 Mitarbeitenden?',
    answer:
      'Kommt auf die Prozesse an, nicht auf die Größe. Ich habe mit kleineren Teams gearbeitet, bei denen sich ein einziger gut gewählter Use Case spürbar ausgezahlt hat, und mit größeren, bei denen nach der Analyse herauskam: aktuell eher nicht. Genau das klärt die Potenzialanalyse — bevor Geld in die falsche Richtung fließt.',
  },
  {
    question: 'Wir haben keine Datenbasis — geht das trotzdem?',
    answer:
      'Ja. Viele der Use Cases, die im Alltag den größten Unterschied machen, brauchen keine große Datenbasis — Texterstellung, Recherche, interne Wissensarbeit. Wo Daten tatsächlich gebraucht werden, sprechen wir offen darüber, was realistisch ist und was nicht.',
  },
  {
    question: 'Was ist mit Datenschutz und dem EU AI Act?',
    answer:
      'Beides gehört von Anfang an in die Beratung, nicht als Nachgedanke. Ich bin keine Anwältin und ersetze keine Rechtsberatung im Einzelfall, aber ich kenne die relevanten Anforderungen und arbeite die Leitlinien so aus, dass sie zu Ihrem Unternehmen passen und im Alltag umsetzbar sind. Bei rechtlich komplexen Fragen empfehle ich zusätzlich eine spezialisierte Kanzlei.',
  },
  {
    question: 'Wie viel Zeit müssen wir intern investieren?',
    answer:
      'Realistisch: mehr als eine Stunde, weniger als ein zweites Projekt nebenbei. Interviews, ein Workshop, punktuelle Abstimmungen — der genaue Umfang hängt vom gebuchten Baustein ab und wird vorher klar benannt, nicht im Nachhinein nachverhandelt.',
  },
  {
    question: 'Sie sind Psychologin — warum berät ausgerechnet die zu KI?',
    answer:
      'Weil die Technik meistens nicht das Problem ist. Die meisten KI-Projekte scheitern nicht an der Software, sondern daran, dass Menschen sie aus guten Gründen nicht nutzen: Unsicherheit, fehlende Beteiligung, unklare Regeln. Das ist mein Fachgebiet. Die technische Seite ordne ich ein, wo nötig — meine Stärke liegt in dem Teil, den technische Berater häufig auslassen.',
  },
  {
    question: 'Was passiert im Erstgespräch?',
    answer:
      'Dreißig Minuten, kostenfrei, ohne Verkaufsdruck. Sie schildern, wo Sie stehen, ich stelle Rückfragen, und am Ende steht eine ehrliche Einschätzung, ob und wo KI bei Ihnen aktuell überhaupt sinnvoll ist. Manchmal lautet das Ergebnis: noch nicht.',
  },
];
