function esPrimo(numero) {
    if (numero <= 1) return false;
    for (let x = 2; x <= numero; x++) {
        if (numero % x === 0) {
            return false;
        }
    }
    return true;
}
