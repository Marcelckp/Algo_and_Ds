/*
    You are given a list of airline tickets where tickets[i] = [from[i], to[i]] represent the departure and the arrival airports of one flight. Reconstruct the itinerary in order and return it.

    All of the tickets belong to a man who departs from "JFK", thus, the itinerary must begin with "JFK". If there are multiple valid itineraries, you should return the itinerary that has the smallest lexical order when read as a single string.

    For example, the itinerary ["JFK", "LGA"] has a smaller lexical order than ["JFK", "LGB"].
    You may assume all tickets form at least one valid itinerary. You must use all the tickets once and only once.

    
    Example 1:

    Input: tickets = [["MUC","LHR"],["JFK","MUC"],["SFO","SJC"],["LHR","SFO"]]
    Output: ["JFK","MUC","LHR","SFO","SJC"]


    Example 2:

    Input: tickets = [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]
    Output: ["JFK","ATL","JFK","SFO","ATL","SFO"]
    
    Explanation: Another possible reconstruction is ["JFK","SFO","ATL","JFK","ATL","SFO"] but it is larger in lexical order.
    

    Constraints:

        • 1 <= tickets.length <= 300
        • tickets[i].length == 2
        • from[i].length == 3
        • toi.length == 3
        • from[i] and toi consist of uppercase English letters.
        • from[i] != toi
*/

function findItinerary(tickets: string[][]): string[] {
    tickets.sort()
  const adjList = createList(tickets);
    // console.log(adjList)
  
    const traverse = (path) => {

        // Once the Itinerary has reach a length greater than the tickets length by 1 we know we have found the required edges to connect edges + 1 VERTICES together.

        if (path.length === tickets.length + 1) return path;
        
        const Vertex = path[path.length - 1]
        
        const len = adjList.get(Vertex)!?.length;
        // console.log(path)

        for (let i = 0; i < len; i++) {
            const nextStation = adjList.get(Vertex)!.shift()!

            // console.log(nextStation)
            // console.log(adjList)

            const valid = traverse([...path, nextStation])
            // console.log(valid)
            if (valid) return valid

            else adjList.set(Vertex, [...adjList.get(Vertex)!, nextStation])
        }
        
        return false
    }

  return traverse(['JFK']);
}

const createList = (tickets): Map<string, string[]> => {
  const map = new Map();
  for (let [a, b] of tickets) {
    if (map.has(a)) {
      map.set(a, [...map.get(a), b]);
    } else map.set(a, [b]);
  }
  return map;
};

// Example 1
console.log(findItinerary([["MUC","LHR"],["JFK","MUC"],["SFO","SJC"],["LHR","SFO"]])) // -> ["JFK","MUC","LHR","SFO","SJC"]

// Example 2
// console.log(findItinerary([["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]])) // -> ["JFK","ATL","JFK","SFO","ATL","SFO"]

// // Example 3
// console.log(findItinerary([["JFK","KUL"],["JFK","NRT"],["NRT","JFK"]]))