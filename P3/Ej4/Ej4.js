// Función que genera una matriz cuadrada de enteros aleatorios
function generarMatriz(tamano) {
    let matriz = [];
    for (let i = 0; i < tamano; i++) {
        let fila = [];
        for (let j = 0; j < tamano; j++) {
            // Genera un número aleatorio entre -10 y 10
            fila.push(Math.floor(Math.random() * 21) - 10);
        }
        matriz.push(fila);
    }
    return matriz;
}

// Función que realiza la suma de dos matrices
function sumarMatrices(matriz1, matriz2) {
    const tamano = matriz1.length;
    let matrizResultado = [];
    for (let i = 0; i < tamano; i++) {
        let fila = [];
        for (let j = 0; j < tamano; j++) {
            fila.push(matriz1[i][j] + matriz2[i][j]);
        }
        matrizResultado.push(fila);
    }
    return matrizResultado;
}

// Función que muestra una matriz en una tabla HTML
function mostrarMatriz(matriz, idElemento) {
    let tablaHTML = "<table>";
    for (let i = 0; i < matriz.length; i++) {
        tablaHTML += "<tr>";
        for (let j = 0; j < matriz[i].length; j++) {
            tablaHTML += `<td>${matriz[i][j]}</td>`;
        }
        tablaHTML += "</tr>";
    }
    tablaHTML += "</table>";
    document.getElementById(idElemento).innerHTML = tablaHTML;
}

// Función principal para calcular y mostrar la suma de matrices
function calcularSumaMatrices() {
    const tamano = parseInt(document.getElementById('tamanoMatriz').value);

    // Validar si el tamaño es un número válido
    if (isNaN(tamano) || tamano < 2 || tamano > 10) {
        alert('Por favor, introduce un tamaño válido (entre 2 y 10).');
        return;
    }

    // Generar las dos matrices
    const matriz1 = generarMatriz(tamano);
    const matriz2 = generarMatriz(tamano);

    // Realizar la suma de las matrices
    const matrizResultado = sumarMatrices(matriz1, matriz2);

    // Mostrar las matrices en pantalla
    mostrarMatriz(matriz1, 'matriz1');
    mostrarMatriz(matriz2, 'matriz2');
    mostrarMatriz(matrizResultado, 'matrizResultado');
}
