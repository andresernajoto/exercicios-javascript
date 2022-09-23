// Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam
// como parâmetros um número n (número de termo), a1 (o primeiro termo) e r (a razão) e escreva os n termos ,
// bem como a soma dos elementos

function progressaoAritmetica(n, a1, r) {
    let an
    let elementosPA = []
    let soma
    
    for (let i = 1; i <= n; i++) {
        an = a1 + (n - i) * r
        elementosPA.push(an)    
    }
    
    elementosPA.reverse()
    
    an = a1 + (n - 1) * r // volta ao termo procurado
    soma = (a1 + an) * n / 2
    
    console.log(`Termos da PA: ${elementosPA}\nTermo procurado: ${an}\nSoma dos termos: ${soma}\n`)
}

progressaoAritmetica(10, 26, 5)

function progressaoGeometrica(n, a1, q) {
    let an
    let elementosPG = []
    let soma

    for (let i = 1; i <= n; i++) {
        an = a1 * q ** (n - i)
        elementosPG.push(an)
    }

    elementosPG.reverse()
    
    an = a1 * q ** (n - 1) // volta ao termo procurado
    soma = a1 * (q ** n - 1) / (q - 1)
    
    console.log(`Termos da PG: ${elementosPG}\nTermo procurado: ${an}\nSoma dos termos: ${soma}\n`)
}

progressaoGeometrica(10, 1, 2)