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

    BFS() {
        const queue = [];
        const visited = [];
        let checkNode;
        this.root && queue.push(this.root);
        while (queue.length > 0) {
            // 拿出第一個值
            checkNode = queue.shift();
            // 加入遍歷 array
            visited.push(checkNode.val);
            // 先查看左邊再看右邊
            checkNode.left && queue.push(checkNode.left);
            checkNode.right && queue.push(checkNode.right);
        }
        return visited;
    }

    // 中 -> 左 －> 右
    DFSPreOrder() {
        const visited = [];

        function helper(node) {
            visited.push(node.val);
            node.left && helper(node.left);
            node.right && helper(node.right);
        }
        this.root && helper(this.root);

        return visited;
    }

    // 左 -> 右 －> 中
    DFSPostOrder() {
        const visited = [];

        function helper(node) {
            node.left && helper(node.left);
            node.right && helper(node.right);
            visited.push(node.val);
        }
        this.root && helper(this.root);

        return visited;
    }

    // 左 -> 中 －> 右
    DFSInOrder() {
        const visited = [];

        function helper(node) {
            node.left && helper(node.left);
            visited.push(node.val);
            node.right && helper(node.right);
        }
        this.root && helper(this.root);

        return visited;
    }
}
