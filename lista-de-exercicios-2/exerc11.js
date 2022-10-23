const primeiroUltimo = vetor => {
    let resultadoFinal = []

    resultadoFinal.push(vetor[0], vetor[vetor.length - 1])
    
    return console.log(resultadoFinal)
}

primeiroUltimo([7, 4, 'Olá'])
primeiroUltimo([-100, 'aplicativo', 16])