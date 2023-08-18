'use strict';

function BinarioADecimal(num) {
   //podría utilizarse => return parseInt(num, 2);
   //pero según lo que explicado en la clase:

   return num
      .split('')
      .reduce((sum, n, i) => sum + n * (2 ** (num.length - 1 - i)), 0);
}

function DecimalABinario(num) {
   //podría utilizarse => return num.toString(2);
   //pero según lo explicado en la clase:
   
   let res = '';
   while (num * 1 >= 1) {
      num % 2 ? res = '1' + res : res = '0' + res;
      num = Math.floor(num / 2);
   }
   return res;
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
