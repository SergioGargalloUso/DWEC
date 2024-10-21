function tienenMismasLetras(p1, p2) {
    // Si las palabras no tienen la misma longitud, no pueden tener las mismas letras
    if (p1.length !== p2.length) {
        return false;
    }

    // Convertimos las palabras a arrays de letras, las ordenamos alfabéticamente y las comparamos
    let letras1 = p1.split('').sort().join('');
    let letras2 = p2.split('').sort().join('');

    // Devolvemos true si las palabras contienen las mismas letras (al estar ordenadas, serán idénticas)
    return letras1 === letras2;
}

