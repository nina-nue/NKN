# Rechtlicher Audit — Abgrenzung zum Projekt „KI für KMU NiederRhein"

Stand: 2026-08-24 · Branch `legal/abgrenzung-projekt` · durchsucht: `src/`, `public/`, `dist/`
(nur zur Kontrolle, nicht Quelle), Konfigurationsdateien, Bilddateien (visuell geprüft).

Legende Leitplanke: **R** = Regionale Abgrenzung · **I** = Inhaltliche Abgrenzung ·
**H** = Keine Nähe zur Hochschule · **M** = Keine Projektmaterialien · **N** = Nachvollziehbarkeit

## ⚠️ Kritischster Fund zuerst

**`src/assets/images/workshop-1.jpg` und `src/assets/images/workshop-2.jpeg`** sind
Fotos von einer echten Veranstaltung des Projekts. Auf dem sichtbaren Teilnahme-Badge
steht **„KI FÜR KMU NIEDERRHEIN"**, auf dem zweiten Foto ist zusätzlich **„…Rhein-Waal"**
auf dem Badge lesbar. Diese beiden Bilder sind derzeit auf der Leistungsseite eingebunden
(„Workshop-Situation mit Nina Karolin Nüchter und einem Team" / „bei einem Vortrag") und
verstoßen gegen **Leitplanke H** (Nähe zur Hochschule/zum Projekt sichtbar) und
**Leitplanke M** (es sind faktisch Aufnahmen von einer Projektveranstaltung, keine
Aufnahmen der kommerziellen Beratungstätigkeit). Ich habe sie noch nicht gelöscht oder
ersetzt — das ist eine Bild-Entscheidung, die ich dir laut Auftrag vorher zeigen muss.

**`src/assets/images/portrait.jpeg`** und die Hero-Datei
**`Gemini_Generated_Image_pmolq9pmolq9pmol.png`** zeigen keine erkennbaren
Hochschul-/Projektbezüge (Portrait vor neutraler Glasfassade, Hero eine generierte
Bürositzung) — hier sehe ich keinen Handlungsbedarf.

**`public/images/og-image.png`** ist eine fertig gerenderte Grafik (kein Textlayer, kein
Quelltemplate im Repo) mit fest eingebranntem Text „KI-Beratung für den Mittelstand" und
„Duisburg · Niederrhein · NRW". Das kann ich nicht per Texteditor korrigieren — sie muss
mit dem Tool, mit dem sie ursprünglich erstellt wurde, neu erzeugt werden. Ich markiere
das als offenen Punkt in Aufgabe 3 statt sie unbearbeitet zu lassen.

---

## R — Regionale Abgrenzung

| Datei | Zeile | Text/Befund | Problem |
|---|---|---|---|
| `src/data/site.ts` | 13 | `description`: „…Standort Duisburg, Niederrhein, NRW." | Bewirbt exakt die Ausschlussregion |
| `src/data/site.ts` | 31 | `areaServed: ['Duisburg', 'Niederrhein', 'Nordrhein-Westfalen']` | Fließt direkt ins JSON-LD (`structuredData.ts:22`) |
| `src/pages/ueber-mich.astro` | 10 | Meta-`description`: „…Standort Duisburg." | Regionale Werbung in Meta-Tag |
| `src/pages/ueber-mich.astro` | 25 | „…Standort Duisburg, Niederrhein." (sichtbarer Fließtext) | Regionale Werbung im Content |
| `src/components/Footer.astro` | 13–15 | Zeigt `{site.address.city} · {site.address.region}` prominent unter Name/Claim | Keine Pflichtangabe an dieser Stelle (die steht im Impressum) — liest sich wie eine Standort-Werbezeile, nicht wie eine Pflichtangabe |
| `public/images/og-image.png` | Bilddatei | Eingebrannter Text „Duisburg · Niederrhein · NRW" | Siehe Hinweis oben — braucht externe Neuerstellung |
| `src/lib/structuredData.ts` | 22 | `areaServed: site.areaServed` | Wird automatisch korrekt, sobald `site.ts` korrigiert ist |
| `src/pages/impressum.astro` | 18–23 | Adresse Duisburg im Impressum | **Kein Handlungsbedarf** — Pflichtangabe nach § 5 DDG, keine Werbung |
| `src/pages/datenschutz.astro` | 228 | „…Nordrhein-Westfalen (LDI NRW)" als zuständige Aufsichtsbehörde | **Kein Handlungsbedarf** — gesetzlich zwingende Angabe der zuständigen Behörde, keine Zielgruppenwerbung |

## I — Inhaltliche Abgrenzung (deckungsgleiche Leistungen)

| Datei | Zeile | Text/Befund | Entspricht Projektformat |
|---|---|---|---|
| `src/data/pricing.ts` | 12–23 | Paket „KI-Start" komplett, inkl. „KI-Kompass Workshop (halbtägig)" | KI.READY |
| `src/data/pricing.ts` | 25–35 | Paket „KI-Potenzial & Roadmap": „KI-Potenzialanalyse", „Use-Case-Landkarte", „Roadmap" | KI.PRAKTISCH |
| `src/data/pricing.ts` | 36–50 | Paket „KI-Einführung mit Akzeptanz": „Potenzialanalyse light", „Pilotdesign & -begleitung" | KI.PRAKTISCH / KI.MENTORING |
| `src/data/pricing.ts` | 58–69 | Einzelmodule: „KI-Kompass Workshop", „AI Literacy kompakt", „KI-Schulung & Enablement", „KI-Potenzialanalyse", „KI-Strategie & Roadmap", „Pilot- & Implementierungsbegleitung" | KI.READY / KI.PRAKTISCH |
| `src/data/services.ts` | 11–18 | Leistung „KI-Potenzialanalyse" | KI.PRAKTISCH (Use-Case-Mapping) |
| `src/data/services.ts` | 20–26 | Leistung „KI-Strategie & Roadmap" | KI.PRAKTISCH |
| `src/data/services.ts` | 37–43 | Leistung „KI-Schulung & Enablement / AI Literacy" | KI.READY |
| `src/data/services.ts` | 53–59 | Leistung „Pilot- & Implementierungsbegleitung" | KI.MENTORING |
| `src/data/problems.ts` | 10 | „Eine KI-Potenzialanalyse entlang der tatsächlichen Prozesse…" | KI.PRAKTISCH |
| `src/data/phases.ts` | 17–19, 24–25 | Phasenbeschreibung nutzt „Use Cases", „Roadmap", „Workshops", „AI Literacy" als Kernversprechen | KI.PRAKTISCH / KI.READY |
| `src/data/faq.ts` | 10 | „…klärt die Potenzialanalyse…" | KI.PRAKTISCH |
| `src/data/faq.ts` | 25 | Stundenangaben nach Paketnamen „KI-Start", „KI-Potenzial & Roadmap", „KI-Einführung mit Akzeptanz" | Muss nach Neuschnitt der Pakete mit angepasst werden |
| `src/pages/leistungen/index.astro` | 9 | Meta-`description`: „KI-Potenzialanalyse, Strategie & Roadmap…" | Listet die deckungsgleichen Leistungen im Meta-Tag auf |

*Nicht deckungsgleich und daher unverändert lassbar (Aufgabe 2, „ausbauen"):*
`governance-ki-leitlinien`, `wirkungsmessung`, `datengestuetzte-entscheidungsberatung`,
`change-begleitung` — decken keine der vier Projektformate ab.

## H — Keine Nähe zur Hochschule

| Datei | Zeile | Text/Befund | Problem |
|---|---|---|---|
| `src/assets/images/workshop-1.jpg` | Bilddatei | Sichtbares Badge „KI FÜR KMU NIEDERRHEIN" | Siehe Fund oben |
| `src/assets/images/workshop-2.jpeg` | Bilddatei | Sichtbares Badge „…Rhein-Waal" | Siehe Fund oben |
| `src/pages/leistungen/index.astro` | 38, 79 | Alt-Texte binden genau diese Fotos ein | Wird mit den Bildern hinfällig |
| `src/data/qualifications.ts` | 16 | „Dozentin (HR Management, Psychologische Diagnostik, Trendforschung & Innovation)" | Kein Hochschulname genannt — aktuell kein Verstoß, aber im Kontext der Verkaufsseite platziert (Aufgabe 6 verlangt Umzug in reinen Lebenslaufteil) |
| `src/pages/ueber-mich.astro` | 9–10, 21–24 | Verknüpft „Dozentin"/Promotion direkt mit dem Beratungsangebot als Verkaufsargument | Grenzwertig — wird in Aufgabe 6 entschärft |

Keine Treffer für „HSRW", „Rhein-Waal" oder „Hochschule" im Text selbst (nur im Bild).

## M — Keine Projektmaterialien

| Datei | Zeile | Text/Befund | Problem |
|---|---|---|---|
| `src/assets/images/workshop-1.jpg`, `workshop-2.jpeg` | Bilddatei | Aufnahmen von einer Projektveranstaltung | Bildmaterial ist faktisch Projektkontext, nicht eigene Beratungstätigkeit |

Keine Textinhalte, PDFs oder Foliensätze aus dem Projekt im Repo gefunden.

## N — Nachvollziehbarkeit

Kein Text-Fund — wird durch `COMPLIANCE.md` und `CHANGELOG-legal.md` (Aufgabe 9) hergestellt.

## Sonstiges geprüft, ohne Fund

- `sitemap-index.xml` wird zur Buildzeit generiert (kein Region-Bezug in `astro.config.mjs`,
  Filter schließt nur Impressum/Datenschutz aus)
- `public/robots.txt` — kein Region-Bezug
- `netlify.toml`, `DEPLOY.md`, `package.json` — kein Region-/Projekt-Bezug
- JSON-LD ist bereits `@type: 'ProfessionalService'` (nicht `LocalBusiness`) —
  Aufgabe 3 muss nur `areaServed` ändern, keinen Typwechsel vornehmen
- Keine Fake-Testimonials, Kundenlogos oder erfundenen Zahlen gefunden (entspricht der
  in `KIKONTEXT.md` dokumentierten Grundhaltung)
- Keine wörtliche Alleinstellungsbehauptung wie „einzige Kombination aus…" im aktuellen
  Code gefunden — Aufgabe 7 wird die Texte trotzdem auf ähnliche, schwächere Formulierungen
  prüfen (z. B. Auszeichnung „Bester Master 2025", IHK-Zertifikat-Bezeichnung)

---

**Ich pausiere hier wie vereinbart.** Bevor ich mit Aufgabe 2 weitermache, brauche ich von
dir eine Entscheidung zu den beiden Workshop-Fotos: löschen (Platzhalter erscheint dann
automatisch, siehe `PlaceholderImage.astro`) oder durch neue, nicht-projektbezogene Fotos
ersetzen, die du mir zur Verfügung stellst?
