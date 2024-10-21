function convertirAFahrenheitACelsius(fahrenheit) {
    let celsius = (fahrenheit - 32) * (5/9);
    return celsius;
}


let tempF = 68; // Fahrenheit
let tempC = convertirAFahrenheitACelsius(tempF);
console.log(`${tempF}°F son equivalentes a ${tempC}°C`);
