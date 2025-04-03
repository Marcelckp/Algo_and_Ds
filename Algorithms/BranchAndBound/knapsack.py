class Node:
    def __init__(self, level, value, weight, bound, items):
        self.level = level
        self.value = value
        self.weight = weight
        self.bound = bound
        self.items = items

def bound(node, capacity, items):
    if node.weight >= capacity:
        return 0
    bound_value = node.value
    total_weight = node.weight
    for i in range(node.level, len(items)):
        if total_weight + items[i][1] <= capacity:
            total_weight += items[i][1]
            bound_value += items[i][0]
        else:
            bound_value += (capacity - total_weight) * items[i][0] / items[i][1]
            break
    return bound_value

def branch_and_bound_knapsack(items, capacity):
    items = sorted(items, key=lambda x: x[0] / x[1], reverse=True)
    root = Node(0, 0, 0, 0, [])
    root.bound = bound(root, capacity, items)
    best_value = 0
    best_solution = []
    queue = [root]
    while queue:
        node = queue.pop(0)
        if node.level == len(items):
            continue

        print(f"Level: {node.level}, Value: {node.value}, Weight: {node.weight}, Bound: {node.bound}, Items: {node.items}")

        left_child = Node(node.level + 1, node.value + items[node.level][0], node.weight + items[node.level][1], 0, node.items + [items[node.level]])
        right_child = Node(node.level + 1, node.value, node.weight, 0, node.items)

        left_child.bound = bound(left_child, capacity, items)
        right_child.bound = bound(right_child, capacity, items)
        
        if left_child.weight <= capacity and left_child.value > best_value:
            best_value = left_child.value
            best_solution = left_child.items

        if left_child.bound > best_value:
            queue.append(left_child)

        if right_child.bound > best_value:
            queue.append(right_child)

    return best_solution, best_value

# Example usage
items = [(60, 10), (100, 20), (120, 30)]  # (value, weight)
capacity = 50
solution, value = branch_and_bound_knapsack(items, capacity)
print("Best value:", value)
print("Items included:", solution)