import { Component,} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-fruit',
  imports:[CommonModule, HttpClientModule,],
  templateUrl: './fruit.component.html',
  styleUrls: ['./fruit.component.css']
})
export class FruitComponent {
title = "Lista de frutas"
frutas: any[] = [];
private apiUrl = 'https://app.clubamarrako.es/api/v1/categories/'; // Cambia esta URL por la real

constructor(private http: HttpClient) {}

getPescados(): Observable<any[]> {
  return this.http.get<any[]>(this.apiUrl);
}
}