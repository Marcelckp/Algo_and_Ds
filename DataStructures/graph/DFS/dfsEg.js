const graph = {
  A: ["B", "C"],
  B: ["D", "E"],
  C: ["F"],
  D: [],
  E: ["F"],
  F: [],
};

// Function to visit all the nodes of a graph using Depth First Search (DFS)
function dfs(node, visited = new Set()) {
  if (visited.has(node)) return;
  console.log(node);
  visited.add(node);
  for (const neighbor of graph[node]) {
    dfs(neighbor, visited);
  }
}

dfs("A"); // Output: A B D E F C
