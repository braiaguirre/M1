// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor(head = null) {
//     this._length = 0;
//     this.head = head;
//   }

//   add = (value) => {
//     if (this.head) {
//       let last = this.head;
//       while(last.next) last = last.next;
//       last.next = new Node(value);
//     } else this.head = new Node(value);
//     this._length++;
//   }

//   search = (x) => {
//     let last = this.head;
//     if (last) {
      
//         if (typeof(x) === 'function') {

//           if (x(last.value)) return last.value;
//           while(last.next) {
//             last = last.next;
//             if (x(last.value)) return last.value;
//           }

//         } else {

//           if (last.value === x) return last.value;
//           while (last.next) {
//             last = last.next;
//             if (last.value === x) {
//               return last.value;
//             }
//           }
//         }
//       }
//       return null;
//     }
//   }


//   remove = () => {

//     if (this._length == 0) return null;

//     let lastNode = this.head; //último
//     let lastNodeValue = lastNode.value //valor del último nodo
//     if (this._length == 1) {
//       this._length--;
//       this.head = null;
//       return lastNodeValue;
//     };

//     let lastNodeB = null; //anteúltmo
//     for (let i = 0; i < this._length - 1; i++) {
//       lastNodeB = lastNode;
//       lastNode = lastNode.next;
//     }
//     this._length--;
//     lastNodeB.next = null;
//     return lastNode.value;
//   }
// }

// let list = new LinkedList()

// // test add
// list.add('first');
// list.add('second');
// list.add('third');
// // console.log(list.head);
// // console.log(list.head.next);

// // test search
// console.log(list.search(function(nodeValue) {
//   return nodeValue === 'first';
// }));
// console.log(list.search('first'));

// // test remove
// // console.log('---- remove ----')
// // console.log(list.remove());
// // console.log('---- remove ----')
// // console.log(list.remove());
// // console.log('---- remove ----')
// // console.log(list.remove());

class TablaHash {
  constructor() {
    this.tabla = new Array(127);
    this.tamano = 0;
  }

  _hash(llave) {
    let hash = 0;
    for (let i = 0; i < llave.length; i++) {
      hash += llave.charCodeAt(i);
    }
    return hash % this.tabla.length;
  }

  set(llave, valor) {
    const indice = this._hash(llave);
    this.tabla[indice] = [llave, valor];
    this.tamano++;
  }

  get(llave) {
    const objetivo = this._hash(key);
    return this.table[objetivo];
  }

  remover(llave) {
    const indice = this._hash(llave);

    if (this.tabla[indice] && this.tabla[indice].length) {
      this.tabla[indice] = [];
      this.tamano--;
      return true;
    } else {
      return false;
    }
  }
}

const ht = new TablaHash();
ht.set("Canada", 300);
ht.set("France", 100);
ht.set("Spain", 110);

console.log(ht.get("Canada")); // [ 'Canada', 300 ]
console.log(ht.get("France")); // [ 'France', 100 ]
console.log(ht.get("Spain")); // [ 'Spain', 110 ]