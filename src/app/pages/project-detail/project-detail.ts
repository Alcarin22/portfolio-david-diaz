import { TechBadge } from '../../shared/tech-badge/tech-badge';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Navbar } from '../../layout/navbar/navbar';
import { Footer } from '../../layout/footer/footer';
@Component({selector:'app-project-detail',imports:[Navbar,Footer,RouterLink,TechBadge],templateUrl:'./project-detail.html',styleUrl:'./project-detail.css'})
export class ProjectDetail { readonly privateProject = inject(ActivatedRoute).snapshot.data['project'] === 'private-simracing'; }
