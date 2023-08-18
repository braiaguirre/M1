'use strict';

/*
Definir las funciones recursivas nFactorial y nFibonacci.

nFactorial(n) debe retornar el factorial de n sabiendo que, siendo n un número natural, su factorial (representado como n!) es el producto de n por todos los números naturales
 menores que él y mayores a 0. Ejemplo: 5! = 5 * 4 * 3 * 2 * 1

nFibonacci(n) debe retornar el enésimo número de la secuencia de Fibonacci, tomando al 0 y al 1, respectivamente, como primer y segundo elementos de la misma, y sabiendo que 
cualquier elemento que se agregue a esta secuencia será el resultado de la suma del último elemento y el anterior.
Ejemplo: nFibonacci(7) retornará 13, ya que 13 es el dígito que está en la posición 7 de la secuencia.

Secuencia:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 


Como ejercicio adicional y completamente opcional, al terminar de resolver este problema pueden intentar definir funciones que logren los mismos resultados pero de manera iterativa.
*/
  
function nFactorial(n) { // 3 2 1
  return (n > 1) ? n * nFactorial(n - 1) : n;
  
  // if (n > 1) { //si si no
  //   return n * nFactorial(n - 1); // 3 x nF(2) => 2 x nF(1) => 1
  // } else {
  //   return n; // 1
  // }
}

function nFibonacci(n) {
  return (n < 2) ? n : nFibonacci(n - 2) + nFibonacci(n - 1);

  // if (n < 2) {
  //   return n;
  // } else {
  //   return nFibonacci(n - 2) + nFibonacci(n - 1);
  // }
}


// let n = 5;
// for (let i = n - 1; i >= 1; i--) {
//     n = n * i;
// }

// let fib = [0, 1]
// for (let i = fib.length; i <= 7; i++) {
//     fib[i] = fib[i - 2] + fib[i - 1];
// }

/*
Implementar la clase Queue, sabiendo que es una estructura de tipo FIFO, donde el primer elemento que ingresa es el primero que se quita. Definir los siguientes métodos:
  - enqueue: agrega un valor respetando el orden.
  - dequeue: remueve un valor respetando el orden. Retorna undefined cuando la queue está vacía.
  - size: retorna el tamaño (cantidad de elementos) de la queue.

Pueden utilizar class o función constructora.
*/

class Queue {
  constructor() {
    this.array = [];
  }
  
  enqueue = (x) => this.array.push(x);
  dequeue = (x) => this.array.shift(x);
  size = () => this.array.length;
}

// function Queue() {
//   this.array = [];

//   this.enqueue = function(x) {
//     return this.array.push(x);
//   }

//   this.dequeue = function(x) {
//     return this.array.shift(x);
//   }

//   this.size = function() {
//     return this.array.length;
//   }
// }

/*⚠️ No modificar nada debajo de esta línea ⚠️*/
module.exports = {
   Queue,
   nFactorial,
   nFibonacci,
};
