import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true, // Solo si estás usando Angular Standalone Components
  imports: [RouterOutlet, NavbarComponent, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) {}

  goToIndex() {
    this.router.navigate(['/']);  // ✅ Corregido
  }

  goToAboutUs() {
    this.router.navigate(['/about-us']);
  }

  goToProducts() {
    this.router.navigate(['/products']);
  }

  goToGames() {
    this.router.navigate(['/games']);
  }

  goToMusic() {
    this.router.navigate(['/music']);
  }
}
