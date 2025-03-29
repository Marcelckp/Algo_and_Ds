class TreeNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

def evaluate(root):
    if root is None:
        return 0
    if root.left is None and root.right is None:
        return int(root.value)
    
    left_val = evaluate(root.left)
    right_val = evaluate(root.right)
    
    if root.value == '+':
        return left_val + right_val
    elif root.value == '-':
        return left_val - right_val
    elif root.value == '*':
        return left_val * right_val
    elif root.value == '/':
        return left_val / right_val

# Example usage
root = TreeNode('*')
root.left = TreeNode('+')
root.right = TreeNode('2')
root.left.left = TreeNode('3')
root.left.right = TreeNode('5')

print(evaluate(root))  # Output: 16