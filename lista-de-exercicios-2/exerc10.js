const quantoMais = numDeRepeticao => {
    let resultadoFinal = ''

    for (let i = 0; i < numDeRepeticao; i++) {
        resultadoFinal += '+'
    }

    return console.log(resultadoFinal)
}

quantoMais(2)
quantoMais(4)