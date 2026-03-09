// Classe base Pagamento

class Pagamento {
  constructor(valor) {
    if (typeof valor !== "number" || valor <= 0) {
      throw new Error("Valor do pagamento deve ser positivo.");
    }

    this.valor = valor;
  }

  processar() {
    throw new Error("Método processar() deve ser implementado pela subclasse.");
  }
}

class PagamentoCartao extends Pagamento {
  constructor(valor, numeroCartao) {
    super(valor);

    if (!numeroCartao) {
      throw new Error("Número do cartão é obrigatório.");
    }

    this.numeroCartao = numeroCartao;
  }

  processar() {
    console.log(
      `Pagamento de R$ ${this.valor.toFixed(2)} realizado com cartão final ${this.numeroCartao.slice(-4)}.`
    );
  }
}

class PagamentoPix extends Pagamento {
  constructor(valor, chavePix) {
    super(valor);
    if (!chavePix) {
      throw new Error("Chave Pix é obrigatória.");
    }
    this.chavePix = chavePix;
  }
  processar() {
    console.log(
      `Pagamento de R$ ${this.valor.toFixed(2)} realizado via Pix para a chave ${this.chavePix}.`
    );
  }
}
class PagamentoBoleto extends Pagamento {
  constructor(valor, codigoBoleto) {
    super(valor);
    if (!codigoBoleto) {
      throw new Error("Código do boleto é obrigatório.");
    }
    this.codigoBoleto = codigoBoleto;
  }
  processar() {
    console.log(
      `Pagamento de R$ ${this.valor.toFixed(2)} gerado via boleto. Código: ${this.codigoBoleto}`
    );
  }
}

function pagar(pagamento) {
  if (!(pagamento instanceof Pagamento)) {
    throw new Error("O parâmetro deve ser um objeto do tipo Pagamento.");
  }
  pagamento.processar();
}

const pagamento1 = new PagamentoCartao(150, "18061806");
const pagamento2 = new PagamentoPix(80, "yuri@email.com");
const pagamento3 = new PagamentoBoleto(200, "123456789");
pagar(pagamento1);
pagar(pagamento2);
pagar(pagamento3);