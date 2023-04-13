//Escriba la definición de una función en javascript que reciba un arreglo de elementos de tipo entero y retorne el elemento de menor valor.
function Menor(arreglo){
    var menor = arreglo[0];
    for(i=0; i<= arreglo.length; i++){
        if (arreglo[i] < menor)
        arreglo[i] = menor;
    }
    return menor;

}

//Escriba la definición de una función en javascript que reciba un vector 3D cualquiera como parámetro 
//(interpretarlo como mejor lo considere) y retorne si el mismo es o no paralelo a uno de los ejes principales (X, Y o Z).

function paralelo(vector) {
  if (vector[0] === 0 && vector[1] === 0) {
    return true; // Vector paralelo al eje Z
  } else if (vector[0] === 0 && vector[2] === 0) {
    return true; // Vector paralelo al eje Y
  } else if (vector[1] === 0 && vector[2] === 0) {
    return true; // Vector paralelo al eje X
  } else {
    return false;
  }
}
