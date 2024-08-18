//Esta funcion define la interaccion de los botones de la calculadora.

function agregar(valor) {
  document.getElementById("pantalla").value += valor;
}

//Esta le da funcion al boton BORRAR.
function borrar() {
  document.getElementById("pantalla").value = "";
}

//Esta funcion ejecuta los calculos.
function calcular() {
  const valorPantalla = document.getElementById("pantalla").value;
  const resultado = eval(valorPantalla);
  document.getElementById("pantalla").value = resultado;
}
