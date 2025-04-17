import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ApiService } from './services/api.service';
import axios from 'axios';

@Component({
  selector: 'app-root',
  standalone: true, // Solo si estás usando Angular Standalone Components
  imports: [RouterOutlet, NavbarComponent, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  constructor(
    private apiService: ApiService,
    private router: Router
  ) {}

  async ngOnInit() {
    try {
      const data = await this.apiService.getPost(1);
      console.log('Datos:', data);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  goToIndex() {
    this.router.navigate(['/']);
  }

  goToLista() {
    this.router.navigate(['/lista']);
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
