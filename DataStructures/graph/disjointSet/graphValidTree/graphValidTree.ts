/*

    You have a graph of n nodes labeled from 0 to n - 1. You are given an integer n and a list of edges where edges[i] = [ai, bi] indicates that there is an undirected edge between nodes ai and bi in the graph.

    Return true if the edges of the given graph make up a valid tree, and false otherwise.

    

    Example 1:


    Input: n = 5, edges = [[0,1],[0,2],[0,3],[1,4]]
    Output: true
    Example 2:


    Input: n = 5, edges = [[0,1],[1,2],[2,3],[1,3],[1,4]]
    Output: false
    

    Constraints:

    1 <= n <= 2000
    0 <= edges.length <= 5000
    edges[i].length == 2
    0 <= ai, bi < n
    ai != bi
    There are no self-loops or repeated edges.

*/

class CustomSet {
  rootArray;
  rankArray;
  count;
  constructor(size: number) {
    const { arr, rank } = this.ConstructRootArray(size);
    this.rootArray = arr;
    this.rankArray = rank;
    this.count = 0;
  }

  ConstructRootArray = (size: number): { arr: number[]; rank: number[] } => {
    const arr = Array(size),
      rank = Array(size);

    for (let i = 0; i < size; i++) {
      arr[i] = i;
      rank[i] = 1;
    }

    return { arr, rank };
  };

  Find = (node) => {
    while (node !== this.rootArray[node]) {
      node = this.rootArray[node];
    }
    return node;
  };

  Union = (x, y): boolean => {
    const rootX = this.Find(x);
    const rootY = this.Find(y);

    if (rootX !== rootY) {
      if (this.rankArray[rootY] > this.rankArray[rootX])
        this.rootArray[rootX] = rootY;
      else if (this.rankArray[rootX] > this.rankArray[rootY])
        this.rootArray[rootY] = rootX;
      else {
        this.rootArray[rootY] = rootX;
        this.rankArray[rootX]++;
      }

      this.count++;
    } else return false;
    return true;
  };
}

function validTree(n: number, edges: number[][]): boolean {
  if (edges.length !== n - 1) return false;
  const DisjointSet = new CustomSet(n);

  for (let i = 0; i < edges.length; i++) {
    const edge = edges[i];
    console.log(edge);
    if (!DisjointSet.Union(edge[0], edge[1])) return false;
    console.log(DisjointSet);
  }

  return true;
}
