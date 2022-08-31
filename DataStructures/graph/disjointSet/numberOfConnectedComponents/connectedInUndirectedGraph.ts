/*
  Leet Code - 323
  
  You have a graph of n nodes. You are given an integer n and an array edges where edges[i] = [ai, bi] indicates that there is an edge between ai and bi in the graph.

  Return the number of connected components in the graph.


  Example 1:

  Input: n = 5, edges = [[0,1],[1,2],[3,4]]
  Output: 2


  Example 2:

  Input: n = 5, edges = [[0,1],[1,2],[2,3],[3,4]]
  Output: 1
  

  Constraints:

      • 1 <= n <= 2000
      • 1 <= edges.length <= 5000
      • edges[i].length == 2
      • 0 <= ai <= bi < n
      • ai != bi
      • There are no repeated edges.
*/

class CustomDJS {
  rootArray;
  rankArray;

  constructor(size: number) {
    const { arr, rank } = this.ConstructRootArray(size);
    this.rootArray = arr;
    this.rankArray = rank;
  }

  ConstructRootArray(size: number) {
    const arr = Array(size),
      rank = Array(size);
    for (let i = 0; i < size; i++) {
      arr[i] = i;
      rank[i] = 1;
    }
    return { arr, rank };
  }

  Find = (node): number => {
    if (node === this.rootArray[node]) return node;
    else this.rootArray[node] = this.Find(this.rootArray[node]);
    return this.rootArray[node];
  };

  Union = (x, y) => {
    const rootX = this.Find(x);
    const rootY = this.Find(y);

    if (rootY !== rootX) {
      if (this.rankArray[rootX] > this.rankArray[rootY])
        this.rootArray[rootY] = rootX;
      else if (this.rankArray[rootY] > this.rankArray[rootX])
        this.rootArray[rootX] = rootY;
      else {
        this.rootArray[rootY] = rootX;
        this.rankArray[rootX]++;
      }
    }
  };
}

function countComponents(n: number, edges: number[][]): number {
  const DisjointSet = new CustomDJS(n);

  for (let edge of edges) {
    console.log(edge);
    DisjointSet.Union(edge[0], edge[1]);
  }

//   console.log(DisjointSet);

  const set = new Set();
  for (let i = 0; i < DisjointSet.rootArray.length; i++) {
    const root = DisjointSet.Find(DisjointSet.rootArray[i]);
    if (!set.hasOwnProperty(root)) set.add(root);
  }

  return set.size;
}
