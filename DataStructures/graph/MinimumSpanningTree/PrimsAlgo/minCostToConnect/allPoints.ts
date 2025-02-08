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

interface h {
    add: Function;
    pop: Function;
  }
  
  class MinHeap implements h {
    root;
    realSize;
    size;
  
    constructor(size: number) {
      this.root = new Array(size + 1);
      this.realSize = 0;
      this.size = size;
    }
  
    add = (node: number[]) => {
      this.realSize++;
  
      if (this.realSize > this.size) {
        this.realSize--;
        return false;
      }
  
      this.root[this.realSize] = node;
  
      let child = this.realSize;
      let parent = Math.floor(child / 2);
  
      while (this.root[parent]?.[2] > this.root[child]?.[2] && child > 1) {
        const holder = this.root[parent];
        this.root[parent] = this.root[child];
        this.root[child] = holder;
  
        child = parent;
        parent = Math.floor(child / 2);
      }
  
      return true;
    };
  
    pop = (): number | boolean => {
      if (this.realSize < 1) return false;
      const topElement = this.root[1];
  
      this.root[1] = this.root[this.realSize];
  
      delete this.root[this.realSize--];
  
      // console.log(this.root);
      // console.log(topElement);
  
      let index = 1;
  
      while (index <= Math.floor(this.realSize / 2)) {
        let left = index * 2;
        let right = left + 1;
  
        if (
          this.root[index]?.[2] > this.root[right]?.[2] ||
          this.root[index]?.[2] > this.root[left]?.[2]
        ) {
          let holder: number;
          if (this.root[left]?.[2] > this.root[right]?.[2]) {
            holder = this.root[right];
            this.root[right] = this.root[index];
            this.root[index] = holder;
            index = right;
          } else {
            holder = this.root[left];
            this.root[left] = this.root[index];
            this.root[index] = holder;
            index = left;
          }
        } else break;
      }
  
      return topElement;
    };
  }
  
  const getLift = (pointX, pointY) => {
    return Math.abs(pointX[0] - pointY[0]) + Math.abs(pointX[1] - pointY[1]);
  };
  
  const getSets = (points): { visited: Set<number>; nonVisited: Set<number> } => {
    const visited: Set<number> = new Set<number>();
    const nonVisited: Set<number> = new Set<number>();
  
    for (let i = 0; i < points.length; i++) {
      nonVisited.add(i);
    }
  
    return { visited, nonVisited };
  };
  
  function minCostConnectPoints(points: number[][]): number {
    const { visited, nonVisited } = getSets(points);
  
    let cost = 0;
    const cutSet = new MinHeap(points.length ** 2);
  
    visited.add(0);
    nonVisited.delete(0);
  
    let current = 0;
  
    while (nonVisited.size) {
      // console.log(visited);
      // console.log(nonVisited);
  
        for (const vertex of nonVisited) {
  
          // console.log(current)
          // console.log(vertex)
          if (current === vertex) continue;
          const dist = getLift(points[vertex], points[current]);
          cutSet.add([current, vertex, dist]);
        }
  
        // console.log(cutSet.root)
  
      let lwe;
  
      while (cutSet.realSize) {
        lwe = cutSet.pop();
  
        if (visited.has(lwe[0]) && visited.has(lwe[1])) continue;
        // if (!visited.has(lwe[0]) && !visited.has(lwe[1])) continue
  
        // console.log(lwe)
        // seen.add(lwe[0]);
        visited.add(lwe[1]);
        nonVisited.delete(lwe[1]);
  
        break;
      }
  
      cost += lwe[2];
      current = lwe[1]
  
      // console.log(lwe);
      // console.log(cutSet.root);
  
      // break
    }
  
    // console.log(visited);
    // console.log(nonVisited);
  
    return cost;
  }