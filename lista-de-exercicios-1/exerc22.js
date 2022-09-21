// Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
// parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro...) que foi paga e o valor da anuidade. A
// anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
// compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido

function anuidadeAssociacao(mes) {
    let montante = 0
    let capitalInicial = 1400
    let juros = 0
    let tempo = 2
    let mesPago = ''
    
    switch(mes) {
        case 1:
            mesPago += 'Janeiro'
            montante = capitalInicial * (1 + juros) ** tempo
            break
        case 2:
            mesPago = 'Fevereiro'
            juros = 0.05
            montante = capitalInicial * (1 + juros) ** tempo
            break
        case 3:
            mesPago = 'Março'
            juros = 0.10
            montante = capitalInicial * (1 + juros) ** tempo
            break
        case 4:
            mesPago = 'Abril'
            juros = 0.15
            montante = capitalInicial * (1 + juros) ** tempo
            break
        case 5:
            mesPago = 'Maio'
            juros = 0.20
            montante = capitalInicial * (1 + juros) ** tempo
            break
        case 6:
            mesPago = 'Junho'
            juros = 0.25
            montante = capitalInicial * (1 + juros) ** tempo
            break
        case 7:
            mesPago = 'Julho'
            juros = 0.30
            montante = capitalInicial * (1 + juros) ** tempo
            break
        case 8:
            mesPago = 'Agosto'
            juros = 0.35
            montante = capitalInicial * (1 + juros) ** tempo
            break
        case 9:
            mesPago = 'Setembro'
            juros = 0.40
            montante = capitalInicial * (1 + juros) ** tempo
            break
        case 10:
            mesPago = 'Outubro'
            juros = 0.45
            montante = capitalInicial * (1 + juros) ** tempo
            break
        case 11:
            mesPago = 'Novembro'
            juros = 0.50
            montante = capitalInicial * (1 + juros) ** tempo
            break
        case 12:
            mesPago = 'Dezembro'
            juros = 0.55
            montante = capitalInicial * (1 + juros) ** tempo
            break
        default:
            return console.log('Mês inválido')
    }

    console.log(`Valor pago no mês de ${mesPago}: R$ ${montante.toFixed(2)}`)
}

anuidadeAssociacao(1)
anuidadeAssociacao(2)
anuidadeAssociacao(3)
anuidadeAssociacao(4)
anuidadeAssociacao(5)
anuidadeAssociacao(6)
anuidadeAssociacao(7)
anuidadeAssociacao(8)
anuidadeAssociacao(9)
anuidadeAssociacao(10)
anuidadeAssociacao(11)
anuidadeAssociacao(12)
anuidadeAssociacao('teste') // case default
anuidadeAssociacao(0) // case default