import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputComponent } from '../../shared/input-component/input-component';
import { AlertComponent } from '../../shared/alert-component/alert-component';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, InputComponent, AlertComponent],
  templateUrl: './login.html',
  styleUrl: './login.css',
  standalone: true,
})
export class Login {
  fb = inject(FormBuilder);

  showAlert = signal<boolean>(false);
  alertColor = signal<string>('blue');
  alertMsg = signal<string>('Sugmitting...');

  form = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  login() {
    this.showAlert.set(true);
    this.alertColor.set('blue');
    setTimeout(() => {
      this.showAlert.set(false);
    }, 2000);
  }
}
