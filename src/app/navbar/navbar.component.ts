import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';


@Component({
  selector: 'app-navbar',
  imports:[MatIconModule, MatToolbarModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private router: Router) {}

  goToIndex() {
    this.router.navigate(['/']);
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
