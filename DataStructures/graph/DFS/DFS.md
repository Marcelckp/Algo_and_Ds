# DFS - Depth First Search 

<br>

Lets start with a Question.

### Given a Graph, how can we find all of its VERTICES, and how can we find all paths between two VERTICES

<br>

The depth-first search algorithm is ideal in solving these kinds of problems because it can explore all paths from the start vertex to all other VERTICES. 

Let's start by considering an example. In Figure 7, the image below, there are five VERTICES **`[A, C, D, B, E]`**. Given two VERTICES `A` and `B`, there are two paths between them. One path is **`[A, C, D, B]`**, and the other is **`[A, E, B]`**.

<br>

![](https://leetcode.com/explore/learn/card/Figures/Graph_Explore/An_Undirected_Graph.png)

Figure 7 - An Undirected Graph

<br>

In Graph theory, the depth-first search algorithm (abbreviated as DFS) is mainly used to:

<br>

1. Traverse all VERTICES in a ***Graph***.

2. Traverse all paths between any two VERTICES in a ***Graph***.

<br>

## Traversing all VERTICES in a ***Graph***

---

<br>

### Lets look at how this is possible.

Since when we want to use a DFS strategy of any kind we would need an auxiliary data structures to help aid which creates two main strategies that we can use,

### REMEMBER STACKS === FIFO, think pancakes!

<br>

- Manually creating a stack

    Since a stack allows us to keep track of the previously visited Node / VERTEX and allows us to revert back to that state when necessary.

<br>

- Using the Recursive call stack

    A stack in memory ( This is an implicit use case of a Stack ) which is formed by recursively calling the same function which allows us to revert back to previous states that exact same way that the manual stack allows us to as well.  

    Although this method can block the execution context and call stack from being able to invoke other function while this call hasn't been resolved, the manual method is better from a Space Complexity stand point as well.

<br>

### ***NB:***

***If possible before starting with the problem, create an adjacency matrix / map. so that you can easily find the VERTICES that are connected to one another.***

<br>

*The Term Depth first search - implies that we will be going as deep as possible with in the Graph traversal until we cannot go any further and then come back up, to try and solve the prompt.*

<br>

### Lets look at an example to see how we would use this method.

<br>

![](/Resources/GraphDFS.png)

<br>

Lets say we have the Graph & Stack as shown in the above image, and before we start traversing we select VERTEX( A ) as our arbitrary / random starting VERTEX.

<br>

### [Steps](#steps)

<br>

1. Chose a starting VERTEX.

2. Place VERTEX / VERTICES into the stack.

3. Pop the top VERTEX off the stack and check if it has been visited, If the VERTEX has been visited there is no need to visit it again so we do nothing and repeat this step.

    If it has not been visited then we should visit the VERTEX, we do this by adding it to the visited Set of VERTICES and add all of the VERTICES edges into the stack.

4. Repeat step 3, until the stack is left empty

<br>

To put the steps into action lets look again at the above image of the Graph & Stack, we said that we will start traversal from VERTEX( A ) so we would push A into the stack pop it off the stack check if it has been visited, at this point which it hasn't so we visit it, mark it down as one of our new seen VERTICES and add all of its edges into the stack which would result in:

<br>

![](/Resources/GraphDFSP3.png)

<br>

After this we then repeat step 3 until our stack is empty, once our stack is empty we know we will have visited all possible VERTICES in the given Graph.

<br>

### ***Note:***

A edge / path is only valid if the destination VERTEX has not been visited yet 

ie) If we were to consider the edge between A & B this path / edge would not be valid if both VERTICES have already been visited.

<br>

For methodology sake after visiting VERTEX( A ), and add all its edges to the stack the next current VERTEX to be popped off is VERTEX( B ), we perform the same steps 3 & 4 with this VERTEX.

### ***NB:***

But important since this is an Undirected Graph - VERTEX( B ) holds an edge that points towards VERTEX( A ) but since we have already visited A this edge / path is inValid, the result of visiting B is as follows:

<br>

![](/Resources/GraphDFSP3.png)

<br>

This process is then repeated until the stack is empty.

<br>

## Traverse all paths between any two VERTICES in a ***Graph***.

---

<br>

Lets take a look at how to do this we will use the same Graph & Stack combo as before, but this time we want to find all path between 2 VERTICES, this means that we now need to start off from the source / starting VERTEX with the goal of ending up at the destination VERTEX.

<br>

### So now lets find all the possible paths from VERTEX( A ) to VERTEX( B )

<br>

![](/Resources/GraphDFSP4.png)

<br>

We start in the exact same way for when we want to find all the VERTICES in a Graph. 

We follow the exact same steps but we take the ***[STEPS](<#steps> "Traversal Steps")*** a little differently.

The difference is that now instead of only pushing the VERTICES back onto the stack, now we push the path onto the stack, the result after the first iteration looks like this:

<br>

![](/Resources/GraphDFSP5.png)

<br>

And the process continues - ***BUT*** now we need to consider the last VERTEX in the path with subsequent iterations of the function or while loop.

<br>

We also can see that the path on top of the Stack currently spans from the Source to the destination VERTEX so we have found our first Valid path 

    ( A, B ) - A === Source | B === Destination

<br>

Although we have found a path our goal is to find all path from Source VERTEX to Destination VERTEX.

This means that we have to continue the traversal and continue to iterate until once again our Stack is empty.

***Just like before - this isn't anything different, to continue it's just rinse and repeat***

<br>

For explanatory purposes lets look at what happens after you find the destination VERTEX:

<br>

![](/Resources/GraphDFSP6.png)

<br>

You see that we have now Unmarked VERTEX( B ) as visited as it can form apart of another possible path in the Graph so when we revert back to our previous stack state for VERTEX( A ).

We can still reach B through the other paths present in the stack such as below for example:

<br>

- Path - ( A, D, E, B )

- Path - ( A, D, E, F, B )

- Path - ( A, C, E, B )

- Path - ( A, C, E, F, B )

<br>

### ***Note:***

You can see that this concept of removing the visited VERTICES from the visited Set after reverting back to a previous state **allows us to create multiple Paths with the same VERTICES.**

<br>

***Again in the case of the connection ( A, D ), one of VERTEX( D )'s edges point back to VERTEX( A ) and we need to consider if this node has been visited already / or if it is a part of the current path `( since we don't want to create any cycles )` which would make the path INVALID so we can't add it to our answer because VERTEX( A ) has already been visited***  

<br>

## Complexity Analysis

<br>

- Time Complexity:

    O( V + E ) - Here, represents the number of VERTICES, and E represents the number of edges. 
    
    We need to check every VERTEX and traverse through every edge in the graph.

<br>

- Space Complexity:

    O( V ) - Either the manually created stack or the recursive call stack can store up to V VERTICES.