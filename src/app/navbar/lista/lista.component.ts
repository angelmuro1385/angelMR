import { Injectable } from '@angular/core';
import axios from 'axios';
import { ApiService } from '../../services/api.service';

@Injectable({
  providedIn: 'root'
})
export class ListaService {
  private baseUrl = 'http://localhost:3000/'; // Cambia esto si usas proxy

  constructor() {}

  async getCategorias(): Promise<any[]> {
    try {
      const response = await axios.get(`${this.baseUrl}/categorias`);
      return response.data;
    } catch (error) {
      console.error('Error al obtener categorías:', error);
      throw error;
    }
  }

  async getSubcategorias(categoriaId: string): Promise<any[]> {
    try {
      const response = await axios.get(`${this.baseUrl}/subcategorias/${categoriaId}`);
      return response.data;
    } catch (error) {
      console.error('Error al obtener subcategorías:', error);
      throw error;
    }
  }

  async filtrarDatos(filtros: any): Promise<any[]> {
    try {
      const response = await axios.post(`${this.baseUrl}/filtrar`, filtros);
      return response.data;
    } catch (error) {
      console.error('Error al filtrar datos:', error);
      throw error;
    }
  }
}
