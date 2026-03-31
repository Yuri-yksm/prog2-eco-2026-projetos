//Dado o array de produtos abaixo, resolva cada item usando o método indicado:
const produtos = [
  { nome: "Mouse",    preco: 80,  estoque: 5  },
  { nome: "Teclado",  preco: 150, estoque: 0  },
  { nome: "Monitor",  preco: 900, estoque: 2  },
  { nome: "Headset",  preco: 200, estoque: 8  },
  { nome: "Webcam",   preco: 120, estoque: 0  },
];

const disponiveis = produtos.filter(produto => produto.estoque > 0);

const comDesconto = produtos.map(produto => {
  return {
    nome: produto.nome,
    novoPreco: produto.preco * 0.9
  };
});
const valorTotal = produtos.reduce((total, produto) => {
  return total + (produto.preco * produto.estoque);
}, 0);

console.log(disponiveis);
console.log(comDesconto);
console.log(valorTotal);