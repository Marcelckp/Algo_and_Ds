# This is the principle of recursing with the result of the recursive call is passed directly into the next recursive call.
def factorial_tail_recursive(n, acc=1):
    if n == 0:
        return acc
    return factorial_tail_recursive(n - 1, acc * n)

print("Factorial(5):", factorial_tail_recursive(5))