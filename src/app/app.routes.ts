import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { ProjectDetail } from './pages/project-detail/project-detail';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'David Díaz Guerra · Desarrollador web Full Stack',
  },
  {
    path: 'proyectos/fivem-gestion-taller',
    component: ProjectDetail,
    data: { project: 'workshop' },
    title: 'Gestión Taller GTA V RP · David Díaz Guerra',
  },
  {
    path: 'proyectos/gt7-daily-bot',
    component: ProjectDetail,
    data: { project: 'gt7-daily-bot' },
    title: 'GT7 Daily Bot · David Díaz Guerra',
  },
  {
    path: 'proyectos/proyecto-simracing',
    component: ProjectDetail,
    data: { project: 'private-simracing' },
    title: 'Simracing Management · David Díaz Guerra',
  },
  {
    path: 'demo/fivem-gestion-taller',
    redirectTo: 'proyectos/fivem-gestion-taller',
    pathMatch: 'full',
  },
  { path: '**', redirectTo: '' },
];
