const buscarPalavras = (palavra, vetor) => {
    let resultadoFinal = []
    
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i].indexOf(palavra) == 0) {
            resultadoFinal.push(vetor[i])
        }
    }

    return console.log(resultadoFinal)
}

buscarPalavras('pro', ['programação', 'mobile', 'profissional'])
buscarPalavras('python', ['javascript', 'java', 'c#'])