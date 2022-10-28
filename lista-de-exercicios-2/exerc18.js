const totalDeDespesas = vetor => {
    const selecionarPreco = p => p.preco
    const somarPreco = (acumulador, p) => p + acumulador

    let resultadoFinal = []
    resultadoFinal = vetor.map(selecionarPreco).reduce(somarPreco)

    return console.log(resultadoFinal)
}

totalDeDespesas([
    { nome: 'Jornal online', categoria: 'Informação', preco: 89.99 },
    { nome: 'Cinema', categoria: 'Entretenimento', preco: 150 }
])

totalDeDespesas([
    { nome: 'Galaxy S22', categoria: 'Eletrônicos', preco: 3599.99 },
    { nome: 'Macbook Pro', categoria: 'Eletrônicos', preco: 30999.90 }
])