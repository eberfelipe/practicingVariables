import console from 'console';

function calcularDescontoNecessario(custoTenis, saldoDisponivel) {
    const valorNecessarioDesconto = custoTenis - saldoDisponivel;
    const porcentagemDescontoNecessaria = (valorNecessarioDesconto / custoTenis) * 100;
    return porcentagemDescontoNecessaria;
}

// Definindo os valores
const custoTenis = 200.00;
const saldoDisponivel = 70.00;

// Calculando a porcentagem de desconto necessária
const descontoNecessario = calcularDescontoNecessario(custoTenis, saldoDisponivel);

// Exibindo o resultado
console.log(`Desconto necessário: ${descontoNecessario.toFixed(2)}%`);  