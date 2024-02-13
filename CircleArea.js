const { raio, resultado } = require('./CircleArea'); // Importing the variables raio and resultado
const { raio, resultado } = require('./CircleArea'); // Importing the variables raio and resultado
function calcularComprimentoAreaCirculo(raio) {
    const pi = Math.PI; // Usando a constante PI do objeto Math
    const comprimento = 2 * pi * raio;
    const area = pi * raio * raio; // Ou Math.pow(raio, 2)

    return { comprimento, area };
}

// Exemplo de uso
const raio = 5; // Supondo um raio de 5 unidades
const resultado = calcularComprimentoAreaCirculo(raio);

console.log(`Para um círculo de raio ${raio}:`);
console.log(`Comprimento: ${resultado.comprimento.toFixed(2)} unidades`);
console.log(`Área: ${resultado.area.toFixed(2)} unidades quadradas`);
