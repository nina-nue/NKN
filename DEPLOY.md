# Deployment (Netlify)

Diese Anleitung bringt die Seite von diesem Repository auf eine eigene Domain — Schritt für
Schritt, ohne Vorwissen vorauszusetzen.

## 1. Voraussetzungen

- Ein [Netlify](https://www.netlify.com)-Account (kostenlos ausreichend)
- Dieses Repository auf GitHub, GitLab oder Bitbucket
- Ein [Web3Forms](https://web3forms.com)-Access-Key für das Kontaktformular (kostenlos, siehe Schritt 3)
- Optional: eine eigene Domain (z. B. `nina-nuechter.de`)

## 2. Repo mit Netlify verbinden

1. Bei Netlify einloggen → **Add new site** → **Import an existing project**.
2. Git-Provider wählen und dieses Repository auswählen.
3. Build-Einstellungen werden automatisch aus `netlify.toml` übernommen:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node-Version: 22 (siehe `.nvmrc` / `netlify.toml`)
4. Noch **nicht** auf „Deploy" klicken — zuerst die Umgebungsvariablen setzen (nächster
   Schritt), sonst läuft das Kontaktformular ohne gültigen Key.

## 3. Umgebungsvariablen setzen

Unter **Site configuration → Environment variables** folgende Variablen anlegen:

| Variable                  | Pflicht | Wert                                                                                                                                                            |
| ------------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `PUBLIC_WEB3FORMS_KEY`    | ja      | Ihr Access Key von [web3forms.com](https://web3forms.com/) (dort mit der Ziel-E-Mail-Adresse `n.nuechter@nknoffice.eu` registrieren, Key kopieren)              |
| `PUBLIC_SITE_URL`         | ja      | `https://www.nina-nuechter.de` (oder Ihre tatsächliche Domain — muss exakt der später verknüpften Domain inkl. `https://` entsprechen, wichtig für Sitemap/SEO) |
| `PUBLIC_ENABLE_ANALYTICS` | nein    | `true`, nur falls Plausible genutzt werden soll — sonst weglassen oder `false`                                                                                  |
| `PUBLIC_PLAUSIBLE_DOMAIN` | nein    | Ihre Domain, wie bei Plausible hinterlegt (nur relevant, wenn `PUBLIC_ENABLE_ANALYTICS=true`)                                                                   |

Danach **Deploy site** klicken.

## 4. Eigene Domain verknüpfen

1. **Domain management → Add a domain** → Ihre Domain eintragen.
2. Netlify zeigt Ihnen die nötigen DNS-Einträge (entweder Nameserver auf Netlify umstellen,
   oder einen `A`-/`CNAME`-Eintrag bei Ihrem bisherigen Domain-Provider setzen).
3. Warten, bis die Domain als „verifiziert" angezeigt wird (kann je nach Provider einige
   Minuten bis Stunden dauern). Netlify stellt automatisch ein TLS-Zertifikat aus.
4. **Wichtig:** Stimmt die verknüpfte Domain nicht mit `PUBLIC_SITE_URL` überein, Env-Variable
   anpassen und die Seite erneut deployen (**Deploys → Trigger deploy**), da Sitemap,
   Canonical-URLs und JSON-LD sonst auf die falsche Domain zeigen.

## 5. Formular testen

1. Auf der Live-Seite zu `/#kontakt` oder `/kontakt` gehen.
2. Testnachricht mit echter eigener E-Mail-Adresse absenden.
3. Erwartet: eine Erfolgsmeldung im grünen Kasten unter dem Formular, das Formular wird
   geleert.
4. In Ihrem E-Mail-Postfach (`n.nuechter@nknoffice.eu`) prüfen, ob die Nachricht von Web3Forms
   ankommt (ggf. Spam-Ordner prüfen, insbesondere beim allerersten Test).
5. Fehlerfall testen: `PUBLIC_WEB3FORMS_KEY` temporär auf einen ungültigen Wert setzen, neu
   deployen, erneut absenden. Erwartet: eine Fehlermeldung im roten Kasten mit einem
   Mailto-Link als Fallback. Anschließend den echten Key wiederherstellen und erneut
   deployen.

## 6. Vor dem eigentlichen Go-Live

- Alle mit `⚠️ PRÜFEN` markierten Stellen in `/impressum` und `/datenschutz` durchgehen —
  vollständige Liste in `RECHTLICHES.md`.
- Echte Bilder in `src/assets/images/` ablegen (siehe README, Abschnitt „Bilder").
- `npm run build` lokal einmal fehlerfrei durchlaufen lassen.
- Lighthouse-Check auf der Live-URL wiederholen (Werte können sich durch CDN/TLS von Netlify
  gegenüber der lokalen Vorschau leicht unterscheiden).

## Lokale Vorschau vor dem Deploy

```bash
npm install
cp .env.example .env   # PUBLIC_WEB3FORMS_KEY eintragen
npm run dev             # http://localhost:4321
npm run build            # Produktionsbuild inkl. Typecheck
npm run preview          # Produktionsbuild lokal ansehen
```
