# Website — Nina Karolin Nüchter, KI-Beratung

Marketing-Website (Astro 5, Tailwind 4, TypeScript, statisch generiert). Diese Datei
beschreibt, wie Sie Inhalte pflegen, ohne Komponenten anzufassen, und wie das Projekt lokal
läuft. Für den Live-Gang siehe [`DEPLOY.md`](./DEPLOY.md), für offene rechtliche Punkte siehe
[`RECHTLICHES.md`](./RECHTLICHES.md).

## Schnellstart

```bash
nvm use               # oder: Node-Version aus .nvmrc verwenden
npm install
cp .env.example .env  # PUBLIC_WEB3FORMS_KEY eintragen, siehe unten
npm run dev            # http://localhost:4321
```

## Scripts

| Befehl            | Zweck                                                     |
| ----------------- | --------------------------------------------------------- |
| `npm run dev`     | Lokaler Entwicklungsserver mit Hot Reload                 |
| `npm run build`   | Typecheck (`astro check`) + Produktionsbuild nach `dist/` |
| `npm run preview` | Produktionsbuild lokal ansehen                            |
| `npm run check`   | Nur Typecheck                                             |
| `npm run format`  | Code mit Prettier formatieren                             |
| `npm run lint`    | ESLint über das gesamte Projekt                           |

## Wo Sie welchen Text ändern

Alle Inhalte liegen zentral in **`src/data/*.ts`** — reine Daten, keine Layout-Logik. Um
Texte, Preise oder Leistungen zu ändern, reicht es, diese Dateien zu bearbeiten:

| Datei                        | Inhalt                                                                     |
| ---------------------------- | -------------------------------------------------------------------------- |
| `src/data/site.ts`           | Name, Claim, Kontaktdaten, Adresse, Calendly-/LinkedIn-Links, Navigation   |
| `src/data/problems.ts`       | Die vier Problemblöcke auf der Startseite                                  |
| `src/data/phases.ts`         | Die vier Ablauf-Phasen (Analyse, Strategie, Befähigung, Verankerung)       |
| `src/data/services.ts`       | Die neun Leistungen (Kurz- und Langtext, Phasen-Zuordnung)                 |
| `src/data/pricing.ts`        | Die drei Pakete, Einzelmodule, Preise, Fußzeilen-Text                      |
| `src/data/faq.ts`            | FAQ-Fragen und -Antworten (werden 1:1 auch als FAQPage-JSON-LD ausgegeben) |
| `src/data/qualifications.ts` | Ausbildung, Praxis, Methoden/Tools                                         |

Die Hero-Headline mit den zwei nicht verwendeten Alternativtexten steht als Kommentar am
Kopf von `src/components/Hero.astro`.

**Preise pflegen:** In `src/data/pricing.ts` das Feld `price` je Paket anpassen (Freitext,
z. B. `"7.900 € netto"`), Module über das Array `modules` (erscheinen als Textkapseln in der
Karte). Für Einzelmodule gilt bewusst kein Preisfeld — dort steht laut Briefing immer „Auf
Anfrage".

## Bilder

Bilder liegen in **`src/assets/images/`** (nicht in `public/images/`) — nur so kann Astro sie
über `astro:assets` zu WebP verarbeiten, feste Maße vergeben und Layout-Shift vermeiden.
Solange eine Datei fehlt, erscheint automatisch ein deutlich beschrifteter Platzhalter im
richtigen Seitenverhältnis (`src/components/PlaceholderImage.astro`) — das Layout bricht
dadurch später nicht um.

Benötigte Dateien, mit Seitenverhältnis:

| Datei            | Seitenverhältnis | Verwendung                              |
| ---------------- | ---------------- | --------------------------------------- |
| `portrait.jpg`   | 4:5              | Haltungstext-Sektion, „Über mich"       |
| `hero.jpg`       | 4:5              | Hero-Bild auf der Startseite (optional) |
| `workshop-1.jpg` | 3:2              | Leistungsseite, oberer Bildblock        |
| `workshop-2.jpg` | 3:2              | Leistungsseite, unterer Bildblock       |

Einfach die Datei mit exakt diesem Dateinamen nach `src/assets/images/` legen — kein
Code-Änderung nötig, der Platzhalter verschwindet automatisch.

## Projektstruktur

```
src/
  components/    Wiederverwendbare UI-Bausteine (Header, Footer, Sektionen, Formular, Banner)
  data/          Zentrale Inhalte (siehe oben) — hier Texte ändern
  layouts/       BaseLayout.astro (SEO-Head, Skip-Link, Header/Footer/Consent einbinden)
  lib/           Kleine Browser-Logik: Consent-Verwaltung, Analytics-Nachladen, Scroll-Reveal,
                 Fokus-Falle, JSON-LD-Generatoren
  pages/         Eine Datei = eine Route (index, leistungen, ueber-mich, kontakt,
                 impressum, datenschutz, 404)
  styles/        tokens.css (Design-Tokens) + global.css (Tailwind-Theme, Basis-Styles)
  assets/images/ Echte Bilddateien (siehe oben)
public/          robots.txt, favicon.svg, generiertes OG-Bild
```

## Design-Tokens

Alle Farben, Schriften, Radien und Schatten sind CSS-Variablen in `src/styles/tokens.css`
(z. B. `--color-primary`, `--color-surface`, `--color-accent`, `--color-ink`). Komponenten
verwenden ausschließlich die daraus erzeugten Tailwind-Utilities (`bg-primary`, `text-ink`,
`font-serif`, …) — niemals hartkodierte Hex-Werte. Wer die Farbwelt anpassen will, ändert nur
`tokens.css`; die Änderung wirkt dann überall.

## Consent-Banner & Analytics

Das Cookie-Banner (`src/components/ConsentBanner.astro`) ist eine Eigenentwicklung, kein
Fremdanbieter-Skript. Es speichert die Entscheidung versioniert mit Zeitstempel in
`localStorage` (Schlüssel `nkn-consent`). Plausible Analytics wird nur nachgeladen, wenn
**beide** Umgebungsvariablen gesetzt sind (`PUBLIC_ENABLE_ANALYTICS=true` und
`PUBLIC_PLAUSIBLE_DOMAIN`) **und** die Nutzerin/der Nutzer der Kategorie „Statistik"
zugestimmt hat. Ohne aktivierten Dienst zeigt das Banner automatisch nur „Notwendig" an
(keine leere Statistik-Kategorie ohne Funktion).

## Kontaktformular

Anbindung an [Web3Forms](https://web3forms.com/) über `PUBLIC_WEB3FORMS_KEY`
(`.env`/Netlify-Env-Variable, niemals committen). Formularlogik in
`src/components/ContactForm.astro`: echte Erfolgs-/Fehlerzustände abhängig von der
tatsächlichen API-Antwort, Honeypot-Feld, Lade-/Doppel-Submit-Schutz, Mailto-Fallback bei
Fehlern. Details zum Testen: [`DEPLOY.md`](./DEPLOY.md), Abschnitt 5.

## Terminbuchung (Calendly)

Aktiv ist **Variante A**: ein reiner Link-out-Button zu Calendly (`target="_blank"`, kein
Skript, keine Cookies, keine Einwilligung nötig). **Variante B** (Inline-Embed hinter
Einwilligung) liegt vorbereitet, aber deaktiviert in `src/components/CalendlyEmbed.astro` —
Anleitung zum Aktivieren steht als Kommentar in `src/components/ContactSection.astro`.
