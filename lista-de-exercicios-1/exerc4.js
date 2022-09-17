// Crie uma função que irá receber dois valores, o dividendo e o divisor. 
// A função deverá imprimir o resultado e o resto da divisão destes dois valores.

function imprimirDivisao(dividendo, divisor) {
    console.log(`Divisão entre valores é: ${dividendo / divisor}`)
    console.log(`Resto da divisão entre os valores é: ${dividendo % divisor}\n`)
}

imprimirDivisao(10, 2) // sem resto
imprimirDivisao(5, 3) // com resto