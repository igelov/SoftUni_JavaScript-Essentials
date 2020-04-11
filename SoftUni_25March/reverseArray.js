function reverseArray(n , input) {
 let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(input[i]);

    }
    arr = arr.reverse();
    let out = '';
    for (let i = 0; i <arr.length ; i++) {
        out += `${arr[i]} `;
    }
    console.log(out);
}
reverseArray(3, [2, 3, 4] );