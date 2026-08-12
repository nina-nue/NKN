export interface Problem {
  situation: string;
  response: string;
}

export const problems: Problem[] = [
  {
    situation: 'Alle reden über KI, keiner weiß, wo anfangen.',
    response:
      'Eine KI-Potenzialanalyse entlang der tatsächlichen Prozesse in Ihrem Unternehmen — statt Tool-Empfehlungen von der Stange.',
  },
  {
    situation: 'Ein Tool wurde eingeführt. Genutzt wird es nicht.',
    response:
      'Akzeptanz, Kommunikation und Change-Begleitung — der Teil, den viele Beratungen überspringen.',
  },
  {
    situation: 'Wir wissen nicht, was wir dürfen.',
    response: 'Klare Nutzungsregeln, Rollen und Leitlinien, orientiert an EU AI Act und DSGVO.',
  },
  {
    situation: 'Wir haben investiert. Was hat es gebracht?',
    response: 'Wirkungsmessung mit sauberer Methodik — keine Bauchgefühl-Bilanz.',
  },
];
