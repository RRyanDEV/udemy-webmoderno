// Cadeia de protótipos (prototype chain)

Object.prototype.attr0 = "0"; // Removendo esse atributo de `Object.prototype`, resulta em 'undefined'. (NÃO É RECOMENDADO FAZER)
const avo = { attr1: "A" };
const pai = { __proto__: avo, attr2: "B" };
const filho = { __proto__: pai, attr3: "C" };
/* 

O filho tem como protótipo o Pai
O Pai tem como protótipo o Avo
E o Avo tem o `Object.prototype`, pois ele é o superior aos outros.

*/
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3);

const carro = {
  velAtual: 0,
  velMax: 200,

  acelerarMais(delta) {
    if (this.velAtual + delta <= this.velMax) {
      this.velAtual += delta;
    } else {
      this.velAtual = this.velMax;
    }
  },
  status() {
    return `${this.velAtual}Km/h de ${this.velMax}Km/h`;
  },
};

const chevrolet = {
  modelo: "Astra",
  velMax: 324, // Shadowing(Sombreamento): Ela serve para sobrescrever o atributo original de escopos mais abrangentes.
};

const fiat = {
  modelo: "Mobi",
  status() {
    return `${this.modelo}: ${super.status()}`;
    // Super: Para referenciar protótipos.
  },
};

Object.setPrototypeOf(chevrolet, carro); // Estabelece uma relação de protótipos entre dois objetos.
Object.setPrototypeOf(fiat, carro);

// console.log(chevrolet);

fiat.acelerarMais(100);
console.log(fiat.status());

chevrolet.acelerarMais(300);
console.log(chevrolet.status());
