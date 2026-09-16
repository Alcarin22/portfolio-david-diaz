import { Component, input } from '@angular/core';

// Logos locales y colores compartidos por todas las etiquetas.
const PALETTE: Record<string, {brand: string; text: string}> = {
  'HTML': {brand: '#E34F26', text: '#FF9B77'},
  'CSS': {brand: '#1572B6', text: '#80C9FF'},
  'JavaScript': {brand: '#F7DF1E', text: '#F7DF1E'},
  'Angular': {brand: '#DD0031', text: '#FF809C'},
  'TypeScript': {brand: '#3178C6', text: '#8CC7FF'},
  'Tailwind CSS': {brand: '#06B6D4', text: '#67E8F9'},
  'Java': {brand: '#E76F00', text: '#FFB566'},
  'Git': {brand: '#F34F29', text: '#FF9B80'},
  'GitHub': {brand: '#F0F0F0', text: '#F0F0F0'},
  'Node.js': {brand: '#5FA04E', text: '#9DD18F'},
  'Spring Boot': {brand: '#6DB33F', text: '#A3D977'},
  'MySQL': {brand: '#4479A1', text: '#91C4E9'},
  'Discord OAuth2': {brand: '#5865F2', text: '#A9B1FF'},
  'Discord.js': {brand: '#5865F2', text: '#A9B1FF'},
  'Salesforce': {brand: '#00A1E0', text: '#70D6FF'},
  // REST es un estilo de arquitectura: este violeta es una elección de diseño.
  'REST API': {brand: '#A78BFA', text: '#C4B5FD'},
};
const ICONS: Record<string, string> = {
  'HTML': 'html', 'CSS': 'css', 'JavaScript': 'javascript',
  'Angular': 'angular', 'TypeScript': 'typescript', 'Tailwind CSS': 'tailwind',
  'Java': 'java', 'Git': 'git', 'GitHub': 'github', 'Node.js': 'nodejs', 'Spring Boot': 'spring', 'MySQL': 'mysql',
  'Discord OAuth2': 'discord', 'Discord.js': 'discord', 'Salesforce': 'salesforce', 'REST API': 'rest-api',
};
@Component({
  selector: 'app-tech-badge',
  imports: [],
  template: `<span class="tech-badge" [style.--tech-brand]="colors.brand" [style.--tech-text]="colors.text">@if(icon){<img class="tech-icon" [src]="icon" alt="" width="18" height="18" aria-hidden="true" />}@else{<span class="tech-dot" aria-hidden="true"></span>}{{name()}}</span>`,
  styles: [`
    :host{display:inline-flex;max-width:100%}
    .tech-badge{display:inline-flex;align-items:center;gap:7px;padding:5px 10px;border:1px solid color-mix(in srgb,var(--tech-brand) 45%,#363636);border-radius:6px;background:color-mix(in srgb,var(--tech-brand) 9%,#181818);color:var(--tech-text);font-size:12px;line-height:1.5;font-weight:500;overflow-wrap:anywhere}
    .tech-icon{display:block;width:18px;height:18px;flex:0 0 18px;object-fit:contain}
    .tech-dot{width:6px;height:6px;flex:0 0 6px;border-radius:50%;background:var(--tech-brand)}
  `],
})
export class TechBadge {
  readonly name = input.required<string>();
  get icon(){const file=ICONS[this.name()];return file ? `icons/tech/${file}.svg` : null;}
  get colors(){return PALETTE[this.name()] ?? {brand:'#A3A3A3',text:'#D4D4D4'};}
}
