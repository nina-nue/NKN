/**
 * Lädt Plausible Analytics (EU-Hosting, cookiefrei) ausschließlich nach
 * erteilter Einwilligung in die Kategorie „Statistik" und nur, wenn der
 * Dienst über die Umgebungsvariable PUBLIC_ENABLE_ANALYTICS aktiviert ist.
 * Ohne aktivierten Dienst bleibt die Kategorie „Statistik" im Banner leer
 * bzw. wird gar nicht erst angeboten (siehe ConsentBanner.astro).
 */

const SCRIPT_ID = 'plausible-analytics-script';

export function isAnalyticsConfigured(): boolean {
  return (
    import.meta.env.PUBLIC_ENABLE_ANALYTICS === 'true' &&
    Boolean(import.meta.env.PUBLIC_PLAUSIBLE_DOMAIN)
  );
}

export function loadAnalytics(): void {
  if (!isAnalyticsConfigured()) return;
  if (document.getElementById(SCRIPT_ID)) return;

  const domain = import.meta.env.PUBLIC_PLAUSIBLE_DOMAIN;
  const script = document.createElement('script');
  script.id = SCRIPT_ID;
  script.defer = true;
  script.dataset.domain = domain;
  script.src = 'https://plausible.io/js/script.js';
  document.head.appendChild(script);
}
