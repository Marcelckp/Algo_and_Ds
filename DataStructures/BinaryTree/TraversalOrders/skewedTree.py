class TreeNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

def create_left_skewed_tree(values):
    if not values:
        return None
    root = TreeNode(values[0])
    current = root
    for value in values[1:]:
        current.left = TreeNode(value)
        current = current.left
    return root

def in_order_traversal(root):
    if root:
        in_order_traversal(root.left)
        print(root.value, end=' ')
        in_order_traversal(root.right)

# Example usage
values = [1, 2, 3, 4, 5]
root = create_left_skewed_tree(values)
in_order_traversal(root)  # Output: 1 2 3 4 5