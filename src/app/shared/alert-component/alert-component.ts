import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';
import { ɵEmptyOutletComponent } from "@angular/router";

@Component({
  selector: 'app-alert-component',
  imports: [ɵEmptyOutletComponent, NgClass],
  templateUrl: './alert-component.html',
  styleUrl: './alert-component.css'
})
export class AlertComponent {
  color = input('blue')

  get bgColor(){
    return `bg-${this.color()}-400`
  }
}
