// binary search Tree
class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.right = right;
        this.left = left;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    add(data) {
        const node = this.root;
        if (node === null) {
            this.root = new Node(data);
            return;
        } else {
            // recursive function to search binary tree
            const searchTree = function (data) {
                if (data < node.data) {
                    if (node.left === null) {
                        node.left = new Node(data);
                        return;
                    }
                    else if (node.left != null) {
                        console.log("add node left for recr " + node.left)
                        return searchTree(node.left);
                    }
                } else if (data > node.data) {
                    if (node.right === null) {
                        node.right == new Node(data);
                        return;
                    } else if (node.right != null) {
                        console.log("add node right for recr " + node.right)
                        return searchTree(node.right);
                    }
                } else {
                    return null;
                }
            };
            return searchTree(node);
        }
    }
    // find minimum in binary tree
    findMin() {
        let current = this.root;
        while (current.right != null) {
            current = current.right;
        }

        return current.data;
    }
    // find node in tree
    find(data) {
        let current = this.root;
        while (current.data != data) {
            if (data < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
            if (current === null) {
                return null;
            }
        }
        return false;
    }

    // remove node from tree
    remove(data) {
        // remove node by checking recursively 
        const removeNode = function (node, data) {
            if (node == null) {
                return null;
            }

            if (data == node.data) {
                // node has no childern nodes
                if (node.left === null && node.right === null) {
                    return null;
                }
                // node has no left child node
                if (node.left === null) {
                    return node.right;
                }
                // node has no right child node
                if (node.right === null) {
                    return node.left;
                }
                // node has two children nodes
                var tempNode = node.right;
                while (tempNode.left != null) {
                    tempNode = tempNode.left;
                }
                node.data = tempNode.data;
                node.right = removeNode(node.right, tempNode.data);
                return node;
            } else if (data < node.data) {
                node.left = removeNode(node.left, data);
                return Node;
            } else {
                node.right = removeNode(node.right, data);
                return node;
            }
        }
        this.root = removeNode(this.root, data);
    };

    isBalanced() {
        return (this.findMinHeight() >= this.findMaxHeight() - 1);
    }

    // Minimim height
    findMinHeight(node = this.root) {
        if (node == null) {
            return -1;
        }
        let left = this.findMinHeight(node.left);
        let right = this.findMinHeight(node.right);
        if (left < right) {
            return left + 1;
        } else {
            return right + 1;
        };
    }

    // max height
    findMaxHeight(node = this.root) {
        if (node == null) {
            return -1;
        }
        let left = this.findMaxHeight(node.left);
        let right = this.findMaxHeight(node.right);
        if (left > right) {
            return left + 1;
        } else {
            return right + 1;
        }
    }

    inOrder() {
        if (this.root == null) {
            return null;
        } else {
            var result = [];
            function traverseInOder(node) {
                node.left && traverseInOrder(node.left);
                result.push(node.data);
                node.right && traverseInOder(node.right);
            }
            traverseInOder(this.root);
            return result;
        }
    }

    preOrder() {
        if (this.root == null) {
            return null;
        } else {
            var result = [];
            function traversePreOrder(node) {
                result.push(node.data);
                node.left && traversePreOrder(node.left);
                node.right && traversePreOrder(node.right);
            }
            traversePreOrder(this.root);
            return result;
        }
    }

    postOrder() {
        if (this.root = null) {
            return null;
        } else {
            var result = [];
            function traversePostOrder(node) {
                node.left && traversePostOrder(node.left);
                node.right && traversePostOrder(node.right);
                result.push(node.data);
            }
            traversePostOrder(this.root);
            return result;
        }
    };

    levelOrder() {
        let result = [];
        let Q = [];
        if (this.root != null) {
            Q.push(this.root);
            while (Q.length > 0) {
                let node = Q.shift();
                result.push(node.data);
                if (node.left != null) {
                    Q.push(node.left);
                }
                if (node.right != null) {
                    Q.push(node.right);
                }
            };
            return result;
        } else {
            return null;
        };
    };
}

const bst = new BST();

bst.add(1);
bst.add(9);
bst.add(4);
bst.add(17);
bst.add(3);
bst.add(6);
bst.add(5);
bst.add(7);
bst.add(20);

console.log(bst.findMinHeight());
console.log(bst.findMaxHeight())
// console.log(bst.isBalanced());
bst.add(15);
bst.add(18);
// console.log(bst.finMinHeight());
// console.log(bst.findMaxHeight())
// console.log(bst.isBalanced());

// console.log('inOrder ' + bst.inOrder());
// console.log('preOrder ' + bst.preOrder());
// console.log('postOrder ' + bst.postOrder());
// console.log('levelOrder ' + bst.levelOrder());