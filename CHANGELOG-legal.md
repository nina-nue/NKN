# CHANGELOG (rechtliche Überarbeitung) — vollständiger Diff-Export

Branch `legal/abgrenzung-projekt`, abgezweigt von `main`. Enthält den vollständigen
Text-Diff aller Commits dieser Überarbeitung (Abgrenzung zum Projekt „KI für KMU
NiederRhein"), in chronologischer Reihenfolge. Für eine allgemeinverständliche
Zusammenfassung siehe `COMPLIANCE.md`, für die tabellarische Bestandsaufnahme
`LEGAL-AUDIT.md`.

Erzeugt am 2026-08-24 mit: `git log -p --reverse main..legal/abgrenzung-projekt -- src LEGAL-AUDIT.md`

---

commit dbacf552815ff6375f6f2a65ab0f1d69755a98bd
Author: nina-nue <nina.karolin.nuechter@gmail.com>
Date:   Mon Aug 24 14:46:25 2026 +0200

    Rechtsaudit: Bestandsaufnahme Abgrenzung zum Projekt KI fuer KMU NiederRhein

diff --git a/LEGAL-AUDIT.md b/LEGAL-AUDIT.md
new file mode 100644
index 0000000..96827c2
--- /dev/null
+++ b/LEGAL-AUDIT.md
@@ -0,0 +1,113 @@
+# Rechtlicher Audit — Abgrenzung zum Projekt „KI für KMU NiederRhein"
+
+Stand: 2026-08-24 · Branch `legal/abgrenzung-projekt` · durchsucht: `src/`, `public/`, `dist/`
+(nur zur Kontrolle, nicht Quelle), Konfigurationsdateien, Bilddateien (visuell geprüft).
+
+Legende Leitplanke: **R** = Regionale Abgrenzung · **I** = Inhaltliche Abgrenzung ·
+**H** = Keine Nähe zur Hochschule · **M** = Keine Projektmaterialien · **N** = Nachvollziehbarkeit
+
+## ⚠️ Kritischster Fund zuerst
+
+**`src/assets/images/workshop-1.jpg` und `src/assets/images/workshop-2.jpeg`** sind
+Fotos von einer echten Veranstaltung des Projekts. Auf dem sichtbaren Teilnahme-Badge
+steht **„KI FÜR KMU NIEDERRHEIN"**, auf dem zweiten Foto ist zusätzlich **„…Rhein-Waal"**
+auf dem Badge lesbar. Diese beiden Bilder sind derzeit auf der Leistungsseite eingebunden
+(„Workshop-Situation mit Nina Karolin Nüchter und einem Team" / „bei einem Vortrag") und
+verstoßen gegen **Leitplanke H** (Nähe zur Hochschule/zum Projekt sichtbar) und
+**Leitplanke M** (es sind faktisch Aufnahmen von einer Projektveranstaltung, keine
+Aufnahmen der kommerziellen Beratungstätigkeit). Ich habe sie noch nicht gelöscht oder
+ersetzt — das ist eine Bild-Entscheidung, die ich dir laut Auftrag vorher zeigen muss.
+
+**`src/assets/images/portrait.jpeg`** und die Hero-Datei
+**`Gemini_Generated_Image_pmolq9pmolq9pmol.png`** zeigen keine erkennbaren
+Hochschul-/Projektbezüge (Portrait vor neutraler Glasfassade, Hero eine generierte
+Bürositzung) — hier sehe ich keinen Handlungsbedarf.
+
+**`public/images/og-image.png`** ist eine fertig gerenderte Grafik (kein Textlayer, kein
+Quelltemplate im Repo) mit fest eingebranntem Text „KI-Beratung für den Mittelstand" und
+„Duisburg · Niederrhein · NRW". Das kann ich nicht per Texteditor korrigieren — sie muss
+mit dem Tool, mit dem sie ursprünglich erstellt wurde, neu erzeugt werden. Ich markiere
+das als offenen Punkt in Aufgabe 3 statt sie unbearbeitet zu lassen.
+
+---
+
+## R — Regionale Abgrenzung
+
+| Datei | Zeile | Text/Befund | Problem |
+|---|---|---|---|
+| `src/data/site.ts` | 13 | `description`: „…Standort Duisburg, Niederrhein, NRW." | Bewirbt exakt die Ausschlussregion |
+| `src/data/site.ts` | 31 | `areaServed: ['Duisburg', 'Niederrhein', 'Nordrhein-Westfalen']` | Fließt direkt ins JSON-LD (`structuredData.ts:22`) |
+| `src/pages/ueber-mich.astro` | 10 | Meta-`description`: „…Standort Duisburg." | Regionale Werbung in Meta-Tag |
+| `src/pages/ueber-mich.astro` | 25 | „…Standort Duisburg, Niederrhein." (sichtbarer Fließtext) | Regionale Werbung im Content |
+| `src/components/Footer.astro` | 13–15 | Zeigt `{site.address.city} · {site.address.region}` prominent unter Name/Claim | Keine Pflichtangabe an dieser Stelle (die steht im Impressum) — liest sich wie eine Standort-Werbezeile, nicht wie eine Pflichtangabe |
+| `public/images/og-image.png` | Bilddatei | Eingebrannter Text „Duisburg · Niederrhein · NRW" | Siehe Hinweis oben — braucht externe Neuerstellung |
+| `src/lib/structuredData.ts` | 22 | `areaServed: site.areaServed` | Wird automatisch korrekt, sobald `site.ts` korrigiert ist |
+| `src/pages/impressum.astro` | 18–23 | Adresse Duisburg im Impressum | **Kein Handlungsbedarf** — Pflichtangabe nach § 5 DDG, keine Werbung |
+| `src/pages/datenschutz.astro` | 228 | „…Nordrhein-Westfalen (LDI NRW)" als zuständige Aufsichtsbehörde | **Kein Handlungsbedarf** — gesetzlich zwingende Angabe der zuständigen Behörde, keine Zielgruppenwerbung |
+
+## I — Inhaltliche Abgrenzung (deckungsgleiche Leistungen)
+
+| Datei | Zeile | Text/Befund | Entspricht Projektformat |
+|---|---|---|---|
+| `src/data/pricing.ts` | 12–23 | Paket „KI-Start" komplett, inkl. „KI-Kompass Workshop (halbtägig)" | KI.READY |
+| `src/data/pricing.ts` | 25–35 | Paket „KI-Potenzial & Roadmap": „KI-Potenzialanalyse", „Use-Case-Landkarte", „Roadmap" | KI.PRAKTISCH |
+| `src/data/pricing.ts` | 36–50 | Paket „KI-Einführung mit Akzeptanz": „Potenzialanalyse light", „Pilotdesign & -begleitung" | KI.PRAKTISCH / KI.MENTORING |
+| `src/data/pricing.ts` | 58–69 | Einzelmodule: „KI-Kompass Workshop", „AI Literacy kompakt", „KI-Schulung & Enablement", „KI-Potenzialanalyse", „KI-Strategie & Roadmap", „Pilot- & Implementierungsbegleitung" | KI.READY / KI.PRAKTISCH |
+| `src/data/services.ts` | 11–18 | Leistung „KI-Potenzialanalyse" | KI.PRAKTISCH (Use-Case-Mapping) |
+| `src/data/services.ts` | 20–26 | Leistung „KI-Strategie & Roadmap" | KI.PRAKTISCH |
+| `src/data/services.ts` | 37–43 | Leistung „KI-Schulung & Enablement / AI Literacy" | KI.READY |
+| `src/data/services.ts` | 53–59 | Leistung „Pilot- & Implementierungsbegleitung" | KI.MENTORING |
+| `src/data/problems.ts` | 10 | „Eine KI-Potenzialanalyse entlang der tatsächlichen Prozesse…" | KI.PRAKTISCH |
+| `src/data/phases.ts` | 17–19, 24–25 | Phasenbeschreibung nutzt „Use Cases", „Roadmap", „Workshops", „AI Literacy" als Kernversprechen | KI.PRAKTISCH / KI.READY |
+| `src/data/faq.ts` | 10 | „…klärt die Potenzialanalyse…" | KI.PRAKTISCH |
+| `src/data/faq.ts` | 25 | Stundenangaben nach Paketnamen „KI-Start", „KI-Potenzial & Roadmap", „KI-Einführung mit Akzeptanz" | Muss nach Neuschnitt der Pakete mit angepasst werden |
+| `src/pages/leistungen/index.astro` | 9 | Meta-`description`: „KI-Potenzialanalyse, Strategie & Roadmap…" | Listet die deckungsgleichen Leistungen im Meta-Tag auf |
+
+*Nicht deckungsgleich und daher unverändert lassbar (Aufgabe 2, „ausbauen"):*
+`governance-ki-leitlinien`, `wirkungsmessung`, `datengestuetzte-entscheidungsberatung`,
+`change-begleitung` — decken keine der vier Projektformate ab.
+
+## H — Keine Nähe zur Hochschule
+
+| Datei | Zeile | Text/Befund | Problem |
+|---|---|---|---|
+| `src/assets/images/workshop-1.jpg` | Bilddatei | Sichtbares Badge „KI FÜR KMU NIEDERRHEIN" | Siehe Fund oben |
+| `src/assets/images/workshop-2.jpeg` | Bilddatei | Sichtbares Badge „…Rhein-Waal" | Siehe Fund oben |
+| `src/pages/leistungen/index.astro` | 38, 79 | Alt-Texte binden genau diese Fotos ein | Wird mit den Bildern hinfällig |
+| `src/data/qualifications.ts` | 16 | „Dozentin (HR Management, Psychologische Diagnostik, Trendforschung & Innovation)" | Kein Hochschulname genannt — aktuell kein Verstoß, aber im Kontext der Verkaufsseite platziert (Aufgabe 6 verlangt Umzug in reinen Lebenslaufteil) |
+| `src/pages/ueber-mich.astro` | 9–10, 21–24 | Verknüpft „Dozentin"/Promotion direkt mit dem Beratungsangebot als Verkaufsargument | Grenzwertig — wird in Aufgabe 6 entschärft |
+
+Keine Treffer für „HSRW", „Rhein-Waal" oder „Hochschule" im Text selbst (nur im Bild).
+
+## M — Keine Projektmaterialien
+
+| Datei | Zeile | Text/Befund | Problem |
+|---|---|---|---|
+| `src/assets/images/workshop-1.jpg`, `workshop-2.jpeg` | Bilddatei | Aufnahmen von einer Projektveranstaltung | Bildmaterial ist faktisch Projektkontext, nicht eigene Beratungstätigkeit |
+
+Keine Textinhalte, PDFs oder Foliensätze aus dem Projekt im Repo gefunden.
+
+## N — Nachvollziehbarkeit
+
+Kein Text-Fund — wird durch `COMPLIANCE.md` und `CHANGELOG-legal.md` (Aufgabe 9) hergestellt.
+
+## Sonstiges geprüft, ohne Fund
+
+- `sitemap-index.xml` wird zur Buildzeit generiert (kein Region-Bezug in `astro.config.mjs`,
+  Filter schließt nur Impressum/Datenschutz aus)
+- `public/robots.txt` — kein Region-Bezug
+- `netlify.toml`, `DEPLOY.md`, `package.json` — kein Region-/Projekt-Bezug
+- JSON-LD ist bereits `@type: 'ProfessionalService'` (nicht `LocalBusiness`) —
+  Aufgabe 3 muss nur `areaServed` ändern, keinen Typwechsel vornehmen
+- Keine Fake-Testimonials, Kundenlogos oder erfundenen Zahlen gefunden (entspricht der
+  in `KIKONTEXT.md` dokumentierten Grundhaltung)
+- Keine wörtliche Alleinstellungsbehauptung wie „einzige Kombination aus…" im aktuellen
+  Code gefunden — Aufgabe 7 wird die Texte trotzdem auf ähnliche, schwächere Formulierungen
+  prüfen (z. B. Auszeichnung „Bester Master 2025", IHK-Zertifikat-Bezeichnung)
+
+---
+
+**Ich pausiere hier wie vereinbart.** Bevor ich mit Aufgabe 2 weitermache, brauche ich von
+dir eine Entscheidung zu den beiden Workshop-Fotos: löschen (Platzhalter erscheint dann
+automatisch, siehe `PlaceholderImage.astro`) oder durch neue, nicht-projektbezogene Fotos
+ersetzen, die du mir zur Verfügung stellst?

commit beee6a0dfdf13bfd96448b9f2e1b3e2284e8a8f0
Author: nina-nue <nina.karolin.nuechter@gmail.com>
Date:   Mon Aug 24 14:55:23 2026 +0200

    Leistungsportfolio neu geschnitten: deckungsgleiche Projektformate entfernt, Governance/Diagnostik/Coaching/Wirkung ausgebaut

diff --git a/src/components/ServicesGrid.astro b/src/components/ServicesGrid.astro
index f79ee7a..f063303 100644
--- a/src/components/ServicesGrid.astro
+++ b/src/components/ServicesGrid.astro
@@ -8,7 +8,7 @@ import { services } from '../data/services';
     <div class="max-w-2xl" data-reveal="rise">
       <p class="text-sm font-semibold uppercase tracking-wide text-accent-strong">Leistungen</p>
       <h2 id="leistungen-heading" class="mt-3 font-sans text-fluid-h2 text-primary-strong">
-        Neun Bausteine, ein Ziel
+        Klare Bausteine, ein Ziel
       </h2>
       <p class="mt-4 text-lg text-ink-soft">
         Jede Leistung lässt sich einzeln buchen oder in einem Paket kombinieren. Zum Aufklappen
diff --git a/src/data/faq.ts b/src/data/faq.ts
index 11f5006..a0161ef 100644
--- a/src/data/faq.ts
+++ b/src/data/faq.ts
@@ -5,14 +5,14 @@ export interface FaqItem {
 
 export const faq: FaqItem[] = [
   {
-    question: 'Lohnt sich KI für ein Unternehmen mit 30 oder weniger Mitarbeitenden?',
+    question: 'Lohnt sich eine psychologische KI-Diagnostik auch für kleinere Organisationen?',
     answer:
-      'Es kommt nicht auf die Größe des Unternehmens an, sondern auf die Prozesse. Ich habe mit kleinen Teams gearbeitet, bei denen sich ein einziger gut gewählter Use Case spürbar ausgezahlt hat, und mit größeren, bei denen die Analyse ergab: aktuell eher nicht. Ob KI für Ihr Unternehmen lohnenswert ist, klärt die Potenzialanalyse — bevor Ihr Geld in die falsche Richtung fließt.',
+      'Es kommt nicht auf die Größe der Organisation an, sondern auf die Situation im Team. Ich habe mit kleinen Teams gearbeitet, bei denen eine klare Diagnostik erhebliche Unsicherheit sichtbar gemacht hat, und mit größeren, bei denen sich zeigte: die Akzeptanz ist schon da. Was bei Ihnen tatsächlich ansteht, klärt ein Erstgespräch — bevor Ressourcen in die falsche Richtung fließen.',
   },
   {
-    question: 'Wir haben keine Datenbasis — geht das trotzdem?',
+    question: 'Wir haben keine ausführliche Datenbasis — geht datengestützte Beratung trotzdem?',
     answer:
-      'Ja. Viele der Use Cases, die im Alltag den größten Unterschied machen, brauchen keine große Datenbasis — Texterstellung, Recherche, interne Wissensarbeit. Wo Daten tatsächlich gebraucht werden und was realistisch ist, erläutere ich Ihnen klar und offen.',
+      'Ja. Viele der Fragestellungen, die im Alltag den größten Unterschied machen, brauchen keine große Datenbasis — Akzeptanz, Kommunikation und Wahrnehmung im Team lassen sich unabhängig von der Datenlage untersuchen. Wo Daten tatsächlich gebraucht werden und was realistisch ist, erläutere ich Ihnen klar und offen.',
   },
   {
     question: 'Was ist mit Datenschutz und dem EU AI Act?',
@@ -22,7 +22,7 @@ export const faq: FaqItem[] = [
   {
     question: 'Wie viel Zeit müssen wir intern investieren?',
     answer:
-      'Realistisch: mehr als eine Stunde, weniger als ein zweites Projekt nebenbei. Der genaue Umfang hängt vom gebuchten Paket ab und wird vorher klar benannt, nicht im Nachhinein nachverhandelt: bei KI-Start rund 5 Stunden für Orientierungsgespräch und Workshop, bei KI-Potenzial & Roadmap rund 8 bis 10 Stunden für Interviews und Abschlusspräsentation, bei KI-Einführung mit Akzeptanz rund 15 bis 20 Stunden über den gesamten Projektverlauf, verteilt auf mehrere Personen im Team.',
+      'Realistisch: mehr als eine Stunde, weniger als ein zweites Projekt nebenbei. Der genaue Umfang hängt vom gebuchten Paket ab und wird vorher klar benannt, nicht im Nachhinein nachverhandelt: beim KI-Governance-Paket rund 6 bis 8 Stunden für Workshop und Abstimmung, bei der KI-Akzeptanzdiagnostik & Führungscoaching rund 10 bis 12 Stunden für Erhebung und Coaching-Sitzungen, bei der KI-Wirkungsanalyse rund 6 bis 8 Stunden für Befragung und Ergebnisgespräch, verteilt auf mehrere Personen im Team.',
   },
   {
     question: 'Warum berät mich beim Thema KI eine Psychologin — welche Vorteile bringt das?',
diff --git a/src/data/phases.ts b/src/data/phases.ts
index e3fefdf..0045a83 100644
--- a/src/data/phases.ts
+++ b/src/data/phases.ts
@@ -8,26 +8,38 @@ export interface Phase {
 export const phases: Phase[] = [
   {
     number: '01',
-    title: 'Analyse',
-    summary: 'Wo steht das Unternehmen, wo liegt echtes Potenzial?',
-    details: ['Prozess-Mapping', 'Interviews mit Team und Führung', 'KI-Reife-Erhebung'],
+    title: 'Diagnostik',
+    summary: 'Wo Akzeptanz, Unsicherheit und Belastung im Team tatsächlich stehen.',
+    details: [
+      'Validierte psychologische Instrumente',
+      'Datengestützte Entscheidungsgrundlagen',
+      'Befragung von Team und Führung',
+    ],
   },
   {
     number: '02',
-    title: 'Strategie',
-    summary: 'Priorisierte Use Cases und ein Fahrplan, der zum Unternehmen passt.',
-    details: ['Priorisierte Use Cases', 'Roadmap', 'Entscheidungsgrundlagen für die Führung'],
+    title: 'Governance',
+    summary: 'Klare Regeln, Rollen und Leitlinien, orientiert an der KI-Verordnung.',
+    details: [
+      'Nutzungsrichtlinien',
+      'Rollen & Verantwortlichkeiten',
+      'Orientierung an EU AI Act und DSGVO',
+    ],
   },
   {
     number: '03',
-    title: 'Befähigung',
-    summary: 'Schulung und AI Literacy, zugeschnitten auf den Alltag im Unternehmen.',
-    details: ['Schulungen', 'Workshops', 'AI Literacy — nicht generisch, sondern konkret'],
+    title: 'Führung',
+    summary: 'Führungskräfte im Umgang mit KI-bedingter Verunsicherung im Team stärken.',
+    details: ['Coaching für Führungskräfte', 'Impulsvorträge', 'Kommunikation von Veränderung'],
   },
   {
     number: '04',
-    title: 'Verankerung',
-    summary: 'Damit es nach der Schulung nicht wieder einschläft.',
-    details: ['Change-Begleitung', 'Leitlinien', 'Wirkungsmessung'],
+    title: 'Wirkung',
+    summary: 'Was die Einführung tatsächlich bewirkt hat — sauber gemessen, nicht behauptet.',
+    details: [
+      'Wirkungsmessung & Evaluation',
+      'Change-Begleitung',
+      'Ergebnisberichte als Entscheidungsgrundlage',
+    ],
   },
 ];
diff --git a/src/data/pricing.ts b/src/data/pricing.ts
index 85cb484..d735ada 100644
--- a/src/data/pricing.ts
+++ b/src/data/pricing.ts
@@ -8,44 +8,50 @@ export interface PricePackage {
   highlighted: boolean;
 }
 
+/**
+ * ⚠️ PREIS-VORSCHLAG, NOCH NICHT BESTÄTIGT (Stand: rechtliche Überarbeitung 2026-08-24).
+ * Alle `price`-Felder in diesem Array sind Platzhalter-Vorschläge und müssen vor dem
+ * nächsten Deploy gegen die Angabe im Formular für das Personaldezernat abgeglichen und
+ * bestätigt werden. Siehe COMPLIANCE.md.
+ */
 export const packages: PricePackage[] = [
   {
-    slug: 'ki-start',
-    name: 'KI-Start',
-    price: '2.900 € netto',
-    audience: 'Für Unternehmen, die erste Orientierung brauchen.',
+    slug: 'ki-governance-paket',
+    name: 'KI-Governance-Paket',
+    price: '6.900 € netto (Preisvorschlag — noch zu bestätigen)',
+    audience: 'Für Organisationen, die klare Regeln brauchen, bevor KI-Tools flächendeckend genutzt werden.',
     modules: [
-      'Orientierungsgespräch (30 Min.)',
-      'KI-Kompass Workshop (halbtägig, bis 12 Teilnehmende)',
+      'Governance-Analyse & Rollen-Workshop',
+      'KI-Nutzungsrichtlinie',
+      'Umsetzungs-Fahrplan für die Pflichten aus der KI-Verordnung',
     ],
-    result: 'Erste Use-Case-Sammlung, Ergebnisprotokoll mit nächsten Schritten.',
+    result: 'Verabschiedete Nutzungsrichtlinie, klare Rollen, dokumentierte Grundlage für die Pflichten aus der KI-Verordnung.',
     highlighted: false,
   },
   {
-    slug: 'ki-potenzial-roadmap',
-    name: 'KI-Potenzial & Roadmap',
-    price: '7.900 € netto',
-    audience: 'Für Unternehmen, die konkret starten wollen.',
+    slug: 'ki-akzeptanzdiagnostik-fuehrungscoaching',
+    name: 'KI-Akzeptanzdiagnostik & Führungscoaching',
+    price: '9.800 € netto (Preisvorschlag — noch zu bestätigen)',
+    audience: 'Für Organisationen, die spüren, dass der Widerstand gegen KI nicht an der Technik liegt.',
     modules: [
-      'KI-Potenzialanalyse (3–5 Interviews, priorisierte Use-Case-Landkarte)',
-      'Roadmap für die nächsten 3 Monate',
+      'Diagnostik zu Akzeptanz, Unsicherheit und Belastung (validierte Instrumente)',
+      'Ergebnisbericht mit Handlungsempfehlungen',
+      'Coaching-Reihe für Führungskräfte (3 Sitzungen)',
     ],
-    result: 'Abschlusspräsentation mit priorisierten Use Cases und Fahrplan.',
+    result: 'Belastbares Bild der psychologischen Ausgangslage im Team plus begleitetes Coaching für die Führungsebene.',
     highlighted: true,
   },
   {
-    slug: 'ki-einfuehrung-akzeptanz',
-    name: 'KI-Einführung mit Akzeptanz',
-    price: '14.900 € netto',
-    audience:
-      'Für Unternehmen, die einen Piloten nicht nur testen, sondern zum Laufen bringen wollen.',
+    slug: 'ki-wirkungsanalyse',
+    name: 'KI-Wirkungsanalyse',
+    price: '5.400 € netto (Preisvorschlag — noch zu bestätigen)',
+    audience: 'Für Organisationen, die eine KI-Einführung bereits hinter sich haben und wissen wollen, was sie gebracht hat.',
     modules: [
-      'Potenzialanalyse light',
-      'Pilotdesign & -begleitung',
-      'Change- und Kommunikationsbegleitung',
-      'Wirkungsmessung',
+      'Festlegung von Erfolgskriterien',
+      'Befragung von Team und Führung',
+      'Ergebnisbericht als Entscheidungsgrundlage',
     ],
-    result: 'Getesteter Use Case, eingebundenes Team, Entscheidungsvorlage zur Skalierung.',
+    result: 'Ein verständlicher Bericht, der zeigt, was die KI-Einführung tatsächlich bewirkt hat — als Grundlage für die nächsten Schritte.',
     highlighted: false,
   },
 ];
@@ -57,15 +63,18 @@ export interface SingleModule {
 
 export const singleModules: SingleModule[] = [
   { name: 'Vortrag / Impuls', scope: '45–60 Minuten für Führungsrunden oder Fachveranstaltungen' },
-  { name: 'AI Literacy kompakt', scope: '2 Stunden online, bis 20 Personen' },
-  { name: 'KI-Kompass Workshop', scope: 'halbtägig, bis 12 Teilnehmende' },
-  { name: 'KI-Schulung & Enablement', scope: '1 Tag, bis 15 Teilnehmende' },
-  { name: 'Wirkungsmessung', scope: 'Erfolgskriterien, Befragung, Ergebnisbericht' },
+  {
+    name: 'KI-Akzeptanz- und Belastungsdiagnostik',
+    scope: '2–3 Wochen, validierte Instrumente, Ergebnisbericht',
+  },
+  {
+    name: 'Führungskräfte-Coaching bei KI-bedingter Verunsicherung',
+    scope: 'ab 3 Sitzungen à 60 Minuten',
+  },
   { name: 'Governance & KI-Leitlinien', scope: 'Nutzungsrichtlinie und Rollen' },
-  { name: 'KI-Potenzialanalyse', scope: '2–3 Wochen, priorisierte Use-Case-Landkarte' },
+  { name: 'Wirkungsmessung & Evaluation', scope: 'Erfolgskriterien, Befragung, Ergebnisbericht' },
   { name: 'Change-Begleitung', scope: '4–6 Wochen, Akzeptanz und Kommunikation' },
-  { name: 'KI-Strategie & Roadmap', scope: '4–6 Wochen, vollständiger Fahrplan' },
-  { name: 'Pilot- & Implementierungsbegleitung', scope: '6–8 Wochen, von Test zu Nutzung' },
+  { name: 'Datengestützte Entscheidungsberatung', scope: 'Umfang richtet sich nach der Datenlage' },
 ];
 
 export const pricingIntro =
diff --git a/src/data/problems.ts b/src/data/problems.ts
index 798c24d..6270ee1 100644
--- a/src/data/problems.ts
+++ b/src/data/problems.ts
@@ -5,9 +5,9 @@ export interface Problem {
 
 export const problems: Problem[] = [
   {
-    situation: 'Alle reden über KI, keiner weiß, wo anfangen.',
+    situation: 'Alle reden über KI, das Team reagiert mit Unsicherheit.',
     response:
-      'Eine KI-Potenzialanalyse entlang der tatsächlichen Prozesse in Ihrem Unternehmen — statt Tool-Empfehlungen von der Stange.',
+      'Eine psychologische Diagnostik zu Akzeptanz, Unsicherheit und Belastung im Team — mit validierten Instrumenten, bevor Ressourcen in die falsche Richtung fließen.',
   },
   {
     situation: 'Ein Tool wurde eingeführt. Genutzt wird es nicht.',
diff --git a/src/data/services.ts b/src/data/services.ts
index 275e06f..c261e24 100644
--- a/src/data/services.ts
+++ b/src/data/services.ts
@@ -1,84 +1,68 @@
 export interface Service {
   slug: string;
   title: string;
-  phase: 'Analyse' | 'Strategie' | 'Befähigung' | 'Verankerung';
+  phase: 'Diagnostik' | 'Governance' | 'Führung' | 'Wirkung';
   summary: string;
   description: string;
 }
 
 export const services: Service[] = [
   {
-    slug: 'ki-potenzialanalyse',
-    title: 'KI-Potenzialanalyse',
-    phase: 'Analyse',
+    slug: 'ki-akzeptanz-belastungsdiagnostik',
+    title: 'KI-Akzeptanz- und Belastungsdiagnostik',
+    phase: 'Diagnostik',
     summary:
-      'Wo im Unternehmen KI tatsächlich einen Unterschied macht — entlang der realen Prozesse, nicht entlang von Trendlisten.',
+      'Wie Ihr Team auf KI reagiert — gemessen mit validierten psychologischen Instrumenten, nicht erraten.',
     description:
-      'Ich schaue mir gemeinsam mit Ihnen die Prozesse an, die im Alltag tatsächlich Zeit oder Nerven kosten, und interviewe die Menschen, die darin arbeiten. Daraus entsteht eine priorisierte Landkarte möglicher Use Cases — mit realistischer Einschätzung von Aufwand und Wirkung, nicht mit der längsten Liste.',
+      'Ich erhebe systematisch, wie Akzeptanz, Unsicherheit und Belastung im Zusammenhang mit KI in Ihrem Unternehmen tatsächlich ausgeprägt sind — mit etablierten diagnostischen Instrumenten aus der Organisationspsychologie, nicht mit einer informellen Umfrage. Das Ergebnis ist ein belastbarer Ausgangsbefund mit Handlungsempfehlungen, auf dem weitere Schritte aufbauen können.',
   },
   {
-    slug: 'ki-strategie-roadmap',
-    title: 'KI-Strategie & Roadmap',
-    phase: 'Strategie',
-    summary: 'Ein Fahrplan mit klaren Prioritäten, Verantwortlichkeiten und Zeithorizont.',
-    description:
-      'Aus den priorisierten Use Cases wird ein Fahrplan: was zuerst angegangen wird, wer dafür zuständig ist, welche Ressourcen es braucht und woran der Erfolg gemessen wird. Die Roadmap ist eine Entscheidungsgrundlage für die Geschäftsführung, kein Strategiepapier für die Schublade.',
-  },
-  {
-    slug: 'change-begleitung',
-    title: 'Change-Begleitung bei KI-Einführung',
-    phase: 'Verankerung',
-    summary:
-      'Ob ein neues KI-Tool im Alltag ankommt, entscheidet selten die Technik — sondern ob das Team die Veränderung akzeptiert und mitträgt.',
+    slug: 'datengestuetzte-entscheidungsberatung',
+    title: 'Datengestützte Entscheidungsberatung',
+    phase: 'Diagnostik',
+    summary: 'Fundierte Entscheidungsgrundlagen statt Vermutungen.',
     description:
-      'Ein neues Tool ist schnell lizenziert. Ob es benutzt wird, entscheidet sich an anderer Stelle — an Unsicherheit, unklaren Erwartungen, fehlender Beteiligung. Ich begleite die Einführung so, dass das Team versteht, warum sich etwas ändert, und die Gelegenheit hat, Bedenken zu äußern, bevor sie zu stillem Widerstand werden.',
+      'Für Entscheidungen, die über den Bauch hinausgehen sollen, werte ich vorhandene Daten aus und bereite sie verständlich auf. Das Ergebnis ist eine Grundlage, mit der Sie tatsächlich argumentieren können.',
   },
   {
-    slug: 'ki-schulung-enablement',
-    title: 'KI-Schulung & Enablement / AI Literacy',
-    phase: 'Befähigung',
-    summary: 'Schulungen, die auf Ihr Unternehmen zugeschnitten sind, nicht von der Stange.',
+    slug: 'ki-governance-leitlinien',
+    title: 'KI-Governance & Leitlinien',
+    phase: 'Governance',
+    summary: 'Klare Regeln, Rollen und Leitlinien — mit Blick auf die Pflichten aus der KI-Verordnung.',
     description:
-      'Statt einer generischen Tool-Einführung arbeite ich mit den tatsächlichen Anwendungsfällen Ihres Teams: welche Aufgaben, welche Daten, welche Grenzen. Ziel ist ein sicherer, kompetenter Umgang mit KI im Arbeitsalltag — inklusive der Frage, wo man ihr besser nicht vertraut.',
+      'Wer darf welche KI-Tools mit welchen Daten nutzen? Wer entscheidet über neue Anwendungsfälle? Ich erarbeite mit Ihnen eine Nutzungsrichtlinie und Rollenverteilung, die zu den Pflichten aus der EU-KI-Verordnung und zur DSGVO passt und praxistauglich ist. Ich unterstütze Sie dabei, die Anforderungen zu verstehen und organisatorisch umzusetzen — eine Rechtsberatung im Einzelfall ersetzt das nicht, und ich stelle keine Konformitätsbescheinigungen aus.',
   },
   {
-    slug: 'governance-ki-leitlinien',
-    title: 'Governance & KI-Leitlinien',
-    phase: 'Verankerung',
-    summary: 'Klare Regeln, Rollen und Leitlinien, orientiert an EU AI Act und DSGVO.',
+    slug: 'fuehrungskraefte-coaching',
+    title: 'Führungskräfte-Coaching bei KI-bedingter Verunsicherung',
+    phase: 'Führung',
+    summary: 'Begleitung für Führungskräfte, deren Teams auf KI mit Unsicherheit reagieren.',
     description:
-      'Wer darf welche KI-Tools mit welchen Daten nutzen? Wer entscheidet über neue Anwendungsfälle? Ich erarbeite mit Ihnen eine Nutzungsrichtlinie und Rollenverteilung, die zur Unternehmensgröße passt und praxistauglich ist — kein Regelwerk, das niemand liest.',
+      'Führungskräfte stehen bei der KI-Einführung oft zwischen den Erwartungen der Geschäftsführung und der Verunsicherung im eigenen Team. Im Coaching arbeite ich mit einzelnen Führungskräften oder kleinen Führungsrunden daran, wie sie Veränderung glaubwürdig kommunizieren, mit Widerstand umgehen und die eigene Unsicherheit nicht ungefiltert an das Team weitergeben.',
   },
   {
-    slug: 'pilot-implementierungsbegleitung',
-    title: 'Pilot- & Implementierungsbegleitung',
-    phase: 'Verankerung',
-    summary: 'Von der Testphase zur tatsächlichen Nutzung im Arbeitsalltag.',
+    slug: 'vortrag-impuls',
+    title: 'Vortrag / Impuls',
+    phase: 'Führung',
+    summary: '45 bis 60 Minuten für Führungsrunden oder Fachveranstaltungen.',
     description:
-      'Ein Pilotprojekt ist mehr als ein technischer Test. Ich begleite Auswahl, Durchführung und Auswertung eines Piloten so, dass am Ende eine belastbare Entscheidung steht: skalieren, anpassen oder lassen — mit einem Team, das den Prozess mitgetragen hat.',
+      'Ein Impulsvortrag zu KI aus organisationspsychologischer Perspektive: warum Technik allein selten reicht, was Akzeptanz tatsächlich herstellt, welche Fehler sich wiederholen. Für Führungskreise, Betriebsversammlungen oder Fachveranstaltungen.',
   },
   {
     slug: 'wirkungsmessung',
-    title: 'Wirkungsmessung',
-    phase: 'Verankerung',
-    summary: 'Was hat es gebracht? Mit sauberer Methodik beantwortet, nicht mit Bauchgefühl.',
+    title: 'Wirkungsmessung & Evaluation von KI-Einführungen',
+    phase: 'Wirkung',
+    summary: 'Was eine KI-Einführung tatsächlich gebracht hat — mit sauberer Methodik beantwortet.',
     description:
-      'Vor der Einführung legen wir gemeinsam fest, woran Erfolg erkennbar sein soll. Nach der Einführung erhebe ich diese Kriterien systematisch — durch Befragung und Auswertung — und fasse die Ergebnisse in einem verständlichen Bericht zusammen, der als Entscheidungsgrundlage für die nächsten Schritte dient.',
+      'Vor oder nach der Einführung legen wir gemeinsam fest, woran Erfolg erkennbar sein soll. Ich erhebe diese Kriterien systematisch — durch Befragung und Auswertung — und fasse die Ergebnisse in einem verständlichen Bericht zusammen, der als Entscheidungsgrundlage für die nächsten Schritte dient.',
   },
   {
-    slug: 'datengestuetzte-entscheidungsberatung',
-    title: 'Datengestützte Entscheidungsberatung',
-    phase: 'Analyse',
-    summary: 'Fundierte Entscheidungsgrundlagen statt Vermutungen.',
-    description:
-      'Für Entscheidungen, die über den Bauch hinausgehen sollen, werte ich vorhandene Daten aus und bereite sie verständlich auf. Das Ergebnis ist eine Grundlage, mit der Sie tatsächlich argumentieren können.',
-  },
-  {
-    slug: 'vortrag-impuls',
-    title: 'Vortrag / Impuls',
-    phase: 'Befähigung',
-    summary: '45 bis 60 Minuten für Führungsrunden oder Fachveranstaltungen.',
+    slug: 'change-begleitung',
+    title: 'Change-Begleitung bei KI-Einführung',
+    phase: 'Wirkung',
+    summary:
+      'Ob ein neues KI-Tool im Alltag ankommt, entscheidet selten die Technik — sondern ob das Team die Veränderung akzeptiert und mitträgt.',
     description:
-      'Ein Impulsvortrag zu KI-Einführung aus organisationspsychologischer Perspektive: warum Technik allein selten reicht, was Akzeptanz tatsächlich herstellt, welche Fehler sich wiederholen. Für Führungskreise, Betriebsversammlungen oder Fachveranstaltungen.',
+      'Ein neues Tool ist schnell lizenziert. Ob es benutzt wird, entscheidet sich an anderer Stelle — an Unsicherheit, unklaren Erwartungen, fehlender Beteiligung. Ich begleite die Einführung so, dass das Team versteht, warum sich etwas ändert, und die Gelegenheit hat, Bedenken zu äußern, bevor sie zu stillem Widerstand werden.',
   },
 ];
diff --git a/src/pages/leistungen/index.astro b/src/pages/leistungen/index.astro
index 1f9b9ec..17f19b1 100644
--- a/src/pages/leistungen/index.astro
+++ b/src/pages/leistungen/index.astro
@@ -6,7 +6,7 @@ import { phases } from '../../data/phases';
 
 const title = 'Leistungen im Detail — KI-Beratung von Nina Karolin Nüchter';
 const description =
-  'Alle Leistungen im Überblick: KI-Potenzialanalyse, Strategie & Roadmap, Change-Begleitung, Schulung, Governance, Pilotbegleitung, Wirkungsmessung und mehr — zugeordnet zu den vier Phasen der Zusammenarbeit.';
+  'Alle Leistungen im Überblick: Psychologische Diagnostik, Governance & Leitlinien, Führungskräfte-Coaching, Wirkungsmessung und mehr — zugeordnet zu den vier Phasen der Zusammenarbeit.';
 
 const grouped = phases.map((phase) => ({
   phase,

commit c00a3716c59e0cdab134046d83b1c2f77ad7fa82
Author: nina-nue <nina.karolin.nuechter@gmail.com>
Date:   Mon Aug 24 14:59:03 2026 +0200

    Zielgruppe und Region umgeschrieben: bundesweit/DACH statt Duisburg/Niederrhein/NRW, JSON-LD areaServed angepasst

diff --git a/src/components/Footer.astro b/src/components/Footer.astro
index 116f85c..d2869b2 100644
--- a/src/components/Footer.astro
+++ b/src/components/Footer.astro
@@ -10,9 +10,6 @@ const year = new Date().getFullYear();
       <div>
         <p class="font-sans text-lg text-primary-strong">{site.name}</p>
         <p class="mt-2 max-w-sm text-sm text-ink-soft">{site.claim}</p>
-        <p class="mt-4 text-sm text-ink-muted">
-          {site.address.city} · {site.address.region}
-        </p>
       </div>
 
       <nav aria-label="Rechtliches" class="flex flex-col gap-2 text-sm sm:items-end">
diff --git a/src/components/Hero.astro b/src/components/Hero.astro
index cfeec78..6135fc6 100644
--- a/src/components/Hero.astro
+++ b/src/components/Hero.astro
@@ -73,7 +73,7 @@ const hero = images['/src/assets/images/Gemini_Generated_Image_pmolq9pmolq9pmol.
   >
     <p class="flex items-center gap-4 text-[0.8rem] font-semibold uppercase tracking-[0.18em] text-accent-strong">
       <span aria-hidden="true" class="h-px w-8 bg-accent-strong opacity-60 sm:w-16" />
-      KI-Beratung für den Mittelstand
+      KI-Beratung für Organisationen
       <span aria-hidden="true" class="h-px w-8 bg-accent-strong opacity-60 sm:w-16" />
     </p>
 
@@ -85,9 +85,9 @@ const hero = images['/src/assets/images/Gemini_Generated_Image_pmolq9pmolq9pmol.
     </h1>
 
     <p class="mt-7 max-w-[56ch] text-pretty text-lg leading-relaxed text-ink-on-primary/90 sm:text-xl">
-      Sondern daran, dass sie im Alltag nicht ankommt. Ich begleite mittelständische Unternehmen
-      dabei, KI so einzuführen, dass das Team sie tatsächlich nutzt — mit dem Blick einer
-      Organisationspsychologin.
+      Sondern daran, dass Teams sie nicht mittragen. Ich unterstütze Organisationen mit
+      psychologischer Diagnostik, Governance und Führungskräfte-Coaching, damit KI-Vorhaben im
+      Alltag tragfähig werden — mit dem Blick einer Organisationspsychologin.
     </p>
 
     <div class="mt-10 flex w-full max-w-[340px] flex-col items-center gap-4 sm:w-auto sm:max-w-none sm:flex-row sm:justify-center">
diff --git a/src/components/ProblemBlocks.astro b/src/components/ProblemBlocks.astro
index 6afaedb..0731faa 100644
--- a/src/components/ProblemBlocks.astro
+++ b/src/components/ProblemBlocks.astro
@@ -4,7 +4,7 @@ import { problems } from '../data/problems';
 
 <section class="bg-surface-alt" aria-labelledby="probleme-heading">
   <div class="section-pad mx-auto max-w-(--container-max) px-4 sm:px-6">
-    <h2 id="probleme-heading" class="sr-only">Typische Situationen im Mittelstand</h2>
+    <h2 id="probleme-heading" class="sr-only">Typische Situationen in Organisationen</h2>
     <div class="grid gap-6 sm:grid-cols-2">
       {
         problems.map((problem) => (
diff --git a/src/data/site.ts b/src/data/site.ts
index 42befc5..1bb5792 100644
--- a/src/data/site.ts
+++ b/src/data/site.ts
@@ -8,9 +8,9 @@ export const site = {
   // Impressum, Rechtstexte, Meta-Titel und JSON-LD maßgeblich.
   shortName: 'Nina K. Nüchter',
   title: 'Nina Karolin Nüchter — KI-Beratung mit Organisationspsychologie',
-  claim: 'KI-Beratung für den Mittelstand — mit dem Blick der Organisationspsychologie.',
+  claim: 'KI-Beratung für Organisationen — mit dem Blick der Organisationspsychologie.',
   description:
-    'KI-Beratung für Unternehmen im Mittelstand: Potenzialanalyse, Strategie, Schulung und Change-Begleitung, damit KI im Alltag tatsächlich ankommt. Standort Duisburg, Niederrhein, NRW.',
+    'KI-Beratung für Unternehmen und Organisationen: Governance, psychologische Diagnostik, Führungskräfte-Coaching und Wirkungsmessung, damit KI-Vorhaben im Alltag tatsächlich tragen. Bundesweit, remote-first.',
   url: import.meta.env.PUBLIC_SITE_URL || 'https://www.nina-nuechter.de',
   locale: 'de_DE',
   email: 'n.nuechter@nknoffice.eu',
@@ -28,7 +28,7 @@ export const site = {
     country: 'DE',
     countryName: 'Deutschland',
   },
-  areaServed: ['Duisburg', 'Niederrhein', 'Nordrhein-Westfalen'],
+  areaServed: ['Deutschland', 'Österreich', 'Schweiz'],
   calendlyUrl: 'https://calendly.com/nina-karolin-nuechter/30min',
   linkedinUrl: 'https://www.linkedin.com/in/nina-nuechter/',
   jobTitle: 'Organisationspsychologin, KI-Beraterin',
diff --git a/src/pages/ueber-mich.astro b/src/pages/ueber-mich.astro
index 2877b08..772db6b 100644
--- a/src/pages/ueber-mich.astro
+++ b/src/pages/ueber-mich.astro
@@ -7,7 +7,7 @@ import { buildPersonSchema } from '../lib/structuredData';
 
 const title = 'Über mich — Nina Karolin Nüchter';
 const description =
-  'Organisationspsychologin, Dozentin und Doktorandin zum Thema KI und Wohlbefinden im Arbeitskontext. KI-Beratung für den Mittelstand mit dem Blick der Organisationspsychologie, Standort Duisburg.';
+  'Organisationspsychologin. KI-Beratung für Organisationen mit dem Blick der Organisationspsychologie und psychologischer Diagnostik — bundesweit, remote-first.';
 const jsonLd = [buildPersonSchema()];
 ---
 
@@ -20,9 +20,8 @@ const jsonLd = [buildPersonSchema()];
       </h1>
       <p class="mt-5 max-w-2xl text-lg text-ink-soft">
         M.Sc. International Management & Psychology mit Schwerpunkt Arbeits- und
-        Organisationspsychologie, zertifiziert in „Digitale Innovation und KI-Anwendung" (IHK),
-        Dozentin, Doktorandin zum Thema Unsicherheit und Wohlbefinden im Arbeitskontext in Bezug auf
-        KI. Standort Duisburg, Niederrhein.
+        Organisationspsychologie, zertifiziert in „Digitale Innovation und KI-Anwendung" (IHK).
+        Beratung bundesweit, remote-first.
       </p>
       <p class="mt-4 max-w-2xl text-lg text-ink-soft">
         Zur KI-Beratung bin ich nicht über die Technik gekommen, sondern über die Frage, wie

commit 90e38162eef32848d3cfb88d677c6658333dab35
Author: nina-nue <nina.karolin.nuechter@gmail.com>
Date:   Mon Aug 24 15:08:06 2026 +0200

    Transparenzseite /transparenz angelegt und im Footer verlinkt

diff --git a/src/data/site.ts b/src/data/site.ts
index 1bb5792..5a42ede 100644
--- a/src/data/site.ts
+++ b/src/data/site.ts
@@ -44,6 +44,7 @@ export const nav = [
 ] as const;
 
 export const footerLegalNav = [
+  { label: 'Transparenz', href: '/transparenz' },
   { label: 'Impressum', href: '/impressum' },
   { label: 'Datenschutz', href: '/datenschutz' },
 ] as const;
diff --git a/src/pages/transparenz.astro b/src/pages/transparenz.astro
new file mode 100644
index 0000000..eaf51cb
--- /dev/null
+++ b/src/pages/transparenz.astro
@@ -0,0 +1,86 @@
+---
+import BaseLayout from '../layouts/BaseLayout.astro';
+import { site } from '../data/site';
+
+const title = 'Transparenz — Nina Karolin Nüchter';
+const description =
+  'Wie dieses Beratungsangebot zu meiner hauptberuflichen Tätigkeit steht, und was das für Unternehmen aus bestimmten Regionen bedeutet.';
+---
+
+<BaseLayout title={title} description={description}>
+  <section class="bg-surface">
+    <div class="mx-auto max-w-(--container-narrow) px-4 py-16 sm:px-6 sm:py-20">
+      <p class="text-sm font-semibold uppercase tracking-wide text-accent-strong">Transparenz</p>
+      <h1 class="mt-3 font-sans text-4xl text-primary-strong">
+        Wie dieses Angebot zu meiner Haupttätigkeit steht
+      </h1>
+      <p class="mt-5 max-w-2xl text-lg text-ink-soft">
+        Diese Seite legt offen, wie mein Beratungsangebot zu meiner hauptberuflichen Tätigkeit
+        steht — damit das für Sie als Interessentin oder Interessent und für mich selbst
+        jederzeit nachvollziehbar bleibt.
+      </p>
+
+      <div class="prose-legal mt-10 space-y-8 text-ink-soft">
+        <div>
+          <h2 class="font-sans text-xl text-primary-strong">Hauptberufliche Tätigkeit</h2>
+          <p class="mt-3">
+            Ich arbeite hauptberuflich in Teilzeit als wissenschaftliche Mitarbeiterin an einer
+            Hochschule, in einem öffentlich geförderten Forschungs- und Transferprojekt zum Thema
+            Künstliche Intelligenz in kleinen und mittleren Unternehmen. Dieses Beratungsangebot
+            ist davon vollständig getrennt: anderer Auftraggeber, andere Zielgruppe, anderer
+            rechtlicher Rahmen.
+          </p>
+        </div>
+
+        <div>
+          <h2 class="font-sans text-xl text-primary-strong">Diese Website ist ein privates Angebot</h2>
+          <p class="mt-3">
+            Für dieses Angebot trete ich ausschließlich als Privatperson auf. Ich nutze dafür
+            keine Ressourcen, Materialien, Räume oder Kontakte meines Arbeitgebers, und ich bin
+            ausschließlich außerhalb meiner Arbeitszeit dafür tätig.
+          </p>
+        </div>
+
+        <div>
+          <h2 class="font-sans text-xl text-primary-strong">
+            Regionale Einschränkung bis Ende 2028
+          </h2>
+          <p class="mt-3">
+            Um jeden Interessenkonflikt mit meiner hauptberuflichen Tätigkeit zu vermeiden, nehme
+            ich Unternehmen mit Sitz in Duisburg, im Kreis Wesel oder im Kreis Kleve bis zum
+            31. Dezember 2028 nicht als Kundinnen oder Kunden für dieses Angebot an.
+          </p>
+        </div>
+
+        <div>
+          <h2 class="font-sans text-xl text-primary-strong">
+            Kostenfreies Angebot für diese Region
+          </h2>
+          <p class="mt-3">
+            Für Unternehmen aus Duisburg, dem Kreis Wesel und dem Kreis Kleve gibt es in diesem
+            Zeitraum ein kostenfreies, öffentlich gefördertes Beratungsangebot zum Thema KI, auf
+            das ich an dieser Stelle ausdrücklich hinweisen möchte:{' '}
+            <a
+              href="https://linktr.ee/KIfuerKMU"
+              target="_blank"
+              rel="noopener noreferrer"
+              class="underline underline-offset-2 hover:text-primary"
+            >
+              linktr.ee/KIfuerKMU
+            </a>. Dieser Hinweis ist ein Service für Interessentinnen und Interessenten aus der
+            Region — keine Referenz und keine Empfehlung in eigener Sache.
+          </p>
+        </div>
+
+        <div>
+          <p class="mt-3">
+            Bei Fragen zu dieser Seite erreichen Sie mich unter{' '}
+            <a href={`mailto:${site.email}`} class="underline underline-offset-2 hover:text-primary"
+              >{site.email}</a
+            >.
+          </p>
+        </div>
+      </div>
+    </div>
+  </section>
+</BaseLayout>

commit 508b48468d7d2494b2f038feee0377778edfd29c
Author: nina-nue <nina.karolin.nuechter@gmail.com>
Date:   Mon Aug 24 15:25:07 2026 +0200

    Regionsabfrage in Kontaktformular und Terminbuchung: Duisburg/Kreis Wesel/Kreis Kleve blockiert Absenden bzw. Buchungs-Button, mit Hinweis auf Transparenzseite und Foerderangebot

diff --git a/src/components/CalendlyEmbed.astro b/src/components/CalendlyEmbed.astro
index 952390c..5193fb9 100644
--- a/src/components/CalendlyEmbed.astro
+++ b/src/components/CalendlyEmbed.astro
@@ -8,12 +8,52 @@
  * Calendly-Skript wird erst nach ausdrücklicher Zustimmung geladen (Klick
  * auf „Calendly laden") — nicht automatisch, da Calendly Cookies setzt und
  * Daten in die USA überträgt.
+ *
+ * Regionsabfrage (Compliance, siehe /transparenz): Der Buchungsschritt ist einer
+ * Pflichtabfrage zur Unternehmensregion vorgeschaltet. Bei Duisburg, Kreis Wesel
+ * oder Kreis Kleve bleibt „Calendly laden" verborgen, stattdessen erscheint ein
+ * Hinweis auf das kostenfreie regionale Angebot.
  */
 import { site } from '../data/site';
 ---
 
 <div id="calendly-slot" class="rounded-lg border border-border bg-surface-alt p-6">
-  <div id="calendly-placeholder">
+  <div id="calendly-region-gate">
+    <label for="calendly-region" class="block text-sm font-medium text-ink"
+      >In welcher Region ist Ihr Unternehmen ansässig? *</label
+    >
+    <select
+      id="calendly-region"
+      required
+      class="mt-1.5 w-full rounded-md border border-border bg-surface-raised px-4 py-2.5 text-ink transition-colors focus:border-primary"
+    >
+      <option value="">Bitte wählen</option>
+      <option value="duisburg">Duisburg</option>
+      <option value="kreis-wesel">Kreis Wesel</option>
+      <option value="kreis-kleve">Kreis Kleve</option>
+      <option value="andere">Andere Region</option>
+    </select>
+  </div>
+
+  <div id="calendly-blocked-notice" class="mt-4 hidden text-sm text-ink-soft">
+    <p>
+      Für Unternehmen aus dieser Region nehme ich aktuell keine Aufträge an — mehr dazu auf der{' '}
+      <a href="/transparenz" class="underline underline-offset-2 hover:text-primary">
+        Transparenz-Seite
+      </a>. Es gibt für diese Region ein kostenfreies, öffentlich gefördertes Beratungsangebot zum
+      Thema KI:{' '}
+      <a
+        href="https://linktr.ee/KIfuerKMU"
+        target="_blank"
+        rel="noopener noreferrer"
+        class="underline underline-offset-2 hover:text-primary"
+      >
+        linktr.ee/KIfuerKMU
+      </a>.
+    </p>
+  </div>
+
+  <div id="calendly-placeholder" class="mt-4 hidden">
     <p class="text-sm text-ink-soft">
       Für die Terminbuchung wird Calendly geladen. Dabei werden Daten an Calendly, USA, übertragen.
     </p>
@@ -39,6 +79,24 @@ import { site } from '../data/site';
 </div>
 
 <script define:vars={{ calendlyUrl: site.calendlyUrl }} is:inline>
+  const calendlyRegion = document.getElementById('calendly-region');
+  const calendlyBlockedNotice = document.getElementById('calendly-blocked-notice');
+  const calendlyPlaceholder = document.getElementById('calendly-placeholder');
+  const blockedCalendlyRegions = new Set(['duisburg', 'kreis-wesel', 'kreis-kleve']);
+
+  function updateCalendlyRegionGate() {
+    const value = calendlyRegion?.value ?? '';
+    const blocked = blockedCalendlyRegions.has(value);
+    const chosen = value !== '';
+    calendlyBlockedNotice?.classList.toggle('hidden', !blocked);
+    calendlyPlaceholder?.classList.toggle('hidden', !(chosen && !blocked));
+  }
+
+  calendlyRegion?.addEventListener('change', updateCalendlyRegionGate);
+  updateCalendlyRegionGate();
+
+  // Das Calendly-Skript wird ausschließlich durch diesen Klick nachgeladen — vorher fließen
+  // keine Daten an Calendly. Der Button ist erst nach Wahl einer nicht gesperrten Region sichtbar.
   document.getElementById('load-calendly')?.addEventListener('click', () => {
     const placeholder = document.getElementById('calendly-placeholder');
     const widget = document.getElementById('calendly-inline-widget');
diff --git a/src/components/ContactForm.astro b/src/components/ContactForm.astro
index 61664cc..66ed8d9 100644
--- a/src/components/ContactForm.astro
+++ b/src/components/ContactForm.astro
@@ -67,59 +67,103 @@ const web3formsKey = import.meta.env.PUBLIC_WEB3FORMS_KEY ?? '';
         class="mt-1.5 w-full rounded-md border border-border bg-surface-raised px-4 py-2.5 text-ink placeholder:text-ink-muted transition-colors focus:border-primary"
       />
     </div>
-  </div>
-
-  <div>
-    <label for="message" class="block text-sm font-medium text-ink">Nachricht *</label>
-    <textarea
-      id="message"
-      name="message"
-      rows="5"
-      required
-      class="mt-1.5 w-full rounded-md border border-border bg-surface-raised px-4 py-2.5 text-ink placeholder:text-ink-muted transition-colors focus:border-primary"
-    ></textarea>
-    <p class="mt-1 hidden text-sm text-error" data-error-for="message">
-      Bitte teilen Sie mir kurz Ihr Anliegen mit.
-    </p>
-  </div>
 
-  <div>
-    <div class="flex items-start gap-3">
-      <input
-        type="checkbox"
-        id="consent"
-        name="consent"
+    <div class="sm:col-span-2">
+      <label for="region" class="block text-sm font-medium text-ink"
+        >In welcher Region ist Ihr Unternehmen ansässig? *</label
+      >
+      <select
+        id="region"
+        name="region"
         required
-        class="mt-1 h-4 w-4 shrink-0 accent-[var(--color-primary)]"
-      />
-      <label for="consent" class="text-sm text-ink-soft">
-        Ich habe die <a href="/datenschutz" class="underline underline-offset-2 hover:text-primary"
-          >Datenschutzerklärung</a
-        > gelesen und stimme der Verarbeitung meiner Daten zu Kontaktzwecken zu. *
-      </label>
+        class="mt-1.5 w-full rounded-md border border-border bg-surface-raised px-4 py-2.5 text-ink transition-colors focus:border-primary"
+      >
+        <option value="">Bitte wählen</option>
+        <option value="duisburg">Duisburg</option>
+        <option value="kreis-wesel">Kreis Wesel</option>
+        <option value="kreis-kleve">Kreis Kleve</option>
+        <option value="andere">Andere Region</option>
+      </select>
+      <p class="mt-1 hidden text-sm text-error" data-error-for="region">
+        Bitte wählen Sie eine Region aus.
+      </p>
     </div>
-    <p class="mt-1 hidden text-sm text-error" data-error-for="consent">
-      Bitte stimmen Sie der Datenverarbeitung zu, damit ich antworten kann.
-    </p>
   </div>
 
   <div
-    id="form-status"
-    role="status"
-    aria-live="polite"
-    class="hidden rounded-md border p-4 text-sm"
+    id="region-blocked-notice"
+    class="hidden rounded-md border border-border bg-surface-alt p-4 text-sm text-ink-soft"
   >
+    <p>
+      Für Unternehmen aus dieser Region nehme ich aktuell keine Aufträge an — mehr dazu auf der{' '}
+      <a href="/transparenz" class="underline underline-offset-2 hover:text-primary">
+        Transparenz-Seite
+      </a>. Es gibt für diese Region ein kostenfreies, öffentlich gefördertes Beratungsangebot zum
+      Thema KI:{' '}
+      <a
+        href="https://linktr.ee/KIfuerKMU"
+        target="_blank"
+        rel="noopener noreferrer"
+        class="underline underline-offset-2 hover:text-primary"
+      >
+        linktr.ee/KIfuerKMU
+      </a>.
+    </p>
   </div>
 
-  <div class="flex flex-wrap items-center gap-4">
-    <button
-      type="submit"
-      id="submit-button"
-      class="btn-primary inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
+  <div id="form-fields-below-region" class="space-y-5">
+    <div>
+      <label for="message" class="block text-sm font-medium text-ink">Nachricht *</label>
+      <textarea
+        id="message"
+        name="message"
+        rows="5"
+        required
+        class="mt-1.5 w-full rounded-md border border-border bg-surface-raised px-4 py-2.5 text-ink placeholder:text-ink-muted transition-colors focus:border-primary"
+      ></textarea>
+      <p class="mt-1 hidden text-sm text-error" data-error-for="message">
+        Bitte teilen Sie mir kurz Ihr Anliegen mit.
+      </p>
+    </div>
+
+    <div>
+      <div class="flex items-start gap-3">
+        <input
+          type="checkbox"
+          id="consent"
+          name="consent"
+          required
+          class="mt-1 h-4 w-4 shrink-0 accent-[var(--color-primary)]"
+        />
+        <label for="consent" class="text-sm text-ink-soft">
+          Ich habe die <a href="/datenschutz" class="underline underline-offset-2 hover:text-primary"
+            >Datenschutzerklärung</a
+          > gelesen und stimme der Verarbeitung meiner Daten zu Kontaktzwecken zu. *
+        </label>
+      </div>
+      <p class="mt-1 hidden text-sm text-error" data-error-for="consent">
+        Bitte stimmen Sie der Datenverarbeitung zu, damit ich antworten kann.
+      </p>
+    </div>
+
+    <div
+      id="form-status"
+      role="status"
+      aria-live="polite"
+      class="hidden rounded-md border p-4 text-sm"
     >
-      <span data-button-label>Nachricht senden</span>
-    </button>
-    <p class="text-xs text-ink-muted">* Pflichtfelder</p>
+    </div>
+
+    <div class="flex flex-wrap items-center gap-4">
+      <button
+        type="submit"
+        id="submit-button"
+        class="btn-primary inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
+      >
+        <span data-button-label>Nachricht senden</span>
+      </button>
+      <p class="text-xs text-ink-muted">* Pflichtfelder</p>
+    </div>
   </div>
 </form>
 
@@ -129,11 +173,29 @@ const web3formsKey = import.meta.env.PUBLIC_WEB3FORMS_KEY ?? '';
   const submitButton = document.getElementById('submit-button') as HTMLButtonElement | null;
   const buttonLabel = submitButton?.querySelector('[data-button-label]');
 
+  const regionSelect = document.getElementById('region') as HTMLSelectElement | null;
+  const blockedNotice = document.getElementById('region-blocked-notice');
+  const fieldsBelowRegion = document.getElementById('form-fields-below-region');
+  const blockedRegions = new Set(['duisburg', 'kreis-wesel', 'kreis-kleve']);
+
+  function isRegionBlocked(): boolean {
+    return Boolean(regionSelect && blockedRegions.has(regionSelect.value));
+  }
+
+  function updateRegionGate() {
+    const blocked = isRegionBlocked();
+    blockedNotice?.classList.toggle('hidden', !blocked);
+    fieldsBelowRegion?.classList.toggle('hidden', blocked);
+  }
+
+  regionSelect?.addEventListener('change', updateRegionGate);
+  updateRegionGate();
+
   if (form && statusBox && submitButton && buttonLabel) {
     const mailtoTarget = form.dataset.mailtoTarget ?? '';
     let isSubmitting = false;
 
-    const requiredFields = ['name', 'email', 'message', 'consent'];
+    const requiredFields = ['name', 'email', 'region', 'message', 'consent'];
 
     function clearErrors() {
       form?.querySelectorAll('[data-error-for]').forEach((el) => el.classList.add('hidden'));
@@ -168,6 +230,12 @@ const web3formsKey = import.meta.env.PUBLIC_WEB3FORMS_KEY ?? '';
         valid = false;
       }
 
+      // Zweite Absicherung neben dem UI-Gate: Ein Absenden mit gesperrter Region
+      // wird auch dann verhindert, wenn die versteckten Felder technisch mitgeschickt würden.
+      if (isRegionBlocked()) {
+        valid = false;
+      }
+
       return valid;
     }
 
diff --git a/src/components/ContactSection.astro b/src/components/ContactSection.astro
index b08f6d3..0b853e7 100644
--- a/src/components/ContactSection.astro
+++ b/src/components/ContactSection.astro
@@ -51,11 +51,49 @@ import { Mail, Calendar } from '@lucide/astro';
             </a>
             ).
           </p>
+
+          <div class="mt-4">
+            <label for="booking-region" class="block text-sm font-medium text-ink"
+              >In welcher Region ist Ihr Unternehmen ansässig? *</label
+            >
+            <select
+              id="booking-region"
+              required
+              class="mt-1.5 w-full rounded-md border border-border bg-surface-raised px-4 py-2.5 text-ink transition-colors focus:border-primary"
+            >
+              <option value="">Bitte wählen</option>
+              <option value="duisburg">Duisburg</option>
+              <option value="kreis-wesel">Kreis Wesel</option>
+              <option value="kreis-kleve">Kreis Kleve</option>
+              <option value="andere">Andere Region</option>
+            </select>
+          </div>
+
+          <div id="booking-blocked-notice" class="mt-4 hidden text-sm text-ink-soft">
+            <p>
+              Für Unternehmen aus dieser Region nehme ich aktuell keine Aufträge an — mehr dazu
+              auf der{' '}
+              <a href="/transparenz" class="underline underline-offset-2 hover:text-primary">
+                Transparenz-Seite
+              </a>. Es gibt für diese Region ein kostenfreies, öffentlich gefördertes
+              Beratungsangebot zum Thema KI:{' '}
+              <a
+                href="https://linktr.ee/KIfuerKMU"
+                target="_blank"
+                rel="noopener noreferrer"
+                class="underline underline-offset-2 hover:text-primary"
+              >
+                linktr.ee/KIfuerKMU
+              </a>.
+            </p>
+          </div>
+
           <a
             href={site.calendlyUrl}
             target="_blank"
             rel="noopener noreferrer"
-            class="btn-primary mt-4 inline-block px-5 py-2.5 text-sm"
+            id="booking-cta"
+            class="btn-primary mt-4 hidden px-5 py-2.5 text-sm"
           >
             Termin direkt buchen
           </a>
@@ -73,3 +111,21 @@ import { Mail, Calendar } from '@lucide/astro';
   ...
   <CalendlyEmbed />  statt des Buttons oben einsetzen.
 -->
+
+<script>
+  const bookingRegion = document.getElementById('booking-region') as HTMLSelectElement | null;
+  const bookingCta = document.getElementById('booking-cta');
+  const bookingBlockedNotice = document.getElementById('booking-blocked-notice');
+  const blockedBookingRegions = new Set(['duisburg', 'kreis-wesel', 'kreis-kleve']);
+
+  function updateBookingGate() {
+    const value = bookingRegion?.value ?? '';
+    const blocked = blockedBookingRegions.has(value);
+    const chosen = value !== '';
+    bookingBlockedNotice?.classList.toggle('hidden', !blocked);
+    bookingCta?.classList.toggle('hidden', !(chosen && !blocked));
+  }
+
+  bookingRegion?.addEventListener('change', updateBookingGate);
+  updateBookingGate();
+</script>

commit c745aed46f561f98d18ab2185d75d94e2c86359f
Author: nina-nue <nina.karolin.nuechter@gmail.com>
Date:   Mon Aug 24 15:26:45 2026 +0200

    Ueber-mich entschaerft: Promotion nicht mehr als Verkaufsargument, Unabhaengigkeits-Absatz ergaenzt

diff --git a/src/pages/ueber-mich.astro b/src/pages/ueber-mich.astro
index 772db6b..2996658 100644
--- a/src/pages/ueber-mich.astro
+++ b/src/pages/ueber-mich.astro
@@ -25,9 +25,9 @@ const jsonLd = [buildPersonSchema()];
       </p>
       <p class="mt-4 max-w-2xl text-lg text-ink-soft">
         Zur KI-Beratung bin ich nicht über die Technik gekommen, sondern über die Frage, wie
-        Menschen in Organisationen mit Veränderung und Unsicherheit umgehen. Genau das untersuche
-        ich auch in meiner Promotion — mit Blick auf KI im Arbeitskontext. Die Beratung ist die
-        praktische Seite derselben Frage.
+        Menschen in Organisationen mit Veränderung und Unsicherheit umgehen. Diese Frage
+        beschäftigt mich beruflich und wissenschaftlich — auf zwei getrennten Wegen zum selben
+        Thema.
       </p>
     </div>
   </section>
@@ -35,6 +35,20 @@ const jsonLd = [buildPersonSchema()];
   <StanceSection />
   <Qualifications />
 
+  <section class="bg-surface">
+    <div class="section-pad mx-auto max-w-(--container-max) px-4 sm:px-6" data-reveal="rise">
+      <h2 class="font-sans text-fluid-h2 text-primary-strong">Unabhängig von meinen Anstellungen</h2>
+      <p class="mt-4 max-w-2xl text-lg text-ink-soft">
+        Diese Beratungstätigkeit übe ich unabhängig von meinen sonstigen beruflichen Anstellungen
+        aus. Hinter diesem Angebot steht keine Institution — nur ich, als Privatperson. Mehr dazu
+        auf der{' '}
+        <a href="/transparenz" class="underline underline-offset-2 hover:text-primary">
+          Transparenz-Seite
+        </a>.
+      </p>
+    </div>
+  </section>
+
   <section class="bg-surface">
     <div
       class="section-pad mx-auto max-w-(--container-max) px-4 text-center sm:px-6"

commit 26f001eccdc8624b3cc3857c2f6c8fb31705108d
Author: nina-nue <nina.karolin.nuechter@gmail.com>
Date:   Mon Aug 24 15:41:48 2026 +0200

    UWG-Praezisierung: IHK-Zertifikat statt zertifiziert-Formulierung (kein Anschein staatlicher Zulassung)

diff --git a/src/pages/ueber-mich.astro b/src/pages/ueber-mich.astro
index 2996658..6437b85 100644
--- a/src/pages/ueber-mich.astro
+++ b/src/pages/ueber-mich.astro
@@ -20,7 +20,7 @@ const jsonLd = [buildPersonSchema()];
       </h1>
       <p class="mt-5 max-w-2xl text-lg text-ink-soft">
         M.Sc. International Management & Psychology mit Schwerpunkt Arbeits- und
-        Organisationspsychologie, zertifiziert in „Digitale Innovation und KI-Anwendung" (IHK).
+        Organisationspsychologie, Zertifikat „Digitale Innovation und KI-Anwendung" (IHK).
         Beratung bundesweit, remote-first.
       </p>
       <p class="mt-4 max-w-2xl text-lg text-ink-soft">

commit 60028a612bb3efbbae393f51108c108f07bbce40
Author: nina-nue <nina.karolin.nuechter@gmail.com>
Date:   Mon Aug 24 15:52:17 2026 +0200

    Rechtstexte aktualisiert: Datenschutz korrigiert (nur Inter, nicht EB Garamond; Hosting-Anbieter Netlify final statt Netlify/Vercel-Platzhalter), USt-Hinweis in pricing.ts als offener Punkt markiert

diff --git a/src/data/pricing.ts b/src/data/pricing.ts
index d735ada..0f45503 100644
--- a/src/data/pricing.ts
+++ b/src/data/pricing.ts
@@ -80,5 +80,11 @@ export const singleModules: SingleModule[] = [
 export const pricingIntro =
   'Jeder Baustein ist auch für sich genommen buchbar — wenn Sie schon wissen, was Sie brauchen. Den Preis stimme ich auf den Zuschnitt ab.';
 
+/**
+ * ⚠️ PRÜFEN: Sobald geklärt ist, ob die Kleinunternehmerregelung nach § 19 UStG genutzt wird
+ * (siehe RECHTLICHES.md und impressum.astro, Abschnitt „Umsatzsteuer"), hier den passenden
+ * Zusatz ergänzen: entweder "…, zzgl. der gesetzlichen Umsatzsteuer." oder "Gemäß § 19 UStG
+ * wird keine Umsatzsteuer berechnet." Bisher bewusst nicht vorweggenommen.
+ */
 export const pricingFootnote =
   'Die Paketpreise verstehen sich netto und sind auf Vorbereitung, Durchführung und Nachbereitung kalkuliert — keine versteckten Zusatzkosten. Einzelne Bausteine und individuelle Zuschnitte kalkuliere ich nach Aufwand.';
diff --git a/src/pages/datenschutz.astro b/src/pages/datenschutz.astro
index d1f9bae..abb0df3 100644
--- a/src/pages/datenschutz.astro
+++ b/src/pages/datenschutz.astro
@@ -52,13 +52,17 @@ const plausibleActive = isAnalyticsConfigured();
             Uhrzeit der Serveranfrage und IP-Adresse. Diese Daten sind nicht bestimmten Personen
             zuordenbar und werden nicht mit anderen Datenquellen zusammengeführt. Die Verarbeitung
             erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO aus dem berechtigten Interesse an
-            der technisch fehlerfreien Darstellung und der Optimierung der Website. Mit dem
-            Hosting-Provider besteht ein Vertrag zur Auftragsverarbeitung nach Art. 28 DSGVO.
+            der technisch fehlerfreien Darstellung und der Optimierung der Website.
+          </p>
+          <p class="mt-3">
+            Diese Website wird bei Netlify, Inc., 44 Montgomery Street, Suite 300, San Francisco,
+            CA 94104, USA, gehostet. Netlify bietet für Kundinnen und Kunden in der EU eine
+            Auftragsverarbeitung inklusive EU-Standardvertragsklauseln als Garantie für ein
+            angemessenes Datenschutzniveau an.
           </p>
           <p class="text-sm text-accent-strong">
-            ⚠️ PRÜFEN: Diese Website wird auf Netlify oder Vercel gehostet (finale Entscheidung
-            siehe DEPLOY.md). Bitte hier den tatsächlich gewählten Hosting-Anbieter samt Firmensitz
-            eintragen und den Abschluss eines Auftragsverarbeitungsvertrags (AVV) bestätigen.
+            ⚠️ PRÜFEN: Bitte bestätigen, dass der Auftragsverarbeitungsvertrag (AVV) mit Netlify
+            im Netlify-Konto aktiv abgeschlossen wurde.
           </p>
         </div>
 
@@ -193,10 +197,10 @@ const plausibleActive = isAnalyticsConfigured();
         <div>
           <h2>{plausibleActive ? '8' : '7'}. Selbst gehostete Schriftarten</h2>
           <p>
-            Diese Website bindet Schriftarten (EB Garamond, Inter) lokal ein. Es findet zu keinem
-            Zeitpunkt eine Verbindung zu Servern von Google Fonts oder einem anderen externen
-            Font-Anbieter statt. Beim Aufruf dieser Website werden dadurch keine Daten an Dritte zum
-            Zweck der Schriftartendarstellung übermittelt.
+            Diese Website bindet die Schriftart Inter lokal ein. Es findet zu keinem Zeitpunkt eine
+            Verbindung zu Servern von Google Fonts oder einem anderen externen Font-Anbieter statt.
+            Beim Aufruf dieser Website werden dadurch keine Daten an Dritte zum Zweck der
+            Schriftartendarstellung übermittelt.
           </p>
         </div>
 

