/*

    There are n people in a social group labeled from 0 to n - 1. You are given an array logs where logs[i] = [timestampi, xi, yi] indicates that xi and yi will be friends at the time timestampi.

    Friendship is symmetric. That means if a is friends with b, then b is friends with a. Also, person a is acquainted with a person b if a is friends with b, or a is a friend of someone acquainted with b.

    Return the earliest time for which every person became acquainted with every other person. If there is no such earliest time, return -1.
    

    Example 1:

    Input: logs = [[20190101,0,1],[20190104,3,4],[20190107,2,3],[20190211,1,5],[20190224,2,4],[20190301,0,3],[20190312,1,2],[20190322,4,5]], n = 6
    Output: 20190301

    Explanation: 
    The first event occurs at timestamp = 20190101 and after 0 and 1 become friends we have the following friendship groups [0,1], [2], [3], [4], [5].
    The second event occurs at timestamp = 20190104 and after 3 and 4 become friends we have the following friendship groups [0,1], [2], [3,4], [5].
    The third event occurs at timestamp = 20190107 and after 2 and 3 become friends we have the following friendship groups [0,1], [2,3,4], [5].
    The fourth event occurs at timestamp = 20190211 and after 1 and 5 become friends we have the following friendship groups [0,1,5], [2,3,4].
    The fifth event occurs at timestamp = 20190224 and as 2 and 4 are already friends anything happens.
    The sixth event occurs at timestamp = 20190301 and after 0 and 3 become friends we have that all become friends.


    Example 2:

    Input: logs = [[0,2,0],[1,0,1],[3,0,3],[4,1,2],[7,3,1]], n = 4
    Output: 3
    

    Constraints:

        • 2 <= n <= 100
        • 1 <= logs.length <= 104
        • logs[i].length == 3
        • 0 <= timestampi <= 109
        • 0 <= xi, yi <= n - 1
        • xi != yi
        • All the values timestampi are unique.
        • All the pairs (xi, yi) occur at most one time in the input.

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

  Union = (x, y): boolean => {
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
    } else return false;
    return true;
  };

  isAllConnected = (): boolean => {
    const set = new Set();
    for (let i = 0; i < this.rootArray.length; i++) {
      const root = this.Find(this.rootArray[i]);
      if (!set.hasOwnProperty(root)) set.add(root);
    }

    console.log(set);
    console.log(this.rootArray);

    return set.size === 1;
  };
}

function earliestAcq(logs: number[][], n: number): number {
  const DisjointSet = new CustomDJS(n);
  logs.sort((a, b) => a[0] - b[0]);
  for (let log of logs) {
    if (!DisjointSet.Union(log[1], log[2])) continue;
    console.log(DisjointSet.isAllConnected());
    if (DisjointSet.isAllConnected()) return log[0];
  }
  return -1;
}
