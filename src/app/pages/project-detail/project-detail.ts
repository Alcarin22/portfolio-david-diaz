import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Navbar } from '../../layout/navbar/navbar';
import { Footer } from '../../layout/footer/footer';
import { TechBadge } from '../../shared/tech-badge/tech-badge';

type ProjectKey = 'workshop' | 'gt7-daily-bot' | 'private-simracing';

@Component({
  selector: 'app-project-detail',
  imports: [Navbar, Footer, RouterLink, TechBadge],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.css',
})
export class ProjectDetail {
  readonly project = inject(ActivatedRoute).snapshot.data['project'] as ProjectKey;

  readonly workshopProject = this.project === 'workshop';
  readonly gt7Project = this.project === 'gt7-daily-bot';
  readonly privateProject = this.project === 'private-simracing';
}
