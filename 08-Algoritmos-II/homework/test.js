function mergeSort (arr) {
    let mid = Math.floor(arr.length / 2);
    if (mid === 0) return arr;
    return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)));
}

function merge (left, right, res = []) {
    while (left.length && right.length)
        res.push(left[0] < right[0] ? left.shift() : right.shift());
    return res.concat(left.length ? left : right);
}

var test = [5,6,7,3,1,3,15,8];
console.log(mergeSort(test));


// console.log('---');

// let slicer = (arr, mid = Math.floor(arr.length / 2)) => {
//     if (arr.lenght < 2) return arr;
//     let arr1 = arr.slice(0, mid);
//     let arr2 = arr.slice(mid);
//     ordenador(arr1, arr2);
// }

// let ordenador = (arr1, arr2) => {
//     let arrOrd = [];
//     while (arr1.length > 0 && arr2.length > 0)
//         if (arr1[0] < arr2[0]) arrOrd.push(arr1.shift());
//         else arrOrd.push(arr2.shift());
        
//     console.log(arr1.length ? arrOrd );
// }

// slicer(test);






// for (let i = 1; i < arr.length; i++) arr[i] < p ? left.push(arr[i]) : right.push(arr[i]);