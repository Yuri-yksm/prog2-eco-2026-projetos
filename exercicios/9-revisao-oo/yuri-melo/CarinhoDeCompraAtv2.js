// Classe CarrinhoDeCompras

class CarrinhoDeCompras {
  #itens;

  constructor() {
    this.#itens = [];
  }

  adicionarItem(descricao, preco, quantidade) {
    if (!descricao || typeof descricao !== "string") {
      throw new Error("Descrição inválida.");
    }

    if (typeof preco !== "number" || preco <= 0) {
      throw new Error("Preço deve ser um número positivo.");
    }

    if (typeof quantidade !== "number" || quantidade <= 0) {
      throw new Error("Quantidade deve ser maior que zero.");
    }

    const item = {
      descricao: descricao,
      preco: preco,
      quantidade: quantidade
    };

    this.#itens.push(item);
  }

  removerItem(descricao) {
    this.#itens = this.#itens.filter(item => item.descricao !== descricao);
  }

  calcularTotal() {
    let total = 0;

    for (const item of this.#itens) {
      total += item.preco * item.quantidade;
    }

    return total;
  }

  listarItens() {
    for (const item of this.#itens) {
      console.log(
        `${item.descricao} - R$ ${item.preco.toFixed(2)} x ${item.quantidade}`
      );
    }
  }
}


// Testando a classe

const carrinho = new CarrinhoDeCompras();

carrinho.adicionarItem("Mouse", 80, 1);
carrinho.adicionarItem("Teclado", 350, 1);
carrinho.adicionarItem("Mousepad", 40, 2);

console.log("Itens no carrinho:");
carrinho.listarItens();

console.log("Total da compra: R$", carrinho.calcularTotal().toFixed(2));

carrinho.removerItem("Mouse");

console.log("Itens após remover Mouse:");
carrinho.listarItens();