class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }
  falar() {
    console.log(`Meu nome é ${this.nome}`);
  }
}
const p1 = new Pessoa("Carlos");
p1.falar();

const CriarPessoa = (nome) => {
  return {
    falar: () => console.log(`Meu nome é ${nome}`),
  };
};
const p2 = CriarPessoa("Flávio");
p2.falar();
