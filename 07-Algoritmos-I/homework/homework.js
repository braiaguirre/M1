'use strict'
// No cambies los nombres de las funciones.

function factorear(num, fact = [1], div = 2) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  while (num > 1) {
    while (num % div !== 0) div++;
    fact.push(div);
    num /= div;
  }
  return fact;
}

function factorearRecursiva(num, fact = [1], div = 2) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  if (num > 1) {
    if (num % div !== 0) div++;
    else { 
      fact.push(i);
      num /= div;
    }
    factorear(num, fact, div);
  }
  return fact;
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        let aux = array[i];
        array[i] = array[i + 1];
        array[i + 1] = aux;
        swapped = true;
      }
    }
  } while (swapped);
  return array;
}

function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  let key, j; 
  for (let i = 1; i < array.length; i++) { 
      key = array[i]; 
      j = i - 1; 
      while (j >= 0 && array[j] > key) { 
        array[j + 1] = array[j]; 
        j = j - 1;
      } 
      array[j + 1] = key;
  } 
  return array;
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 0; i < array.length - 1; i++) {
    var min = i;
    for (let j = i + 1; j < array.length; j++) {
        if (array[min] > array[j]) min = j;
    }
    let aux = array[i];
    array[i] = array[min];
    array[min] = aux;
  }
  return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
