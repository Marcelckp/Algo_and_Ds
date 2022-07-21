def checkIfExists(nums):
    for num in nums:
        if (nums.index(num * 2)):
            return True


print(checkIfExists([0, 0]))
print(checkIfExists([10, 2, 5, 3]))
