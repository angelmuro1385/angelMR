import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-preserves',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './preserves.component.html',
  styleUrls: ['./preserves.component.css']
})
export class PreservesComponent implements OnInit {
  title = "Lista de conservas";
  conservas: any[] = [];
  totalGastado: number = 0;
  private apiUrl = 'assets/nevera.json';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any>(this.apiUrl).subscribe(data => {
      // Aquí estamos obteniendo las carnes del JSON
      this.conservas = data?.alimentos?.conservas || [];
      this.calcularTotalGastado();
    });
  }

  // Método para calcular el total gastado
  calcularTotalGastado(): void {
    this.totalGastado = this.conservas.reduce((total, conservas) => total + conservas.precio, 0);
  }
}