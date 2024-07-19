function minCoinsUtil(coins, m, V, dp) {
  if (V === 0) {
      return 0;
  }

  if (dp[V] !== -1) {
      return dp[V];
  }

  let res = Infinity;

  for (let i = 0; i < m; i++) {
      if (coins[i] <= V) {
          let sub_res = minCoinsUtil(coins, m, V - coins[i], dp);

          if (sub_res !== Infinity && sub_res + 1 < res) {
              res = sub_res + 1;
          }
      }
  }

  dp[V] = res;

  return res;
}

function minCoins(coins, m, V) {// [9, 6, 5, 1] , 4, 11
  const dp = new Array(V + 1).fill(-1);

  return minCoinsUtil(coins, m, V, dp);// [9, 6, 5, 1] , 4, 11,
}

const coins = [9, 6, 5, 1];
const m = coins.length;
const V = 11;


const res = minCoins(coins, m,V);
if(res == Infinity) res = -1;

console.log("Minimum coins required is", res);