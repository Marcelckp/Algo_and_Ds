/*
  Leet Code - 547
  
  There are n cities. Some of them are connected, while some are not. If city a is connected directly with city b, and city b is connected directly with city c, then city a is connected indirectly with city c.

  A province is a group of directly or indirectly connected cities and no other cities outside of the group.

  You are given an n x n matrix isConnected where isConnected[i][j] = 1 if the ith city and the jth city are directly connected, and isConnected[i][j] = 0 otherwise.

  Return the total number of provinces.


  Example 1:

  Input: isConnected = [[1,1,0],[1,1,0],[0,0,1]]
  Output: 2


  Example 2:

  Input: isConnected = [[1,0,0],[0,1,0],[0,0,1]]
  Output: 3
  

  Constraints:

    • 1 <= n <= 200
    • n == isConnected.length
    • n == isConnected[i].length
    • isConnected[i][j] is 1 or 0.
    • isConnected[i][i] == 1
    • isConnected[i][j] == isConnected[j][i]
*/

class CustomSET {
  count;
  rootArray;
  rankArray;

  constructor(size) {
    const { arr, rank } = this.constructRootArray(size);
    this.rootArray = arr;
    this.rankArray = rank;
    this.count = size;
  }

  constructRootArray = (size: number) => {
    const arr = Array(size),
      rank = Array(size);
    for (let i = 0; i < size; i++) {
      arr[i] = i;
      rank[i] = 1;
    }
    return { arr, rank };
  };

  Find = (node: number): number => {
    if (node === this.rootArray[node]) return node;
    else this.rootArray[node] = this.Find(this.rootArray[node]);
    return this.rootArray[node];
  };

  Union = (x, y) => {
    const rootX = this.Find(x);
    const rootY = this.Find(y);

    if (rootX !== rootY) {
      if (this.rankArray[rootX] > this.rankArray[rootY])
        this.rootArray[rootY] = rootX;
      else if (this.rankArray[rootY] > this.rankArray[rootX])
        this.rootArray[rootX] = rootY;
      else {
        this.rootArray[rootY] = rootX;
        this.rankArray[rootX]++;
      }
      this.count--;
    }
  };

  get getCount(): number {
    return this.count;
  }

  connected = (x: number, y: number): boolean => {
    return this.Find(x) === this.Find(y);
  };
}

function findCircleNum(isConnected: number[][]): number {
  const DisjointSet = new CustomSET(isConnected.length);

  for (let i = 0; i < isConnected.length; i++) {
    const city = isConnected[i];
    for (let x = i + 1; x < city.length; x++) {
      if (city[x] === 1) DisjointSet.Union(i, x);
    }
  }
  console.log(DisjointSet);
  return DisjointSet.getCount;
}
