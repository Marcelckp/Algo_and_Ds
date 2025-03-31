# Fast and Slow pointer variation

This is a variation of the two pointer technique.

## Description

This builds on the [2 pointer strategy](../TP.md) strategy, except in this case we have one pointer move slower then the second pointer we are using.

## Example

Finding a cycle in a linked list is a common problem that needs this technique.

If there is a cycle the fast point will reach the slow pointer again, detecting that their is a cycle.

If the fast pointer reaches the end of the list then the list will not have a cycle.
