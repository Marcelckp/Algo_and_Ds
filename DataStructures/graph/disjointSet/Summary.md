# Summary

<br>

Each index in an array represents a node within the disjoint set graph.

In graphing the indexes normally represent the nodes (Or vertices and the values at that index represent the edges connecting vertices together)

Here is an example using **_Adjacency Matrixes_**

```py
# Adjacency matrix for a graph with 3 nodes
# A value of 1 represents an edge between the nodes at that index

# 0 - 1
#  \ /
#   2

adj_matrix = [
    # Node / Vertex 0 has no connection to itself so index 1 has a 0. Node 0 as a connection at index 1 and 2 which means that Node 0 is connected to
    [0, 1, 1],
    [1, 0, 1],
    [1, 1, 0]
]

adj_list = [
    [1, 2],  # Node 0 is connected to nodes 1 and 2
    [0, 2],  # Node 1 is connected to nodes 0 and 2
    [0, 1]   # Node 2 is connected to nodes 0 and 1
]
```

<br />

In a disjointed set you can follow the chain of connected vertexes by following the value at a particular index.

If the value is the same as the index then you have found a root node. Or standalone node.

You can see an example [here](./baseDisJoint.py)

<br />

The main idea of a `“Disjoint Set”` is to have all connected VERTICES have the same parent node or root node, whether directly or indirectly connected. To check if two VERTICES are connected, we only need to check if they have the same root node.

The two most important functions for the `“Disjoint Set”` data structure are the find function and the union function. The find function locates the Root Node of a given VERTEX. The union function connects two previously unconnected VERTICES by giving them the same root node. There is another important function named connected, which checks the “connectivity” of two VERTICES. The find and union functions are essential for any question that uses the `“Disjoint Set”` data structure.

<br>

## Find Function within the 'disjoint set'

<br>

The `"Disjoint Set"` mainly uses the find function to find the Root Node of a given VERTEX.

<br>

## Union function of the “disjoint set”

<br>

The “`Disjoint Set”` mainly uses the union function to connect two VERTICES, X, and Y, by equating their Root Node.

<br>

## Connected function of the “disjoint set”

<br>

The connected function checks if two VERTICES, X and Y, are connected by checking if they have the same Root Node.

If X and Y have the same Root Node, they are connected. Otherwise, they are not connected.

<br>
