import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-games',
  imports: [],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css'
})
export class GamesComponent {
  constructor(private router: Router) {}

  goToSumas() {
    this.router.navigate(['/sumas']);
  }
  goToRestas() {
    this.router.navigate(['/restas']);
  }
  goToObjetos() {
    this.router.navigate(['/cuentaObjetos']);
  }
  goToNombra() {
    this.router.navigate(['/nombraObjetos']);
  }
}
