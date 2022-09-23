// Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter
// quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.
// Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e
// mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console.

let vetorInteiro = [2, 6, 1, 9]
let vetorString = ['xuzi', 'é', 'minha', 'gatona']
let vetorDouble = [0.4, 1.4, 1.7, 2.6]
let vetorResultado = []

for (let i = 0; i < 4; i++) {
    vetorResultado.push(vetorInteiro[i].toString().concat(', ', vetorString[i]).concat(', ', vetorDouble[i].toString()))
    // vetorResultado.push(vetorString[i].concat(', ',vetorInteiro[i].toString()).concat(vetorDouble[i].toString()))
}

console.log(`Resultado 1: ${vetorResultado}`)

vetorResultado = []
vetorResultado.push(vetorInteiro.toString().concat(', ', vetorString).concat(', ', vetorDouble.toString()))

console.log(`Resultado 2: ${vetorResultado}`)