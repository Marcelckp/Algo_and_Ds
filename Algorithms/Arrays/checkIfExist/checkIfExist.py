def checkIfExists(nums):
    for num in nums:
        for n in nums:
            if (n * 2 == num):
                return True


print(checkIfExists([0, 0]))
print(checkIfExists([10, 2, 5, 3]))
