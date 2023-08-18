function crearCadena(delimitadorIzquierda, delimitadorDerecha) {
    return delimitadorIzquierda + 'asdasdasd' + delimitadorDerecha;
}

let textoAsteriscos = crearCadena.bind(null, '*', '*');
let asd = crearCadena('*', '*');
console.log(textoAsteriscos());
console.log(asd);