// Forma antes do ECMAScript 2015
function soma(){
    let soma = 0
    for(i in arguments){
        soma += arguments[i]
    }
    return soma
}
console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3))
console.log(soma('a', 'b', 'c'))

// É possivel passar parâmetros variaveis
// No caso de se usar strings, ele contatena os valores
// Possui um operador para esse tipo de função... (será visto em breve).