import time

def fib(n):
    tab = [0, 1]

    for i in range(len(tab), n + 1):
        tab.append(tab[i - 1] + tab[i - 2])

    return tab[n]

print(fib(6))
print(fib(8)) # Output: 21

start_time = time.time()
print(fib(10)) # Output: 55
end_time = time.time()
print(f"Execution time for initial fib(10): {end_time - start_time} seconds")

print(fib(12)) # Output: 144

# Fib 10 was previous tabulated / cached so the execution time is significantly faster
start_time = time.time()
print(fib(10))
end_time = time.time()
print(f"Execution time for fib(10): {end_time - start_time} seconds")

# The time for the second call to fib(10) is significantly faster than the first call to fib(10) as the result of the first call is cached and used in the second call. This is the principle of dynamic programming - storing the results of expensive function calls and reusing them when needed.