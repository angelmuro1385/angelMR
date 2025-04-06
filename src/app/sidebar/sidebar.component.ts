import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-sidebar',
  imports:[MatIconModule, MatToolbarModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})


export class SidebarComponent {
  closeBox(event: Event) {
    const el = (event.target as HTMLElement).parentElement;
    if (el) el.style.display = 'none';
  }
}
