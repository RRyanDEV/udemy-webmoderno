// 1. Função agrupa várias sentenças de código, ou uma sentença ou nenhuma.
console.log(typeof Object)

// Função sem retorno
function imprimirSoma(a, b){
    console.log(a + b);
}

imprimirSoma(2, 3)
imprimirSoma(2) // Quando é dado apenas um valor para a função, o segundo valor vai ser Undefined, resultando em um NaN.
imprimirSoma(2, 3, 5, 7,) // Se for dado mais de um valor, a função pegará somente os dois primeiros.

// Função com retorno
function soma(a, b = 3){
    return a + b
}

console.log(soma(2))