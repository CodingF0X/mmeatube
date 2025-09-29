import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav } from './core/nav/nav';
import { AuthModal } from './user/auth-modal/auth-modal';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Nav, AuthModal],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('mmeatube');
}
