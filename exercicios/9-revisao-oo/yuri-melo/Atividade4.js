class Livro {
  constructor(titulo, autor) {
    if (!titulo || !autor) {
      throw new Error("Livro precisa de título e autor.");
    }

    this.titulo = titulo;
    this.autor = autor;
  }

  descrever() {
    return `${this.titulo} - ${this.autor}`;
  }
}

class UsuarioBiblioteca {
  #livrosEmprestados;

  constructor(nome) {
    if (!nome) {
      throw new Error("Usuário precisa de um nome.");
    }
    this.nome = nome;
    this.#livrosEmprestados = [];
  }
  emprestarLivro(livro) {
    if (!(livro instanceof Livro)) {
      throw new Error("O objeto precisa ser um Livro.");
    }
    const jaEmprestado = this.#livrosEmprestados.find(
      l => l.titulo === livro.titulo
    );
    if (jaEmprestado) {
      throw new Error("Este livro já foi emprestado para este usuário.");
    }
    this.#livrosEmprestados.push(livro);
  }
  listarEmprestimos() {
    console.log(`Empréstimos de ${this.nome}:`);
    for (const livro of this.#livrosEmprestados) {
      console.log(livro.descrever());
    }
  }
}

const livro1 = new Livro("Dom Casmurro", "Machado de Assis");
const livro2 = new Livro("1984", "George Orwell");
const usuario = new UsuarioBiblioteca("Maria");
usuario.emprestarLivro(livro1);
usuario.emprestarLivro(livro2);
usuario.listarEmprestimos();
