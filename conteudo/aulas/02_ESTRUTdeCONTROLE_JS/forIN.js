const notas = [6.7, 7.4, 9.8, 8.1, 7.1];

for(let i in notas){
    console.log(i, notas[i]);
}

const pessoa = {
    nome: 'Ryan',
    sobrenome: 'Gomes',
    idade: 20,
    peso: 75
}

for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`);
}

// Sempre lembrar de por o let para o indice não ficar fora do laço for.