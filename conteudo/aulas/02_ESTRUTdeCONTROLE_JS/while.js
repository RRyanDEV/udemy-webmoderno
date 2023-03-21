// Se a expressão der falso, ele não entra no While.
// While executa uma quantidade inderteminada de vezes, ou não executa nenhuma.
// Estrutura de repetição baseada em verdadeiro e falso.
// Enquanto for verdeiro fica rodando, quando resultar falso, ela sai do laço.
function getInteiroAleatorioEntre(min, max) {
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor);
}

let opcao = 0;

while (opcao != -1) {
  opcao = getInteiroAleatorioEntre(-1, 10);
  console.log(`Opção escolhida foi ${opcao}.`);
}
console.log("Até a próxima!");
