import { Component,} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-meat',
  imports:[CommonModule, HttpClientModule,],
  templateUrl: './meat.component.html',
  styleUrls: ['./meat.component.css']
})
export class MeatComponent {
title = "Lista de carnes"
  carnes = [
    { tipo: 'Pollo', precio: 5.99, kg: 1.2, caducidad: '2025-04-20' },
    { tipo: 'Ternera', precio: 12.50, kg: 0.8, caducidad: '2025-04-18' },
    { tipo: 'Cerdo', precio: 8.75, kg: 1.5, caducidad: '2025-04-22' },
    { tipo: 'Cordero', precio: 14.30, kg: 1.0, caducidad: '2025-04-17' },
    { tipo: 'Pavo', precio: 6.25, kg: 1.3, caducidad: '2025-04-25' },
    { tipo: 'Conejo', precio: 10.20, kg: 0.9, caducidad: '2025-04-19' },
    { tipo: 'Buey', precio: 15.00, kg: 1.1, caducidad: '2025-04-23' },
    { tipo: 'Jabalí', precio: 18.40, kg: 0.7, caducidad: '2025-04-21' }
  ];
}