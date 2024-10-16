function recogerPalabras() {
    let palabras = new Set();  // Uso Set para evitar duplicados

    while (true) {
        let palabra = prompt("Introduce una palabra (deja en blanco o cancela para finalizar):");
        
        // Si el usuario cancela o deja en blanco, salimos del bucle
        if (palabra === null || palabra.trim() === "") {
            break;
        }

        // Añadir la palabra ingresada al Set (automáticamente evita duplicados)
        palabras.add(palabra.trim().toLowerCase());  // Convertir todo a minúsculas para evitar duplicados por case
    }

    // Convertir el Set a Array para ordenar
    let palabrasArray = Array.from(palabras);

    // Ordenar de la Z a la A (inversamente) utilizando localeCompare para evitar que las mayusculas etc se repitan
    palabrasArray.sort((x, y) => x.localeCompare(y, 'en', { sensitivity: 'base' }));

    // Mostrar el resultado en pantalla
    mostrarResultado(palabrasArray);
}

// Función para mostrar el resultado en el div con id "resultado"
function mostrarResultado(palabras) {
    let html = "<ul>";
    for (let palabra of palabras) {
        html += `<li>${palabra}</li>`;
    }
    html += "</ul>";
    
    document.getElementById("resultado").innerHTML = html;
}
