// Par de {} é a forma literal de criar um objeto. 
// Objeto é uma coleção de chave de valores.
// Dentro de um objeto só pode ter somente um nome de identificador único.

const prod1 = {};
// Um objeto vazio, pode receber difinições dinâmicamente.
prod1.nome = 'iPhone 11'
prod1.preco = 5000
prod1['Desconto Legal'] = 0.40 // Evitar atributos com espaço.

console.log(prod1);

const prod2 = {
    Nome: 'Camisa Polo',
    Preco: 80,
}

console.log(prod2)