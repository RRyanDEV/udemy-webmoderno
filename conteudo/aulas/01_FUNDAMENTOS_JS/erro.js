function tratarErroElancar(erro){
    throw{
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

// Try é um bloco q pode gerar um tipo de erro, e atraves do Catch pode ser tratado esse erro.
// Finally mesmo que tenha erros ou não, sempre será lido
// Throw lança uma exceção definida pelo usuário.

function imprimirNomeGritado(obj){
try{
    console.log(obj.name.toUpperCase() + '!!!');
} catch (e){
    tratarErroElancar(e)
} finally{
    console.log("Final");
}
}

const obj = { name: 'Ryan' }
imprimirNomeGritado(obj)