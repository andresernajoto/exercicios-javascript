const sorteio = num => {
    let numAleatorio = Math.floor(Math.random() * num + 1)
    
    if (numAleatorio == num) {
        return console.log(`Parabéns! O número ${num} foi sorteado`)
    } else {
        return console.log(`Que pena! O número ${numAleatorio} foi sorteado`)
    }
}

sorteio(10)
sorteio(5)