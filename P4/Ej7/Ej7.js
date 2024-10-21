//la funcion que pide el numero del dni y devuelve la letra
function obtenerLetraDNI(numDNI) {
    // Letras entre 23
    const letras = "TRWAGMYFPDXBNJZSQVHLCKE";

    //verificar el numero
    if (numDNI > 0 || numDNI < 99999999) {
        // Calculamos el índice de la letra usando el módulo 23
        const indiceLetra = numDNI % 23;
    
        // Devolvemos la letra correspondiente
        return letras.charAt(indiceLetra);
    }
    return null
}

//funcion que separa la letra del numero en el nie/dni
function sacarLetraDNI(DNI){
    // Obtenemos la letra en teoria
    let letra = dniNie.slice(-1).toUpperCase();

    // Obtenemos el resto de la cadena 
    let numero = dniNie.slice(0, -1);

    // Es un NIE si empieza con X, Y o Z, lo convertimos al formato numérico.
    switch (numero.charAt(0).toUpperCase()) {
        case 'X':
            numero = '0' + numero.slice(1);
            break;
        case 'Y':
            numero = '1' + numero.slice(1);
            break;
        case 'Z':
            numero = '2' + numero.slice(1);
            break;
    }
    //solo funciona con nie reales en el caso de dni con caulquiera iria
    return { numero: numero, letra: letra };
}
