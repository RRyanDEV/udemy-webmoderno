// Pessoa -> 456 -> {...}

const pessoa = {
  nome: "Ryan",
};
pessoa.nome = "Pedro";
console.log(pessoa)

Object.freeze(pessoa) // Não consigo mais maninulpar o objeto

pessoa.nome = 'Maria'
console.log(pessoa)

const pessoaConstante = Object.freeze({nome: 'Lucas'}) // Nem a variavel nem o Objeto podem ser mudados.
pessoaConstante.nome = 'Joyce'
console.log(pessoaConstante)