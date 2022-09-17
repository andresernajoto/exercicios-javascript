// Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
// primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
// retornará o valor da aplicação sob o regime de juros compostos.

const jurosSimples = function(capitalInicial, juros, aplicacao) {
    const montante = capitalInicial * juros * aplicacao

    return montante
}

console.log('R$', jurosSimples(1000, 0.1, 3))

const jurosComposto = function(capitalInicial, juros, aplicacao) {
    const montante = capitalInicial * (1 + juros) ** aplicacao

    return montante.toFixed(2)
}

console.log('R$', jurosComposto(1400, 0.07, 2))