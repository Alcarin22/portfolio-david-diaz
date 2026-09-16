export interface TimelineItem {
  date: string;
  title: string;
  subtitle: string;
  points: string[];
}

export const EXPERIENCE_ITEMS: TimelineItem[] = [
  {
    date: 'Febrero 2025 - Agosto 2026',
    title: 'Técnico TIC',
    subtitle: 'Agencia Transformación Digital CLM',
    points: [
      'Gestión de subidas y despliegues en los diferentes entornos.',
      'Responsable del área de FCT del portal EducamosCLM.',
    ],
  },
  {
    date: 'Febrero 2019 - Febrero 2023',
    title: 'Desarrollador de Aplicaciones Asociado',
    subtitle: 'Accenture',
    points: [
      'Desarrollo de aplicaciones y funcionalidades sobre Salesforce CRM.',
    ],
  },
];
