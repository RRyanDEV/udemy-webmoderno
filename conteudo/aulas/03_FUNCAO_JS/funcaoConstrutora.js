function Carro(velocidadeMax = 200, delta = 5) {
  // Atributo Privado(So pertecente a Função)
  let VelocidadeAtual = 0;

  // Metodo Publico(Pode ser visto fora da função) - Ex01
  this.acelerar = function () {
    if (VelocidadeAtual + delta <= velocidadeMax) {
      VelocidadeAtual += delta;
    } else {
      VelocidadeAtual = velocidadeMax;
    }
  };

  // Metodo Publico - Ex02
  this.getVelocidadeAtual = function () {
    return VelocidadeAtual;
  };
}

const FiatMobi = new Carro(); //Sem Paramêtros, usa o setado na função
FiatMobi.acelerar();
console.log("Trem Padrão", FiatMobi.getVelocidadeAtual());

const Agile = new Carro(250, 30);
Agile.acelerar();
Agile.acelerar();
console.log("Trem Rapido", Agile.getVelocidadeAtual());
