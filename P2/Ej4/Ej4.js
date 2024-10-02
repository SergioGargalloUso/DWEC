// Crear una matriz de 3x3 rellena de números enteros
let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Crear nueva matriz vacia
let traspuesta = [];
for (let x = 0; x < matriz.length; x++) {
    traspuesta[x] = [];
}

// Creamos la traspuesta apartir de la original
for (let x = 0; x < matriz.length; x++) {
    for (let j = 0; j < matriz[i].length; j++) {
        traspuesta[j][i] = matriz[i][j]; 
    }
}

// Enseñas la original
console.log("Matriz original:");
for (let i = 0; i < matriz.length; i++) {
    console.log(matriz[i]);
}

// Enseñas la traspuesta
console.log("Matriz traspuesta:");
for (let i = 0; i < traspuesta.length; i++) {
    console.log(traspuesta[i]);
}
