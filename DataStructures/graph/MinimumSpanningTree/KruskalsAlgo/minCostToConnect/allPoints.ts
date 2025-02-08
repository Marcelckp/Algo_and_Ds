/*

    Leet Code - 1584

    You are given an array points representing integer coordinates of some points on a 2D-plane, where points[i] = [xi, yi].

    The cost of connecting two points [xi, yi] and [xj, yj] is the manhattan distance between them: |xi - xj| + |yi - yj|, where |val| denotes the absolute value of val.

    Return the minimum cost to make all points connected. All points are connected if there is exactly one simple path between any two points.

    

    Example 1:

    Input: points = [[0,0],[2,2],[3,10],[5,2],[7,0]]
    Output: 20

    Explanation: 

    We can connect the points as shown above to get the minimum cost of 20.
    Notice that there is a unique path between every pair of points.


    Example 2:

    Input: points = [[3,12],[-2,5],[-4,1]]
    Output: 18    

    Constraints:

        • 1 <= points.length <= 1000
        • -106 <= xi, yi <= 106
        • All pairs (xi, yi) are distinct.

*/
interface disjointSet {
  rootArray: number[];
  rank: number[];
  count: number;
  Find: Function;
  Union: Function;
  isConnected: Function;
  initialConstruct: Function;
}

class DJS implements disjointSet {
  rootArray;
  rank;
  count;

  constructor(size) {
    this.count = size;
    const { rootArray, rank } = this.initialConstruct();
    this.rootArray = rootArray;
    this.rank = rank;
  }

  initialConstruct = (): { rootArray: number[]; rank: number[] } => {
    const rootArray: number[] = Array.from(
      { length: this.count },
      (_, idx) => idx
    );
    const rank: number[] = Array.from({ length: this.count }, () => 1);
    return { rootArray, rank };
  };

  Find = (node: number): number => {
    if (this.rootArray[node] === node) return node;
    else return (this.rootArray[node] = this.Find(this.rootArray[node]));
    // return this.rootArray[node];
  };

  Union = (x, y): boolean => {
    const rootX = this.Find(x);
    const rootY = this.Find(y);

    if (rootX !== rootY) {
      if (this.rank[rootX] > this.rank[rootY]) this.rootArray[rootY] = rootX;
      else if (this.rank[rootY] > this.rank[rootX])
        this.rootArray[rootX] = rootY;
      else {
        this.rootArray[rootY] = rootX;
        this.rank[rootX]++;
      }
      this.count--
      return true;
    }

    return false;
  };

  isConnected = (x, y): boolean => {
    return this.Find(x) === this.Find(y);
  };
}

const getDistance = (pointX, pointY) => {
  return Math.abs(pointX[0] - pointY[0]) + Math.abs(pointX[1] - pointY[1]);
};

const getPotentialWeights = (points): number[][] | any => {
  const weights: number[][] | any = [];
  const visited = new Set();

  for (let i = 0; i < points.length; i++) {
    for (let x = 0; x < points.length; x++) {
      if (x === i) continue;
      if (visited.has(points[i]) || visited.has(points[x])) continue;
      weights.push([i, x, getDistance(points[i], points[x])]);
    }
    visited.add(points[i]);
  }

  return weights.sort((a, b) => a[2] - b[2]);
};

function minCostConnectPoints(points: number[][]): number {
  const djs = new DJS(points.length);
  const pWeights = getPotentialWeights(points);
  let cost: number = 0;

  // console.log(pWeights);
  // console.log(djs.count);

  while (djs.count - 1) {
    const point = pWeights.shift();
    // console.log(point);
    // console.log(djs.count);
    if (!djs.Union(point[0], point[1])) continue;
    cost += point[2];
  }

  // console.log(djs.rootArray)

  return cost;
}
