const repeticao = (valor, quantDeRepeticao) => {
    let resultadoFinal = []
    
    for (let i = 0; i < quantDeRepeticao; i++) {
        resultadoFinal.push(valor)
    }

    return console.log(resultadoFinal)
}

repeticao('código', 2)
repeticao(7, 3)