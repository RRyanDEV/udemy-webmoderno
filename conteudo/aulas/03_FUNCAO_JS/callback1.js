const fabricantes = ["VW" , "Chevrolet" , "Honda"]

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)

fabricantes.forEach(function(a){
    console.log(a)
})