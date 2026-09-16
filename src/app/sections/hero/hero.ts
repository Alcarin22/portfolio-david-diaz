import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  readonly codePreview = `const developer = {
  name: 'David Díaz',
  role: 'Full Stack Developer',
  focus: 'Soluciones útiles y mantenibles'
};

const application = {
  frontend: 'Angular + TypeScript',
  backend: 'Java + Spring Boot',
  data: 'MySQL + REST APIs'
};`;
}
