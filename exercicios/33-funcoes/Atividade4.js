//Crie uma função criarSaudacao que receba um idioma ("pt", "en" ou "es") e retorne uma função que, ao receber um nome, exiba a saudação no idioma correto. Exemplo:
//const saudarEmPortugues = criarSaudacao("pt");
//const saudarEmIngles    = criarSaudacao("en");
//saudarEmPortugues("Ana");  // Olá, Ana!
//saudarEmIngles("Ana");     // Hello, Ana!

function criarSaudacao(fator) {
  return function(nome) {
    if (fator === "pt") {
      return `Olá, ${nome}!`;
    } else if (fator === "en") {
      return `Hello, ${nome}!`;
    } else if (fator === "es") {
      return `Ola que tal, ${nome}!`;
    }
  };
}

const saudarEmPortugues = criarSaudacao("pt");
const saudarEmIngles    = criarSaudacao("en");
const saudarEmEspanhol  = criarSaudacao("es");

console.log(saudarEmPortugues("Ana"));
console.log(saudarEmIngles("Ana"));
console.log(saudarEmEspanhol("Ana"));