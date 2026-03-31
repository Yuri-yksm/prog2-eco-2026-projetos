//Crie uma função apresentar que receba nome, curso e de>semestre (padrão: 1) e retorne uma string formatada com template literal. Exemplos de saída esperada:

//apresentar("Ana", "Eng. Computação", 3) → "Ana – Eng. Computação – 3º semestre"
//apresentar("João", "Eng. Computação") → "João – Eng. Computação – 1º semestre"

function apresentar(nome, materia, semestre = "1") {
  return `${nome}, ${materia}, ${semestre}`;
}

console.log(apresentar("Ana", "Eng. Computação", 3));


console.log(apresentar("João", "Eng. Computação"));