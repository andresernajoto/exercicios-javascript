const calculaMedia = notas => {
    let somador = 0
    for (let i = 0; i < notas.length; i++) {
        somador += notas[i]
    }

    let divisor = somador / notas.length

    return divisor
}

const melhorEstudante = alunos => {
    let media = 0, maiorMedia = 0
    let resultadoFinal = {}
    let nomeDoAluno = ''

    let encontraMelhorAluno = Object.entries(alunos).forEach(e => {      
        media = calculaMedia(e[1])

        if (media > maiorMedia) {
            maiorMedia = media
            nomeDoAluno = e[0]
        }
    })

    Object.defineProperties(resultadoFinal, {
        'nome': {
            enumerable: true,
            value: nomeDoAluno
        }, 'media': {
            enumerable: true,
            value: maiorMedia
        }
    })

    return console.log(resultadoFinal)
}

melhorEstudante({
    Joao: [8, 7.6, 8.9, 6],
    Mariana: [9, 6.6, 7.9, 8],
    Carla: [7, 7, 8, 9]
})