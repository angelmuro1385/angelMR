import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jukebox',
  templateUrl: './jukebox.component.html',
  styleUrls: ['./jukebox.component.css']
})
export class JukeboxComponent implements OnInit {
  canciones = [
    { titulo: 'Las Cosas Del Amor', archivo: 'assets/musica/Las Cosas Del Amor.mp3' },
    { titulo: ' Busca Una Salida', archivo: 'assets/musica/ Busca Una Salida.mp3' },
    { titulo: 'Yo Caminaré', archivo: 'assets/musica/Yo Caminaré.mp3' }
  ];

  actual = 0;
  audio = new Audio();

  ngOnInit() {
    this.cargarCancion();
  }

  cargarCancion() {
    this.audio.src = this.canciones[this.actual].archivo;
    this.audio.load();
  
    this.audio.onerror = (e) => {
      console.error('Error cargando la canción:', this.audio.src);
    };
  }

  reproducir() {
    this.audio.play();
  }

  pausar() {
    this.audio.pause();
  }

  siguiente() {
    this.actual = (this.actual + 1) % this.canciones.length;
    this.cargarCancion();
    this.reproducir();
  }

  anterior() {
    this.actual = (this.actual - 1 + this.canciones.length) % this.canciones.length;
    this.cargarCancion();
    this.reproducir();
  }

  get cancionActual() {
    return this.canciones[this.actual].titulo;
  }
}
