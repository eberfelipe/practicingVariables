function calcularAreaCilindro(raio, altura) {
    const areaBase = Math.PI * raio * raio; // Área de uma base
    const areaLateral = 2 * Math.PI * raio * altura; // Área lateral
    const areaTotal = 2 * areaBase + areaLateral; // Área total
    return areaTotal;
}

// Exemplo de uso
const raio = 5; // Substitua com o raio da base do cilindro
const altura = 10; // Substitua com a altura do cilindro

const areaCilindro = calcularAreaCilindro(raio, altura);

console.log(`A área total do cilindro é: ${areaCilindro.toFixed(2)} unidades quadradas`);

