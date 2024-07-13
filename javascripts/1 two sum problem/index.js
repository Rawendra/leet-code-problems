const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//           0  1   2 3   4 5 6   7  8
            

const sum = 10;

const map = {};
//{1:0,2:8,3:7,4:6,5:5,6:}
//{9:0,8:1,7:2}

const length = arr.length;
const result = [];
for (const [index, element] of arr.entries()) {
 
  if (map[element]) {
    result.push([index, map[element]]);
    console.log('printing the map in if block', map, result)
  } else {
    const key = sum - element;
    map[key] = index;
    console.log('printing the map in else', map)
  }
}

console.log(result)
