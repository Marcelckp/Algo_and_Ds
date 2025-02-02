def is_even(n):
    if n == 0:
        return True
    return is_odd(n - 1)

def is_odd(n):
    if n == 0:
        return False
    return is_even(n - 1)

print("Is 4 even?", is_even(4)) # Each of the functions will call the other function until the base case is reached. This is a form of mutual recursion. The base case is when n == 0.
# So this function will decrement the number passed in by 1 until it reaches 0 and return true or false from the specific function.
print("Is 5 odd?", is_odd(5))