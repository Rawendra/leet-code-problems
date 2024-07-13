const arr = [1, 2, 3, 4, 5, 6, 11];

const map = {};
let result = false;

for (let index = 0; index < arr.length; index++) {
  if (map[arr[index]]) {
    result = true;
    break;
  } else {
    map[arr[index]] = true;
  }
}

console.log(`array given contains deuplicate elements: ${result}`);
