import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../../assets/productos.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-meat',
  imports:[CommonModule, HttpClientModule],
  templateUrl: './meat.component.html',
  styleUrls: ['./meat.component.css']
})
export class MeatComponent implements OnInit {

  carnes: any[] = [];

  constructor(private productosService: ProductosService) {}

  ngOnInit(): void {
    this.productosService.getCarnes().subscribe(data => {
      this.carnes = data;
    });
  }
}