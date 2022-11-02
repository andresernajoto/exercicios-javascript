const inverterEntrada = obj => {
    const objFinal = {}
    
    Object.entries(obj).forEach(e => {
        Object.defineProperty(objFinal, e[1], {
            enumerable: true,
            value: e[0]
        })
    })

    return console.log(objFinal)
}

inverterEntrada({ a: 1, b: 2, c: 3 })