import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { USER_PROFILE } from '@rkc/use_profile';
import { take } from 'rxjs';

export type ContactInput = {
  name: string;
  email: string;
  message: string;
};

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private readonly httpClient = inject(HttpClient);

  public sendContactMessage(contactInput: ContactInput): void {
    this.httpClient
      .post<void>(USER_PROFILE.contact.sendEmailLink, contactInput)
      .pipe(take(1))
      .subscribe();
  }
}
