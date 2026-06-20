import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Cabecalho } from "./componentes/cabecalho/cabecalho";
import { Rodape } from "./componentes/rodape/rodape";
import { Livro } from "./componentes/livro/livro";
import { ListaLivros } from "./componentes/lista-livros/lista-livros";
import { GeneroLiterario } from "./componentes/genero-literario/genero-literario";

@Component({
  selector: 'app-root',
  imports: [Cabecalho, Rodape, ListaLivros, GeneroLiterario],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('organo');
}
