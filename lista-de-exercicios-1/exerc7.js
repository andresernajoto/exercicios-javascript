// Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
// elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três
// parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,
// -5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
// que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
// “Delta é negativo”.

const resolvendoBhaskara = function(ax2, bx, c) {
    const delta = bx ** 2 - (4 * ax2 * c)
    let bhaskaraPositivo, bhaskaraNegativo, resultados

    if (delta < 1) {
        return console.log('Delta negativo, não é possível continuar o cálculo')
    } else {
        bhaskaraPositivo = (-bx + Math.sqrt(delta)) / 2
        bhaskaraNegativo = (-bx - Math.sqrt(delta)) / 2
        
        resultados = [bhaskaraPositivo, bhaskaraNegativo]
    }  

    return console.log("Segue os valores de x1 e x2, respectivamente: ", resultados)
}


resolvendoBhaskara(1, 8, -9) // delta positivo
resolvendoBhaskara(7, 3, 4) // delta negativo