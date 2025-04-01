// JavaScript Array
let array = [1, 2, 3, "four"];
array.push(5); // Arrays are dynamic
console.log(array); // Output: [1, 2, 3, "four", 5]

// Array Buffer
let buffer = new ArrayBuffer(8); // Create a buffer of 8 bytes (64 bits)
let view = new Int8Array(buffer); // Create a view to interpret the buffer as 8-bit integers

view[0] = 42;
view[1] = 0; // false is coerced to 0 as false is not a valid 8-bit integer
view[2] = 44;
view[3] = 45;
view[4] = 46;
view[5] = 47231234; // 47231234 is coerced to 50 as it is not a valid 8-bit integer
view[6] = 4090903234; // 4090903234 is coerced to 50 as it is not a valid 8-bit integer
view[7] = 49; // "49" is coerced to 49

console.log(view[0]); // Output: 42
console.log(view[1]); // Output: 0
console.log(view[2]); // Output: 44
console.log(view); // Output: Int8Array(8) [42, 0, 44, 45, 46, 47, 48, 49]
