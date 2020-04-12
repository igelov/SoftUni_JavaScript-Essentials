function reverseArrayString(input) {
//     let out ='';
//     for (let i = input.length-1; i >= 0 ; i--) {
//         out +=`${input[i]} `;
//     }
// console.log(out);
let arr = input;
    for (let i = 0; i < arr.length / 2; i++) {
        let oldElement = arr[i];
        console.log("Old element: "+oldElement);
        let previousIndex = arr.length - 1 - i;
        console.log(previousIndex +" Is the previous index")
        arr[i] = arr[previousIndex];
        arr[previousIndex] = oldElement;
        console.log("==================="+ arr.length / 2);
    }
    console.log(arr.join(' '));
}
reverseArrayString(['a', 'b', 'c', 'd', 'e']);