function soBoaNoticia(nota) {
    if(nota >= 7){
        console.log("Que noticia boa")
    }
}
soBoaNoticia(8.1)
soBoaNoticia(6.0)

function seForVerdadeEuFalo(valor){
    if(valor) {
        console.log('É verdade...' + valor)
    }
}
seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo('?')