import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sumas',
  imports:[CommonModule, FormsModule],
  templateUrl: './suma.component.html',
  styleUrls: ['./suma.component.css']
})
export class SumasComponent implements OnInit {
  num1 = 0;
  num2 = 0;
  respuesta: number | null = null;
  mensaje = '';
  esCorrecto = false;

  ngOnInit(): void {
    this.generarSuma();
  }

  generarSuma(): void {
    this.num1 = this.numeroAleatorio();
    this.num2 = this.numeroAleatorio();
    this.respuesta = null;
    this.mensaje = '';
  }

  comprobar(): void {
    const resultado = this.num1 + this.num2;
    if (this.respuesta === resultado) {
      this.mensaje = '🎉 ¡Muy bien!';
      this.esCorrecto = true;
    } else {
      this.mensaje = '❌ Intenta otra vez';
      this.esCorrecto = false;
    }
  }

  private numeroAleatorio(): number {
    return Math.floor(Math.random() * 10); // de 0 a 9
  }
}
