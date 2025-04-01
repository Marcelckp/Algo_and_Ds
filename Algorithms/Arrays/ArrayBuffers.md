# Array Buffers

Array buffers are a type of data structure that provides a way to store and manipulate a collection of elements in a contiguous block of memory. They are commonly used in programming languages that require efficient access and modification of array elements. Array buffers allow for dynamic resizing, which means the size of the array can be adjusted as needed during runtime. This makes them particularly useful for applications that need to handle varying amounts of data efficiently.

## What are they?

### Purpose

**Array buffers are used to represent a generic, fixed-length binary data buffer.**

They are primarily used for handling raw binary data, which is useful in applications like file handling, network communications, and WebGL.

### Mutability

Array buffers have a fixed size that is determined when they are created. The size cannot be changed after creation. _Unlike array which can have their length and values mutated_

### Data type compatibility

Arrays can hold any data type

WHILE

Array buffers themselves do not directly store data types. Instead, they provide a way to create views (such as TypedArray objects) that interpret the binary data in specific formats (e.g., Int8Array, Uint16Array, Float32Array).

### Performance

Arrays are optimized for general use.

WHILE

Array buffers are optimized for performance when dealing with binary data. These are often used where low-level data manipulation and efficient memory usage are critical.

---

### Examples

[Here are example of these 2 array types and their differences](./buffers.js)