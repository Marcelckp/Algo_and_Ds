# Two pointers

## What is the concept

This is a concept that uses 2 pointers to find something special. The first pointer starts in the beginning and the second one starts at the end.

Think of a treasure map the one finger can be on one side of a map and the other on a different point. They can move around in attempt to find something special.

Think finding treasure on the map. These to fingers would approach one another to find the treasure. Or think about a problem of finding 2 numbers in a list that add up to a target value.

Another example is determining if a word is a palindrome. The one pointer starts in the beginning and the other at the end and they move towards one another to find if the values are the same as they approach each other.

### Variations

These pointers do not have to start at the beginning and the end they can start at any point of interest in the array. ie) in the middle.

[Fast and slow pointers in an example of a variation](./FastAndSlowPointer/)

### Overall take away

There will always be 2 points we monitor in the list or data structure. We can use these 2 values to perform comparisons or some calculations.

[Here is an example](./twoPointer.js)

**_It is possible for th 2 pointer strategy to become a $n$ pointer strategy. For example when doing 3sum or 4sum we will need 3 and 4 pointers respectively._**

NB: The more pointers we have the more complex our solution will be and this will increase its time complexity.
