console.log(5 > 3 && 3 == 2); // False
console.log(5 > 3 || 3 == 1); // True

console.log(3 === 3 && "Ryan" == "Ryan"); // True
console.log("Betina" == "Ryan" || false); // False

console.log(!(!(true && true))); // True
console.log(false || false); // False

//  && - and (So retorna TRUE se ambos lados forem true)
//  || - or  (Se retorna FALSE se ambos lados forem false)
//  ! - not  (Retorna sempre o contrário (True - False / False - True) )

function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete

    return{comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}
}

console.log(compras(true,true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))