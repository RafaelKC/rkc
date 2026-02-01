import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RkcTranslationPipe } from '@rkc/pipes/rkc-translation-pipe';
import { USER_PROFILE } from '@rkc/use_profile';
import { LucideAngularModule, Mail, MapPin, Phone, Send } from 'lucide-angular';

@Component({
  selector: 'rkc-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, LucideAngularModule, RkcTranslationPipe],
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss'],
})
export class Contact {
  private fb = inject(FormBuilder);

  public readonly USER_PROFILE = USER_PROFILE;
  public readonly icons = { Mail, Phone, MapPin, Send };
  public readonly links = this.USER_PROFILE.socialLinks.filter((link) => link.useOnContact);

  public contactForm = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  public onSubmit(): void {
    if (this.contactForm.valid) {
      console.log('Transmissão enviada:', this.contactForm.value);
      this.contactForm.reset();
    }
  }
}
