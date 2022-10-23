const vetorDeNumeros = vetor => {
    const filtrarPorNumero = valor => { if (typeof valor == 'number' && valor > 0) { return true} }
    let vetorFinal = vetor.filter(filtrarPorNumero)

    return console.log(vetorFinal)
}

vetorDeNumeros(['Javascript', 1, '3', 'web', 20])
vetorDeNumeros(['a', 'c'])