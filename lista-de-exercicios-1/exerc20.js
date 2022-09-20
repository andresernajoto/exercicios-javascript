// Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
// para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
// Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
// informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
// nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.

const troco = function(valorSolicitado) {
    let contador100 = 0
    let contador50 = 0
    let contador10 = 0
    let contador5 = 0
    let contador1 = 0
    let valorNota = contarNota(valorSolicitado)

    while (valorSolicitado >= valorNota) {
        switch(valorNota) {
            case 100:
                valorSolicitado -= 100
                contador100++
                break
            case 50:
                valorSolicitado -= 50
                contador50++
                break
            case 10:
                valorSolicitado -= 10
                contador10++
                break
            case 5:
                valorSolicitado -= 5
                contador5++
                break
            case 1:
                contador1++
                valorSolicitado -= 1
                break
            default:
                console.log('Valor desconhecido')
                break
        }

        valorNota = contarNota(valorSolicitado)
    }

    return imprimirResultado(contador100, contador50, contador10, contador5, contador1)
}

const contarNota = function(valorSolicitado) {
    if (valorSolicitado >= 100) {
        return 100
    }
    else if (valorSolicitado >= 50) {
        return 50
    }
    else if (valorSolicitado >= 10) {
        return 10
    }
    else if (valorSolicitado >= 5) {
        return 5
    }
    else if (valorSolicitado >= 1) {
        return 1
    }
}

const imprimirResultado = function(contador100, contador50, contador10, contador5, contador1) {
    let resultadoFinal = ''

    if (contador100 > 0) {
        resultadoFinal += `${contador100} nota(s) de R$ 100\n`
    }
    
    if (contador50 > 0) {
        resultadoFinal += `${contador50} nota(s) de R$ 50\n`
    }

    if (contador10 > 0) {
        resultadoFinal += `${contador10} nota(s) de R$ 10\n`
    }

    if (contador5 > 0) {
        resultadoFinal += `${contador5} nota(s) de R$ 5\n`
    }

    if (contador1 > 0) {
        resultadoFinal += `${contador1} nota(s) de R$ 1\n`
    }

    return resultadoFinal
}

console.log(troco(158))