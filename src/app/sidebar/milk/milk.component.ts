import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-milk',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './milk.component.html',
  styleUrls: ['./milk.component.css']
})
export class MilkComponent implements OnInit {
  title = "Lista de leches";
  leches: any[] = [];
  totalGastado: number = 0;
  private apiUrl = 'assets/nevera.json';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any>(this.apiUrl).subscribe(data => {
      // Aquí estamos obteniendo las carnes del JSON
      this.leches = data?.alimentos?.leches || [];
      this.calcularTotalGastado();
    });
  }

  // Método para calcular el total gastado
  calcularTotalGastado(): void {
    this.totalGastado = this.leches.reduce((total, leches) => total + leches.precio, 0);
  }
}