const removerVogais = palavras => {
    const separador = palavras.split('')

    for (let i = 0; i < palavras.length; i++) {
        if (separador[i] == 'a' || separador[i] == 'e'  || separador[i] == 'i' || separador[i] == 'o' || separador[i] == 'u') {
            let indice = separador.indexOf(separador[i])
            
            let remover = separador.splice(indice, 1)
        }
    }

    return console.log(String(separador).replaceAll(',', ''))
}

removerVogais('Cod3r')
removerVogais('Fundamentos')