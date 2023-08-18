'use strict'
// No cambies los nombres de las funciones.

function quickSort(arr, p = arr[0], left = [], right = []) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  if (arr.length < 1) return arr;
  arr.slice(1).forEach(n => n < p ? left.push(n) : right.push(n));
  return [...quickSort(left), p, ...quickSort(right)];
}

function mergeSort(arr) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  let mid = Math.floor(arr.length / 2);
  if (mid === 0) return arr;
  return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)));
}

function merge(left, right, res = []) {
  while (left.length && right.length)
      res.push(left[0] < right[0] ? left.shift() : right.shift());
  return res.concat(left.length ? left : right); 
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
