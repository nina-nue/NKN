/**
 * Eigenes, schlankes Consent-Management ohne Fremdanbieter-Skript.
 * Speichert eine versionierte, zeitgestempelte Einwilligung im localStorage
 * und lädt Statistik-Skripte (z. B. Plausible) erst nach Zustimmung.
 */

export const CONSENT_STORAGE_KEY = 'nkn-consent';
export const CONSENT_VERSION = 1;

export interface ConsentCategories {
  necessary: true;
  statistics: boolean;
}

export interface ConsentRecord {
  version: number;
  timestamp: string;
  categories: ConsentCategories;
}

export function readConsent(): ConsentRecord | null {
  try {
    const raw = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ConsentRecord;
    if (parsed.version !== CONSENT_VERSION) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function writeConsent(categories: ConsentCategories): ConsentRecord {
  const record: ConsentRecord = {
    version: CONSENT_VERSION,
    timestamp: new Date().toISOString(),
    categories,
  };
  localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(record));
  window.dispatchEvent(new CustomEvent<ConsentRecord>('nkn:consent-change', { detail: record }));
  return record;
}

export function clearConsent(): void {
  localStorage.removeItem(CONSENT_STORAGE_KEY);
}
