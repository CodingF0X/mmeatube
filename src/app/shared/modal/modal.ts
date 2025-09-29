import {
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  input,
  viewChild,
} from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-modal',
  imports: [],
  templateUrl: './modal.html',
  styleUrl: './modal.css',
})
export class Modal implements AfterViewInit {
  // parent component
  modal = inject(ModalService);
  id = input.required<string>();
  dialog = viewChild.required<ElementRef<HTMLDialogElement>>('baseDialog');

  ngAfterViewInit() {
    this.modal.register(this.id(), this.dialog().nativeElement);
  }
}
