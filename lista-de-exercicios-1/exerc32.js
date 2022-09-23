// Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.

let vetorDeInteiros = [2, 4, 6, 8, 12, 93, 56, 1, 26]
let soma = 0, media = 0

for (let i = 0; i < vetorDeInteiros.length; i++) {
    soma += vetorDeInteiros[i]
}

media = soma / vetorDeInteiros.length

console.log(`A média aritmética do array é ${media.toFixed(2)}`)