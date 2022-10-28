const contadorDeCaractere = (caractere, frase) => {
    const separador = frase.split('')
    let contador = 0

    for (let i = 0; i < frase.length; i++) {
        if (separador[i] == caractere) {
            contador++
        }
    }

    return console.log(contador)
}

contadorDeCaractere('r', 'A sorte favorece os audazes')
contadorDeCaractere('c', 'Conhece-te a ti mesmo')