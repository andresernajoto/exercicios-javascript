// Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
// dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch

const verificaDia = function(dia) {
    switch(dia) {
        case 1:
            console.log("Domingo")
            break
        case 2:
            console.log("Segunda-feira")
            break
        case 3:
            console.log("Terça-feira")
            break
        case 4:
            console.log("Quarta-feira")
            break
        case 5:
            console.log("Quinta-feira")
            break
        case 6:
            console.log("Sexta-feira")
            break
        case 7:
            console.log("Sábado")
            break
        default:
            console.log("Dia inválido")
    }
}

verificaDia(2) // segunda
verificaDia(6) // sexta
verificaDia(1) // domingo
verificaDia(8) // inválido
verificaDia(0) // inválido