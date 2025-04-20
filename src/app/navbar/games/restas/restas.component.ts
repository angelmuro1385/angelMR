import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-restas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './restas.component.html',
  styleUrls: ['./restas.component.css']
})
export class RestasComponent implements OnInit {
  num1 = 0;
  num2 = 0;
  respuesta: number | null = null;
  mensaje = '';
  esCorrecto = false;

  ngOnInit(): void {
    this.generarResta();
  }

  generarResta(): void {
    // Asegurarse de que el resultado no sea negativo
    const a = this.numeroAleatorio();
    const b = this.numeroAleatorio();

    this.num1 = Math.max(a, b);
    this.num2 = Math.min(a, b);
    this.respuesta = null;
    this.mensaje = '';
  }

  comprobar(): void {
    const resultado = this.num1 - this.num2;
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
