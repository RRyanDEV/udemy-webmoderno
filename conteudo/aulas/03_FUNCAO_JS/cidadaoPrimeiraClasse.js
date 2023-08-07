// Função em JS é First-Class Object (Citizens)
// Higher-order function

// Criar de forma literal
function fun1() {}
// O retorno de uma função é opção, não sendo obrigatório a colocar algo na função.
// Caso não colocar nada na função SEMPRE resultará em Undefined

// Armazenar uma função em variável
const fun2 = function () {};

// Armazenar em um array
const array = [
  function (a, b) {return a + b},
  fun1,
  fun2,
];
console.log(array[0] (2,3))

// Armazenar em um atributo de Objeto
const obj = {}
obj.falar = function () {return 'Olá'}
console.log(obj.falar())

// Uma Função pode retornar/conter uma Função
function soma(a, b){
    return function(c){
        console.log(a + b + c)
    }
}
soma(2, 3) (4)