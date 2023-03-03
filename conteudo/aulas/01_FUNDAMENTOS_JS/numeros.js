const peso1 = 1.0
const peso2 = Number('2.0');

// Em JS,type NUMBER engloba tanto numeros inteiros quanto para quebrados.

console.log(peso1, peso2);
console.log(Number.isInteger(peso1))

const avaliacao1 = 9.871
const avaliacao2 = 6.871
const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2);

console.log(media.toFixed(2));
console.log(media.toString(2)); //Em Binário

// ToFixed, serve para limitar os type NUMBER apenas nas 2 casas decimais.
// Para dados type NUMBER, existem varias funções que podem ser usadas. (Foi usado somente o toFixed e toString como exemplos.)