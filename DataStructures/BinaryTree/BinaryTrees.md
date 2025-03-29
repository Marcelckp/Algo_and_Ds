# Binary Tree

A binary tree is a tree-like graph data structure where each node has at most two children, referred to as the left child and the right child.

Unlike binary search
trees (BSTs), binary trees do not enforce any specific ordering rules between parent and child nodes.

When we look at binary trees we can visualize them and all trees with 2 children in arrays using specific algorithms.

```pseudo
2 x index + 1 => Index of the Left child in the array visualization

2 x index + 2 => Index of the Right child in the array visualization
```

```pseudo
        1
       / \
      2   3
     / \ / \
    4  5 6  7
```

In array form, it would be represented as: [1, 2, 3, 4, 5, 6, 7].

- The root 1 is at index 0.
- The left child of 1 (which is 2) is at index 2 \* 0 + 1 = 1.
- The right child of 1 (which is 3) is at index 2 \* 0 + 2 = 2.
- The left child of 2 (which is 4) is at index 2 \* 1 + 1 = 3.
- The right child of 2 (which is 5) is at index 2 \* 1 + 2 = 4.
- The left child of 3 (which is 6) is at index 2 \* 2 + 1 = 5.
- The right child of 3 (which is 7) is at index 2 \* 2 + 2 = 6.
- And so on for all other indexes

## Binary tree rules to keep in mind when working with them

- The tree is only a complete binary tree if the array and nodes are filled from the leftmost node to the rightmost node at each level.

    If there are gaps in the tree at different levels, then the tree is not a complete binary tree, which is simply referred to as an incomplete binary tree.

- You can traverse a tree in 2 ways - Depth first search (DFS) or Breath first search (BFS)

    DFS - uses recursion to traverse the height of the tree at each child
    BFS - uses a queue to traverse all children of the tree at each level

- A binary tree only has one parent node and 2 child nodes per parent

---

### **All trees that share binary tree properties inherit these above mentioned rules and features**

## Examples of binary tree implementations

- A decision tree in video games - (If player reach certain score - `Yes` then traverse left and increase difficulty - `No` then traverse right and keep the difficulty the same)

- A heap is an implementation of a binary tree with specific properties.
