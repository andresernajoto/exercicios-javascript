const unidade = valor => {
    if (valor > 0 && valor < 10) {
        return true
    } else {
        return false
    }
}

const dezena = valor => {
    if (valor > 9 && valor < 100) {
        return true
    } else {
        return false
    }
}

const centena = valor => {
    if (valor > 99 && valor < 1000) {
        return true
    } else {
        return false
    }
}

const qtdDeDigitos = (vetor, qtd = 1) => {
    let vetorFinal = []

    for (let i = 0; i < vetor.length; i++) {
        switch(qtd) {
            case 1:
                if (unidade(vetor[i]) == true) {
                    vetorFinal.push(vetor[i])
                }
                break
            case 2:
                if (dezena(vetor[i]) == true) {
                    vetorFinal.push(vetor[i])
                }
                break
            case 3:
                if (centena(vetor[i] == true)) {
                    vetorFinal.push(vetor[i])
                    break
                }
            default:
                return console.log('Valor inválido')
        }
    }

    return console.log(vetorFinal)
}

qtdDeDigitos([38, 2, 365, 10, 125, 11], 2)
qtdDeDigitos([5, 9, 1, 125, 11], 1)