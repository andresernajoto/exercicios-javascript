// Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
// aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
// aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
// "REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo

function calculoDaMedia(codigo, nota1, nota2, nota3) {
    let mediaPonderada = 0
    let situacao = avaliandoSituacao(mediaPonderada)
    
    if (nota1 > nota2 && nota1 > nota3) {
        mediaPonderada = (nota1 * 4 + nota2 * 3 + nota3 * 3) / (1 + 2 + 3)
        situacao = avaliandoSituacao(mediaPonderada)
    } else if (nota2 > nota3 && nota2 > nota1) {
        mediaPonderada = (nota1 * 3 + nota2 * 4 + nota3 * 3) / (1 + 2 + 3)
        situacao = avaliandoSituacao(mediaPonderada)
    } else {
        mediaPonderada = (nota1 * 3 + nota2 * 3 + nota3 * 4) / (1 + 2 + 3)
        situacao = avaliandoSituacao(mediaPonderada)
    }

    return imprimirResultadoFinal(codigo, nota1, nota2, nota3, mediaPonderada, situacao)
}

function avaliandoSituacao(mediaPonderada) {
    if (mediaPonderada >= 5) {
        return 'Aprovado!'
    } else {
        return 'Reprovado!'
    }
}

function imprimirResultadoFinal(codigo, nota1, nota2, nota3, mediaPonderada, resultado) {
    return console.log(`Código do aluno: ${codigo}\nNota 1: ${nota1}\nNota 2: ${nota2}\nNota 3: ${nota3}\nMédia Ponderada: ${mediaPonderada.toFixed(2)}\nSituação final: ${resultado}\n`)
}

calculoDaMedia(0, 2, 1, 4) // reprovado
calculoDaMedia(5, 6, 3, 0.5) // aprovado
calculoDaMedia(-2, 5, 10, 9) // aprovado

// DETALHE: não foi feito o while para parar em código negativo pois os valores passadas não são digitados