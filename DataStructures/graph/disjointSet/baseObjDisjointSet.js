class DisjointSet {
  constructor() {
    this.parent = {};
  }

  find(x) {
    if (!this.parent[x]) this.parent[x] = x;
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]);
    }
    return this.parent[x];
  }

  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);
    if (rootX !== rootY) this.parent[rootX] = rootY;
  }
}

// Example usage
const ds = new DisjointSet();
ds.union(1, 2);
ds.union(2, 3);
console.log(ds.find(1)); // 3
console.log(ds.find(2)); // 3
console.log(ds.find(3)); // 3
