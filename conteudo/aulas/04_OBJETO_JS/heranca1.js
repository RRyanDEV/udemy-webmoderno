const chevrolet = {
  modelo: "Astra",
  velMax: 324,
};

const fiat = {
  modelo: "Mobi",
  velMax: 300,
};

// {{prototype}} != prototype

console.log(chevrolet.__proto__); // Ele tenta acessar algum atributo de `Chevrolet`, e caso não for encontrado, ele busca dentro do protótipo "pai". Ele só retorna valor, se achar o atributo dentro da cadeia de protótipos.

console.log(chevrolet.__proto__ === Object.prototype);
console.log(fiat.__proto__ === Object.prototype);

