import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private modals = signal<Imodal[]>([]);

  register(id: string, element: HTMLDialogElement) {
    this.modals.set([
      ...this.modals(),
      {
        id,
        element,
      },
    ]);

    console.log(this.modals());
  }

  toggle(id: string) {
    console.log(id);
    const modal = this.modals().find((item) => item.id == id);
    if (!modal) return;

    if (modal.element.open) {
      modal.element.close();
    } else {
      modal.element.showModal();
    }
  }
}
