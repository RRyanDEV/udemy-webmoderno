const soma = function(x , y){
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma){
    console.log(operacao(a , b))
}
imprimirResultado(3 , 4)

const pessoa = {
    falar: function(){
        console.log('puta')
    }
}

pessoa.falar