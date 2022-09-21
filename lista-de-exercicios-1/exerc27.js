// Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
// crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
// quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.

const verificaTamanho = function(altC1, taxaAnualC1, altC2, taxaAnualC2) {
    let altFinalC1 = altC1 * taxaAnualC1 + altC1
    let altFinalC2 = altC2 * taxaAnualC2 + altC2
    let diferenca = 0

    if (altFinalC1 > altFinalC2 && taxaAnualC1 >= taxaAnualC2) {
        diferenca = altFinalC1 - altFinalC2

        console.log(`A criança 1 tem: ${altFinalC1.toFixed(2)}cm\nA criança 2 tem: ${altFinalC2.toFixed(2)}cm`)
        console.log(`A diferença de altura é de ${diferenca.toFixed(2)}cm. A criança 1 será mais alta\n`)
    } else if (altFinalC1 > altFinalC2 && taxaAnualC1 < taxaAnualC2) {
        console.log(`A criança 1 tem: ${altFinalC1.toFixed(2)}cm\nA criança 2 tem: ${altFinalC2.toFixed(2)}cm`)
        console.log(`Levará ${verificaAnos(altFinalC1, taxaAnualC1, altFinalC2, taxaAnualC2)} anos para a criança 2 passar a 1\n`)
    }
    else if (altFinalC2 > altFinalC1 && taxaAnualC2 >= taxaAnualC1) {
        diferenca = altFinalC2 - altFinalC1

        console.log(`A criança 2 tem: ${altFinalC2.toFixed(2)}cm\nA criança 1 tem: ${altFinalC1.toFixed(2)}cm`)
        console.log(`A diferença de altura é de ${diferenca.toFixed(2)}cm. A criança 2 será mais alta\n`)
    } else if (altFinalC2 > altFinalC1 && taxaAnualC2 < taxaAnualC1) {
        console.log(`A criança 2 tem: ${altFinalC2.toFixed(2)}cm\nA criança 1 tem: ${altFinalC1.toFixed(2)}cm`)
        console.log(`Levará ${verificaAnos(altFinalC1, taxaAnualC1, altFinalC2, taxaAnualC2)} anos para a criança 1 passar a 2\n`)
    }
    else {
        console.log(`Ambas as crianças tem ${altFinalC1}cm\n`)
    }
}

function verificaAnos(altFinalC1, taxaC1, altFinalC2, taxaC2) {
    let resultado1 = altFinalC1
    let resultado2 = altFinalC2
    let contadorAnos = 0
    
    if (resultado1 > resultado2) {
        while (resultado1 > resultado2) {
            resultado1 = resultado1 * taxaC1 + resultado1
            resultado2 = resultado2 * taxaC2 + resultado2
            contadorAnos++
        }
    } else {
        while (resultado2 > resultado1) {
            resultado1 = resultado1 * taxaC1 + resultado1
            resultado2 = resultado2 * taxaC2 + resultado2
            contadorAnos++
        }
    }

    return contadorAnos
}

verificaTamanho(132, 0.4, 122, 0.2) // criança 1 sempre mais alta
verificaTamanho(160, 0.013, 142, 0.035) // criança 2 passa a 1
verificaTamanho(131, 0.3, 134, 0.5) // criança 2 sempre mais alta
verificaTamanho(147, 0.015, 132, 0.05) // criança 1 passa a 2
verificaTamanho(130, 0.2, 130, 0.2) // mesma altura