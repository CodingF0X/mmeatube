import { Component, input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-component',
  imports: [ReactiveFormsModule],
  templateUrl: './input-component.html',
  styleUrl: './input-component.css'
})
export class InputComponent {
  control = input.required<FormControl>();
  inputType = input.required<HTMLInputElement['type']>();
  placeHolder = input.required<string>();
}
