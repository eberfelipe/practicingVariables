function calcularVelocidadeMedia(distanciaMetros, tempoSegundos) {
    const velocidadeMetrosPorSegundo = distanciaMetros / tempoSegundos;
    return velocidadeMetrosPorSegundo;
}

function converterMetrosPorSegundoParaKmPorHora(velocidadeMetrosPorSegundo) {
    const velocidadeKmPorHora = velocidadeMetrosPorSegundo * 3.6;
    return velocidadeKmPorHora;
}

// Exemplo de uso com os valores fornecidos: 500m em 10s
const distPercorrida = 100; // Distância percorrida em metros
const tempo = 10; // Tempo em segundos

const velocidadeMetrosPorSegundo = calcularVelocidadeMedia(distPercorrida, tempo);
const velocidadeKmPorHora = converterMetrosPorSegundoParaKmPorHora(velocidadeMetrosPorSegundo);

console.log(`A velocidade média é de ${velocidadeMetrosPorSegundo.toFixed(2)} m/s ou ${velocidadeKmPorHora.toFixed(2)} km/h.`);
