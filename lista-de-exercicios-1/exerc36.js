// Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
// inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
// elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
// o valor do elemento for maior que 5.

function multiplicaVetor(vetorNumerico, valorInteiro) {
    let vetorFinal = []
    let resultadoMultiplicacao = 0

    for (let i = 0; i < vetorNumerico.length; i++) {
        resultadoMultiplicacao = vetorNumerico[i] * valorInteiro
        vetorFinal.push(resultadoMultiplicacao)
    }
    return vetorFinal
}

function multplicaSeMaiorQue5(vetorNumerico, valorInteiro) {
    let vetorFinal = []
    let resultadoMultiplicacao = 0
    
    for (let i = 0; i < vetorNumerico.length; i++) {
        if (vetorNumerico[i] > 5) {
            resultadoMultiplicacao = vetorNumerico[i] * valorInteiro
            vetorFinal.push(resultadoMultiplicacao)
        } else {
            console.log(`Elemento #${i} possui valor menor que 5!`)
        }
    }

    return vetorFinal
}

console.log(`Resultado da primeira função: ${multiplicaVetor([5, 2, 26], 7)}\n`)
console.log(`Resultado da segunda função: ${multplicaSeMaiorQue5([4, 14, 26], 7)}`)