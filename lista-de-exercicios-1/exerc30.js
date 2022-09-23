// Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.

let vetorInteiros = [3, 56, 7, 21, 65, 1, 45, 2]
let maior = 0
let menor = 0

for (let i = 0; i < vetorInteiros.length; i++) {
    if (vetorInteiros[i] > maior) {
        maior = vetorInteiros[i]
    }

    if (vetorInteiros[i] < menor) {
        menor = vetorInteiros[i]
    }
}

console.log(`O maior valor encontrado é ${maior}`)
console.log(`O menor valor encontrado é ${menor}`)