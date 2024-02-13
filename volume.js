function calcularVolumeEsfera(diametro) {
    const raio = diametro / 2;
    const volume = (4 / 3) * Math.PI * Math.pow(raio, 3);
    return volume;
}

// Exemplo com diâmetro de 6 unidades (raio 3 unidades)
const diametro = 6;
const volumeEsfera = calcularVolumeEsfera(diametro);

console.log(`O volume de uma esfera de raio ${diametro / 2} é ${volumeEsfera.toFixed(2)} PI`);
