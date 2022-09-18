/*

    There is a bi-directional graph with n vertices, where each vertex is labeled from 0 to n - 1 (inclusive). The edges in the graph are represented as a 2D integer array edges, where each edges[i] = [ui, vi] denotes a bi-directional edge between vertex ui and vertex vi. Every vertex pair is connected by at most one edge, and no vertex has an edge to itself.

    You want to determine if there is a valid path that exists from vertex source to vertex destination.

    Given edges and the integers n, source, and destination, return true if there is a valid path from source to destination, or false otherwise.

    
    Example 1:

    Input: n = 3, edges = [[0,1],[1,2],[2,0]], source = 0, destination = 2
    Output: true

    Explanation: There are two paths from vertex 0 to vertex 2:
    - 0 → 1 → 2
    - 0 → 2


    Example 2:

    Input: n = 6, edges = [[0,1],[0,2],[3,5],[5,4],[4,3]], source = 0, destination = 5
    Output: false

    Explanation: There is no path from vertex 0 to vertex 5.
    

    Constraints:

        • 1 <= n <= 2 * 105
        • 0 <= edges.length <= 2 * 105
        • edges[i].length == 2
        • 0 <= ui, vi <= n - 1
        • ui != vi
        • 0 <= source, destination <= n - 1
        • There are no duplicate edges.
        • There are no self edges.

*/

// Recursive Approach
// var validPathExists = function (n, edges, source, destination) {
//   //build adjacency map
//   const graph = createAdjList(n, edges);

//   const visited = new Set([source]); //to keep track of visited nodes so that we wont visit them any more

//   //DFS
//   const hasPath = (node) => {
//     if (node == destination) return true; //base case

//     for (let neighbor of graph[node]) {
//       //prevent cyclic issue by adding visited node to a list
//       if (!visited.has(neighbor)) {
//         visited.add(neighbor);
//         if (hasPath(neighbor)) return true;
//       }
//     }
//     return false;
//   };

//   return hasPath(source);
// };

// Iterative Approach
const validPathExists = function (n, edges, source, destination) {
  const adjacencyList = createAdjList(n, edges);

  const visited = new Set();

  const iterationStack = [source];

  while (iterationStack.length > 0) {
    const currentVertex = iterationStack.pop()!;

    if (visited.has(currentVertex)) continue;

    if (currentVertex === destination) {
      return true;
    }

    adjacencyList[currentVertex].forEach((e) => {
      iterationStack.push(e);
    });

    visited.add(currentVertex);
  }

  return false;
};

function createAdjList(n, edges): number[][] {
  // Step 1 create adjacency list
  
  const adjacencyList: number[][] = Array.from({ length: n }, () => []);
  // Step 2 populate adjacency list

  for (let [a, b] of edges) {
    // If one node is connected to another then it is connected to that node as well since we are working with a undirected / bi-directional graph so we can make this assumption safely.
    adjacencyList[a]?.push(b);
    adjacencyList[b]?.push(a);
  }
  return adjacencyList;
}
