// Arrow sempre é uma função anônima
// Ela sempre tem que estar armazenada em uma variável.

let dobro = function (a) {
  return 2 * a;
};

dobro = (a) => {
  return 2 * a;
};

dobro = a => 2 * a // Retorno implícito
console.log(dobro(Math.PI))

let ola = function() {
    return 'CU'
}

ola = () => 'Olla'
ola = _ => 'Olla' // Possui apenas um parâmetro
console.log(ola())