// Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
// Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
// Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
// ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um triângulo).

function verificarTriangulo(x, y, z) {
    if (x == y && y == z) {
        console.log('Este é um triângulo equilátero')
    } else if (x == y || y == z) {
        console.log('Este é um triângulo isóceles')
    } else {
        console.log('Este é um triângulo escaleno')
    }
}

verificarTriangulo(3, 3, 3) // equilátero
verificarTriangulo(2, 2, 3) // isóceles
verificarTriangulo(1, 3, 3) // isocéles
verificarTriangulo(1, 2, 3) // escaleno
