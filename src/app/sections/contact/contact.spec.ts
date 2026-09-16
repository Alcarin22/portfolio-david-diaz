import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contact } from './contact';

describe('Contact', () => {
  let component: Contact;
  let fixture: ComponentFixture<Contact>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contact],
    }).compileComponents();

    fixture = TestBed.createComponent(Contact);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('rejects empty, whitespace-only and malformed input', () => {
    expect(component.form.valid).toBe(false);
    component.form.setValue({name:'   ', email:'incorrecto', subject:' ', message:' '});
    component.submit(new Event('submit'));
    expect(component.form.valid).toBe(false);
    expect(component.invalid('name')).toBe(true);
    expect(component.invalid('email')).toBe(true);
    expect(component.prepared()).toBe(false);
  });

  it('encodes the message and targets the configured address', () => {
    component.form.setValue({name:'Ana Díaz', email:'ana@example.com', subject:'Web & diseño?', message:'Hola #equipo & gracias'});
    expect(component.form.valid).toBe(true);
    const url = new URL(component.mailto);
    expect(url.pathname).toBe('daviddiaz1992@gmail.com');
    expect(url.searchParams.get('subject')).toBe('Web & diseño?');
    expect(url.searchParams.get('body')).toContain('Hola #equipo & gracias');
    expect(url.searchParams.get('body')).toContain('ana@example.com');
  });
});
