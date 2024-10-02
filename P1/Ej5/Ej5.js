function numeroCorrecto() {
    var valor = document.getElementById("Dato").value; 

    if (isNaN(valor) || valor === "") {
        alert("Por favor, ingresa un número válido.");
    } else {
        alert("Número válido: " + valor);
    }
  }