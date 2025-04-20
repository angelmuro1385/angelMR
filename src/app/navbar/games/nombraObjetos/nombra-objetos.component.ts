import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-nombraObjetos',
  imports:[CommonModule, FormsModule],
  templateUrl: './nombra-objetos.component.html',
  styleUrls: ['./nombra-objetos.component.css']
})
export class NombraObjetosComponent {
  title = "¿Que objeto es?";
  objetos = [
    { imagen: 'manzana.png', respuesta: 'manzana' },
    { imagen: 'estrella.png', respuesta: 'estrella' },
    { imagen: 'corazon.png', respuesta: 'corazon' },
    { imagen: 'pelota.png', respuesta: 'pelota' },
    { imagen: 'banana.png', respuesta: 'banana' },
    { imagen: 'corazon.png', respuesta: 'corazon' }
  ];

  indiceActual = 0;
  entradaUsuario = '';
  mostrarResultado: boolean | null = null;
  completado = false;
  mensaje: string = '';
  esCorrecto: boolean = false;


  get objetoActual() {
    return this.objetos[this.indiceActual];
  }

  comprobarRespuesta() {
    const respuestaCorrecta = this.objetoActual.respuesta.toLowerCase();
    const entrada = this.entradaUsuario.trim().toLowerCase();
  
    this.mostrarResultado = entrada === respuestaCorrecta;
  
    if (this.mostrarResultado) {
      this.mensaje = '🎉 ¡Muy bien!';
      this.esCorrecto = true;
    } else {
      this.mensaje = '❌ Intenta otra vez';
      this.esCorrecto = false;
    }
  }
  
  siguiente() {
    this.entradaUsuario = '';
    this.mostrarResultado = null;

    if (this.indiceActual < this.objetos.length - 1) {
      this.indiceActual++;
    } else {
      this.completado = true;
    }
  }

  reiniciarJuego() {
    this.indiceActual = 0;
    this.entradaUsuario = '';
    this.mostrarResultado = null;
    this.completado = false;
  }
}
