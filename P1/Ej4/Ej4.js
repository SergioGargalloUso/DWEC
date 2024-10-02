function calcularSalario() {
    //envio de formularios coger elementos
    const nombre = document.getElementById("nombre").value;
    const apellidos = document.getElementById("apellidos").value;  
  
    let salario = parseFloat(document.getElementById("salario").value);
    const edad = parseInt(document.getElementById("edad").value);
  
    
    if (salario > 2000) {
      //no haces nada por que el valor no cambia en ese caso
    } else if (salario >= 1000 && salario <= 2000) {
      if (edad > 45) {
        salario *= 1.03; 
      } else {
        salario *= 1.1; 
      }
    } else {
      if (edad < 30) {
        salario = 1100;
      } else if (edad >= 30 && edad <= 45) {
        salario *= 1.03;
      } else {
        salario *= 1.15;
      }
    }
  
    
    const resultado = document.getElementById("resultado");
    resultado.textContent = `Nombre completo: ${nombre} ${apellidos}\nEdad: ${edad}\nNuevo salario: ${salario.toFixed(2)}€`;
  }