const estaEntre = (num, min, max, inclusivo = false) => {
    if (inclusivo == true) {
        if (num >= min && num <= max) {
            return console.log('true')
        } else {
            return console.log('false')
        }
    } else {
        if (num > min && num < max) {
            return console.log('true')
        } else {
            return console.log('false')
        }
    }
}

estaEntre(10, 50, 100)
estaEntre(16, 100, 160)
estaEntre(3, 3, 150)
estaEntre(3, 3, 150, true)