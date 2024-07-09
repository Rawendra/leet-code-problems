const stocks = [7, 1, 3, 4, 6, 5];
//0 1 2 3 4 5
let left = 0,
  right = 1,
  maxProfit = 0;

while (right < stocks.length) {
  if (stocks[left] < stocks[right]) {
    const profit = stocks[right] - stocks[left];
    maxProfit = profit > maxProfit ? profit : maxProfit;
  } else {
    left = right;
  }
  right++;
}

console.log(`buy @ ${left} and sell@ ${right}`);
