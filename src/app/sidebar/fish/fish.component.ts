import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-fish',
  imports:[CommonModule, HttpClientModule,],
  templateUrl: './fish.component.html',
  styleUrls: ['./fish.component.css']
})


export class FishComponent implements OnInit {
  title = "Lista de pescados";
  pescados: any[] = [];
  totalGastado: number = 0;
  private apiUrl = 'assets/nevera.json';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any>(this.apiUrl).subscribe(data => {
      // Aquí estamos obteniendo las carnes del JSON
      this.pescados = data?.alimentos?.pescados || [];
      this.calcularTotalGastado();
    });
  }

  // Método para calcular el total gastado
  calcularTotalGastado(): void {
    this.totalGastado = this.pescados.reduce((total, pescado) => total + pescado.precio, 0);
  }
}