// Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.

let vetorParesEImpares = []
let contadorPar = 0
let contadorImpar = 0

for (let i = 0; i < 21; i++) {
    vetorParesEImpares.push(i)
    
    if (vetorParesEImpares[i] % 2 == 0) {
        contadorPar++
    } else {
        contadorImpar++
    }
}

console.log(`Existem ${contadorPar} pares e ${contadorImpar} ímpares`)