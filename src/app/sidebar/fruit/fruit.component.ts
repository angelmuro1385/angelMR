import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-fruit',
  imports:[CommonModule, HttpClientModule,],
  templateUrl: './fruit.component.html',
  styleUrls: ['./fruit.component.css']
})
export class FruitComponent implements OnInit {
  title = "Lista de frutas";
  frutas: any[] = [];
  totalGastado: number = 0;
  private apiUrl = 'assets/nevera.json';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any>(this.apiUrl).subscribe(data => {
      // Aquí estamos obteniendo las carnes del JSON
      this.frutas = data?.alimentos?.frutas || [];
      this.calcularTotalGastado();
    });
  }

  // Método para calcular el total gastado
  calcularTotalGastado(): void {
    this.totalGastado = this.frutas.reduce((total, fruta) => total + fruta.precio, 0);
  }
}