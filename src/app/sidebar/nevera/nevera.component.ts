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

  title = "Lista de Alimentos";
  alimentos: any[] = [];
  totalGastado: number = 0;
  private apiUrl = '/assets/nevera.json';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any>(this.apiUrl).subscribe(data => {
      const categorias = data?.alimentos || {};
      this.alimentos = [];
  
      // Unir todos los arrays de alimentos en uno solo
      for (let categoria in categorias) {
        if (Array.isArray(categorias[categoria])) {
          this.alimentos = this.alimentos.concat(categorias[categoria]);
        }
      }
  
      this.calcularTotalGastado();
    });
  }
  
  // Método fuera de ngOnInit
  calcularTotalGastado(): void {
    this.totalGastado = this.alimentos.reduce((total, alimento) => total + (alimento.precio || 0), 0);
  }
}