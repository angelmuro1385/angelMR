import { Component,} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-fish',
  imports:[CommonModule, HttpClientModule,],
  templateUrl: './fish.component.html',
  styleUrls: ['./fish.component.css']
})
export class FishComponent {
title = "Lista de pescados"
pescados: any[] = [];
private apiUrl = 'https://app.clubamarrako.es/api/v1/categories/'; // Cambia esta URL por la real

constructor(private http: HttpClient) {}

getPescados(): Observable<any[]> {
  return this.http.get<any[]>(this.apiUrl);
}
}