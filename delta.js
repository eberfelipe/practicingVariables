import Math from 'math';

function calcularDelta(a, b, c) {
    const delta = Math.pow(b, 2) - (4 * a * c);
    return delta;
}

// Exemplo de coeficientes para a equação 2x^2 - 4x + 2 = 0
const a = 5;
const b = -4;
const c = 7;

// Calculando o valor de delta
const delta = calcularDelta(a, b, c);

console.log(`O valor de delta para a equação ${a}x^2 + (${b})x + ${c} é: ${delta}`);
