import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-meat',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './meat.component.html',
  styleUrls: ['./meat.component.css']
})
export class MeatComponent implements OnInit {
  title = "Lista de carnes";
  carnes: any[] = [];
  totalGastado: number = 0;
  private apiUrl = 'assets/nevera.json';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any>(this.apiUrl).subscribe(data => {
      // Aquí estamos obteniendo las carnes del JSON
      this.carnes = data?.alimentos?.carnes || [];
      this.calcularTotalGastado();
    });
  }
// Método para calcular el total gastado
calcularTotalGastado(): void {
  this.totalGastado = this.carnes.reduce((total, carnes) => total + carnes.precio, 0);
}
}