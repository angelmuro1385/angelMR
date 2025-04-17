import { Component,} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-fish',
  imports:[CommonModule, HttpClientModule,],
  templateUrl: './fish.component.html',
  styleUrls: ['./fish.component.css']
})
export class FishComponent {
title = "Lista de pescados"
  pescados = [
    { tipo: 'Merluza', precio: 5.99, kg: 1.2, caducidad: '2025-04-20' },
    { tipo: 'Salmon', precio: 12.50, kg: 0.8, caducidad: '2025-04-18' },
    { tipo: 'Atun', precio: 8.75, kg: 1.5, caducidad: '2025-04-22' },
    { tipo: 'Bacalao', precio: 14.30, kg: 1.0, caducidad: '2025-04-17' },
    { tipo: 'Dorada', precio: 6.25, kg: 1.3, caducidad: '2025-04-25' },
    { tipo: 'Trucha', precio: 10.20, kg: 0.9, caducidad: '2025-04-19' },
    { tipo: 'Palometa', precio: 15.00, kg: 1.1, caducidad: '2025-04-23' },
    { tipo: 'Anchoas', precio: 18.40, kg: 0.7, caducidad: '2025-04-21' }
  ];
}