const maiorNumero = (num1, num2) => {
    if (num1 > num2) {
        return console.log(`${num1} é maior que ${num2}`)
    } else if (num2 > num1) {
        return console.log(`${num2} é maior que ${num1}`)
    } else {
        return console.log('Os números são iguais')
    }
}

maiorNumero(7, 2)
maiorNumero(3, 4)
maiorNumero(26, 26)