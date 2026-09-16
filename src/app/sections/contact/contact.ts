import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  readonly discordUsername = 'alcarin22';
  readonly discordFeedback = signal('');
  readonly email = 'daviddiaz1992@gmail.com';
  readonly whatsappUrl = 'https://wa.me/34655208187';
  readonly prepared = signal(false);
  readonly form = new FormGroup({
    name: new FormControl('', {nonNullable:true, validators:[Validators.required, Validators.pattern(/\S/), Validators.maxLength(100)]}),
    email: new FormControl('', {nonNullable:true, validators:[Validators.required, Validators.email, Validators.maxLength(254)]}),
    subject: new FormControl('', {nonNullable:true, validators:[Validators.required, Validators.pattern(/\S/), Validators.maxLength(150)]}),
    message: new FormControl('', {nonNullable:true, validators:[Validators.required, Validators.pattern(/\S/), Validators.maxLength(3000)]}),
  });

  async copyDiscord(): Promise<void> {
    try {
      await navigator.clipboard.writeText(this.discordUsername);
      this.discordFeedback.set('Usuario copiado. Puedes añadirlo en Discord.');
    } catch {
      this.discordFeedback.set('Selecciona y copia el usuario alcarin22 para añadirlo en Discord.');
    }
  }

  invalid(field: keyof typeof this.form.controls): boolean {
    const control = this.form.controls[field];
    return control.invalid && control.touched;
  }

  get mailto(): string {
    const value = this.form.getRawValue();
    const body = `Nombre: ${value.name.trim()}\nCorreo de contacto: ${value.email.trim()}\n\n${value.message.trim()}`;
    return `mailto:${this.email}?subject=${encodeURIComponent(value.subject.trim())}&body=${encodeURIComponent(body)}`;
  }

  submit(event: Event): void {
    event.preventDefault();
    this.prepared.set(false);
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    window.location.href = this.mailto;
    this.prepared.set(true);
  }
}
