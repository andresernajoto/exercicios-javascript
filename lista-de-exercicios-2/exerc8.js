const multiplicacao = (num1, num2) => {
    let calcularMultiplicacao = 0
    
    for (i = 0; i < num2; i++) {
        calcularMultiplicacao += num1
    }

    return console.log(calcularMultiplicacao)
}

multiplicacao(5, 5)
multiplicacao(0, 7)