const inverso = valor => {
    if (valor == true) {
        return console.log('false')
    }
    else if (valor > 0 || valor < 0) {
        return console.log(valor * (-1))
    } else {
        return console.log('true')
    }
}

inverso(5)
inverso(-3)
inverso(true)
inverso(false)