import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

// Definir la interfaz ProductoNevera (opcional)
export interface ProductoNevera {
  nombre: string;
  cantidad: number;
  precio: number;
  fechaCompra: string;
  fechaCaducidad: string;
}

@Component({
  selector: 'app-nevera',
  standalone: true,
  imports: [CommonModule, HttpClientModule], // Necesario para HttpClient
  templateUrl: './nevera.component.html',
  styleUrls: ['./nevera.component.css'], // Corrección en styleUrls (plural)
})
export class NeveraComponent implements OnInit {

  productos: ProductoNevera[] = []; // Usamos la interfaz para tipar los productos
  gastoTotal: number = 0;

  constructor(private http: HttpClient) {}

  identity<T>(arg: T): void {
    this.http.get<T>('https://app.clubamarrako.es/api/v1/categories/')
      .subscribe(data => {
        console.log(data);  
      });
  }

  ngOnInit(): void {
    this.http.get<any[]>('assets/nevera.json')// Cambiado a ProductoNevera[]
      .subscribe(
        data => {
          this.productos = data;

      
  
          // Calcular gasto total
          this.gastoTotal = this.productos.reduce((total, prod) => {
            return total + (prod.precio * prod.cantidad);
          }, 0);
  
          console.log('Datos cargados:', this.productos);
          console.log('Gasto total:', this.gastoTotal);
        },
        error => {
          console.error('Error cargando el JSON', error);
          this.gastoTotal = 0; // En caso de error, no mostrar gasto total
        }
      );
  }
}
