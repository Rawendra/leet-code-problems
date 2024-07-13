const arr = [1, 2, 3, 4, 5];
const result = [];
let left = 0;

for (let i = 0; i < arr.length; i++) {
  if (i == 0) {
    result.push(arr[i]);
    continue;
  }
  // if(i==arr.length-1){
  //   result.push(result[i-1])
  //   continue
  // }
 
  const product = arr[i] * result[i - 1];
  result.push(product);
}
console.log('result',result)
for (let i = arr.length - 1; i > 0; i--) {
  if (i == arr.length - 1) {
    continue;
  }

  if (i == 0) {
    result[0] = result[0] * arr[1];
    continue
  }
  result[i] = arr[i] * result[i + 1];
}
console.log(result);
