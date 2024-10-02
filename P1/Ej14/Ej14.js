function obtenerMayor(a, b, c) {
    let mayor = a; 

    if (b > mayor) {
        mayor = b; 
    }

    if (c > mayor) {
        mayor = c; 
    }

    return mayor;
}

// Ejemplo de uso:
let num1 = 10;
let num2 = 3;
let num3 = 33;

let mayor = obtenerMayor(num1, num2, num3);
console.log(`El número mayor es: ${mayor}`);