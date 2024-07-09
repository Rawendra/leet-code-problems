const arr = ["a", "b", "c", "d", "e"];

//print the arr=[bcde, acde, abde, abce, abcd]
// function mul(factor, arr){
// return arr.reduce((acc, crr)=>acc.push(factor+crr),[])
// }
// function myfun(arrInput) {
//   if (arrInput.length === 1) {
//     return [ ]
//   }
//   if (arrInput.length === 2) {
//     const [a, b] = arrInput;
//     return [b,a];
//   }
//   const [first, ...rest]=arrInput
//   const product=rest.reduce((acc, crr)=>acc+=crr,'')
//   return [...myfun(first,product),...mul(first, myfun(rest))]
// }

// console.log(myfun(arr))
