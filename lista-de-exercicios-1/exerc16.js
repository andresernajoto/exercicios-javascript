// Utilizando a estrutura do Switch faça um programa que simule uma calculadora básica. O programa recebe
// como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores
// numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e
// 3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas

const verificaConta = function(num1, operador, num2) {
    switch(operador) {
        case "+":
            console.log(`A soma entre ${num1} e ${num2} é: ${num1 + num2}`)
            break
        case "-":
            console.log(`A subtração entre ${num1} e ${num2} é: ${num1 - num2}`)
            break
        case "*":
            console.log(`A multiplicação entre ${num1} e ${num2} é: ${num1 * num2}`)
            break
        case "/":
            console.log(`A divisão entre ${num1} e ${num2} é: ${num1 / num2}`)
            break
        default:
            console.log('Operador ínválido! Impossível realizar uma operação')
            break
    }
}

verificaConta(2, '+', 3)
verificaConta(7, '-', 4)
verificaConta(9, '*', 6)
verificaConta(10, '/', 5)
verificaConta(2, 2, 3) // default case
verificaConta(2, '4', 3) // default case
verificaConta(2, '#', 3) // default case