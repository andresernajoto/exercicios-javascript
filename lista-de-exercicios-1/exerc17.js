// Um funcionário irá receber um aumento de acordo com o seu plano de
// trabalho, de acordo com a tabela abaixo:
// |-----------------|
// | Plano | Aumento |
// |-----------------|
// |   A   |  10%    |
// |-----------------|
// |   B   |  15%    |
// |-----------------|
// |   C   |  20%    |
// |-----------------|
// Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
// novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido

const verificaSalario = function(plano, salario) {
    let salarioAtualizado

    switch(plano) {
        case 'A':
            salarioAtualizado = salario + (salario * 0.1)
            break
        case 'B':
            salarioAtualizado = salario + (salario * 0.15)
            break
        case 'C':
            salarioAtualizado = salario + (salario * 0.2)
            break
        default:
            console.log('Plano de trabalho inválido!')
            break
    }
    
    const imprimirSalario = plano == 'A' || plano == 'B' || plano == 'C'
    ? console.log(`O salário atualizado do funcionário é: R$ ${salarioAtualizado}`) : false
}

verificaSalario('A', 1500)
verificaSalario('B', 2200)
verificaSalario('C', 1300)
verificaSalario('D') // default case
verificaSalario(3000) // default case