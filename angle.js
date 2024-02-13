function calcularSomaAngulosInternos(numLados) {
    const somaAngulos = (numLados - 2) * 180;
    return somaAngulos;
}

function calcularValorCadaAngulo(somaAngulos, numLados) {
    const valorAngulo = somaAngulos / numLados;
    return valorAngulo;
}

const numLados = 3;

// Cálculo da soma dos ângulos internos
const somaAngulos = calcularSomaAngulosInternos(numLados);

// Cálculo do valor de cada ângulo interno
const valorAngulo = calcularValorCadaAngulo(somaAngulos, numLados);

console.log("A soma dos ângulos internos do polígono é " + somaAngulos + " graus.");
console.log("O valor de cada ângulo interno do polígono é " + valorAngulo + " graus.");
