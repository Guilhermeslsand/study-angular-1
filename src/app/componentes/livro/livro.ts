import { Component, input } from '@angular/core';
import { LivroInterface } from './livro.interface';

@Component({
  selector: 'app-livro',
  imports: [],
  templateUrl: './livro.html',
  styleUrl: './livro.css',
})
export class Livro {
  livro = input.required<LivroInterface>();

  alternarFavorito(){
    this.livro().favorito = !this.livro().favorito
  }
}
