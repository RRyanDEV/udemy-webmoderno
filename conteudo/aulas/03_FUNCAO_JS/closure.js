// Escopo criado quando uma funçåo é declarada
// Esse escopo permite a funçåo acessar e manipular variáveis externas á funçåo

// Contexto Léxico em açåo
const x = 'global'

function fora(){
    const x = 'local'
    function dentro(){
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())