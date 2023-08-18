const objeto = {
    a: {
        a1: 10,
        a2: 'Franco',
        a3: {f: 'r', a: 'n', c: {o: true}}
    },
    b: 2,
    c: [1, {a: 1}, 'Franco']
    };

let sum = 0;
var countProps = function(obj) {
    for (x in obj) {
        if (typeof(obj[x]) === 'object') sum += countProps(x);
        else sum++;
    }
    return sum;
}

console.log(countProps(objeto));

console.log(isNaN(parseInt('2')))