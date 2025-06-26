# Graph

## Introduction

**_Graph_** is probably the data structure that has the closest resemblance to our daily life.

There are many types of graphs describing the relationships in real life. For instance, our friend circle is a huge **_Graph_**.

![Graph spanning relationship visual](https://assets.leetcode.com/static_assets/explore/The_basic_of_graph_1.png)

Figure 1, An example of a **Undirected Graph**.

<br>

In Figure 1 above, we can see that person `G, B, and E` are all direct friends of `A`, while person `C, D, and F` are indirect friends of `A`.

This example is a social graph of friendship. So, what is the **_Graph_** data structure?

<br>

## Types of **_Graphs_**

<br>

There are 3 main types of **_Graphs :_**

<br>

### Undirected **_Graphs_**

The edges between two vertices in an **_Undirected Graph_** do not have a direction, indicating a two-way relationship.

Figure 1 / the above image, is an example of an undirected graph.

<br>

### Directed **_Graphs_**

<br>

The edges between any two vertices in a **_Directed Graph_** graph are directional.

The image below is an example of a **_Directed Graph_**.

<br>

![](https://assets.leetcode.com/static_assets/explore/The_basic_of_graph_2.png)

Figure 2, An example of a **Directed Graph**.

<br>

### Weighted **_Graphs_**

<br>

Each edge in a **_Weighted Graph_** has an associated weight.

The weight can be of any metric, such as time, distance, size, etc. The most commonly seen **_Weighted Map_** in our daily life might be a city map.

In Figure 3 / the below image, each edge is marked with the distance, which can be regarded as the weight of that edge.

<br>

![](https://assets.leetcode.com/static_assets/explore/The_basic_of_graph_3.png)

Figure 3. An example of a **Weighted Graph**.

<br>

## The Definition of **_Graph_** and "Terminologies"

<br>

**_Graph_** is a non-linear data structure consisting of vertices and edges.

There are a lot of terminologies to describe a graph. If you encounter an unfamiliar terms you can look up the definition on google or find it below.

<br>

- **Vertex** :

  In Figure 1, nodes such as A, B, and C are called vertices of the graph.

<br>

- **Edge** :

  The connection between two vertices are the edges of the graph. In Figure 1, the connection between person A and B is an edge of the graph.

<br>

- **Path** :

  The sequence of vertices to go through from one vertex to another. In Figure 1, a path from A to C is [A, B, C], or [A, G, B, C], or [A, E, F, D, B, C].

    <br>

  **_Note:_**

  there can be multiple paths between two vertices.

<br>

- **Path Length** :

  The number of edges in a path. In Figure 1, the path lengths from person A to C are 2, 3, and 5, respectively.

<br>

- **Cycle** :

  A path where the starting point and endpoint are the same vertex. In Figure 1, [A, B, D, F, E] forms a cycle. Similarly, [A, G, B] forms another cycle.

<br>

- **Negative Weight Cycle** :

  In a **Weighted Graph**, if the sum of the weights of all edges of a cycle is a negative value, it is a negative weight cycle.

  In Figure 4 / the below image, the sum of weights is -3.

<br>

- **Connectivity** :

  If there exists at least one path between two vertices, these two vertices are connected. In Figure 1, A and C are connected because there is at least one path connecting them.

<br>

- **Degree of a Vertex** :

  The term `degree` applies to **Unweighted Graphs**.

  The degree of a vertex is the number of edges connecting the vertex.

  In Figure 1, the degree of vertex `A` is 3 because three edges are connecting it.

<br>

- **In-Degree** :

  `In-Degree` is a concept in directed graphs. If the in-degree of vertex `A` is `D`, there are `D` directional edges incident to the vertex.

  In Figure 2, A’s `In-Degree` is 1.

  i.e) the edge from F to A.

<br>

- **Out-Degree** :

  `Out-Degree` is a concept in directed graphs. If the `Out-Degree` of a vertex is `D`, there are `D` edges incident from the vertex.

  In Figure 2, `A’s` `Out-Degree` is 3.

  i,e, the edges `A` to `B`, `A` to `C`, and `A` to `G`.

<br>

![](https://assets.leetcode.com/static_assets/explore/4._Negative_Cycle.png)

Figure 4. An example of a **Negative Weighted Cycle**.

<br>
