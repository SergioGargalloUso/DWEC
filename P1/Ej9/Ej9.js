//He encontrado esto en internet para leer por consola solo teniendo node
//para node usamos el modulo readline que se inicializa asi
const readline = require('readline');
//creamos la internfaz de este modulo 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Las preguntas se hacen de manera secuencial usando rl.question(), y las respuestas se comparan después de que se capturan todas
function verificarNumeros() {
    rl.question('Ingresa el primer número: ', (num1) => {
        rl.question('Ingresa el segundo número: ', (num2) => {
            rl.question('Ingresa el tercer número: ', (num3) => {
                // Convertir las entradas a números
                var n1 = parseFloat(num1);
                var n2 = parseFloat(num2);
                var n3 = parseFloat(num3);
                
                // Verificar si alguno de los números es menor a 10
                if (n1 < 10 || n2 < 10 || n3 < 10) {
                    console.log("Error: uno de los números es menor a diez");
                } else {
                    console.log("Enorabuena, todos los números son iguales o superiores a diez");
                }

                // Cerrar la interfaz de lectura
                rl.close();
            });
        });
    });
}

// Llamar a la función para iniciar el proceso
verificarNumeros();
