import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-nav',
  imports: [],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav {
  modalOpened: WritableSignal<boolean> = signal(false);

  openModal(e:MouseEvent){
    this.modalOpened.set(!this.modalOpened())
  }
}
