import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputComponent } from '../../shared/input-component/input-component';
import { AlertComponent } from '../../shared/alert-component/alert-component';

const pwdRgx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, InputComponent, AlertComponent],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  fb = inject(FormBuilder);
  showAlert = signal<boolean>(false);
  alertColor = signal<string>('blue');
  alertMsg = signal<string>('Sugmitting...');

  form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    age: [18],
    password: ['', [Validators.minLength(8), Validators.pattern(pwdRgx)]],
    confirmPassword: ['', Validators.minLength(8)],
    phoneNumber: [''],
  });

  register() {
    this.showAlert.set(true);
    this.alertColor.set('blue');
    this.alertMsg.set('mmea msg');
  }
}
