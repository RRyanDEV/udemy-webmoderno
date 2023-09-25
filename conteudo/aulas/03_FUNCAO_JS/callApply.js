function getPreco(imposto = 0, moeda = "R$") {
  return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`;
}

const prod1 = {
  nome: "MEU MAC",
  preco: 4200,
  desc: 0.25,
  getPreco,
};

global.preco = 20;
global.desc = 0.1;
console.log(getPreco());
console.log(prod1.getPreco());

const carro = {
  preco: 13000,
  desc: 0.2,
};
// console.log(getPreco.call(carro))
// console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.17, "R$")); // Nesse caso passa por todos os paramêtros, o primeiro sempre será o Contexto.
console.log(getPreco.apply(global, [0.17, "R$"])); // Nesse caso os paramêtros TEM QUE estar dentro do array.
