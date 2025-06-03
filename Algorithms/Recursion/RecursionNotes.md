# Recursion

## Principle of Recursion

Recursion is an approach to solving problems using a function that calls itself as a subroutine / a form of iteration.

The trick to recursion is that each time a recursive function calls itself, it reduces the given problem into sub-problems.

The recursion call continues until it reaches a point where the sub-problem can be solved without further recursion

NB better known as a base case!!!!

<br>

### Contents of a recursive solution

a recursive function should have the following properties so that it does not result in an infinite loop:

1. A simple base case(s) - a terminating scenario that does not use recursion to produce an answer / exit or return from the function.

2. A set of rules, also know as recurrence relation ( or otherwise known as the recursive case -> to traverse or get close to your solution ) that reduces all other cases towards the base case

Note: there can also be multiple cases or places where you invoke / can invoke the recursive case.

<br>

## Recursion Functions

If a function has a recursive solution we can follow the below to implement it, or ( look at the comments on the reverseString solutions )

For a instance, we can define the problem as the function F(X) to implement, where X is the input of the function which also defines the scope of the problem

Then, in the function F(X), we will

    1. Break the problem down into smaller scopes.

    2. Call function F(x0), F(x1), F(x2), ... F(xN) with new values recursively to solve the subproblem of X;

    3. Finally, process the result from the recursive function calls to solve the problem corresponding to X.

### For Example

If we are Given a linked list, swap every two adjacent nodes and return the head

ie) for a list of 1 -> 2 -> 3 -> 4

the first stack would return

    2 -> 1 -> 4 -> 3
           ::
    1 <> 2 & 3 <> 4

<br>

we can define the function to implement as swap(head), which will take the heads reference as an argument & the function should return the head of the new linked list with its adjacent nodes swapped

<br>

Following the these steps can help us implement this function:

1.  First, we swap the first two nodes in the list, ie. head & head.next

2.  Then, we call the function itself as swap(head.nex.next) to swap the rest of the list following the first two nodes

3.  Finally, we attach the returned head of the sub-list in step 2 with the two nodes swapped in the previous stack to from the link to the just swapped nodes

        head.next = swap(head.next.next)

<br>

## Recurrence Relation

There are two important things that one needs to figure out before implementing a recursive function:

1. Recurrence relation: the relationship between the result of a problem and the result of its sub-problems

2. Base case: the case where on can compute the answer directly without any further recursion calls. Sometimes, the base cases are also called bottom cases OR recursion ending clause, since they are often the cases where the problem has been reduced to tht minimal scale

   - ie) the bottom / end of the potential execution contexts that will be opened if we consider that dividing the problem into sub-problems is in a top-down manner

   OR

   - In a manner where the recursive call opens a new execution context and waits for that context to evaluate itself before continuing with it's logic where that call the the function could recursively call the function again recursively opening a new context and the there are now 2 function waiting on the context to be returned to them by the evaluation of the recursively called function within the waiting functions.

<br>

### Once we figure out the above two concepts to implement a recursive function we simply call the function itself according to the recurrence relation until we reach the base case --> so the goal of a recursive function is to reach the base case

To better explain this we can look at Pascal's triangle

## Pascals Triangle example

this is a series of numbers arranged in the shape of a triangle.

- _NB_ In this triangle the leftmost and rightmost numbers of each row are always 1.

For the rest of the triangle the each number is the sum of the two numbers directly above it in the previous row.

    ie)             1
                  1   1
                1   2   1
              1   3   3   1
            1   4   6   4   1

<br>

Lets start with the recurrence relation within the Triangle

First we define a function f(i, j) which returns the number in the PT( pascal triangle ) in the i-th row and j-th column

we then can represent the recurrence relation with the following formula:

    f(i, j) = f(i - 1, j - 1) + f(i - 1, j)

### Base Case

as one can see the leftmost and rightmost numbers of each row are the base cases in this problem, which are always equal to 1.

As a result, we can define the base case as

    // i representing the row number
    // j representing the column number OR value of the item in the row at a specific index
    f(i, j) = 1  where  j = 1 or j = i

Lets follow the execution context of a solution for f(5, 3) refer to the **_diagram of the triangle above_**
<br>

               5  3
    function f(i, j) {
        base case: j = i OR j = 1 >> return 1;
        const value = f(i - 1, j - 1) + f(i - 1, j);
        return value;
    }

    /*
        Stack Explanation / Execution Context Break down

        Stack 1 ( invoked -> f(i - 1, j - 1) --> first function )

        i = 4
        j = 2

        base case is not triggered
        value: is not yet defined
        nothing is returned
        but a new execution context is opened up where i = i - 1 and j = j - 1

        the second recursive function is not called as yet since the first one needs to be resolved first as it recursively calls it's self so the second function f(i - 1, j) is not yet invoke

        Stack 2 ( invoked -> f(i - 1, j - 1) --> first function )

        i = 3
        j = 1

        base case is triggered and will return the value 1
        value: nothing since we are now exiting out of the function into the upper / higher stacks

        ie) exiting up into stack to with value of 1 replacing the function call


        Stack 1 for the second function call

        i = 4
        j = 2

        base case not triggered
        value: is not defined

        running
        -> value = 1 + f(5 - 1, 3)

        The reason for this is because we have evaluated the return and have reached the base case for the first function so it is waiting for the second function to do the same so that the values can be evaluated

        Stack 2 for the second function call

        i = 3
        j = 3

        base case triggered
        value is not invoked again and 1 is returned as a value the outer scope


        Stack now collapses

        Stack 1 ( function 2 )

        value = 1 + 2
        returns 2

        Stack 2 ( function 1 )

        value = 1 + 3

        Stack 1 ( function 1 )

        value = 4 + 2

        returns 6
    */

In this solution you can notice that the recursive solution can create some duplicate calculations.

ie) we compute the same intermediate numbers repeatedly in order to obtain numbers in the last row, for instance in order to obtain the result for the number f(5, 3), we need to calculate the number for f(3, 2) twice both in the calls of f(4, 2) && f(4, 3)

These can be avoided and we will go over that now ( Memoization )

<br>

## Memoization

### The process of storing information for subsequent calls of the same function, in other words giving functions memory / memory management.

To demonstrate a problem that has will generate duplicate calculation lets look at the Fibonacci sequence

<br>

### Fibonacci Sequence

the fib sequence is a sequence of numbers that are results of the previous to numbers in the sequence added together

lets hope into an example

say we have a function F(n) to represent the Fibonacci number at the index of n

we will have a recurrence relation / recursive call trigger of

    :: F(n) = F(n - 1) + F(n - 2)

and a base case of

    :: n = 0 || 1

So if we would like to know the value of F(4) you can apply the formula above

    F(4)  =  F(3) + F(2)  =  F(F(2) + F(1)) + F(2)

You should notice here that in order to get F(4) we need to calculate the value for F(2) twice -> one in each recursive Function call -> F(n - 1) && F(n - 2)

Heres a stack break down

    /*
                        F(4)
                    /         \
                F(3)           F(2)
              /     \         /    \
            F(2)    F(1)    F(1)   F(0)
           /   \
         F(1)  F(0)

                                            F(4)
        Beginning of the sequence: 0 1 1 2   3

    */

<br>

### Memoization / Dynamic programming

To get rid of these duplicate calculations we can use memoization which is also know as caching and it's the process of storing the immediate results of a function call in a cache and then reusing those values at a later time.

#### Memoization is an optimization technique used primarily to speed up computer programs by storing the result fo expensive function calls and returning the cached result when the same input is given / occurs or is seen again

<br>

### Fib memoization strategy

For the fib function we will use a hash table / object / dictionary to keep track of the function result of each function invocation with the respective n position as the key.

The hash table will serve as a cache that saves us from dup calculations, which saves us time since we do not need to re-compute the value for a specific F(n) invocation

<br>

### **_NB -> The memoization technique for optimization is a good example of how one can reduce computational time & power in exchange for some additions to the space complexity_**

    S.C ++       T.C --

## Time Complexity

Given a recursion algorithm, its time complexity O(T) is typically the product of the number of recursion invocations ( denoted as R ) and the time complexity of calculation ( denoted as O(n or s)) that incurs along with each recursion call

    ie) O(T) = R * O(S) --> Logarithmic T.C

If we recall recall, in the problem of printReverse, we are asked to print the string in the reverse order. A recurrence relation to solve the problem can be expressed as follows:

printReverse(str) = printReverse(str[1...n]) + print(str[0])

where str[1...n] is the substring of the input string str, without the leading character str[0].

As you can see, the function would be recursively invoked n times, where n is the size of the input string. At the end of each recursion, we simply print the leading character, therefore the time complexity of this particular operation is constant, i.e. O(1).

To sum up, the overall time complexity of our recursive function printReverse(str) would be O(printReverse) = n \* O(1) = O(n)

<br>

**NB** for recursion, the functions it is rare that the number of recursive calls are linear to the size of the input

eg) if we look at the fib sequence we have a lot more recursive calls then the size of the input if we were to take on an iterative approach.

In this case, it is better to resort to the execution tree, which is a tree that is used to denote the execution flow of a recursive function in particular.

Each node in the tree represents an invocation of the recursive function / a possible new tree, which will therefore increase the total number of nodes in the tree / routes the tree will branch off to, so the number of trees is the number of recursive calls they are directly proportional to one another.

<br>

_refer to the fibonacci stack break down diagram_

the execution tree of a recursive function would form a n length'd tree, with n as the number of times recursion appears in the recurrence relation / recursive triggers.

ie) if we looked at the Fibonacci recursion tree it would from a binary tree, as you can see from the diagram on **_line 241_**

so in a full binary tree with n levels, the total number of nodes would be ( 2 ** n - 1 ). therefore the upper bound ( though not tight ) for the number of recursion triggers in Fib(n) would be (2 ** n - 1 ), which would result in an estimated T.C of

    O(2 ** n) >> Quadratic T.C

When we bring memoization in to the picture we know that the values for a particular fib number will only be calculated once therefore we don't need to multiply n so our T.C becomes

    O(1) * n = O(n)  >> linear esk T.C

<br>

## Space Complexity

Let analyze space complexity in recursive operations

There are mainly two parts of the space consumption that one should bear in mind when calculating the space complexity of a recursive algorithm:

1. recursion related space
2. non-recursion related space

<br>

### Recursion related space

This refers to the memory cost that is incurred directly by the recursive calls / recurrence relation.

ie) the call stack to keep track of the recursive function calls

### **_NB_** In order for a function to complete a typical call the system allocates some space in the call stack to hold three important pieces of information

1. The returning address of the function call. Once the function call is completed, the program must know where to return to

   ie) The line of code after the function has been called so it can continue running the programme

2. The parameters that are passed in as arguments to the function call

3. The local scoped variables within the function call

<br>

This space in the stack is the minimal cost that is incurred during a function call of **_ANY KIND_** however once the function is done, this space is freed ( through a process called garbage collection )

but for recursive function, this function calls chain up successively until they reach a base case. This means that the space of having multiple stacks grows the more the recursive function calls itself so the space & function calls accumulate && they are not freed until the function reach the base case.

**_COOL INFORMATION_**

For recursive algorithms if there is no other memory consumption, then this recursion incurred space will be the space upper-bound of the algorithm

if this is not managed we will encounter the famous **_STACK OVERFLOW_**

<br>

### Non-Recursion related space

This refers to the memory space that is not directly related to recursion which typically includes the space (normally in heap) that is allocated for the global & local scoped variables.

<br>

Recursion or not, you might need to store the input of the problem as a global variable, or store a count as a default function parameter or save the intermediate results from the recursive calls as well ( Closures ), before any subsequent function calls are made.

<br>

This all has a effect on the function space complexity so keep it in mind when you are calculating the S.C of a function, recursive or not.

<br>

### Important things to note about recursion

Its not a silver bullet, not every problem can be solved with recursion, due to time or space constraints & recursion itself might come with some undesired side effect such as stack overflows

But here are a fe big pointer to follow when you write a recursive function

1. When in doubt, write down the recurrence relationship or base case.
2. Whenever possible, apply memoization for increased T.C.
3. When stack overflows occur due to time complexity constraints, try tail call recursion.

---