import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PROJECTS } from '../../data/projects';
@Component({selector:'app-projects',imports:[RouterLink],templateUrl:'./projects.html',styleUrl:'./projects.css'})
export class Projects {
  readonly featuredProjects = PROJECTS.filter(project => project.featured);
  readonly otherProjects = PROJECTS.filter(project => !project.featured);
}
