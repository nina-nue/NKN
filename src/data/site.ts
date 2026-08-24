/**
 * Zentrale Stammdaten der Seite. Änderungen hier wirken überall
 * (Footer, Kontakt, Impressum, Datenschutz, JSON-LD, Meta-Tags).
 */
export const site = {
  name: 'Nina Karolin Nüchter',
  // Kurzform nur für die Kopfzeile/Logo oben. Der volle Name bleibt für
  // Impressum, Rechtstexte, Meta-Titel und JSON-LD maßgeblich.
  shortName: 'Nina K. Nüchter',
  title: 'Nina Karolin Nüchter — KI-Beratung mit Organisationspsychologie',
  claim: 'KI-Beratung für Organisationen — mit dem Blick der Organisationspsychologie.',
  description:
    'KI-Beratung für Unternehmen und Organisationen: Governance, psychologische Diagnostik, Führungskräfte-Coaching und Wirkungsmessung, damit KI-Vorhaben im Alltag tatsächlich tragen. Bundesweit, remote-first.',
  url: import.meta.env.PUBLIC_SITE_URL || 'https://www.nina-nuechter.de',
  locale: 'de_DE',
  email: 'n.nuechter@nknoffice.eu',
  // ⚠️ PRÜFEN: Keine Telefonnummer im Briefing angegeben. Optional ergänzbar,
  // siehe RECHTLICHES.md. Solange kein Wert gesetzt ist, wird die Zeile im
  // Impressum ausgeblendet (§ 5 DDG verlangt keine Telefonnummer, wenn eine
  // Möglichkeit zur schnellen elektronischen Kontaktaufnahme – die E-Mail –
  // besteht).
  phone: '',
  address: {
    street: 'Realschulstr. 54',
    zip: '47051',
    city: 'Duisburg',
    region: 'Nordrhein-Westfalen',
    country: 'DE',
    countryName: 'Deutschland',
  },
  areaServed: ['Deutschland', 'Österreich', 'Schweiz'],
  calendlyUrl: 'https://calendly.com/nina-karolin-nuechter/30min',
  linkedinUrl: 'https://www.linkedin.com/in/nina-nuechter/',
  jobTitle: 'Organisationspsychologin, KI-Beraterin',
} as const;

export const nav = [
  { label: 'Ablauf', href: '/#ablauf' },
  { label: 'Leistungen', href: '/#leistungen' },
  { label: 'Über mich', href: '/ueber-mich' },
  { label: 'Preise', href: '/#preise' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Kontakt', href: '/#kontakt' },
] as const;

export const footerLegalNav = [
  { label: 'Transparenz', href: '/transparenz' },
  { label: 'Impressum', href: '/impressum' },
  { label: 'Datenschutz', href: '/datenschutz' },
] as const;
