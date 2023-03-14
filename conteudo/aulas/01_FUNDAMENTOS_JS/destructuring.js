// Novo recurso do ES2015
const Pessoa = {
    nome: 'Paulo',
    idade: 53,
    endereco: {
        logradouro: 'Vila Suissa',
        numero: 100
    }
}

const { nome, idade } = Pessoa // Ta sendo tirado de dentro da variavél pessoa, apenas o Nome e a Idade.
console.log(nome, idade);

const { nome: NewName, idade: NewAge } = Pessoa // Assim ta sendo substituido o nome da variavel
console.log(NewName, NewAge);

const { sobrenome, BemHumorado = true } = Pessoa // Sobrenome = Undefined porque não foi declarado
console.log(sobrenome, BemHumorado)             // BemHumorado = De forma padrão, se não achar a variavel, responde como verdadeiro

const {endereco: {logradouro, numero, cep} } = Pessoa
console.log(logradouro, numero, cep)

// Destructuring no Array
const [a] = [10]
console.log(a)

const [n1,,n3,,n5,n6 = 0] = [10, 7 , 8 , 9]
console.log(n1,n3,n5,n6)

function rend([min = 0, max = 1000]){
    if (min > max) [min,max] = [max, min]
    const value = Math.random() * (max - min) + min
    return Math.floor(value)
}
console.log(rend([50, 40]))

// Destructuring em Função
function rand({ min = 0, max = 1000}){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
} // Foi passando um obejto dentro da função, e dentro da função ja retira os dois atributos.
const obj = {max: 50, min:40}
console.log(rand(obj))
console.log(rand({min: 955}))
console.log(rand({}))
