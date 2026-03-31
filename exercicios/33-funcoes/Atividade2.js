//Crie uma função processarIdade que receba um número e um callback. A função deve:
//Lançar um erro se a idade for negativa ou maior que 120.
//Chamar o callback com a idade se for válida.
//Teste passando callbacks diferentes: um que exibe se a pessoa é maior de idade, outro que calcula o ano de nascimento aproximado.

function processarIdade(idade, callback) {
  if (idade < 0 || idade > 120) {
    throw new Error("TU NÂO TEM ISSO NÂO");
  }
  callback(idade);
}

function exibirResultado(idade) {
  const AnoNascimento = 2026 - idade;
  const situacao = idade >= 18 ? "Ta Velho meu parceiro" : "Calma jovem, lhe falta idade";
  console.log(`Você tem nasceu em ${AnoNascimento} tem ${idade} anos ${situacao}`);
}

processarIdade(18, exibirResultado);
processarIdade(8, exibirResultado);
processarIdade(121, exibirResultado);
