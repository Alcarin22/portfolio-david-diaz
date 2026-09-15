export interface TechItem {
  name: string;
  category: string;
  description: string;
  iconUrl: string;
}

export const TECH_STACK: TechItem[] = [
  {
    name: 'Angular',
    category: 'Frontend',
    description: 'Framework para crear aplicaciones web modernas.',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
  },
  {
    name: 'TypeScript',
    category: 'Logic',
    description: 'Tipado, lógica de aplicación y código mantenible.',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  },
  {
    name: 'Tailwind CSS',
    category: 'UI',
    description: 'Diseño responsive, rápido y personalizable.',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
  },
  {
    name: 'Java',
    category: 'Backend',
    description: 'Backend robusto, estructurado y orientado a servicios.',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  },
];