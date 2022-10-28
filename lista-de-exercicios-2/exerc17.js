const somarNums = vetor => {
    let resultadoFinal = []
    let soma = 0

    for (let i = 0; i < vetor.length; i++) {
        soma += vetor[i]
    }

    return console.log(soma)
}

somarNums([10, 10, 10])
somarNums([15, 15, 15, 15])