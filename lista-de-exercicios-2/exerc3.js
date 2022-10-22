const calcularSalario = (horasTrabalhadas, salario) => {
    const salarioFinal = horasTrabalhadas * salario
    
    return console.log(`O salário do funcionário é R$ ${salarioFinal.toFixed(2)}`)
}

calcularSalario(150, 40.5)