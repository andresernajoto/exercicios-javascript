const segundoMaior = vetor => {
    let maior = 0, segundo = 0

    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] > maior) {
            maior = vetor[i]
        } else {
            for (let j = 0; j < vetor.length; j++) {
                if (vetor[j] > segundo && vetor[j] < maior) {
                    segundo = vetor[j]
                }
            }
        }
    }

    return console.log(segundo)
}

segundoMaior([12, 16, 1, 5])
segundoMaior([8, 4, 5, 6])