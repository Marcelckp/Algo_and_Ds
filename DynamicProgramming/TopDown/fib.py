import time

def fib(n, memo={}):
    if n in memo:
        return memo[n]
    if n <= 1:
        return n
    else:
        memo[n] = fib(n - 1, memo) + fib(n - 2, memo)
        return memo[n]

    
print(fib(6)) # Output: 8
print(fib(8)) # Output: 21

start_time = time.time()
print(fib(10)) # Output: 55
end_time = time.time()
print(f"Execution time for initial fib(10): {end_time - start_time} seconds")
# This will be faster than previous calls since the result of fib up till fib(8) have been cached and will be used in the calculation of fib(10).
# Since we have already calculated fib(8) we will not need to open up extra recursive context as it will exist in the memo cache and we will only need to calculate fib 9 and 10 for the final result making each fib calculation faster than the previous one.