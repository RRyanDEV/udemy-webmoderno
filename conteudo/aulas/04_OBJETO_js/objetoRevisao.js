// Coleção dinâmica de pares chave/valor.

const produto = new Object

produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generico'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'Audi',
    valor: 100000,
    proprietario: {
        nome: 'Walter',
        idade: 36,
        endereco: {
            logradouro: 'Avenida Brasil',
            numero: 2530
        }
    },
    condutor: {
        nome: "Ryan",
        idade: 20
    },
    calcularValorSeguro: function(){
        // ...
    }
}

carro.proprietario.endereco.numero = 2000
carro['proprietario']['endereco']['logradouro'] = 'Aspirante Maso'

console.log(carro)
delete carro.calcularValorSeguro
console.log(carro)