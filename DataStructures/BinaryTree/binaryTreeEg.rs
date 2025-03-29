use std::collections::VecDeque;

#[derive(Debug)]
struct TreeNode<T> {
    value: T,
    left: Option<Box<TreeNode<T>>>,
    right: Option<Box<TreeNode<T>>>,
}

impl<T> TreeNode<T> {
    fn new(value: T) -> Self {
        TreeNode {
            value,
            left: None,
            right: None,
        }
    }
}

#[derive(Debug)]
struct BinaryTree<T> {
    root: Option<Box<TreeNode<T>>>,
}

impl<T> BinaryTree<T> {
    fn new() -> Self {
        BinaryTree { root: None }
    }

    fn insert(&mut self, value: T) {
        let new_node = Box::new(TreeNode::new(value));
        if self.root.is_none() {
            self.root = Some(new_node);
        } else {
            let mut queue = VecDeque::new();
            queue.push_back(self.root.as_mut().unwrap());

            // BFS to find the first node with empty child and insert the new node then we break the loop

            // The 
            while let Some(current) = queue.pop_front() {
                if current.left.is_none() {
                    current.left = Some(new_node);
                    break;
                } else {
                    // If we reach this point, it means the left child is not empty, so we push it to the queue to check its children later after we check the right child of the current node. 
                    queue.push_back(current.left.as_mut().unwrap());
                }
                
                // This means that we will be filling the tree from left to right, so we will always insert the new node to the left child of the current node if the left child is empty.
                if current.right.is_none() {
                    current.right = Some(new_node);
                    break;
                } else {
                    queue.push_back(current.right.as_mut().unwrap());
                }
            }
        }
    }
}

fn main() {
    let mut tree = BinaryTree::new();
    tree.insert(5);
    tree.insert(3);
    tree.insert(7);
    tree.insert(2);
    tree.insert(4);
    tree.insert(6);
    tree.insert(8);
    println!("{:?}", tree);
}
