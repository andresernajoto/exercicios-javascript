const mediaSimples = vetor => {
    const somaValores = (acumulador, valor) => acumulador + valor

    let resultadoFinal = vetor.reduce(somaValores) / vetor.length

    return console.log(resultadoFinal)
}

mediaSimples([0, 10])
mediaSimples([1, 2, 3, 4, 5])