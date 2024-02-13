import Math from 'math';

function calcularInfectados(p0, x, t) {
    const infectados = p0 * Math.pow(x, t);
    return infectados;
}

// Valores fornecidos
const p0 = 1000; // População inicial de pessoas infectadas
const x = 4; // Quantidade de pessoas para as quais um paciente infectado pode transmitir
const t = 7; // Tempo percorrido em dias

// Calculando o total de pessoas infectadas
const totalInfectados = calcularInfectados(p0, x, t);

console.log(`Após ${t} dias, o total de pessoas infectadas será de ${totalInfectados}.`);
