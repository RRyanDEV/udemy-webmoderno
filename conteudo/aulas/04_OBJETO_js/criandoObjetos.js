// Usando a notação literal

const obj1 = {
  // ...
};
console.log(obj1);

// Object em JS
console.log(typeof Object, typeof new Object());
const obj2 = new Object();
console.log(obj2);

// Função Construtora
function Produto(nome, valor, desc) {
  this.nome = nome;
  this.getPrecoComDesconto = () => {
    return valor * (1 - desc);
  };
}

const p1 = new Produto("Caneta", 7.99, 0.15);
const p2 = new Produto("MEU MAC", 4200, 0.25);

console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto());

// Função Factory
function criarFuncionario(nome, salario, faltas) {
  return {
    nome,
    salario,
    faltas,
    getSalario() {
      return (salario / 30) * (30 - faltas);
    },
  };
}

const f1 = criarFuncionario("Ryan", 7000, 6);
const f2 = criarFuncionario("Dex", 9000, 4);
console.log(f1.getSalario(), f2.getSalario());

// Object.create
const filho = Object.create(null);
filho.nome = "Joaquim";
console.log(filho);

// Retona Objeto a partir de um JSON
const fromJSON = JSON.parse('{"info": "Sou um JSON"}');
console.log(fromJSON.info);
