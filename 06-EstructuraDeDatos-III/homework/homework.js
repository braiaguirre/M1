'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order")
  . Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

// ES6
class BinarySearchTree {
   constructor(value) {
      this.value = value;
      this.left = this.right = null;
   }

   insert = (value) => {
      if (value < this.value) {
         (!this.left) ? this.left = new BinarySearchTree(value) : this.left.insert(value);
      } else {
         (!this.right) ? this.right = new BinarySearchTree(value) : this.right.insert(value);
   }  }

   contains = (value) => {
      if (value === this.value) return true;
      if (value < this.value && this.left) return this.left.contains(value);
      if (value > this.value && this.right) return this.right.contains(value);
      return false;
   }

   depthFirstForEach = (cb, order) => {
      switch (order) {
         case 'post-order':
            if (this.left) this.left.depthFirstForEach(cb, order);
            if (this.right) this.right.depthFirstForEach(cb, order);
            cb(this.value);
            break;
         case 'pre-order':
            cb(this.value);
            if (this.left) this.left.depthFirstForEach(cb, order);
            if (this.right) this.right.depthFirstForEach(cb, order);
            break;
         default:
            if (this.left) this.left.depthFirstForEach(cb, order);
            cb(this.value);
            if (this.right) this.right.depthFirstForEach(cb, order);
            break;
   }  }

    breadthFirstForEach = (cb, queue = []) => {
      cb(this.value);
      if (this.left) queue.push(this.left);
      if (this.right) queue.push(this.right);
      if (queue.length > 0) queue.shift().breadthFirstForEach(cb, queue);
   }  

   size = (current) => {
      let count = 1;
      if (this.left) count += this.left.size();
      if (this.right) count += this.right.size();
      return count;
   }
}


// PROTOTYPE
// function BinarySearchTree(value) {
//       this.value = value;
//       this.left = this.right = null;
// }

// BinarySearchTree.prototype.insert = function (value) {
//    if (value < this.value) {
//       (!this.left) ? this.left = new BinarySearchTree(value) : this.left.insert(value);
//    } else {
//       (!this.right) ? this.right = new BinarySearchTree(value) : this.right.insert(value);
// }  }

// BinarySearchTree.prototype.contains = function (value) {
//    if (value === this.value) return true;
//    if (value < this.value && this.left) return this.left.contains(value);
//    if (value > this.value && this.right) return this.right.contains(value);
//    return false;
// }

// BinarySearchTree.prototype.depthFirstForEach = function (cb, order) {
//    switch (order) {
//       case 'post-order':
//          if (this.left) this.left.depthFirstForEach(cb, order);
//          if (this.right) this.right.depthFirstForEach(cb, order);
//          cb(this.value);
//          break;
//       case 'pre-order':
//          cb(this.value);
//          if (this.left) this.left.depthFirstForEach(cb, order);
//          if (this.right) this.right.depthFirstForEach(cb, order);
//          break;
//       default:
//          if (this.left) this.left.depthFirstForEach(cb, order);
//          cb(this.value);
//          if (this.right) this.right.depthFirstForEach(cb, order);
//          break;
// }  }

// BinarySearchTree.prototype.breadthFirstForEach = function (cb) {
//    cb(this.value);
//    if (this.left) queue.push(this.left);
//    if (this.right) queue.push(this.right);
//    if (queue.length > 0) queue.shift().breadthFirstForEach(cb, queue);
// }

// BinarySearchTree.prototype.size = function (value) {
//    let count = 1;
//    if (this.left) count += this.left.size();
//    if (this.right) count += this.right.size();
//    return count;
// }

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
