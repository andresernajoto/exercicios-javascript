// Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
// registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
// mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
// pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
// vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
// jogo. (Número do pior jogo).

const verificarPontos = function() {
    const pontuacao = [103.7, 107.8, 104.2, 106.5, 108.6, 106.2, 108.0, 104.8]
    let maioresPontos = []
    let menoresPontos = []

    pontuacao.forEach(element => {
        if (element > 106) {
            maioresPontos.push(element)
        } else {
            menoresPontos.push(element)
        }
    });

    console.log(`Pontuações que bateram o recorde de 106: ${maioresPontos}`)
    console.log(`\nPontuações que NÃO bateram o recorde de 106: ${menoresPontos}`)
}

verificarPontos()