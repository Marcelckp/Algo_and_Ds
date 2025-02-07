class Node:
    def __init__(self, value):
        self.value = value
        self.children = []

    def add_child(self, child_node):
        self.children.append(child_node)

def print_tree(node, level=0):
    print(' ' * level * 2 + str(node.value))
    for child in node.children:
        print_tree(child, level + 1)

# Example usage
if __name__ == "__main__":
    root = Node('A')
    child1 = Node('B')
    child2 = Node('C')
    child3 = Node('D')
    child4 = Node('E')
    child5 = Node('F')

    root.add_child(child1)
    root.add_child(child2)
    child1.add_child(child3)
    child1.add_child(child4)
    child2.add_child(child5)

    print_tree(root)