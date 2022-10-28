const menorValor = vetor => {
    let max = 0, min = 0

    for (let i = 0; i < vetor.length; i++) {   
        if (vetor[i] > max) {
            max = vetor[i]
        } else {
            min = vetor[i]

            if (min < 0) {
                return console.log(min)
            }
        }        
    }

    return console.log(min)
}

menorValor([10, 5, 35, 65])
menorValor([5, -15, 50, 3])