import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent implements OnInit {
  categorias: any[] = [];
  categoriasPadre: any[] = [];
  subcategorias: any[] = [];
  formulario!: FormGroup;

  constructor(private fb: FormBuilder, private apiService: ApiService) {}

  // Cuando el componente se inicializa, obtenemos las categorías
  async ngOnInit() {
    this.formulario = this.fb.group({
      categoriaPadre: [''],
      subcategoria: ['']
    });

    try {
      const data = await this.apiService.getCategorias();  // Obtenemos las categorías con Axios
      this.categorias = data;
      this.categoriasPadre = data.filter(cat => cat.parent_id === null);  // Solo las categorías sin parent_id
    } catch (error) {
      console.error('Error al cargar categorías', error);
    }

    // Escucha los cambios del select de "categoríaPadre" para filtrar las subcategorías
    this.formulario.get('categoriaPadre')?.valueChanges.subscribe(parentId => {
      this.subcategorias = this.categorias.filter(cat => cat.parent_id === +parentId);
      this.formulario.get('subcategoria')?.reset();
    });
  }

  // Maneja el envío del formulario
  onSubmit() {
    console.log('Formulario:', this.formulario.value);
  }
}
