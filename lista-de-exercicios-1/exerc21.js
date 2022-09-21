// Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
// considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos
// de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com
// idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130

function planoDeSaude(idadeConveniado) {
    valorBase = 100

    if (idadeConveniado >= 0 && idadeConveniado < 11) {
        valorBase += 80
    } else if (idadeConveniado >= 10 && idadeConveniado < 31) {
        valorBase += 50
    } else if (idadeConveniado >= 30 && idadeConveniado < 61) {
        valorBase += 95
    } else if (idadeConveniado > 60) {
        valorBase += 130
    } else {
        return 'Idade abaixo dos requisitos para o convênio'
         
    }

    return valorBase
}

console.log(`R$ ${planoDeSaude(10)}`)
console.log(`R$ ${planoDeSaude(26)}`)
console.log(`R$ ${planoDeSaude(42)}`)
console.log(`R$ ${planoDeSaude(74)}`)
console.log(`${planoDeSaude(-2)}`)