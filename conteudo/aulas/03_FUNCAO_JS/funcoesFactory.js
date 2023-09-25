// Funções Factory retornam um Objeto.
// Cria novos Objetos, apartir de uma função.

const prod1 = { // Exemplo Padrão
    nome: 'MEU MAC',
    valor: 4200
} 

// Factory Simples
function criarPessoa(){
    return{
        nome: 'Ryan',
        sobrenome: 'Gomes'
    }
}

// Factory Editavel
function CriarProduto(nome, preco){
    return{
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(CriarProduto('MEU MAC' , 4200))
console.log(CriarProduto('MEU IPHONE', 2100))