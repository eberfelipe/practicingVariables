function calcularIMC(pesoKg, alturaM) {
    // Validação básica dos dados de entrada
    if (alturaM <= 0) {
        throw new Error("A altura deve ser maior que zero.");
    }

    const imc = pesoKg / (alturaM ** 2);
    return imc;
}

function classificarIMC(imc) {
    // Classifica o IMC com base nos padrões
    if (imc < 18.5) {
        return "Abaixo do peso";
    } else if (imc < 25) {
        return "Peso normal";
    } else if (imc < 30) {
        return "Sobrepeso";
    } else if (imc < 35) {
        return "Obesidade grau I";
    } else if (imc < 40) {
        return "Obesidade grau II";
    } else {
        return "Obesidade grau III ou mórbida";
    }
}

const peso = 80;
const altura = 1.75;
const imc = calcularIMC(peso, altura);
const classificacao = classificarIMC(imc);
console.log(`O IMC é: ${imc.toFixed(2)}. Classificação: ${classificacao}`);