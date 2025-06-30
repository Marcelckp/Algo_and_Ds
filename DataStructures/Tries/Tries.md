# Tries

Tries are a implementation of N-ary trees where each node in the tree can have up to N children.

Tries are often used to create prefix trees, or trees that are used to find common terms for auto complete functionality when using search features on websites and applications.

```mermaid
graph TD
    A[T]
    A --> B[R]
    B --> C[E]
    C --> D[E]
    D --> E[S]
    B --> F[I]
    F --> G[E]
    G --> H[S]
    F --> I[p]
    I --> K[S]
```

**The letters in this trie spell out the words "TREE", "TREES", "TRIES", "TRIPS".**
