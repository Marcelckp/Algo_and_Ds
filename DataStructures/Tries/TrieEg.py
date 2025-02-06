class TrieNode:
    def __init__(self):
        # The children will be stored in a dictionary where the key is the character and the value is the TrieNode 
        # This allows us to reference the children nodes as a parent can have multiple child nodes
        self.children = {}
        self.is_end_of_word = False

class Trie:
    def __init__(self):
        self.root = TrieNode()

    def insert(self, word):
        node = self.root
        for char in word:
            # If the character is not in the children of the current node, we add it
            if char not in node.children:
                node.children[char] = TrieNode()
            # We traverse to the child node that holds the char we want to add to the trie to make the word
            node = node.children[char]
        node.is_end_of_word = True

    def search(self, word):
        node = self.root
        for char in word:
            # We traverse for all chars in the word we are trying to search for
            if char not in node.children:
                return False
            node = node.children[char]
        return node.is_end_of_word

# Example usage
trie = Trie()
words = ["TREE", "TREES", "TRIES", "TIMES"]
for word in words:
    trie.insert(word)

print(trie.search("TREE"))  # Output: True
print(trie.search("TRIE"))  # Output: False

def print_trie(node, word=''):
    if node.is_end_of_word:
        print(word)
    for char, child_node in node.children.items():
        print(char, child_node) # Print the character and the child node to the console so we can view the trie structure
        print_trie(child_node, word + char)

print_trie(trie.root)