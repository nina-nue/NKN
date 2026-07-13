# Rechtliches — offene Punkte vor dem Go-Live

Diese Website enthält vollständig ausformulierte Rechtstexte (`/impressum`,
`/datenschutz`), keine Lorem-Platzhalter. Trotzdem gibt es Stellen, die nur Sie als
Verantwortliche abschließend beurteilen bzw. bestätigen können. Jede davon ist im Text selbst
mit **⚠️ PRÜFEN** markiert und hier noch einmal gesammelt aufgeführt. Diese Website sollte
**nicht live gehen**, bevor diese Liste durchgegangen wurde — im Zweifel eine
Rechtsberatung hinzuziehen, insbesondere für die Punkte 2–4.

## 1. Telefonnummer im Impressum

**Ort:** `src/pages/impressum.astro`, Abschnitt „Kontakt"; Datenfeld `phone` in
`src/data/site.ts`.

Im Briefing wurde keine Telefonnummer angegeben. § 5 DDG verlangt eine Möglichkeit zur
schnellen elektronischen Kontaktaufnahme — die vorhandene E-Mail-Adresse erfüllt das bereits,
eine Telefonnummer ist nicht zwingend erforderlich. Falls gewünscht: Wert in
`src/data/site.ts` (`phone: ''`) eintragen, die Zeile im Impressum ist bereits vorbereitet.

## 2. Berufsbezeichnung „Organisationspsychologin"

**Ort:** `src/pages/impressum.astro`, Abschnitt „Berufsbezeichnung".

Der Text geht davon aus, dass „Organisationspsychologin" eine beschreibende, keine
gesetzlich reglementierte Berufsbezeichnung ist (anders als z. B. „Psychotherapeutin", die
eine Approbation voraussetzt). Bitte bestätigen. Falls doch eine kammerpflichtige oder
gesetzlich reglementierte Bezeichnung vorliegt, müssen zusätzlich die zuständige Kammer, der
Staat der Verleihung und die gesetzliche Berufsbezeichnung ergänzt werden (§ 5 Abs. 1 Nr. 3
DDG).

## 3. Kleinunternehmerregelung (§ 19 UStG)

**Ort:** `src/pages/impressum.astro`, Abschnitt „Umsatzsteuer"; betrifft ggf. auch die
Preis-Sektion (`src/data/pricing.ts`).

Aktuell wird keine Umsatzsteuer-Identifikationsnummer ausgewiesen (laut Briefing bewusst
weggelassen). Falls die Kleinunternehmerregelung nach § 19 UStG genutzt wird, gehört ein
entsprechender Hinweis zu den Preisangaben auf der Website (z. B. „Gemäß § 19 UStG wird keine
Umsatzsteuer berechnet"). Diese Entscheidung ist laut Briefing noch offen und wurde bewusst
nicht vorweggenommen.

## 4. EU-Streitschlichtung / Verbraucherschlichtung

**Ort:** `src/pages/impressum.astro`, Abschnitt „EU-Streitschlichtung".

Es wird die gängige Standardformulierung verwendet: nicht bereit und nicht verpflichtet, an
Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen. Bitte
bestätigen, dass das zutrifft, oder eine Teilnahmebereitschaft erklären lassen.

## 5. Hosting-Anbieter im Datenschutztext

**Ort:** `src/pages/datenschutz.astro`, Abschnitt 3 „Bereitstellung der Website und
Server-Logfiles".

Der Text beschreibt die Verarbeitung von Server-Logfiles generisch. Sobald das Hosting
final auf Netlify eingerichtet ist (siehe `DEPLOY.md`), sollte hier ergänzt werden:

- Firmenname und Sitz des Hosters (Netlify, Inc., San Francisco, USA — Netlify bietet für
  EU-Kunden eine Auftragsverarbeitung inkl. Standardvertragsklauseln an, das entsprechende
  DPA sollte aktiv abgeschlossen/bestätigt werden)
- Bestätigung, dass ein Auftragsverarbeitungsvertrag (AVV) abgeschlossen wurde

## 6. Plausible Analytics — nur falls aktiviert

**Ort:** `src/pages/datenschutz.astro`, Abschnitt 7 (erscheint automatisch, siehe unten).

Der Analytics-Abschnitt der Datenschutzerklärung ist **datengetrieben**, kein manuell
gepflegter Kommentar: Er wird nur gerendert, wenn `PUBLIC_ENABLE_ANALYTICS=true` **und**
`PUBLIC_PLAUSIBLE_DOMAIN` gesetzt sind (`src/lib/analytics.ts`,
`isAnalyticsConfigured()`). Ohne aktivierten Dienst fehlt der Abschnitt automatisch aus dem
veröffentlichten Text — nichts weiter zu tun, außer Sie aktivieren Plausible später.

## 7. Domain

Die Website ist durchgängig auf `https://www.nina-nuechter.de` konfiguriert
(`astro.config.mjs`, `src/data/site.ts`, `robots.txt`, JSON-LD, OG-Tags). Falls die
tatsächliche Domain abweicht, `PUBLIC_SITE_URL` in den Netlify-Umgebungsvariablen setzen und
`robots.txt` (enthält eine hartkodierte Sitemap-URL) entsprechend anpassen.

---

Alle anderen Inhalte der Rechtstexte (Haftung, Urheberrecht, Betroffenenrechte, Cookie-
Kategorien, Web3Forms- und Calendly-Offenlegung) sind auf Basis der im Briefing gegebenen
Fakten vollständig ausformuliert und sollten ohne weitere Prüfung tragfähig sein — eine
abschließende juristische Prüfung ersetzt das nicht.
