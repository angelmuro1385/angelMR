import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { ChartConfiguration, ChartType, ChartTypeRegistry} from 'chart.js';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  imports: [CommonModule, NgChartsModule, HttpClientModule,],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = "Gráfico de Alimentos";

  // Definimos los datos para el gráfico
  barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [],
    datasets: [
      {
        data: [],
        label: 'Cantidad de Alimentos',
        backgroundColor: '#42A5F5'
      }
    ]
  };

  // Definimos las opciones para el gráfico
  barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
    scales: {
      x: {
        beginAtZero: true
      },
      y: {
        beginAtZero: true
      }
    }
  };

  barChartType: 'bar' = 'bar';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any>('assets/nevera.json').subscribe(data => {
      // Suponemos que las categorías se encuentran en la propiedad "alimentos"
      const alimentos = data.alimentos;

      // Filtramos las carnes, pescados y postres
      const carnes = alimentos.carnes || [];
      const pescados = alimentos.pescados || [];
      const postres = alimentos.postres || [];
      const frutas = alimentos.frutas || [];
      const embutidos = alimentos.embutidos || [];
      const conservas = alimentos.conservas || [];
      const leches = alimentos.leches || [];
      const bebidas = alimentos.bebidas || [];

      // Contamos cuántos elementos hay en cada categoría
      const categories = [
        { nombre: 'Carnes', cantidad: carnes.length },
        { nombre: 'Pescados', cantidad: pescados.length },
        { nombre: 'Postres', cantidad: postres.length },
        { nombre: 'Fruta', cantidad: frutas.length },
        { nombre: 'Embutidos', cantidad: embutidos.length },
        { nombre: 'Conservas', cantidad: conservas.length },
        { nombre: 'leches', cantidad: leches.length },
        { nombre: 'bebidas', cantidad: bebidas.length },
      ];

      // Actualizamos los datos del gráfico con la cantidad de cada categoría
      this.barChartData.labels = categories.map(c => c.nombre);
      this.barChartData.datasets[0].data = categories.map(c => c.cantidad);
    });
  }
}
