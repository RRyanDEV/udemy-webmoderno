const notas = [5, 7, 8, 6, 20, 24, 30, 90];

// Sem Callback
const notasBaixas = [];
for (let i in notas) {
  if (notas[i] < 10) {
    notasBaixas.push(notas[i]);
  }
}
console.log(notasBaixas);

// Com Callback
const notasBaixas2 = notas.filter(function (nota) {
  return nota < 10;
});
console.log(notasBaixas2);

// Com Arrow Function
const notasBaixas3 = notas.filter(nota => nota < 10)
console.log(notasBaixas3)