# Bit manipulation

_Bitwise operations are a subset of bit manipulation techniques while bit manipulation refer to the operations and mutations that can be done the bits_ - the same to the same concept.

## What is bit manipulation

This is a concept that involves performing operations directly on the binary digits - ([bits](#what-are-bits)) - of integers.

These operations are efficient and are often used in low-level programming, cryptography and performance critical coding.

### What are bits

Bits are the individual digits within binary values.

**_Bits are the smallest unit of digital information and can `only either be 0 or 1`_**

\*\*1 and 0 can represent:

- +/-

- true/false

- yes/no
  +\*\*

### Common Bitwise Operations

- AND (`&`)

  This operation will only return 1 in the joint value if both columns are 1

  ```yaml
    1010
  & 1100
    ----
    1000  (which is 8 in decimal)
  ```

- OR (`|`)

  This will combine each of the values and return 1 where each of the values in the operation have bits of 1

  ```yaml
    1010
  | 1100
    ----
    1110  (which is 14 in decimal)
  ```

- XOR (`^`)

  This operator combines the values and set the values that are different to 1. `If each column are both 0s or both 1s they are set to 0 otherwise if the column is a mismatch it is set to 1.`

  ```yaml
    1010
  ^ 1100
    ----
    0110  (which is 6 in decimal)
  ```

- NOT (`~`)

  This operator flip every bit in the value so `0s become 1s and visa versa`

  ```yaml
  ~1010 -> (10)
  => 0101 -> (-11)

  ~10 -> (2)
  => 01 -> (1)
  ```

  **_NOTE: values will be negative in JS as it uses two's complement for representing numbers_**

- BIT Shifts (`<< and >>`)

  This is the process of moving the bits in a binary number to the left or the right by adding 00 and or removing values specifically.

      - **_Left Shift (`<<`) => This is equivalent to multiplying by 2 for each shift (By each 0 added)_**

        If you take the binary number `0001` (which is 1 in decimal) and you perform this operation `(0001 << 3)` you get (`0001000 => 1000 => 8` which is 8). Note the position of the 1 in the binary number columns.

      - **Right Shift (`>>`) => This is equivalent to dividing the number by 2 for each shift (NOTE: You always just discard the remainder)**

        If you take the binary number `1110` (which is 14) and you perform this operation `(1110 >> 2)` the result is `0011` (which is 3)

        ```js
        console.log(parseInt("0011", 2));   // Output: 3
        console.log(parseInt("000011", 2)); // Output: 3
        console.log(parseInt("11", 2));     // Output: 3
        ```

        NOTE: In binary, leading zeros are insignificant. Thus, 0011, 000011, equal `11`  which is equal to `3` in base 10

---

## IMPORTANT NOTES

<font color=gold>When you want to convert an integer to a binary (base 2) value, you should use the `.toString(2)` method in JavaScript or the equivalent in other languages. To convert a binary (base 2) value back to an integer, you use the `parseInt()` method with a radix of 2 or the equivalent in the language of your choice.</font>

### Radix

The radix (or base) is the number of unique digits, including zero, used to represent numbers in a positional numeral system. For example, the binary system (base 2) uses two digits (0 and 1), while the decimal system (base 10) uses ten digits (0 through 9).

**_In base 10 this means that the Radix is 10 as the 10 represent the 10 unique values you have in the base 10 system `0 - 9`_**

The same is true for base 2 - **_The radix is 2 as there are only 2 unique values that can be used 0 or 1_**

**_NOTE: The radix represents the unique digits that can be used from 0 to the number provided to the radix. So if the radix is 5, the numerical system can only contain digits that have values from 0 to 4._**

**_NOTE: When the radix gets larger than 10, we start using alphabetic characters to represent values beyond 9._**
