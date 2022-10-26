const somentePares = num => {
    let resultadoFinal = []

    for (let i = 0; i < num.length; i++) {
        if (num[i] % 2 == 0 && i % 2 == 0) {
            resultadoFinal.push(num[i])
        }
    }

    return console.log(resultadoFinal)
}

somentePares([1, 2, 3, 4])
somentePares([10, 70, 22, 43])