let isTrue = true
let isFalse = false

console.log(isTrue);
console.log(isFalse);


// Todos resultados Falsos, apareceram como Boolean no console.

// Comparações
console.log(10 > 2);                      // Maior que >
console.log(typeof (10 < 2));             // Menor que <
console.log(10 >= 9);                     // Maior Igual >=
console.log(typeof (10 <= 9));            // Menor Igual <=
console.log(typeof (5==10));              // Igual a ==
console.log(typeof ("Ryan" != "Ryan"));   // Diferente != 
console.log(typeof (3 === '3'));          // Idêntico ===
console.log(4 === 4);

//Operadores Lógicos (Exemplos)
console.log(5 > 3 && 3 == 2); // False
console.log(5 > 3 || 3 == 1); // True

console.log(3 === 3 && "Ryan" == "Ryan"); // True
console.log("Betina" == "Ryan" || false); // False

console.log(!(!(true && true))); // True
console.log(false || false); // False
//  && - and (So retorna TRUE se ambos lados forem true)
//  || - or  (Se retorna FALSE se ambos lados forem false)
//  ! - not  (Retorna sempre o contrário (True - False / False - True) )

// Operador Ternário
console.log(5 > 2 ? "É sim" : "É não");
console.log(false ? 5 : 4);
console.log("Ryan" == "Ryan" ? "Olá, Gatenha" : "Vá embora vinhado");