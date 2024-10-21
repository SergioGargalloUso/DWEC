function factorial(n) {
    // Caso base
    if (n === 0 || n === 1) {
        return 1;
    }
   
    return n * factorial(n - 1);
}
let numeros = [];

function capturarNumero() {
    const input = document.getElementById('numero').value;

    // Convertimos el valor a número y lo agregamos al array
    const numero = parseInt(input);
    if (!isNaN(numero)) {
        numeros.push(numero);
    }

    document.getElementById('numero').value = '';

}



function mostrarResultados() {
    const resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML = ''; // Limpiamos resultados previos

    // Recorrer los números introducidos y calcular el factorial
    numeros.forEach(numero => {
        const resultado = `Factorial de ${numero}: ${factorial(numero)}`;
        const p = document.createElement('p');
        p.textContent = resultado;
        resultadosDiv.appendChild(p);
    });

    // Limpiamos el array de números
    numeros = [];
}