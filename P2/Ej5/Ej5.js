// Crear un array vacío para almacenar los números aleatorios
let arrayNumeros = [];
for (let x = 0; x < 10; x++) {
    let numeroAleatorio = Math.round(Math.random() * 5) + 1; // Generar un número entre 1 y 5
    arrayNumeros(x)=numeroAleatorio;
}
// Mostrar el array generado
console.log("Array generado:", arrayNumeros);

// Recorrer el array y mostrar los asteriscos correspondientes
console.log("Asteriscos generados:");
for (let x = 0; x < arrayNumeros.length; x++) {
    let asteriscos = "*".repeat(arrayNumeros[x]); 
    console.log(asteriscos); 
}
