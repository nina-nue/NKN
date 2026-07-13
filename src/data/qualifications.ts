export interface Qualification {
  label: string;
}

export const education: Qualification[] = [
  { label: 'M.Sc. International Management & Psychology (Auszeichnung „Bester Master 2025")' },
  { label: 'B.Sc. Betriebswirtschaft & Wirtschaftspsychologie' },
  {
    label:
      'Zertifikat „Digitale Innovation und KI-Anwendung" (IHK Hannover, 310 Unterrichtsstunden)',
  },
  { label: 'Promotionsvorhaben zu KI und Wohlbefinden im Arbeitskontext' },
];

export const experience: Qualification[] = [
  { label: 'Dozentin (HR Management, Psychologische Diagnostik, Trendforschung & Innovation)' },
  { label: 'Mehrjährige Praxis in Industrie, HR und Innovation' },
];

export const methods = ['R', 'MAXQDA', 'Power BI'];
