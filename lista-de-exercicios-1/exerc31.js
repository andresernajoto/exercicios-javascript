// Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
// e imprime a quantidade no console.

let vetorDeInteiros = [-2, 4, 6, 8, -12, -93, 56, -1, 26]
let contador = 0

for (let i = 0; i < vetorDeInteiros.length; i++) {
    if (vetorDeInteiros[i] < 0) {
        contador++
    }
}

console.log(`A quantidade de vezes que teve um número negativo foi ${contador}`)