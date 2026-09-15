import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { ProjectDetail } from './pages/project-detail/project-detail';
export const routes: Routes = [
{path:'',component:Home,title:'David Díaz · Desarrollador web full stack'},
{path:'proyectos/fivem-gestion-taller',component:ProjectDetail,data:{project:'workshop'},title:'Gestión Taller GTA V RP · David Díaz'},
{path:'proyectos/proyecto-simracing',component:ProjectDetail,data:{project:'private-simracing'},title:'Proyecto Simracing · David Díaz'},
{path:'demo/fivem-gestion-taller',redirectTo:'proyectos/fivem-gestion-taller',pathMatch:'full'},
{path:'**',redirectTo:''}
];
