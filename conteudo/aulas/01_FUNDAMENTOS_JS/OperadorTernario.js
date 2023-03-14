const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'

console.log(resultado(7.1))
console.log(resultado(6.7));

/* Operador ternário é retornar um dos dois valores, e pode ser armazenado em uma constante ou
retornar como o resultado de uma função
*/
/* Ele é composto por 3 partes...
1. Expressão (nota >= 7)
2. Valor que vai ser retornado se for verdadeiro ('APROVADO').
3. Valor que vai ser retornado se for falso ('Reprovado').
*/