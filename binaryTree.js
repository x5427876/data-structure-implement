class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        if (!this.root) {
            this.root = new Node(value);
            return this;
        }
        // 整棵樹放進去
        this.insertCompare(value, this.root);
        return this;
    }

    insertCompare(value, currentNode) {
        let newNode = new Node(value)
        // 從 root 開始比較
        if (!currentNode) return;
        if (value === currentNode.value) return undefined;
        // 小於
        if (value < currentNode.value) {
            return currentNode.left ? this.insertCompare(value, currentNode.left) : (currentNode.left = newNode);
        }
        // 大於
        else {
            return currentNode.right ? this.insertCompare(value, currentNode.right) : (currentNode.right = newNode);
        }
    }

    find(value) {
        if (!this.root) return false;
        return this.findHelper(value, this.root);
    }

    findHelper(value, currentNode) {
        if (!currentNode) return false;
        if (value === currentNode.value) return currentNode;
        return value < currentNode.value ? this.findHelper(value, currentNode.left) : this.findHelper(value, currentNode.right);
    }

    delete(value) {
        if (value == null) return undefined;
        this.root = this.removeHelper(value, this.root);
    }

    removeHelper(value, currentNode) {
        if (!currentNode) return undefined;
        if (value < currentNode.value) {
            currentNode.left = this.removeHelper(value, currentNode.left);
            return currentNode;
        } else if (value > currentNode.value) {
            currentNode.right = this.removeHelper(value, currentNode.right);
            return currentNode;
        }
        // value === currentNode.value
        if (!currentNode.left && !currentNode.right) {
            // no children
            return null;
        } else if (!currentNode.left) {
            // has right child only
            return currentNode.right;
        } else if (!currentNode.right) {
            // has left child only
            return currentNode.left;
        } else {
            // has two children
            let minRightChildNode = this.findMinValue(currentNode.right);
            currentNode.value = minRightChildNode.value;
            currentNode.right = this.removeHelper(
                minRightChildNode.value,
                currentNode.right
            );
            return currentNode;
        }
    }

    findMinValue(node) {
        if (node.left) {
            return this.findMinValue(node.left);
        }
        return node;
    }
}
