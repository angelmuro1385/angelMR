import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cuentaObjetos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cuentaObjetos.component.html',
  styleUrls: ['./cuentaObjetos.component.css']
})


export class CuentaObjetosComponent implements OnInit {
  cantidad = 0;
  respuestaUsuario: number | null = null;
  mensaje = '';
  esCorrecto = false;

  imagenUrl = '';

  imagenesDisponibles = [
    'assets/imagenes/manzana.png',
    'assets/imagenes/pelota.png',
    'assets/imagenes/estrella.png',
    'assets/imagenes/banana.png',
    'assets/imagenes/corazon.png'
  ];

  ngOnInit(): void {
    this.generarObjetos();
  }

  generarObjetos(): void {
    this.cantidad = Math.floor(Math.random() * 10) + 1; // 1 a 10
    const indice = Math.floor(Math.random() * this.imagenesDisponibles.length);
    this.imagenUrl = this.imagenesDisponibles[indice];
    this.respuestaUsuario = null;
    this.mensaje = '';
    this.esCorrecto = false;
  }

  comprobar(): void {
    if (this.respuestaUsuario === this.cantidad) {
      this.mensaje = '🎉 ¡Correcto!';
      this.esCorrecto = true;
    } else {
      this.mensaje = '❌ Intenta otra vez.';
      this.esCorrecto = false;
    }
  }

  obtenerArray(): any[] {
    return Array(this.cantidad).fill(0);
  }
}