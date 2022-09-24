// Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o
// primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente.
// Faça a troca sem utilizar uma variável auxiliar

function trocaValores(vetor1, vetor2) {
    if (vetor1.length > vetor2.length || vetor2.length > vetor1.length) {
        return console.log('Vetores de tamanhos imcompatíveis')
    }
    
    console.log(`Antes da cópia:\nVetor 1: ${vetor1}\nVetor 2: ${vetor2}\n`)

    for (let i = 0; i < vetor1.length; i++) {
        vetor2.unshift(vetor1.length - i)
        vetor1.unshift(vetor2.length + i)

        vetor2.pop()
        vetor1.pop()
    }

    vetor1.reverse()
    console.log(`Depois da cópia:\nVetor 1: ${vetor1}\nVetor 2: ${vetor2}\n`)
}

trocaValores([1, 2, 3], [4, 5, 6])
trocaValores([1, 2, 3], [4, 5, 6, 7]) // erro
trocaValores([1, 2, 3, 4], [5, 6]) // erro