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

// Transformando em Função Construtora

function CriarPessoa(nome){
    this.nome = nome

    this.falar = function(){
        console.log(`Meu nome é ${this.nome}`)
    }
}
const p2 = new CriarPessoa('Lucas')
p2.falar