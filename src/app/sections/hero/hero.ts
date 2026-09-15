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
  focus: 'Full stack',
  mindset: 'Crear. Aprender. Mejorar.'
};

const application = {
  interface: 'Clara y accesible',
  logic: 'Una estructura sólida',
  data: 'Todo conectado'
};`;
}
