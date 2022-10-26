const ehAnoBissexto = ano => {
    if (ano % 100 == 0) {
        return console.log(false)
    } else if (ano % 4 == 0) {
        return console.log(true)
    } else if (ano % 400 == 0) {
        return console.log(true)
    }
}

ehAnoBissexto(2020)
ehAnoBissexto(2100)