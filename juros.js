const capitalInicial = 60000;
const montante = 90000;
const numeroMeses = 24;

function calcularTaxaJuros(capitalInicial, montante, numeroMeses) {
    const taxaJuros = Math.pow((montante / capitalInicial), 1 / numeroMeses) - 1;
    return taxaJuros * 100; // Convertendo a taxa de juros para porcentagem
}

// Calculando a taxa de juros
const taxaJuros = calcularTaxaJuros(capitalInicial, montante, numeroMeses);

console.log(`O seu financiamento de ${capitalInicial} reais teve uma taxa de juros de ${taxaJuros.toFixed(2)}%, pois após ${numeroMeses} meses você teve que pagar ${montante} reais.`);

