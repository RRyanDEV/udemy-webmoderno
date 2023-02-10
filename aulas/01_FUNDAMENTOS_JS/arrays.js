// Array serve para agrupar multiplos valores de uma forma linear.
// Array é uma estrutura indexável, partindo sempre do index 0.

const valores = [7.7, 8.9, 6.4, 9.2,]

console.log(valores[0], valores[3])
console.log(valores[4]) // Quando se tentar acessar um valor que não exite no Array, ele vai responder como undefined.

valores[4] = 10
console.log(valores)
console.log(valores.length) // Acessa a quantidade de elementos dentro de um Array.

valores.push(3, false, null, 'teste') // Adiciona novos elementos dentro de um Array.
console.log(valores)

console.log(valores.pop()) // Ele pega o ultimo valor do Array, e retira do Array.
console.log(valores)
delete valores[0] // Serve para tirar qualquer valor de dentro do Array.
console.log(valores)

console.log(typeof valores); // Array é tipo Object.