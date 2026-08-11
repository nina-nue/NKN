# KI-KONTEXT — Projekt „Website Nina Karolin Nüchter (KI-Beratung)"

> **Diese Datei ist für KI-Assistenten (und Menschen) gedacht, die neu auf dieses
> Projekt treffen.** Lies sie zuerst und vollständig. Danach weißt du genau, was
> diese Website ist, wie sie technisch aufgebaut ist, wie Inhalte und Design
> getrennt sind und wie die Seite vom Code bis zur Live-Domain deployed wird.
> Ergänzende Detaildateien im Repo: `README.md` (Pflege), `DEPLOY.md`
> (Netlify-Schritte), `RECHTLICHES.md` (offene juristische Punkte).

---

## 1. Was ist diese Website?

- **Inhaberin / Betreiberin:** Nina Karolin Nüchter — Organisationspsychologin und
  KI-Beraterin, Standort Duisburg / Niederrhein / NRW.
- **Zweck:** Marketing-/Akquise-Website für ihre **KI-Beratung im Mittelstand**.
  Kernbotschaft: KI scheitert selten an der Technik, sondern an der Organisation
  dahinter — sie bringt den Blick der Organisationspsychologie mit.
- **Sprache:** durchgängig **Deutsch** (`lang="de"`).
- **Charakter der Texte:** ehrlich, ohne Hype, ohne erfundene Kundenstimmen,
  Logos oder Zahlen. Diese Haltung ist bewusst — **keine Fake-Testimonials,
  Zähler oder Referenz-Logos hinzufügen.**
- **Kontakt-Zieladresse (Formular/Impressum):** `n.nuechter@nknoffice.eu`
- **Zieldomain:** `https://www.nina-nuechter.de`

---

## 2. Tech-Stack (Stand aktuell)

| Baustein | Wahl | Zweck |
|---|---|---|
| Framework | **Astro 5** (`astro@^5.18`) | Statischer Site-Generator, `output: 'static'` |
| Styling | **Tailwind CSS 4** (`@tailwindcss/vite`) | Utility-CSS, Theme aus Design-Tokens |
| Sprache | **TypeScript** (strict) | Typsicherheit |
| Icons | **@lucide/astro** | SVG-Icons (z. B. ChevronDown, Mail, Calendar) |
| Schrift | **@fontsource/inter** (selbst gehostet) | Grotesk, kein Google-Fonts-CDN |
| Sitemap | **@astrojs/sitemap** | erzeugt `sitemap-index.xml` |
| Formular | **Web3Forms** (externer Dienst, per fetch) | Kontaktformular ohne eigenes Backend |
| Hosting | **Netlify** | Build + CDN + TLS + DNS |
| Versionierung | **GitHub** (`github.com/nina-nue/NKN`) | Quellcode, löst Netlify-Builds aus |

> Hinweis: Das Paket `@fontsource/eb-garamond` ist noch in `package.json`, wird
> aber **nach dem Redesign nicht mehr importiert** (siehe Abschnitt 4). Die Seite
> nutzt ausschließlich **Inter**. Das Paket kann bei Gelegenheit entfernt werden.

**Wichtige Rahmenbedingungen:**
- **Statisch**: Es gibt kein serverseitiges Backend. Alles wird zu HTML/CSS/JS
  vorgebaut. Dynamik (Formular, Consent, Parallax) passiert im Browser (Client-JS).
- **Kein Google Fonts, kein Fremd-Cookie-Tool** — aus Datenschutzgründen bewusst
  selbst gehostet bzw. selbst gebaut.

---

## 3. Projektstruktur

```
src/
  components/     Wiederverwendbare UI-Bausteine (Header, Footer, Hero, Sektionen,
                  Formular, Consent-Banner, PlaceholderImage, CalendlyEmbed)
  data/           ← ZENTRALE INHALTE (reine Daten, keine Layout-Logik) — HIER Texte ändern
  layouts/        BaseLayout.astro (SEO-Head, Skip-Link, bindet Header/Footer/Consent ein)
  lib/            Browser-Logik: consent.ts, analytics.ts, reveal.ts, focusTrap.ts,
                  structuredData.ts (JSON-LD-Generatoren)
  pages/          Eine Datei = eine Route
  styles/         tokens.css (Design-Tokens) + global.css (Tailwind-Theme, Basis, Motion)
  assets/images/  Echte Bilddateien (werden von astro:assets zu WebP optimiert)
public/           robots.txt, favicon.svg, images/og-image.png (unverändert kopiert)
```

**Seiten (`src/pages/`):**
- `index.astro` — Startseite (Hero + alle Sektionen)
- `leistungen/index.astro` — alle 9 Leistungen, nach 4 Phasen gruppiert
- `ueber-mich.astro` — Person, Haltung, Qualifikation
- `kontakt.astro` — eigenständige Kontaktseite (nutzt dieselbe Kontakt-Sektion)
- `impressum.astro` — **`noindex`**, aus Sitemap ausgeschlossen
- `datenschutz.astro` — **`noindex`**, aus Sitemap ausgeschlossen
- `404.astro` — **`noindex`**

---

## 4. Design-System („hell & modern", Variante B)

Das ursprüngliche Design war klassisch/editorial mit Serifenschrift. Es wurde auf
Wunsch komplett auf **hell & modern, Apple-artig** umgebaut. Aktueller Stand:

- **Vollflächiger Hero mit Hintergrundfoto** von Nina (`src/assets/images/hero.jpg`).
  - Foto liegt `object-fit: cover` über die volle Breite; Motiv rechts positioniert
    (`object-position: 74% 20%` Desktop, `62% 18%` Mobil), damit der Kopf oben nicht
    angeschnitten wird und links Platz für den Text bleibt.
  - **Heller Verlauf-Scrim** links (`.hero-scrim-x`) macht den dunkelgrünen Text auch
    über einem hellen, unruhigen Foto lesbar; auf Mobil zusätzlich vertikaler Scrim.
  - **Parallax**: Das Foto zieht beim Scrollen langsamer mit (kleines Inline-Script im
    Hero, `data-hero-parallax`). Respektiert `prefers-reduced-motion`.
  - Fehlt `hero.jpg`, zeigt der Hero automatisch einen hellen Platzhalter mit Hinweis.
- **Typografie:** durchgängig **Inter** (Grotesk). Überschriften `h1–h4` sind in
  `global.css` global auf `font-family: Inter, font-weight: 700, letter-spacing:-0.03em`
  gesetzt. **Es gibt keine Serifenschrift mehr.**
- **Header:** `fixed`, über dem Hero transparent, wird beim Scrollen zu einem
  Glas-Balken (`data-scrolled="true"` → `bg-surface/80 backdrop-blur`, per Script in
  `Header.astro`). Logo oben zeigt die Kurzform **„Nina K. Nüchter"** (`site.shortName`);
  der volle Name bleibt für Impressum/SEO.
- **Bewegung (fließend):** dezente Fade-in-up-Reveals beim Scrollen (`[data-reveal]`
  bzw. `[data-reveal="rise"]`, getriggert von `src/lib/reveal.ts` via IntersectionObserver).

### Design-Tokens = einzige Quelle der Wahrheit für Optik
- Alle Farben/Schriften/Radien/Schatten sind **CSS-Variablen** in
  `src/styles/tokens.css` (z. B. `--color-primary`, `--color-surface`,
  `--color-accent`, `--color-ink`).
- `src/styles/global.css` bildet sie über einen Tailwind-`@theme`-Block auf
  Utility-Klassen ab (`bg-primary`, `text-ink`, `rounded-lg`, …).
- **Regel:** Komponenten verwenden nur diese Utilities, **niemals hartkodierte
  Hex-Werte.** Farbwelt ändern = nur `tokens.css` anfassen, wirkt überall.

**Farbwelt:** gedecktes Tannengrün (`--color-primary`), warmes Off-White als Fläche
(`--color-surface`), warmer Sand/Messing als Akzent (`--color-accent`). **Kein Blau.**
Kontraste sind so gewählt, dass Lighthouse-Accessibility 100 erreicht — bei
Farbänderungen den Kontrast prüfen.

---

## 5. Wo ändert man was? (wichtig für jede KI)

**Inhalte/Texte → `src/data/*.ts` (kein Komponenten-Code nötig):**

| Datei | Inhalt |
|---|---|
| `site.ts` | Name, `shortName` (Header), Claim, E-Mail, Adresse, Calendly-/LinkedIn-Link, Navigation |
| `problems.ts` | Die 4 Problemblöcke auf der Startseite |
| `phases.ts` | Die 4 Ablauf-Phasen (Analyse, Strategie, Befähigung, Verankerung) |
| `services.ts` | Die 9 Leistungen (Kurz-/Langtext, Phasenzuordnung) |
| `pricing.ts` | 3 Pakete, Einzelmodule, Preise, Fußnoten |
| `faq.ts` | FAQ (wird 1:1 auch als FAQPage-JSON-LD ausgegeben) |
| `qualifications.ts` | Ausbildung, Praxis, Methoden/Tools |

**Design/Optik → `src/styles/tokens.css`** (Farben etc.) bzw. `global.css` (Basis).

**Bilder → `src/assets/images/`** mit exakt diesen Dateinamen:

| Datei | Format | Verwendung |
|---|---|---|
| `hero.jpg` | vollflächig (Querformat empfohlen) | Startseite-Hero-Hintergrund |
| `portrait.jpg` | 4:5 hochkant | Haltungstext + „Über mich" |
| `workshop-1.jpg` | 3:2 quer | Leistungsseite oben |
| `workshop-2.jpg` | 3:2 quer | Leistungsseite unten |

Fehlt ein Bild, erscheint automatisch ein beschrifteter Platzhalter
(`PlaceholderImage.astro`) — das Layout bricht nicht. Bilder liegen bewusst in
`src/assets/` (nicht `public/`), weil nur so `astro:assets` sie zu WebP optimiert.

> **Nicht anfassen ohne Grund:** Der **volle rechtliche Name** „Nina Karolin Nüchter"
> muss im Impressum und in Meta/JSON-LD stehen. Nur das **Header-Logo** nutzt die
> Kurzform `site.shortName`.

---

## 6. Besonderheiten / Eigenheiten der Komponenten

- **Consent-Banner** (`components/ConsentBanner.astro`, `lib/consent.ts`): **Eigenbau**,
  kein Fremdanbieter. Speichert die Einwilligung versioniert + mit Zeitstempel im
  `localStorage` (Schlüssel `nkn-consent`). Fokus-Falle, ESC schließt.
- **Analytics (Plausible)** (`lib/analytics.ts`): wird **nur** geladen, wenn
  `PUBLIC_ENABLE_ANALYTICS=true` **und** `PUBLIC_PLAUSIBLE_DOMAIN` gesetzt sind **und**
  der Nutzer der Kategorie „Statistik" zustimmt. Ohne aktivierten Dienst zeigt das
  Banner nur „Notwendig", und der Analytics-Abschnitt der Datenschutzerklärung
  erscheint automatisch nicht.
- **Kontaktformular** (`components/ContactForm.astro`): sendet per `fetch` an
  Web3Forms. Echte Erfolgs-/Fehlerzustände je nach API-Antwort, Honeypot-Feld gegen
  Bots, Doppel-Submit-Schutz, **Mailto-Fallback** bei Fehler. Braucht die
  Umgebungsvariable `PUBLIC_WEB3FORMS_KEY` (wird beim Build eingebacken).
- **Terminbuchung** (`components/ContactSection.astro`): aktiv ist **Variante A** —
  ein reiner Link-out-Button zu Calendly (kein Skript, keine Cookies). **Variante B**
  (Inline-Embed hinter Einwilligung) liegt in `components/CalendlyEmbed.astro` fertig,
  aber deaktiviert vor.
- **SEO** (`lib/structuredData.ts`, `layouts/BaseLayout.astro`): JSON-LD für
  `ProfessionalService` (Start), `Person` (Über mich), `FAQPage`; Canonical, OG/Twitter,
  `og-image.png`. `robots.txt` und Sitemap schließen Impressum/Datenschutz aus.

---

## 7. DER DEPLOY-WORKFLOW (Code → Live-Website)

So kommt eine Änderung tatsächlich ins Netz. Das ist das Herzstück dieser Datei.

### 7.1 Überblick der Kette
```
Quellcode (lokal)  →  git commit  →  GitHub (Repo nina-nue/NKN, Branch main)
      →  Netlify baut automatisch (npm run build)  →  dist/  →  Netlify-CDN
      →  Domain www.nina-nuechter.de (Netlify DNS)  →  Besucher
```
**Kernprinzip:** Netlify ist per **Continuous Deployment** mit GitHub verbunden.
**Jeder Push auf `main` löst automatisch einen neuen Build + Deploy aus.** Es gibt
keinen manuellen Upload von fertigen Dateien; Netlify baut aus dem Quellcode.

### 7.2 Build-Konfiguration (`netlify.toml` im Repo)
- Build-Befehl: `npm run build` (= `astro check && astro build`)
- Publish-Verzeichnis: `dist`
- Node-Version: **22**
- Zusätzlich: Security-Header (X-Frame-Options etc.) und Cache-Header für
  `/_astro/*` und Fonts.

### 7.3 Umgebungsvariablen (Netlify → Project configuration → Environment variables)
| Variable | Pflicht | Wert |
|---|---|---|
| `PUBLIC_WEB3FORMS_KEY` | ja | Access Key von web3forms.com (Zieladresse `n.nuechter@nknoffice.eu`) |
| `PUBLIC_SITE_URL` | ja | `https://www.nina-nuechter.de` — muss **exakt** der Live-Domain entsprechen (Sitemap/Canonical/JSON-LD/OG) |
| `PUBLIC_ENABLE_ANALYTICS` | nein | `true` nur falls Plausible genutzt wird, sonst weglassen/`false` |
| `PUBLIC_PLAUSIBLE_DOMAIN` | nein | Domain bei Plausible (nur wenn Analytics aktiv) |

> **Wichtig:** `PUBLIC_*`-Variablen werden **beim Build** in die Seite eingebacken.
> Nach dem Ändern einer Variable **neu deployen** (Netlify → Deploys → Trigger deploy),
> sonst greift der neue Wert nicht.

### 7.4 Domain (Netlify DNS)
- Domain `nina-nuechter.de` ist bei einem Registrar registriert; die **Nameserver**
  wurden auf **Netlify DNS** umgestellt (Werte der Form `dnsX.p04.nsone.net`).
- Beim Registrar wurde dazu ein „Nameserver-Set" mit diesen 4 Hostnamen angelegt und
  der Domain zugewiesen (**ohne** Glue-Record, da die Nameserver fremd sind).
- In Netlify sollte **`www.nina-nuechter.de` als Primary Domain** gesetzt sein;
  `nina-nuechter.de` leitet dann dorthin um. TLS-Zertifikat stellt Netlify automatisch
  aus, sobald die DNS-Umstellung greift (kann Minuten bis Stunden dauern).
- **Prüfen, ob die .de-Delegation aktiv ist:** DNS-Abfrage der NS-Einträge von
  `nina-nuechter.de`. Kommt „NXDOMAIN", ist die Nameserver-Zuweisung beim Registrar
  noch nicht wirksam (nicht bloß Propagation).

### 7.5 Web3Forms (Kontaktformular)
1. Auf web3forms.com mit `n.nuechter@nknoffice.eu` registrieren, **Access Key** kopieren.
2. Key als `PUBLIC_WEB3FORMS_KEY` in Netlify eintragen, neu deployen.
3. Auf der Live-Seite eine Testnachricht senden, Postfach (inkl. Spam) prüfen.

---

## 8. Lokale Entwicklung & Qualitätssicherung

Voraussetzung: **Node.js ≥ 20** (empfohlen 22, siehe `.nvmrc`).

```bash
npm install            # Abhängigkeiten
cp .env.example .env   # PUBLIC_WEB3FORMS_KEY lokal eintragen
npm run dev            # Dev-Server auf http://localhost:4321
npm run build          # Produktionsbuild inkl. Typecheck (astro check)
npm run preview        # Produktionsbuild lokal ansehen
npm run check          # nur Typecheck
npm run lint           # ESLint
npm run format         # Prettier
```

**Vor jedem Commit einer Änderung:** `npm run build` muss fehlerfrei durchlaufen
(er enthält den Typecheck). Die Seite erreicht in Lighthouse **100/100/100/100** auf
den indexierbaren Seiten (Impressum/Datenschutz haben bewusst SEO < 100 wegen
`noindex`). Interaktive A11y (Consent-Fokusfalle, Tastatur-Menü, Formular-Zustände)
wurden mit Playwright real getestet.

---

## 9. Aktueller Stand & offene Punkte (vor „echtem" Livegang prüfen)

- **Fotos einsetzen:** `hero.jpg` (Querformat wirkt vollflächig ruhiger als Hochformat),
  `portrait.jpg`, `workshop-1.jpg`, `workshop-2.jpg` in `src/assets/images/`.
- **Rechtstexte final prüfen:** Alle mit **⚠️ PRÜFEN** markierten Stellen in
  `impressum.astro` / `datenschutz.astro` — Sammlung in **`RECHTLICHES.md`**:
  Telefonnummer (optional), Berufsbezeichnung/Kammer, Kleinunternehmerregelung
  (§ 19 UStG, betrifft ggf. Preis-Hinweis), Streitschlichtung, **Hosting-Anbieter im
  Datenschutz** (Netlify, Inc., USA — AVV/Standardvertragsklauseln nennen).
- **Domain:** DNS-Delegation live? Primary Domain auf `www` gesetzt? `PUBLIC_SITE_URL`
  passend?
- **Formular:** einmal echt getestet und E-Mail angekommen?
- **Hero-Feinschliff:** Sitzt der Kopf gut? Ein-Zeilen-Justierung über `object-position`
  in `src/components/Hero.astro` bzw. `.hero-media img.hero-img` in `global.css`.

---

## 10. Entstehungs- & Arbeitsweg (Kurzchronik)

1. Website von Grund auf mit **Claude** gebaut (Astro + Tailwind + TS), Inhalte aus
   einem Briefing, mit Fokus auf Trennung von Inhalt (`src/data`) und Design (Tokens).
2. Rechtstexte, SEO, eigenes Consent-Banner, Web3Forms-Formular, Netlify-Config, Doku.
3. Erstveröffentlichung ins Repo `nina-nue/NKN` (Branch `main`), Verbindung mit Netlify.
4. Domain `nina-nuechter.de` beim Registrar auf Netlify-Nameserver umgestellt.
5. **Redesign** von klassisch/serif zu **hell & modern** (Variante B): vollflächiger
   Hero mit Foto, Inter-Grotesk, transparenter→solider Header, Parallax, Reveals.
   Hero-Crop danach robuster gemacht (Kopf bleibt sichtbar, stärkerer Text-Scrim).
   Header-Logo auf Kurzform „Nina K. Nüchter".
6. Übergabe: Teile wurden anfangs als ZIP übergeben, weil eine Cloud-Session keinen
   Schreib-Push zu GitHub hatte; Pflege läuft über **GitHub Desktop** (Push auf `main`
   → Netlify baut). Für direkte Bearbeitung wurde **Claude Code lokal** eingerichtet.

---

## 11. Leitplanken für die nächste KI (bitte einhalten)

- **Inhalt ändern → nur `src/data/*.ts`.** Optik ändern → nur `tokens.css`/`global.css`.
  Keine Hex-Farben in Komponenten.
- **Keine erfundenen Inhalte** (Testimonials, Logos, Zahlen, Zertifikate). Ehrliche,
  zurückhaltende Tonalität beibehalten.
- **Voller rechtlicher Name** bleibt in Impressum/SEO; nur Header nutzt Kurzform.
- **Datenschutz-Prinzipien** respektieren: keine Google Fonts, kein Fremd-Cookie-Tool,
  Analytics nur hinter Einwilligung + Env-Flag.
- **Nach Änderungen `npm run build` grün** halten (inkl. `astro check`). Auf
  Farbkontrast achten (Lighthouse-A11y 100).
- **Deploy passiert automatisch beim Push auf `main`.** Nichts manuell nach Netlify
  hochladen. `PUBLIC_*`-Env-Änderungen erfordern einen neuen Build.
- Bei rechtlichen Unklarheiten auf `RECHTLICHES.md` verweisen, nicht raten.
