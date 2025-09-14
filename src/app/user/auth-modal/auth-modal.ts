import { Component } from '@angular/core';
import { Modal } from '../../shared/modal/modal';
import { Tab } from '../../shared/tab/tab';
import { TabsContainer } from '../../shared/tabs-container/tabs-container';

@Component({
  selector: 'app-auth-modal',
  imports: [Modal,Tab,TabsContainer],
  templateUrl: './auth-modal.html',
  styleUrl: './auth-modal.css'
})
export class AuthModal {

}
