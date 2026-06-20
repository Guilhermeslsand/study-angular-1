export interface LivroInterface {
    titulo: string;
    autoria: string;
    imagem: string;
    favorito: boolean;
    genero: GeneroLiterarioInterface;
}

export interface GeneroLiterarioInterface{
    id: string;
    value: string;
    livros: LivroInterface[];
}