// Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
// deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos 
// deles estão fora do intervalo, escrevendo estas informações.

let vetorCompleto = []
let contadorDentro = 0
let contadorFora = 0

for (let i = 0; i < 32; i++) {
    vetorCompleto.push(i)

    if (vetorCompleto[i] >= 10 && vetorCompleto[i] <= 20) {
        contadorDentro++
    } else {
         contadorFora++
    }

}

console.log(`Existem ${contadorDentro} dentro do intervalo [10, 20]`)
console.log(`Existem ${contadorFora} fora do intervalo [10, 20]`)