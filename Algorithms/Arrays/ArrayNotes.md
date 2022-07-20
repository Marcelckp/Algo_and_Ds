# Arrays
### Arrays are a simple data structure that stores a lots of different data types, these are the most common data structure outside of objects.

#### on their own arrays come up a lot in interviews and can be used to solve many other interesting problems

<br>

## What are they ?

Suppose you had a bunch of DVDs at home that you wanted to arrange in a neat order, you would store them in a box that is big enough to hold all of these movies and more that will be placed in at a later time. 

<br>

These arrays can be stored in a var and referenced later incase you want to tell someone to fetch something from the DVD storage box, so they know exactly where to look for what you asked for.

<br>
Technically an Array is a collection of items, the items could be any data type.
The items in the array are stored in neighboring (contiguous -> next to or together in a sequence of memory chunks) memory location, because they are stored together

<br>
#### NB Arrays have zero based indexing and this index can be used to access eg) a specific DVD in the DVD storage box. And loops can be used to access all values in an array.

<br>
To main concepts of arrays to understand is Length vs Capacity

_Length - The number of elements (DVD's) the storage can hold if it was full_

*Capacity - The number of elements (DVD's) currently in the box*

<br>
<br>

## A way to do an Optimized search of an array 
## Binary Search an array 

Binary search is a way to search for an element in an array or anywhere, if the element you have are in a order ( ascending or descending ) 

this search is where we repeatedly look at the middle element in th array and determine whether the element we are looking for must be to the left, or to the right if the value is less or greater respectively based on the ordering of the array. 

Each time we do this we're able to halve the number of elements we still need to search, making this method a lot faster then a linear search

<br>
The downside of this method is that it only works if the data is sorted in either ascending or descending also if we only need to perform a single search then it is faster to do a linear search, as it takes longer to sort the array for the binary search than it is to just linear search.

<br>
If we are going to be performing a lot of searches, it is often worth sorting the data first so that we can use binary search for the repeated searches as the concurrent searches will be made shorter

<br>

## In-Place Array Operations 

In place array operations help to reduce space complexity and in some cases could reduce time complexity as well but for the most part you would need to perform more operations which would increase the time so be aware of this.

*NB* -> It's important to always consider your T.C & S.C and understand the trade off, that you can only prioritize one at a time for most situations so prioritize what is necessary for your situation.

<br>

## In place array deletion

The two pointer technique can be used to get a better space complexity when doing in place deletion algorithms.

the method is to iterate over the array in two different places at the same time

 1) Read all the elements, to identify the duplicates, with a pointer used for reading.

 2) We then keep track of the next position in the front of the read pointer to write the next unique element we find in the array, with a second pointer we can call the write pointer.


Two pointers is used for most in place array operations 

the reason why it works with the in place delete or other operations is that we purposely make the pointer exclusive from one another, this means that we would never overwrite a value that we haven't yet read.

<br>

## When to use In-Place array operations / methods

A example of a situation in which you might not want to do in-place operations is if we need the original array value to not be mutated so it can be used later, if this is the case we should not be overwriting them and instead create a copy to perform operations on or create another storage array location in memory with variables.

In-place operations are valuable when appropriate because they reduce the space complexity of an algorithm ie) instead of requiring O(N) linear space complexity, we can reduce it down to 0(1) constant space complexity

<br>



<br>

## Two pointers Vs Sliding Windows

Defining sliding window

A key difference between this approach and a general two pointer is that we care what data is contained between the two pointers, not just the data at the two pointers themselves. The sliding window can be fixed (the length of the window never changes) or dynamic.

<br>
one line python loop 
    
- >>> [thing for thing in list_of_things] 
- >>> x = [1, 2, 3, 4, 5]
- >>> y = [2*a for a in x if a % 2 == 1]
- >>> print(y)
- >>> = [2, 6, 10]

