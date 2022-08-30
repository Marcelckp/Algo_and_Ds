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
