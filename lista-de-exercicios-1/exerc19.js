// O cardápio de uma lanchonete é o seguinte:
// |------------------------------------------|
// | Código | Descrição do Produto |  Preço   |
// |------------------------------------------|
// |  100   |   Cachorro Quente    |  R$ 3,00 |
// |------------------------------------------|
// |  200   |  Hambúrguer Simples  |  R$ 4,00 |
// |------------------------------------------|
// |  300   |     Cheeseburguer    |  R$ 5,50 |
// |------------------------------------------|
// |  400   |         Bauru        |  R$ 7,50 |
// |------------------------------------------|
// |  500   |      Refrigerante    |  R$ 3,50 |
// |------------------------------------------|
// |  600   |         Suco         |  R$ 2,80 |
// |------------------------------------------|

// Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
// a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
// comando switch. Crie um caso default para produto não existente

const cardapioLanchonete = function(codigo, quantidade) {
    let valorPago

    switch(codigo) {
        case 100:
            valorPago = 3.0 * quantidade
            break
        case 200:
            valorPago = 4.0 * quantidade
            break
        case 300:
            valorPago = 5.50 * quantidade
            break
        case 400:
            valorPago = 7.50 * quantidade
            break
        case 500:
            valorPago = 3.50 * quantidade
            break
        case 600:
            valorPago = 2.80 * quantidade
            break
        default:
            console.log('Lanche não encontrado no cardápio')
            break
    }

    const imprimirTotal = codigo == 100 || codigo == 200 || codigo == 300 || codigo == 400 || codigo == 500 || codigo == 600
    ? console.log(`Valor total do pedido: R$ ${valorPago.toFixed(2)}`) : false
}

cardapioLanchonete(100, 5)
cardapioLanchonete(200, 1)
cardapioLanchonete(300, 4)
cardapioLanchonete(400, 9)
cardapioLanchonete(500, 7)
cardapioLanchonete(600, 3)
cardapioLanchonete('teste') // default case
cardapioLanchonete(90812) // default case