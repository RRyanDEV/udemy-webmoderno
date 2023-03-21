// Switch é uma seleção múltipla
// Não é uma expressão relacional
const imprimirResultado = function (nota) {
  switch (Math.floor(nota)) {
    case 10:
    case 9:
      console.log("Quadro de Honra");
      break; // Palavra reservada, usada para sair do bloco relacionado ao switch.
    case 8:
    case 7:
      console.log("Aprovado");
      break;
    case 6:
    case 5:
    case 4:
      console.log("Recuperação");
      break;
    case 3:
    case 2:
    case 1:
    case 0:
      console.log("Reprovado");
      break;
    default:
      console.log("Nota Inválida");
  }
};

console.log("----");
imprimirResultado(9.55);
console.log("----");
imprimirResultado(7.3);
console.log("----");
imprimirResultado(6.0);
console.log("----");
imprimirResultado(2.55);
console.log("----");
imprimirResultado(11);
