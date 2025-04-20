import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = '#'; // Cambia esto según tu API
  

  constructor() {}

  async getPost(id: number): Promise<any> {
    try {
      const response = await axios.get(`${this.baseUrl}/posts/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error al obtener el post con id ${id}:`, error);
      throw error;
    }
  }

  async getCategorias(): Promise<any[]> {
    try {
      const response = await axios.get('/assets/categorias.json');
      return response.data;
    } catch (error) {
      console.error('Error al cargar categorías mock:', error);
      throw error;
    }
  }
}