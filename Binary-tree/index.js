
// helpers
// buscar el nodo mas pequeño
// obtener el nodo raíz
// search

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    // insert(data)
    insert = function (data) {
        let newNode = new Node(data);
        if (this.root === null) {
            this.root = newNode
        } else {
            this.insertNode(this.root, newNode)
        }
    }
    insertNode = function (node, newNode) {
        if (newNode.data < node.data) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode)
            }
        } else {
            if (node.right === null) {
                node.right = newNode
            } else {
                this.insertNode(node.right, newNode)
            }
        }
    }
    //remove(data)
    remove = function (data) {
        this.root = this.removeNode(this.root, data)
    }
    removeNode(node, key) {
        if (node === null) {
            return null;
        } else if (key < node.data) {
            node.left = this.removeNode(node.left, key)
            return node
        } else if (key > node.data) {
            node.right = this.removeNode(node.right, key);
            return node;
        } else {
            if (node.left === null && node.right === null) {
                node = null
                return null
            }
            if (node.left === null) {
                node = node.right
                return node
            } else if (node.right === null) {
                node = node.left
                return node
            }
            let aux = this.findMinNode(node.right)
            node.data = aux.data
            node.right = this.removeNode(node.right, aux.data)
            return node;
        }
    }
    findMinNode = function (node) {
        if (node.left === null) {
            return node
        } else {
            return this.findMinNode(node.left)
        }
    }
    // helpers
    // obtener el nodo raiz
    getRootNode() {
        return this.root;
    }
    //search
    search(node, data) {
        if (node === null) {
            return null;
        } else if (data < node.data) {
            return this.search(node.left, data);
        } else if (data > node.data) {
            return this.search(node.right, data);
        } else {
            return node;
        }
    }
}
let BST = new BinarySearchTree();
BST.insert(17)
BST.insert(25)
BST.insert(7)
BST.insert(22)
BST.remove(22)
console.log('Hola arbol')