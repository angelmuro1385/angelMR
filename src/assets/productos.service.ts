// src/app/productos.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private apiUrl = 'assets/nevera.json';

  constructor(private http: HttpClient) {}

  getCarnes(): Observable<any[]> {
    return new Observable(observer => {
      this.http.get<any>(this.apiUrl).subscribe(data => {
        observer.next(data['4']); // Solo obtenemos los productos del id "2"
        observer.complete();
      });
    });
  }
}
