# The different between using an object for the representation of the graph set and an array is that we can create nodes and have them be numbered instead of using the index to infer the nodes vertex position. 

# We can also build the set up with Mappings using the nodes and their connections as opposed to the index of the array.

class DisjointSet:
    def __init__(self, size):
        self.parent = list(range(size))

    # We recursively use the vertex edge value / connection value at its index to find the node th current index is connected to. Once we find a point where the parent arrays index is the same as the value at that index we have found the root of that set
    def find(self, node):
        if self.parent[node] == node:
            return node
        return self.find(self.parent[node])

    def union(self, node1, node2):
        root1 = self.find(node1)
        root2 = self.find(node2)
        if root1 != root2:
            self.parent[root2] = root1

# Example usage
ds = DisjointSet(10)
print(ds.parent)  # Output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] 
# Each node is its own root initially as they have not been connected / unioned with any other node. You can tell this as the value at the index will be the same as the index

ds.union(1, 5) # Output: [0, 1, 2, 3, 4, 1, 6, 7, 8, 9] 
# One node 5 is union'd with node 1 - you can see the value at index 5 is 1

print(ds.find(5)) # Output: 1 as it is the root of 5, and this means 1 and 5 are vertices connected together in the graph view. Currently we are visualising the graph as an array using the indexes as the nodes

print(ds.parent)  # Output: [0, 1, 2, 3, 4, 1, 6, 7, 8, 9] 
