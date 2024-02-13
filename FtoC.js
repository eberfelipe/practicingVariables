const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function converterFahrenheitParaCelsius(fahrenheit) {
    const celsius = (fahrenheit - 32) * 5 / 9;
    return celsius;
}

rl.question('Informe a temperatura em Fahrenheit: ', fahrenheit => {
    const celsius = converterFahrenheitParaCelsius(parseFloat(fahrenheit));
    console.log(`${fahrenheit}°F é igual a ${celsius.toFixed(2)}°C.`);
    rl.close();
});