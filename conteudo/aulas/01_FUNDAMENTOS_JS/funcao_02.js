// Armazenando uma função em uma variavel

const imprimirSoma = function(a, b){
    console.log(a + b)
}
imprimirSoma(10, 30)

// Armazenando uma função arrow em uma variavel
const soma = (a, b) => {
    return a + b
}
console.log(soma(30, 5))

// Retorno Implícito
const subtracao = (a, b) => a - b
console.log(subtracao(35, 5))