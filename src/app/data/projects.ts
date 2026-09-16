export type ProjectVisual = 'workshop' | 'gt7' | 'private';

export interface ProjectItem {
  title: string;
  status: string;
  description: string;
  technologies: string[];
  detailUrl: string;
  featured: boolean;
  visual: ProjectVisual;
  actionLabel: string;
}

// El proyecto destacado ocupa la sección principal; el resto se muestra en "Otros proyectos".
export const PROJECTS: ProjectItem[] = [
  {
    title: 'Gestión Taller GTA V RP',
    status: 'Proyecto estrella',
    description:
      'Aplicación Full Stack para centralizar la gestión interna de un taller de GTA Roleplay: facturación, empleados, fichajes, primas, convenios, vehículos y administración.',
    technologies: ['Angular', 'TypeScript', 'Spring Boot', 'MySQL', 'Discord OAuth2'],
    detailUrl: '/proyectos/fivem-gestion-taller',
    featured: true,
    visual: 'workshop',
    actionLabel: 'Conocer el proyecto',
  },
  {
    title: 'GT7 Daily Bot',
    status: 'En desarrollo',
    description:
      'Bot de Discord que recopila, procesa y publica automáticamente información sobre las Carreras Diarias de Gran Turismo 7.',
    technologies: ['Node.js', 'JavaScript', 'Discord.js'],
    detailUrl: '/proyectos/gt7-daily-bot',
    featured: false,
    visual: 'gt7',
    actionLabel: 'Conocer el proyecto',
  },
  {
    title: 'Simracing Management',
    status: 'Proyecto privado · En desarrollo',
    description:
      'Proyecto personal Full Stack relacionado con el simracing. Sus funcionalidades y detalles técnicos se mantienen privados hasta su presentación pública.',
    technologies: [],
    detailUrl: '/proyectos/proyecto-simracing',
    featured: false,
    visual: 'private',
    actionLabel: 'Información general',
  },
];
