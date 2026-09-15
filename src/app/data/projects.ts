export interface ProjectItem {
  title: string;
  status: string;
  description: string;
  technologies: string[];
  detailUrl: string;
  featured: boolean;
}

// Añade aquí nuevos proyectos; los no destacados se muestran en la cuadrícula.
export const PROJECTS: ProjectItem[] = [
  {
    title: 'Gestión Taller GTA V RP',
    status: 'Proyecto estrella',
    description: 'Aplicación de gestión interna para talleres de GTA V Roleplay: facturación, empleados, fichajes y estadísticas en un mismo espacio.',
    technologies: ['Angular', 'Spring Boot', 'MySQL', 'Discord OAuth2'],
    detailUrl: '/proyectos/fivem-gestion-taller',
    featured: true,
  },
  {
    title: 'Proyecto Simracing',
    status: 'Proyecto privado · En desarrollo',
    description: 'Proyecto personal de software relacionado con el simracing. Su información y desarrollo se mantienen privados.',
    technologies: [],
    detailUrl: '/proyectos/proyecto-simracing',
    featured: false,
  },
];
