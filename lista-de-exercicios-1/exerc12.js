// Faça um algoritmo que calcule o fatorial de um número.

const fatorial = function(fatorando) {
    let mult, soma = 1
    for (let i = 0; i < fatorando; i++) {
        mult = fatorando - i
        soma = mult * soma
    }

    return soma
}

console.log(fatorial(26))
console.log(fatorial(1))
console.log(fatorial(19))