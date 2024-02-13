import Math from 'math';

function calcularDistanciaEntrePontos(x1, y1, x2, y2) {
    const distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    return distancia;
}

// Exemplo de uso com os pontos fornecidos: (1, 1) e (1, 4)
const x1 = 3;
const y1 = 5;
const x2 = 1;
const y2 = 9;

const distancia = calcularDistanciaEntrePontos(x1, y1, x2, y2);

console.log(`A distância entre os dois pontos dados é de ${distancia.toFixed(2)}.`);
