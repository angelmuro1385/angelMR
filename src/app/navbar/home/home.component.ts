import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { ChartConfiguration, ChartType } from 'chart.js';
import { ApiService } from '../../services/api.service'; // Ajusta la ruta si es diferente

@Component({
  selector: 'app-home', // o cámbialo a 'app-grafico' si quieres que coincida con el nombre del componente
  imports: [CommonModule, NgChartsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] // ✅ corregido
})
export class HomeComponent implements OnInit {
  categorias: any[] = [];

  // Configuración del gráfico
  barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [],
    datasets: [
      {
        data: [],
        label: 'Número de Subcategorías',
        backgroundColor: '#42A5F5'
      }
    ]
  };

  barChartType: ChartType = 'bar';

  constructor(private apiService: ApiService) {}

  async ngOnInit() {
    try {
      const data = await this.apiService.getCategorias();
      this.categorias = data;

      const categoriasPadre = data.filter(c => c.parent_id === null);
      const conteoSubcategorias = categoriasPadre.map(c => {
        const count = data.filter(sub => sub.parent_id === c.id).length;
        return {
          name: c.name,
          count
        };
      });

      // Actualizamos el gráfico
      this.barChartData.labels = conteoSubcategorias.map(c => c.name);
      this.barChartData.datasets[0].data = conteoSubcategorias.map(c => c.count);
    } catch (error) {
      console.error('Error al cargar categorías para el gráfico:', error);
    }
  }
}
