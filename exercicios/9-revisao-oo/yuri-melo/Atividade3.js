
class Veiculo {
  constructor(marca, modelo, ano) {
    if (!marca || !modelo || !ano) {
      throw new Error("Veículo precisa de marca, modelo e ano.");
    }

    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }

  descricao() {
    return `${this.marca} ${this.modelo} (${this.ano})`;
  }
}


// Classe Carro que herda de Veiculo

class Carro extends Veiculo {
  constructor(marca, modelo, ano) {
    super(marca, modelo, ano);
  }

  descricao() {
    return `Carro: ${this.marca} ${this.modelo} - Ano ${this.ano}`;
  }
}


// Classe Moto que herda de Veiculo

class Moto extends Veiculo {
  constructor(marca, modelo, ano) {
    super(marca, modelo, ano);
  }

  descricao() {
    return `Moto: ${this.marca} ${this.modelo} - Ano ${this.ano}`;
  }
}

function imprimirDescricao(veiculo) {
  if (!(veiculo instanceof Veiculo)) {
    throw new Error("O parâmetro deve ser um objeto do tipo Veiculo.");
  }

  console.log(veiculo.descricao());
}

const carro1 = new Carro("Volkswagen", "Polo", 2018);
const moto1 = new Moto("Honda", "biz", 2021);

imprimirDescricao(carro1);
imprimirDescricao(moto1);