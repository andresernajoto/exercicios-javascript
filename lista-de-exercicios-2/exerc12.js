const removendoProps = (obj, propObj) => {
    Object.defineProperty(obj, propObj, {
        enumerable: false
    })

    return console.log(obj)
}

removendoProps({ a: 1, b: 2 }, 'a')
removendoProps({
    id: 20,
    nome: 'Caneta',
    descricao: 'Não preenchido'
}, 'descricao')