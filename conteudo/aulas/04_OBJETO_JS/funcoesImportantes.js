const pessoa = {
  nome: "Ryan",
  idade: 20,
  peso: 13,
};
console.log(Object.keys(pessoa));
console.log(Object.values(pessoa));
console.log(Object.entries(pessoa));

Object.defineProperty(pessoa, "dataNascimento", {
  enumerable: true,
  writable: false,
  value: "08/09/2003",
});

pessoa.dataNacimento = "01/01/2017"; // Valor ja foi setado na função, impedindo sua altereção
console.log(pessoa.dataNacimento);
console.log(Object.keys(pessoa));

// Object.assign

const dest = {a:1}
const o1 = {b:2}
const o2 = {c:3 , a:4}
const objt = Object.assign(dest, o1,o2)
console.log(objt)