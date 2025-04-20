import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-drink',
  imports:[CommonModule, HttpClientModule,],
  templateUrl: './drink.component.html',
  styleUrls: ['./drink.component.css']
})


export class DrinkComponent implements OnInit {
  title = "Lista de bebidas";
  bebidas: any[] = [];
  totalGastado: number = 0;
  private apiUrl = 'assets/nevera.json';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any>(this.apiUrl).subscribe(data => {
      // Aquí estamos obteniendo las carnes del JSON
      this.bebidas = data?.alimentos?.bebidas || [];
      this.calcularTotalGastado();
    });
  }

  // Método para calcular el total gastado
  calcularTotalGastado(): void {
    this.totalGastado = this.bebidas.reduce((total, bebidas) => total + bebidas.precio, 0);
  }
}