function calcularMontanteJurosCompostos(capital, taxaJuros, tempo) {
    const montante = capital * Math.pow((1 + taxaJuros), tempo);
    return montante;
}

// Definindo os valores de exemplo
const capital = 5000.00; // Capital inicial de R$ 1000,00
const taxaJuros = 0.125; // Taxa de juros de 12,5% expressa como decimal
const tempo = 12; // Tempo de 5 meses

// Calculando o montante
const montante = calcularMontanteJurosCompostos(capital, taxaJuros, tempo);

// Exibindo o resultado
console.log(`O montante, após ${tempo} meses, será de R$ ${montante.toFixed(2)}.`);
