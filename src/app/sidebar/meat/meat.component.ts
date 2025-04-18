import { Component,} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-meat',
  imports:[CommonModule, HttpClientModule,],
  templateUrl: './meat.component.html',
  styleUrls: ['./meat.component.css']
})
export class MeatComponent {
title = "Lista de carnes"

carnes: any[] = [];
private apiUrl = 'https://app.clubamarrako.es/api/v1/categories/'; // Cambia esta URL por la real

constructor(private http: HttpClient) {}

getPescados(): Observable<any[]> {
  return this.http.get<any[]>(this.apiUrl);
}
}