import { Component, inject, signal, WritableSignal } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-nav',
  imports: [],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav {
  modal = inject(ModalService);

  openModal(e: Event) {
    e.preventDefault();
    this.modal.toggle('auth');
  }
}
