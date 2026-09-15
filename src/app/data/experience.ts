export interface TimelineItem {
  date: string;
  title: string;
  subtitle: string;
  points: string[];
}

export const EXPERIENCE_ITEMS: TimelineItem[] = [
  {
    date: 'Febrero 2025 - Actualidad',
    title: 'Técnico TIC',
    subtitle: 'Agencia Transformación Digital CLM',
    points: [
      'Responsable de las subidas y despliegues a los diferentes entornos',
      'Responsable del area de FCT del portal EducamosCLM',
    ],
  },
    {
    date: 'Febrero 2019 - Febrero 2023',
    title: 'Desarrollador de Aplicaciones Asociado',
    subtitle: 'Accenture',
    points: [
      'Desarrollador en el CRM Salesforce',
    ],
  }
];