import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-coldCuts',
  imports:[CommonModule, HttpClientModule,],
  templateUrl: './coldCuts.component.html',
  styleUrls: ['./coldCuts.component.css']
})


export class ColdCutsComponent implements OnInit {
  title = "Lista de embutidos";
  embutidos: any[] = [];
  totalGastado: number = 0;
  private apiUrl = 'assets/nevera.json';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any>(this.apiUrl).subscribe(data => {
      // Aquí estamos obteniendo las carnes del JSON
      this.embutidos = data?.alimentos?.embutidos || [];
      this.calcularTotalGastado();
    });
  }

  // Método para calcular el total gastado
  calcularTotalGastado(): void {
    this.totalGastado = this.embutidos.reduce((total, embutido) => total + embutido.precio, 0);
  }
}