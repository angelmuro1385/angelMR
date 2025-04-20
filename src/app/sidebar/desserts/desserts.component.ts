import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-desserts',
  imports:[CommonModule, HttpClientModule,],
  templateUrl: './desserts.component.html',
  styleUrls: ['./desserts.component.css']
})


export class DessertsComponent implements OnInit {
  title = "Lista de postres";
  postres: any[] = [];
  totalGastado: number = 0;
  private apiUrl = 'assets/nevera.json';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any>(this.apiUrl).subscribe(data => {
      // Aquí estamos obteniendo las carnes del JSON
      this.postres = data?.alimentos?.postres || [];
      this.calcularTotalGastado();
    });
  }

  // Método para calcular el total gastado
  calcularTotalGastado(): void {
    this.totalGastado = this.postres.reduce((total, postre) => total + postre.precio, 0);
  }
}