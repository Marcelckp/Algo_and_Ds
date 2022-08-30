# Disjoint Set

<br>

## Overview

<br>

Given the vertices and edges between them, how could we quickly check whether two vertices are connected? For example, Figure 5 shows the edges between vertices, so how can we efficiently check if 0 is connected to 3, 1 is connected to 5, or 7 is connected to 8? 

We can do so by using the “disjoint set” data structure, also known as the “union-find” data structure. Note that others might refer to it as an algorithm. In this Explore Card, the term “disjoint set” refers to a data structure.

<br>

![](https://leetcode.com/explore/learn/card/Figures/Graph_Explore/Disjoint_Set_1_edited.png)

<br>

***Note:***

**The primary use of disjoint sets is to address the connectivity between the components of a network.**

**The “network“ here can be a computer network or a social network. For instance, we can use a disjoint set to determine if two people share a common ancestor.**

<br>

## Terminologies

<br>

- **Parent Node :**

    The direct parent node of a vertex. For example, in Figure 5 / The image above, the parent node of vertex 3 is 1, the parent node of vertex 2 is 0, and the parent node of vertex 9 is 9.

- **Root Node :**

    A node without a parent node; it can be viewed as the parent node of itself. For example, in Figure 5, the root node of vertices 3 and 2 is 0. As for 0, it is its own root node and parent node. Likewise, the root node and parent node of vertex 9 is 9 itself. Sometimes the root node is referred to as the head node.

<br>

## Introduction

<br>

*Summary of video content :*

1. How do 'disjoint sets' work.

2. Solving the connectivity question in Figure 5 / The image above.

<br>
