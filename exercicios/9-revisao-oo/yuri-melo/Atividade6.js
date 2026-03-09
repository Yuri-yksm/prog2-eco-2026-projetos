class Calculadora {
  somar(a, b) {
    return a + b;
  }
  subtrair(a, b) {
    return a - b;
  }
  multiplicar(a, b) {
    return a * b;
  }
  dividir(a, b) {
    if (b === 0) {
      throw new Error("Não é possível dividir por zero.");
    }
    return a / b;
  }
}
const calc = new Calculadora();
console.log(calc.somar(10, 5));
console.log(calc.subtrair(10, 5));
console.log(calc.multiplicar(10, 5));
console.log(calc.dividir(10, 5));