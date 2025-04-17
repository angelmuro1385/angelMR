import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://app.clubamarrako.es/api/v1/categories/';

  // Método para obtener todas las categorías (usando Axios)
  async getCategorias(): Promise<any[]> {
    try {
      const response = await axios.get(this.apiUrl);
      return response.data;  // Retorna los datos de la API
    } catch (error) {
      console.error('Error al obtener las categorías:', error);
      return [];  // En caso de error, retornamos un array vacío
    }
  }

  // Este es tu método actual que está funcionando con Axios para obtener un solo post
  async getPost(id: number) {
    try {
      const response = await axios.get(`${this.apiUrl}${id}`);
      console.log('Datos con Axios:', response.data);
    } catch (error) {
      console.error('Error con Axios:', error);
    }
  }
}
