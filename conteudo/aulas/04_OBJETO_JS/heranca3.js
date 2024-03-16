const pai = {
  nome: "Pedro",
  corCabelo: "Preto",
};

const filha1 = Object.create(pai);
filha1.nome = "Ana";
console.log(filha1.corCabelo);

const filha2 = Object.create(pai, {
  nome: { value: "Luiza", writable: false, enumerable: true },
});

console.log(filha2.nome);
filha2.nome = "Amanda" // Não vai ser substituido, pois o valor está "trancado". 
console.log(Object.keys(filha2));

for (let key in filha1) {
    filha2.hasOwnProperty(key) ? console.log(key) : console.log(`Por Herança ${key}`)
}
