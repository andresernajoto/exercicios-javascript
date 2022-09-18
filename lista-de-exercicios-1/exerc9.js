// Construa uma função para um sistema de notas de uma instituição que possui a seguinte política de
// classificação: Todo aluno recebe uma nota de 0 a 100. Alunos com nota abaixo de 40 são reprovados. As notas
// possuem a seguinte regra de arredondamento: Se a diferença entre a nota e o próximo múltiplo de 5 for menor
// que 3, arredondar a nota para esse próximo múltiplo de 5. Se a nota for abaixo de 38, não é feito nenhum
// arredondamento pois esta nota resulta na reprovação do aluno. Por exemplo, a nota 84 será arredondada para
// 85, mas a nota 29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento eficiente, ou
// seja, que evite a reprovação do aluno. No caso de a nota ser 38, o arredondamento é possível pois atingirá 40
// e o aluno será aprovado.

const verificandoNotas = function() {
    const notas = [14, 52, 84, 50, 71, 85, 35, 41, 98, 59, 38]
    let aprovados = []
    let reprovados = []
    let arredondar

    notas.forEach(nota => {
        // reprova o aluno
        if (nota < 38) {
            reprovados.push(nota)
        }
        // arredonda a unidade para 0
        else if (nota.toString().charAt(1) >= 1 && nota.toString().charAt(1) < 3) {
            const aumentaNota = nota.toString().replace(nota.toString().charAt(1), 0)
            aprovados.push(aumentaNota)
        }
        // arredonda a unidade para 5
        else if (nota.toString().charAt(1) >= 3 && nota.toString().charAt(1) < 5) {
            const aumentaNota = nota.toString().charAt(1) == 3 ? nota + 2 : nota + 1
            aprovados.push(aumentaNota)
        } 
        // arredonda a unidade para 0 e soma 10
        else if (nota.toString().charAt(1) > 5  && nota.toString().charAt(1) <= 9) {
            let aumentaNota = nota.toString().replace(nota.toString().charAt(1), 0)
            let aumentaMais = parseInt(aumentaNota) + 10
            aprovados.push(aumentaMais)
        } 
        // arredonda a unidade para aprovar o aluno se atender o requisito de aprovação
        else if (nota >= 38 && nota <= 39) {
            const aumentaNota = nota == 38 ? nota + 2 : nota + 1
            aprovados.push(aumentaNota)
        }
        // aprova o aluno
        else {
            arredondar = Math.round(nota)
            aprovados.push(arredondar)
        }
    })

    console.log(`Alunos APROVADOS: ${aprovados}`)
    console.log(`\nAlunos REPROVADOS: ${reprovados}`)
}

verificandoNotas()