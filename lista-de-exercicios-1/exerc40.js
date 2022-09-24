// Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
// modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o
// conceito B e de 9,0 a 10,0 o conceito A.

function conceitoDeNotas(vetorDeNotas) {
    let conceito = ''
    
    for (let i = 0; i < vetorDeNotas.length; i++) {
        if (vetorDeNotas[i] >= 0.0 && vetorDeNotas[i] < 5) {
            conceito = 'D'
            console.log(`Nota ${vetorDeNotas[i]} = Conceito ${conceito}`)
        } else if (vetorDeNotas[i] >= 5 && vetorDeNotas[i] < 7) {
            conceito = 'C'
            console.log(`Nota ${vetorDeNotas[i]} = Conceito ${conceito}`)
        } else if (vetorDeNotas[i] >= 7 && vetorDeNotas[i] < 9) {
            conceito = 'B'
            console.log(`Nota ${vetorDeNotas[i]} = Conceito ${conceito}`)
        } else if (vetorDeNotas[i] >= 9 && vetorDeNotas[i] <= 10) {
            conceito = 'A'
            console.log(`Nota ${vetorDeNotas[i]} = Conceito ${conceito}`)
        } else {
            console.log('\nNotas negativas não recebem conceitos\n')
        }
    }
}

conceitoDeNotas([0, 2, 5, 6.9, 7.2, 8, 9.5, 10, -4])