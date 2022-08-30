/*

    You are given a string s, and an array of pairs of indices in the string pairs where pairs[i] = [a, b] indicates 2 indices(0-indexed) of the string.

    You can swap the characters at any pair of indices in the given pairs any number of times.

    Return the lexicographically smallest string that s can be changed to after using the swaps.

    
    Example 1:

    Input: s = "dcab", pairs = [[0,3],[1,2]]
    Output: "bacd"

    Explaination: 
    Swap s[0] and s[3], s = "bcad"
    Swap s[1] and s[2], s = "bacd"


    Example 2:

    Input: s = "dcab", pairs = [[0,3],[1,2],[0,2]]
    Output: "abcd"

    Explaination: 
    Swap s[0] and s[3], s = "bcad"
    Swap s[0] and s[2], s = "acbd"
    Swap s[1] and s[2], s = "abcd"


    Example 3:

    Input: s = "cba", pairs = [[0,1],[1,2]]
    Output: "abc"

    Explaination: 
    Swap s[0] and s[1], s = "bca"
    Swap s[1] and s[2], s = "bac"
    Swap s[0] and s[1], s = "abc"
    

    Constraints:

        • 1 <= s.length <= 10^5
        • 0 <= pairs.length <= 10^5
        • 0 <= pairs[i][0], pairs[i][1] < s.length
        • s only contains lower case English letters.

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

function smallestStringWithSwaps(s: string, pairs: number[][]): string {
  const DisjointSet = new CustomDJS(s.length);

  for (let [x, y] of pairs) {
    DisjointSet.Union(x, y);
  }

  const obj = new Object();
  for (let i = 0; i < DisjointSet.rootArray.length; i++) {
    const root = DisjointSet.Find(DisjointSet.rootArray[i]);
    if (!obj[root]) obj[root] = [];
    obj[root].push(s[i]);
  }

  console.log(DisjointSet);
  console.log(obj);

  for (let key in obj) {
    console.log(obj[key].sort());
  }

  console.log(obj);

  const result: string[] = [];
  for (let i = 0; i < s.length; i++) {
    let p = DisjointSet.Find(i);
    result.push(obj[p].shift());
  }

  return result.join("");
}
