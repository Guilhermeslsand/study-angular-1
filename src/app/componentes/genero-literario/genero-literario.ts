import { Component, input } from '@angular/core';
import { GeneroLiterarioInterface } from '../livro/livro.interface';
import { Livro } from '../livro/livro';

@Component({
  selector: 'app-genero-literario',
  imports: [Livro],
  templateUrl: './genero-literario.html',
  styleUrl: './genero-literario.css',
})
export class GeneroLiterario {
  genero = input.required<GeneroLiterarioInterface>();
}
